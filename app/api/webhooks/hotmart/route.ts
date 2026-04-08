import { supabase } from "@/lib/supabase";
import { hashDocument } from "@/lib/auth";

function addOneYear(date = new Date()) {
  const d = new Date(date);
  d.setFullYear(d.getFullYear() + 1);
  return d.toISOString();
}

export async function POST(req: Request) {
  try {
    const payload = await req.json();

    const email = payload?.data?.buyer?.email?.toLowerCase();
    const name = payload?.data?.buyer?.name;
    const document = payload?.data?.buyer?.document;
    const transaction = payload?.data?.purchase?.transaction;
    const status = payload?.data?.purchase?.status;
    const productName = payload?.data?.product?.name;
    const productId = payload?.data?.product?.id;

    if (!email || !transaction) {
      return Response.json({ ok: false, error: "Datos incompletos" }, { status: 400 });
    }

    let documentHash = null;

    if (document) {
      documentHash = hashDocument(document);
    }

    // Buscar o crear buyer
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
          document_last4: document ? document.slice(-4) : null,
        })
        .select()
        .single();

      if (buyerError || !newBuyer) {
        return Response.json({ ok: false, error: "No se pudo crear buyer" }, { status: 500 });
      }

      buyer = newBuyer;
    }

    // Lógica de suscripción
    let subscriptionStatus: string | null = null;
    let expiresAt: string | null = null;
    let approvedAt: string | null = null;

    if (status === "APPROVED") {
      subscriptionStatus = "active";
      expiresAt = addOneYear();
      approvedAt = new Date().toISOString();
    } else if (["CANCELLED", "EXPIRED", "REFUNDED", "CHARGEBACK"].includes(status)) {
      subscriptionStatus = "inactive";
      expiresAt = null;
      approvedAt = null;
    }

    // Insertar o actualizar compra
    const { error: purchaseError } = await supabase.from("purchases").upsert({
      hotmart_transaction: transaction,
      buyer_id: buyer.id,
      product_id: productId,
      product_name: productName,
      status,
      approved_at: approvedAt,
      expires_at: expiresAt,
      subscription_status: subscriptionStatus,
      raw_payload: payload,
    });

    if (purchaseError) {
      return Response.json({ ok: false, error: purchaseError.message }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ ok: false, error: "Error interno" }, { status: 500 });
  }
}