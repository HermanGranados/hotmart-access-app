// app/api/auth/first-access/route.ts
import { hashDocument } from "@/lib/auth";
import { createSupabaseAdminClient } from "@/lib/supabase-admin";

export async function POST(req: Request) {
  try {
    const { email, document, password } = await req.json();

    if (!email || !document || !password) {
      return Response.json(
        { ok: false, step: "validacion-inicial", error: "Faltan datos" },
        { status: 400 }
      );
    }

    if (String(password).length < 8) {
      return Response.json(
        { ok: false, step: "validacion-password", error: "La contraseña debe tener al menos 8 caracteres" },
        { status: 400 }
      );
    }

    const supabaseAdmin = createSupabaseAdminClient();
    const cleanEmail = String(email).trim().toLowerCase();
    const documentHash = hashDocument(String(document));

    // Verificar buyer
    const { data: buyer, error: buyerError } = await supabaseAdmin
      .from("buyers")
      .select("*")
      .eq("email", cleanEmail)
      .single();

    if (buyerError || !buyer) {
      return Response.json(
        { ok: false, step: "buscar-buyer", error: "Comprador no encontrado" },
        { status: 404 }
      );
    }

    if (buyer.document_hash !== documentHash) {
      return Response.json(
        { ok: false, step: "validar-documento", error: "Documento incorrecto" },
        { status: 401 }
      );
    }

    // ✅ Obtener la compra más reciente activa
    const { data: purchase, error: purchaseError } = await supabaseAdmin
      .from("purchases")
      .select("*")
      .eq("buyer_id", buyer.id)
      .eq("status", "APPROVED")
      .eq("subscription_status", "active")
      .order("approved_at", { ascending: false })  // ✅ más reciente primero
      .limit(1)
      .maybeSingle();

    if (purchaseError || !purchase) {
      return Response.json(
        { ok: false, step: "buscar-compra", error: "No tienes una suscripción activa" },
        { status: 403 }
      );
    }

    if (!purchase.expires_at || new Date(purchase.expires_at) < new Date()) {
      return Response.json(
        { ok: false, step: "validar-expiracion", error: "Tu acceso ha expirado" },
        { status: 403 }
      );
    }

    // ✅ getUserByEmail en lugar de listUsers() + find()
const { data: usersData } = await supabaseAdmin.auth.admin.listUsers({
  page: 1,
  perPage: 1000,
});
const existingUser = usersData?.users?.find(
  (u) => u.email?.toLowerCase() === cleanEmail
) ?? null;

    if (!existingUser) {
      const { error: createUserError } = await supabaseAdmin.auth.admin.createUser({
        email: cleanEmail,
        password: String(password),
        email_confirm: true,
        user_metadata: { buyer_id: buyer.id, name: buyer.name },
      });

      if (createUserError) {
        return Response.json(
          { ok: false, step: "createUser", error: createUserError.message },
          { status: 500 }
        );
      }
    } else {
      const { error: updateUserError } = await supabaseAdmin.auth.admin.updateUserById(
        existingUser.id,
        {
          password: String(password),
          email_confirm: true,
          user_metadata: { buyer_id: buyer.id, name: buyer.name },
        }
      );

      if (updateUserError) {
        return Response.json(
          { ok: false, step: "updateUserById", error: updateUserError.message },
          { status: 500 }
        );
      }
    }

    return Response.json({
      ok: true,
      step: "fin",
      message: "Contraseña creada correctamente. Ya puedes iniciar sesión.",
    });
  } catch (error) {
    return Response.json(
      { ok: false, step: "catch", error: error instanceof Error ? error.message : "Error interno" },
      { status: 500 }
    );
  }
}