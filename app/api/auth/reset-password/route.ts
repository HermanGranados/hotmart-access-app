import { createSupabaseServerClient } from "@/lib/supabase-server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return Response.json(
        { ok: false, error: "Falta el correo" },
        { status: 400 }
      );
    }

    const supabase = await createSupabaseServerClient();

    const { error } = await supabase.auth.resetPasswordForEmail(
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
  } catch (error) {
    return Response.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : "Error interno",
      },
      { status: 500 }
    );
  }
}