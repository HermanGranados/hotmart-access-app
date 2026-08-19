/**
 * InfusiLat — estado del cliente.
 *
 * Regla que no se relaja: **la escritura local es síncrona y siempre gana.**
 * Si Supabase no responde, el usuario ni se entera. La red nunca bloquea
 * un cálculo en quirófano.
 *
 * Flujo:
 *   cargar()  → si hay copia local, arranca al instante y revalida detrás
 *               si no, la pide al servidor (única vez que la red es crítica)
 *   guardar() → escribe local ya; sube al servidor con retardo
 *   Sin red   → se marca pendiente y se reintenta al volver la conexión
 */

'use client';

import type { Catalogo } from './engine';

/* ------------------------------------------------------------------ */
/* Tipos                                                               */
/* ------------------------------------------------------------------ */

export interface Prefs {
  gotas: number;
  wUnit: 'kg' | 'lb';
  tema: 'claro' | 'oscuro';
}

export interface Paciente {
  peso: number;
  talla: number;
  edad: number;
  sexo: 'm' | 'f';
}

export interface Estado {
  data: Catalogo;
  prefs: Prefs;
  pac: Paciente;
  seed_version: number;
  updated_at: string | null;
}

export const PREFS_DEF: Prefs = { gotas: 20, wUnit: 'kg', tema: 'claro' };
export const PAC_DEF: Paciente = { peso: 70, talla: 170, edad: 40, sexo: 'm' };

/** Se lanza cuando el servidor responde 402. */
export class SinSuscripcion extends Error {
  constructor() {
    super('sin_suscripcion');
    this.name = 'SinSuscripcion';
  }
}

/* ------------------------------------------------------------------ */
/* Claves de localStorage — por usuario                                */
/* ------------------------------------------------------------------ */

/**
 * La clave lleva el userId a propósito: en un computador compartido del
 * hospital, dos anestesiólogos no se mezclan las diluciones.
 */
const clave = (userId: string) => `infusilat:v1:${userId}`;
const clavePendiente = (userId: string) => `infusilat:pendiente:${userId}`;

function leerLocal(userId: string): Estado | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(clave(userId));
    if (!raw) return null;
    const e = JSON.parse(raw) as Estado;
    if (!e?.data?.drugs) return null;
    // Se completan preferencias que pudieran faltar tras una actualización
    e.prefs = { ...PREFS_DEF, ...(e.prefs ?? {}) };
    e.pac = { ...PAC_DEF, ...(e.pac ?? {}) };
    return e;
  } catch {
    return null;
  }
}

function escribirLocal(userId: string, estado: Estado): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(clave(userId), JSON.stringify(estado));
  } catch {
    // Cuota llena o modo privado: el cálculo sigue funcionando en memoria.
  }
}

/** Borra la copia de este usuario. Llamar al cerrar sesión. */
export function limpiarLocal(userId: string): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(clave(userId));
    localStorage.removeItem(clavePendiente(userId));
  } catch {
    /* nada que hacer */
  }
}

function marcarPendiente(userId: string, sí: boolean): void {
  if (typeof window === 'undefined') return;
  try {
    if (sí) localStorage.setItem(clavePendiente(userId), '1');
    else localStorage.removeItem(clavePendiente(userId));
  } catch {
    /* nada que hacer */
  }
}

export function hayPendiente(userId: string): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return localStorage.getItem(clavePendiente(userId)) === '1';
  } catch {
    return false;
  }
}

/* ------------------------------------------------------------------ */
/* Servidor                                                            */
/* ------------------------------------------------------------------ */

interface RespuestaCatalogo {
  data: Catalogo;
  prefs: Partial<Prefs> & { pac?: Paciente };
  seed_version: number;
  updated_at: string;
  nuevo: boolean;
  hay_novedades: boolean;
}

async function pedirAlServidor(): Promise<RespuestaCatalogo> {
  const r = await fetch('/api/infusilat/catalogo');
  if (r.status === 402) throw new SinSuscripcion();
  if (!r.ok) throw new Error('no_se_pudo_cargar');
  return r.json();
}

function aEstado(r: RespuestaCatalogo): Estado {
  const { pac, ...prefs } = r.prefs ?? {};
  return {
    data: r.data,
    prefs: { ...PREFS_DEF, ...prefs },
    pac: { ...PAC_DEF, ...(pac ?? {}) },
    seed_version: r.seed_version,
    updated_at: r.updated_at,
  };
}

/* ------------------------------------------------------------------ */
/* Carga                                                               */
/* ------------------------------------------------------------------ */

export interface ResultadoCarga {
  estado: Estado;
  /** true si vino de localStorage y aún no se ha contrastado con el servidor */
  local: boolean;
}

/**
 * Arranca el módulo.
 *
 * Con copia local: devuelve al instante y revalida en segundo plano.
 * Sin copia local: pide al servidor (aquí sí hace falta red).
 *
 * `onRemotoMasNuevo` se llama si otro dispositivo escribió después: la
 * interfaz debe reemplazar su estado y avisar discretamente.
 */
export async function cargar(
  userId: string,
  onRemotoMasNuevo?: (estado: Estado) => void,
): Promise<ResultadoCarga> {
  const local = leerLocal(userId);

  if (local) {
    // No se espera: la app ya puede usarse.
    revalidar(userId, local, onRemotoMasNuevo);
    return { estado: local, local: true };
  }

  const estado = aEstado(await pedirAlServidor());
  escribirLocal(userId, estado);
  return { estado, local: false };
}

/**
 * Contrasta la copia local con la del servidor.
 * Conflicto entre dispositivos: gana el `updated_at` más reciente.
 */
async function revalidar(
  userId: string,
  local: Estado,
  onRemotoMasNuevo?: (estado: Estado) => void,
): Promise<void> {
  try {
    const remoto = aEstado(await pedirAlServidor());

    const tLocal = local.updated_at ? Date.parse(local.updated_at) : 0;
    const tRemoto = remoto.updated_at ? Date.parse(remoto.updated_at) : 0;

    if (tRemoto > tLocal) {
      escribirLocal(userId, remoto);
      onRemotoMasNuevo?.(remoto);
    } else if (hayPendiente(userId)) {
      // Lo local es más nuevo y quedó sin subir: se sube ahora.
      await subir(userId, local);
    }
  } catch {
    // Sin red o sin suscripción: se sigue con lo local.
  }
}

/* ------------------------------------------------------------------ */
/* Guardado                                                            */
/* ------------------------------------------------------------------ */

async function subir(userId: string, estado: Estado): Promise<void> {
  try {
    const r = await fetch('/api/infusilat/catalogo', {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        data: estado.data,
        // El paciente viaja dentro de prefs: es una sola columna jsonb.
        prefs: { ...estado.prefs, pac: estado.pac },
      }),
    });
    if (!r.ok) throw new Error('fallo');
    const { updated_at } = await r.json();
    // Se refresca el sello para que la próxima revalidación no confunda.
    escribirLocal(userId, { ...estado, updated_at });
    marcarPendiente(userId, false);
  } catch {
    marcarPendiente(userId, true);
  }
}

let temporizador: ReturnType<typeof setTimeout> | null = null;

/**
 * Guarda un cambio del usuario.
 *
 * Local: inmediato y síncrono, nunca falla de cara al usuario.
 * Servidor: con 1.5 s de retardo para no disparar una petición por tecla.
 */
export function guardar(userId: string, estado: Estado): void {
  escribirLocal(userId, estado);

  if (temporizador) clearTimeout(temporizador);
  temporizador = setTimeout(() => {
    void subir(userId, estado);
  }, 1500);
}

/** Fuerza la subida sin esperar el retardo (al salir del módulo, por ejemplo). */
export function guardarYa(userId: string, estado: Estado): Promise<void> {
  if (temporizador) clearTimeout(temporizador);
  escribirLocal(userId, estado);
  return subir(userId, estado);
}

/* ------------------------------------------------------------------ */
/* Reintento al recuperar la red                                       */
/* ------------------------------------------------------------------ */

/**
 * Vacía la cola de pendientes cuando vuelve la conexión.
 * Devuelve la función para desmontar el listener.
 */
export function vigilarConexion(userId: string, dameEstado: () => Estado): () => void {
  if (typeof window === 'undefined') return () => {};

  const alVolver = () => {
    if (hayPendiente(userId)) void subir(userId, dameEstado());
  };

  window.addEventListener('online', alVolver);
  return () => window.removeEventListener('online', alVolver);
}

/* ------------------------------------------------------------------ */
/* Restaurar y novedades                                               */
/* ------------------------------------------------------------------ */

export async function restaurarOriginal(userId: string): Promise<Estado> {
  const r = await fetch('/api/infusilat/restaurar', { method: 'POST' });
  if (r.status === 402) throw new SinSuscripcion();
  if (!r.ok) throw new Error('no_se_pudo_restaurar');
  const json = await r.json();
  const estado = aEstado(json);
  escribirLocal(userId, estado);
  marcarPendiente(userId, false);
  return estado;
}

export interface Novedades {
  nuevos: { id: string; n: string; c: string }[];
  total: number;
  al_dia: boolean;
}

export async function verNovedades(): Promise<Novedades> {
  const r = await fetch('/api/infusilat/novedades');
  if (!r.ok) throw new Error('no_se_pudo_leer');
  return r.json();
}

export async function aplicarNovedades(userId: string): Promise<Estado | null> {
  const r = await fetch('/api/infusilat/novedades', { method: 'POST' });
  if (!r.ok) throw new Error('no_se_pudo_actualizar');
  const json = await r.json();
  if (!json.data) return null;
  const estado = aEstado(json);
  escribirLocal(userId, estado);
  return estado;
}

/* ------------------------------------------------------------------ */
/* Exportar                                                            */
/* ------------------------------------------------------------------ */

/** Descarga la copia del usuario como JSON. Funciona sin red. */
export function exportar(estado: Estado): void {
  const blob = new Blob([JSON.stringify(estado, null, 1)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `infusilat-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
}