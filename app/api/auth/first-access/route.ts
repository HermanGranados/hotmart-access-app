import { hashDocument } from "@/lib/auth";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: Request) {
  try {
    const { email, document } = await req.json();

    if (!email || !document) {
      return Response.json(
        { ok: false, error: "Faltan datos" },
        { status: 400 }
      );
    }

    const cleanEmail = String(email).trim().toLowerCase();
    const documentHash = hashDocument(String(document));

    const { data: buyer, error: buyerError } = await supabaseAdmin
      .from("buyers")
      .select("*")
      .eq("email", cleanEmail)
      .single();

    if (buyerError || !buyer) {
      return Response.json(
        { ok: false, error: "Comprador no encontrado" },
        { status: 404 }
      );
    }

    if (buyer.document_hash !== documentHash) {
      return Response.json(
        { ok: false, error: "Documento incorrecto" },
        { status: 401 }
      );
    }

    const { data: purchase, error: purchaseError } = await supabaseAdmin
      .from("purchases")
      .select("*")
      .eq("buyer_id", buyer.id)
      .eq("status", "APPROVED")
      .maybeSingle();

    if (purchaseError || !purchase) {
      return Response.json(
        { ok: false, error: "No hay compra aprobada" },
        { status: 403 }
      );
    }

    const { data: usersData, error: listUsersError } =
      await supabaseAdmin.auth.admin.listUsers();

    if (listUsersError) {
      return Response.json(
        { ok: false, error: listUsersError.message },
        { status: 500 }
      );
    }

    const existingUser = usersData.users.find(
      (u) => u.email?.toLowerCase() === cleanEmail
    );

    if (!existingUser) {
      const { error: createUserError } =
        await supabaseAdmin.auth.admin.createUser({
          email: cleanEmail,
          email_confirm: true,
          user_metadata: {
            buyer_id: buyer.id,
            name: buyer.name,
          },
        });

      if (createUserError) {
        return Response.json(
          { ok: false, error: createUserError.message },
          { status: 500 }
        );
      }
    }

    const { error: otpError } = await supabaseAdmin.auth.signInWithOtp({
      email: cleanEmail,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
      },
    });

    if (otpError) {
      return Response.json(
        { ok: false, error: otpError.message },
        { status: 500 }
      );
    }

    return Response.json({
      ok: true,
      message: "Te enviamos un enlace de acceso a tu correo.",
    });
  } catch {
    return Response.json(
      { ok: false, error: "Error interno" },
      { status: 500 }
    );
  }
}