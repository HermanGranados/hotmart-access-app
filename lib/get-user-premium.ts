import { createSupabaseServerClient } from "./supabase-server";

export async function getUserPremiumStatus(email: string) {
  const supabase = await createSupabaseServerClient();

  // 1. buscar buyer
  const { data: buyer } = await supabase
    .from("buyers")
    .select("id")
    .eq("email", email)
    .single();

  if (!buyer) return false;

  // 2. buscar compra activa
  const now = new Date().toISOString();

  const { data: purchases } = await supabase
    .from("purchases")
    .select("*")
    .eq("buyer_id", buyer.id)
    .eq("status", "APPROVED")
    .eq("subscription_status", "active");

  if (!purchases || purchases.length === 0) return false;

  // 3. validar expiración + producto
  const hasAccess = purchases.some((p) => {
    const notExpired = !p.expires_at || p.expires_at > now;
    const isVapora = p.product_id === "vapora-anual-001";

    return notExpired && isVapora;
  });

  return hasAccess;
}