import "server-only";
import { createSupabaseAdminClient } from "./supabase-admin";

export type UserMembership = {
  email: string;
  planName: string | null;
  expiresAt: string | null;
  daysRemaining: number | null;
  isPremium: boolean;
};

export async function getUserMembership(email: string): Promise<UserMembership> {
  const supabase = createSupabaseAdminClient();
  const normalizedEmail = email.trim().toLowerCase();

  const { data: buyer } = await supabase
    .from("buyers")
    .select("id, email")
    .eq("email", normalizedEmail)
    .maybeSingle();

  if (!buyer) {
    return {
      email: normalizedEmail,
      planName: null,
      expiresAt: null,
      daysRemaining: null,
      isPremium: false,
    };
  }

  const { data: purchases } = await supabase
    .from("purchases")
    .select("product_id, product_name, status, subscription_status, expires_at")
    .eq("buyer_id", buyer.id)
    .eq("status", "APPROVED")
    .eq("subscription_status", "active");

  if (!purchases || purchases.length === 0) {
    return {
      email: normalizedEmail,
      planName: null,
      expiresAt: null,
      daysRemaining: null,
      isPremium: false,
    };
  }

  const now = Date.now();

  const activePurchase = purchases.find((p) => {
    const notExpired =
      !p.expires_at || new Date(p.expires_at).getTime() > now;

    return p.product_id === "vapora-anual-001" && notExpired;
  });

  if (!activePurchase) {
    return {
      email: normalizedEmail,
      planName: null,
      expiresAt: null,
      daysRemaining: null,
      isPremium: false,
    };
  }

  const daysRemaining = activePurchase.expires_at
    ? Math.max(
        0,
        Math.ceil(
          (new Date(activePurchase.expires_at).getTime() - now) /
            (1000 * 60 * 60 * 24)
        )
      )
    : null;

  return {
    email: normalizedEmail,
    planName: activePurchase.product_name ?? "Vapora Premium",
    expiresAt: activePurchase.expires_at ?? null,
    daysRemaining,
    isPremium: true,
  };
}