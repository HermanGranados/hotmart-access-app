import { createSupabaseServerClient } from "@/lib/supabase-server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const email = String(body?.email ?? "").trim().toLowerCase();
    const password = String(body?.password ?? "");

    if (!email || !password) {
      return Response.json(
        {
          ok: false,
          step: "validacion-inicial",
          error: "Faltan datos",
        },
        { status: 400 }
      );
    }

    const supabase = await createSupabaseServerClient();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("SUPABASE LOGIN ERROR:", error);

      return Response.json(
        {
          ok: false,
          step: "signInWithPassword",
          error: error.message,
        },
        { status: 401 }
      );
    }

    return Response.json({
      ok: true,
      step: "fin",
      userId: data?.user?.id ?? null,
      redirectTo: "/app",
    });
  } catch (error) {
    console.error("LOGIN ROUTE ERROR:", error);

    return Response.json(
      {
        ok: false,
        step: "catch",
        error: error instanceof Error ? error.message : "Error interno",
      },
      { status: 500 }
    );
  }
}