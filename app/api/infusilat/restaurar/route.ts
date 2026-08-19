/**
 * InfusiLat — restaurar el catálogo original.
 *
 * Lo llama el botón «Restaurar catálogo original» de Ajustes.
 * Sobrescribe la copia del usuario con la semilla actual y pone al día
 * su seed_version. Es destructivo: la interfaz debe confirmar antes.
 */

import { guardia, respuestaGuardia } from '@/lib/infusilat/guardia';
import { CATALOGO_SEMILLA, SEED_VERSION } from '@/lib/infusilat/catalogo-semilla';

export const runtime = 'nodejs';

export async function POST() {
  const g = await guardia();
  if (!g.ok) return respuestaGuardia(g);

  const { supabase, userId } = g;

  const { data, error } = await supabase
    .from('infusilat_catalogo')
    .update({
      data: CATALOGO_SEMILLA,
      seed_version: SEED_VERSION,
    })
    .eq('user_id', userId)
    .select('data, prefs, seed_version, updated_at')
    .single();

  if (error || !data) {
    console.error('InfusiLat: error al restaurar catálogo', error);
    return Response.json({ error: 'no_se_pudo_restaurar' }, { status: 500 });
  }

  return Response.json({ ok: true, ...data });
}