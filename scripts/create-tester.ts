import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(process.cwd(), ".env.local") });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !serviceRoleKey) {
  console.error("❌ Faltan variables de entorno. Verifica tu .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

async function createTester() {
  const email = "tester@anestesialatina.com";
  const password = "anestesialatina2026";

  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 10);

  const { data: buyer, error: buyerError } = await supabase
    .from("buyers")
    .insert({
      email,
      name: "Tester Vapora",
      document_hash: "tester-hash-001",
      document_last4: "0001",
    })
    .select()
    .single();

  if (buyerError) { console.error("❌ Error buyer:", buyerError.message); return; }
  console.log("✅ Buyer creado:", buyer.id);

  const { error: purchaseError } = await supabase.from("purchases").insert({
    buyer_id: buyer.id,
    hotmart_transaction: "TESTER-001",
    product_name: "Vapora App Tester",
    status: "APPROVED",
    subscription_status: "active",
    approved_at: new Date().toISOString(),
    expires_at: expiresAt.toISOString(),
  });

  if (purchaseError) { console.error("❌ Error purchase:", purchaseError.message); return; }
  console.log("✅ Purchase creado, expira:", expiresAt.toISOString());

  const { error: authError } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { name: "Tester Vapora", buyer_id: buyer.id },
  });

  if (authError) { console.error("❌ Error auth:", authError.message); return; }
  console.log("✅ Usuario Auth creado");
  console.log("🎉 Tester listo — expira:", expiresAt.toDateString());
}

createTester();
