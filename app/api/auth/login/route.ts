// app/api/auth/login/route.ts
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { createSupabaseAdminClient } from "@/lib/supabase-admin";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = String(body?.email ?? "").trim().toLowerCase();
    const password = String(body?.password ?? "");

    if (!email || !password) {
      return Response.json(
        { ok: false, step: "validacion-inicial", error: "Faltan datos" },
        { status: 400 }
      );
    }

    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      return Response.json(
        { ok: false, step: "signInWithPassword", error: error.message },
        { status: 401 }
      );
    }

    // ✅ Verificar suscripción activa después de autenticar
    const supabaseAdmin = createSupabaseAdminClient();

    const { data: buyer } = await supabaseAdmin
      .from("buyers")
      .select("id")
      .eq("email", email)
      .single();

    if (!buyer) {
      await supabase.auth.signOut();
      return Response.json(
        { ok: false, step: "buscar-buyer", error: "No se encontró tu perfil de comprador" },
        { status: 403 }
      );
    }

    const { data: purchase } = await supabaseAdmin
      .from("purchases")
      .select("expires_at, subscription_status")
      .eq("buyer_id", buyer.id)
      .eq("status", "APPROVED")
      .eq("subscription_status", "active")
      .order("approved_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (!purchase) {
      await supabase.auth.signOut();
      return Response.json(
        { ok: false, step: "verificar-suscripcion", error: "No tienes una suscripción activa" },
        { status: 403 }
      );
    }

    if (!purchase.expires_at || new Date(purchase.expires_at) < new Date()) {
      await supabase.auth.signOut();
      return Response.json(
        { ok: false, step: "verificar-expiracion", error: "Tu suscripción ha expirado" },
        { status: 403 }
      );
    }

    return Response.json({
      ok: true,
      step: "fin",
      userId: data?.user?.id ?? null,
      redirectTo: "/app",
    });
  } catch (error) {
    return Response.json(
      { ok: false, step: "catch", error: error instanceof Error ? error.message : "Error interno" },
      { status: 500 }
    );
  }
}