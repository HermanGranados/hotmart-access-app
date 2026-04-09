import { createSupabaseAdminClient } from "@/lib/supabase-admin";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return Response.json(
        { ok: false, error: "Falta el correo" },
        { status: 400 }
      );
    }
const supabaseAdmin = createSupabaseAdminClient();
    const { error } = await supabaseAdmin.auth.resetPasswordForEmail(
      String(email).trim().toLowerCase(),
      {
        redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/reset-password`,
      }
    );

    if (error) {
      return Response.json(
        { ok: false, error: error.message },
        { status: 500 }
      );
    }

    return Response.json({
      ok: true,
      message: "Te enviamos un correo para restablecer tu contraseña.",
    });
  } catch {
    return Response.json(
      { ok: false, error: "Error interno" },
      { status: 500 }
    );
  }
}