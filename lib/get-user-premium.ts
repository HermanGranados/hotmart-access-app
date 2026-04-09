import "server-only";
import { createSupabaseAdminClient } from "./supabase-admin";

export async function getUserPremiumStatus(email: string) {
  const supabase = createSupabaseAdminClient();
  const normalizedEmail = email.trim().toLowerCase();

  const { data: buyer, error: buyerError } = await supabase
    .from("buyers")
    .select("id, email")
    .eq("email", normalizedEmail)
    .maybeSingle();

  console.log("PREMIUM buyer lookup:", {
    normalizedEmail,
    buyer,
    buyerError,
  });

  if (buyerError || !buyer) return false;

  const { data: purchases, error: purchasesError } = await supabase
    .from("purchases")
    .select("id, product_id, status, subscription_status, expires_at")
    .eq("buyer_id", buyer.id)
    .eq("status", "APPROVED")
    .eq("subscription_status", "active");

  console.log("PREMIUM purchases lookup:", {
    purchases,
    purchasesError,
  });

  if (purchasesError || !purchases?.length) return false;

  const now = Date.now();

  const hasAccess = purchases.some((p) => {
    const isVapora = p.product_id === "vapora-anual-001";
    const notExpired =
      !p.expires_at || new Date(p.expires_at).getTime() > now;

    return isVapora && notExpired;
  });

  console.log("PREMIUM final result:", {
    email: normalizedEmail,
    hasAccess,
  });

  return hasAccess;
}