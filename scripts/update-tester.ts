import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(process.cwd(), ".env.local") });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
);

async function updateTester() {
  const email = "tester@anestesialatina.com";

  // 1. Obtener el buyer
  const { data: buyer, error: buyerError } = await supabase
    .from("buyers")
    .select("id")
    .eq("email", email)
    .single();

  if (buyerError || !buyer) {
    console.error("❌ Buyer no encontrado:", buyerError?.message);
    return;
  }
  console.log("✅ Buyer encontrado:", buyer.id);

  // 2. Renovar expires_at por 10 días más y setear product_id premium
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 10);

  const { error: purchaseError } = await supabase
    .from("purchases")
    .update({
      product_id: "vapora-anual-001",      // ← clave para isPremium = true
      product_name: "Vapora App Tester",
      subscription_status: "active",
      status: "APPROVED",
      expires_at: expiresAt.toISOString(),
    })
    .eq("hotmart_transaction", "TESTER-001");

  if (purchaseError) {
    console.error("❌ Error actualizando purchase:", purchaseError.message);
    return;
  }

  console.log("✅ Purchase actualizado");
  console.log("✅ isPremium activado — product_id: vapora-anual-001");
  console.log("✅ Expira:", expiresAt.toDateString());
  console.log("🎉 Tester listo con acceso premium y", 10, "días restantes");
}

updateTester();
