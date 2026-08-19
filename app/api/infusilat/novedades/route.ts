/**
 * InfusiLat — novedades del catálogo base.
 *
 * GET  → lista los fármacos de la semilla cuyo id NO existe en la copia
 *        del usuario. Solo informa; no toca nada.
 * POST → añade esos fármacos a su copia y pone al día seed_version.
 *
 * Solo AGREGA. Nunca modifica ni elimina lo que el usuario editó: si él
 * cambió la dosis de un fármaco que también está en la semilla, su versión
 * gana y ni siquiera aparece en esta lista.
 */

import { guardia, respuestaGuardia } from '@/lib/infusilat/guardia';
import { CATALOGO_SEMILLA, SEED_VERSION } from '@/lib/infusilat/catalogo-semilla';
import type { Catalogo, Farmaco } from '@/lib/infusilat/engine';

export const runtime = 'nodejs';

/** Fármacos de la semilla que no están en la copia del usuario. */
function calcularNuevos(actual: Catalogo): Farmaco[] {
  const idsUsuario = new Set((actual.drugs ?? []).map((d) => d.id));
  return CATALOGO_SEMILLA.drugs.filter((d) => !idsUsuario.has(d.id));
}

export async function GET() {
  const g = await guardia();
  if (!g.ok) return respuestaGuardia(g);

  const { supabase, userId } = g;

  const { data: fila, error } = await supabase
    .from('infusilat_catalogo')
    .select('data, seed_version')
    .eq('user_id', userId)
    .maybeSingle();

  if (error) {
    console.error('InfusiLat: error al leer novedades', error);
    return Response.json({ error: 'no_se_pudo_leer' }, { status: 500 });
  }

  if (!fila) {
    // Aún no tiene copia: no hay nada que comparar.
    return Response.json({ nuevos: [], seed_version: SEED_VERSION, al_dia: true });
  }

  const nuevos = calcularNuevos(fila.data as Catalogo);

  return Response.json({
    // Solo lo necesario para el aviso; el catálogo completo no viaja aquí.
    nuevos: nuevos.map((d) => ({ id: d.id, n: d.n, c: d.c })),
    total: nuevos.length,
    seed_version: SEED_VERSION,
    seed_version_usuario: fila.seed_version ?? 0,
    al_dia: nuevos.length === 0 && (fila.seed_version ?? 0) >= SEED_VERSION,
  });
}

export async function POST() {
  const g = await guardia();
  if (!g.ok) return respuestaGuardia(g);

  const { supabase, userId } = g;

  const { data: fila, error: leerError } = await supabase
    .from('infusilat_catalogo')
    .select('data')
    .eq('user_id', userId)
    .maybeSingle();

  if (leerError || !fila) {
    return Response.json({ error: 'sin_catalogo' }, { status: 404 });
  }

  const actual = fila.data as Catalogo;
  const nuevos = calcularNuevos(actual);

  if (nuevos.length === 0) {
    // Nada que añadir, pero se pone al día la versión para que el aviso desaparezca.
    await supabase
      .from('infusilat_catalogo')
      .update({ seed_version: SEED_VERSION })
      .eq('user_id', userId);
    return Response.json({ ok: true, añadidos: 0 });
  }

  const actualizado: Catalogo = {
    ...actual,
    // Categorías: se fusionan para que los fármacos nuevos no queden huérfanos
    // si pertenecen a una categoría que el usuario no tenía.
    cats: { ...CATALOGO_SEMILLA.cats, ...actual.cats },
    drugs: [...actual.drugs, ...nuevos],
  };

  const { data: guardado, error } = await supabase
    .from('infusilat_catalogo')
    .update({ data: actualizado, seed_version: SEED_VERSION })
    .eq('user_id', userId)
    .select('data, prefs, seed_version, updated_at')
    .single();

  if (error || !guardado) {
    console.error('InfusiLat: error al añadir novedades', error);
    return Response.json({ error: 'no_se_pudo_actualizar' }, { status: 500 });
  }

  return Response.json({ ok: true, añadidos: nuevos.length, ...guardado });
}