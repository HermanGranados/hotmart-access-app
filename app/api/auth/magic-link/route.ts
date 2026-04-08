import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return Response.json(
        { ok: false, error: "Falta el correo" },
        { status: 400 }
      );
    }

    const cleanEmail = String(email).trim().toLowerCase();

    const { data: buyer, error: buyerError } = await supabaseAdmin
      .from("buyers")
      .select("*")
      .eq("email", cleanEmail)
      .maybeSingle();

    if (buyerError || !buyer) {
      return Response.json(
        { ok: false, error: "Usuario no encontrado" },
        { status: 404 }
      );
    }

    const { data: purchase, error: purchaseError } = await supabaseAdmin
      .from("purchases")
      .select("*")
      .eq("buyer_id", buyer.id)
      .eq("status", "APPROVED")
      .eq("subscription_status", "active")
      .maybeSingle();

    if (purchaseError || !purchase) {
      return Response.json(
        { ok: false, error: "No tienes una suscripción activa" },
        { status: 403 }
      );
    }

    if (!purchase.expires_at || new Date(purchase.expires_at) < new Date()) {
      return Response.json(
        { ok: false, error: "Tu acceso ha expirado" },
        { status: 403 }
      );
    }

    const { error } = await supabaseAdmin.auth.signInWithOtp({
      email: cleanEmail,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
      },
    });

    if (error) {
      return Response.json(
        { ok: false, error: error.message },
        { status: 500 }
      );
    }

    return Response.json({
      ok: true,
      message: "Revisa tu correo para ingresar.",
    });
  } catch {
    return Response.json(
      { ok: false, error: "Error interno" },
      { status: 500 }
    );
  }
}