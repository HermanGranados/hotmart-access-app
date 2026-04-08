import { supabase } from "@/lib/supabase";
import { hashDocument } from "@/lib/auth";

export async function GET() {
  try {
    const email = "demo@anestesialatina.com";
    const name = "Usuario Demo";
    const document = "12345678";
    const documentHash = hashDocument(document);

    let { data: buyer } = await supabase
      .from("buyers")
      .select("*")
      .eq("email", email)
      .maybeSingle();

    if (!buyer) {
      const { data: newBuyer, error: buyerError } = await supabase
        .from("buyers")
        .insert({
          email,
          name,
          document_hash: documentHash,
          document_last4: document.slice(-4),
        })
        .select()
        .single();

      if (buyerError) {
        return Response.json({ ok: false, error: buyerError.message }, { status: 500 });
      }

      buyer = newBuyer;
    }

    const { data: existingPurchase } = await supabase
      .from("purchases")
      .select("*")
      .eq("hotmart_transaction", "demo-transaction-001")
      .maybeSingle();

    if (!existingPurchase) {
      const { error: purchaseError } = await supabase
        .from("purchases")
        .insert({
          hotmart_transaction: "demo-transaction-001",
          buyer_id: buyer.id,
          product_id: "curso-demo-001",
          product_name: "Curso Demo Academia de Anestesia",
          status: "approved",
          approved_at: new Date().toISOString(),
          raw_payload: { source: "seed-demo" },
        });

      if (purchaseError) {
        return Response.json({ ok: false, error: purchaseError.message }, { status: 500 });
      }
    }

    return Response.json({
      ok: true,
      message: "Demo cargado correctamente",
      login: {
        email,
        document,
      },
    });
  } catch (error) {
    return Response.json({ ok: false, error: "Error interno" }, { status: 500 });
  }
}
