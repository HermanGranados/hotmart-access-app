import { supabase } from "@/lib/supabase";
import { hashDocument } from "@/lib/auth";

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
      const { data: newBuyer } = await supabase
        .from("buyers")
        .insert({
          email,
          name,
          document_hash: documentHash,
          document_last4: document ? document.slice(-4) : null,
        })
        .select()
        .single();

      buyer = newBuyer;
    }

    // Insertar o actualizar compra
    await supabase.from("purchases").upsert({
      hotmart_transaction: transaction,
      buyer_id: buyer.id,
      product_id: productId,
      product_name: productName,
      status,
      approved_at: status === "APPROVED" ? new Date().toISOString() : null,
      raw_payload: payload,
    });

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ ok: false, error: "Error interno" }, { status: 500 });
  }
}