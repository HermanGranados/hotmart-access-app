import { createSupabaseServerClient } from "@/lib/supabase-server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return Response.json(
        { ok: false, error: "Faltan datos" },
        { status: 400 }
      );
    }

    const supabase = await createSupabaseServerClient();

    const { error } = await supabase.auth.signInWithPassword({
      email: String(email).trim().toLowerCase(),
      password: String(password),
    });

    if (error) {
      return Response.json(
        { ok: false, error: "Correo o contraseña incorrectos" },
        { status: 401 }
      );
    }

    return Response.json({
      ok: true,
      redirectTo: "https://vapora.academiadeanestesia.com?access=granted",
    });
  } catch {
    return Response.json(
      { ok: false, error: "Error interno" },
      { status: 500 }
    );
  }
}