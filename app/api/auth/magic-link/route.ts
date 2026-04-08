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