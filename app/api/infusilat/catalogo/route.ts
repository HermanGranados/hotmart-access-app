/**
 * InfusiLat — catálogo del usuario.
 *
 * GET  → devuelve su copia. Si es el primer acceso, la siembra.
 * PUT  → guarda los cambios que hizo.
 *
 * La semilla nunca sale de aquí sin pasar por el guardia.
 */

import { guardia, respuestaGuardia } from '@/lib/infusilat/guardia';
import { CATALOGO_SEMILLA, SEED_VERSION } from '@/lib/infusilat/catalogo-semilla';

export const runtime = 'nodejs';

export async function GET() {
  const g = await guardia();
  if (!g.ok) return respuestaGuardia(g);

  const { supabase, userId } = g;

  // ¿Ya tiene copia?
  const { data: fila, error: leerError } = await supabase
    .from('infusilat_catalogo')
    .select('data, prefs, seed_version, updated_at')
    .eq('user_id', userId)
    .maybeSingle();

  if (leerError) {
    console.error('InfusiLat: error al leer catálogo', leerError);
    return Response.json({ error: 'no_se_pudo_leer' }, { status: 500 });
  }

  if (fila) {
    return Response.json({
      ...fila,
      nuevo: false,
      hay_novedades: (fila.seed_version ?? 0) < SEED_VERSION,
    });
  }

  // Primer acceso: se siembra
  const { data: creada, error: sembrarError } = await supabase
    .from('infusilat_catalogo')
    .insert({
      user_id: userId,
      data: CATALOGO_SEMILLA,
      seed_version: SEED_VERSION,
      prefs: {},
    })
    .select('data, prefs, seed_version, updated_at')
    .single();

  if (sembrarError || !creada) {
    console.error('InfusiLat: error al sembrar catálogo', sembrarError);
    return Response.json({ error: 'no_se_pudo_sembrar' }, { status: 500 });
  }

  return Response.json({ ...creada, nuevo: true, hay_novedades: false });
}

export async function PUT(req: Request) {
  const g = await guardia();
  if (!g.ok) return respuestaGuardia(g);

  const { supabase, userId } = g;

  let body: { data?: unknown; prefs?: unknown };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: 'json_invalido' }, { status: 400 });
  }

  // Validación mínima: que sea un catálogo con forma de catálogo.
  // No valida cada fármaco a propósito — el usuario puede añadir los suyos.
  const data = body?.data as { drugs?: unknown; sets?: unknown } | undefined;
  if (!data || !Array.isArray(data.drugs) || !Array.isArray(data.sets)) {
    return Response.json({ error: 'payload_invalido' }, { status: 400 });
  }

  const { data: guardada, error } = await supabase
    .from('infusilat_catalogo')
    .update({
      data: body.data,
      prefs: body.prefs ?? {},
    })
    .eq('user_id', userId)
    .select('updated_at')
    .single();

  if (error || !guardada) {
    console.error('InfusiLat: error al guardar catálogo', error);
    return Response.json({ error: 'no_se_pudo_guardar' }, { status: 500 });
  }

  return Response.json({ ok: true, updated_at: guardada.updated_at });
}