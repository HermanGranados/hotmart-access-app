/**
 * InfusiLat — guardia de acceso.
 *
 * Único punto de contacto con la lógica de suscripción de Vapora.
 * Si algún día cambia cómo se resuelve el acceso premium, se cambia aquí
 * y las cuatro rutas de InfusiLat siguen funcionando sin tocarse.
 */

import 'server-only';
import { createSupabaseServerClient } from '@/lib/supabase-server';
import { getUserMembership } from '@/lib/get-user-membership';

export type Guardia =
  | { ok: true; supabase: Awaited<ReturnType<typeof createSupabaseServerClient>>; userId: string; email: string }
  | { ok: false; status: 401 | 402; error: 'no_autenticado' | 'sin_suscripcion' };

/**
 * Comprueba sesión y suscripción activa.
 *
 * Devuelve el cliente de Supabase **con la sesión del usuario**, no el de
 * servicio: así las políticas RLS siguen siendo la última barrera aunque
 * esta función tuviera un fallo.
 */
export async function guardia(): Promise<Guardia> {
  const supabase = await createSupabaseServerClient();

  const { data } = await supabase.auth.getUser();
  const user = data?.user;

  if (!user?.email) {
    return { ok: false, status: 401, error: 'no_autenticado' };
  }

  const membership = await getUserMembership(user.email);

  if (!membership.isPremium) {
    return { ok: false, status: 402, error: 'sin_suscripcion' };
  }

  return { ok: true, supabase, userId: user.id, email: user.email };
}

/** Respuesta estándar cuando el guardia rechaza. */
export function respuestaGuardia(g: Extract<Guardia, { ok: false }>) {
  return Response.json({ error: g.error }, { status: g.status });
}
