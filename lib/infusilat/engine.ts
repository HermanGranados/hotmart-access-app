/**
 * InfusiLat — motor de cálculo.
 *
 * Módulo puro: sin DOM, sin React, sin dependencias. Portado tal cual desde
 * la app original, con tipos. Se puede usar en cliente y en servidor.
 *
 * Convención interna: toda cantidad se normaliza a una unidad canónica por
 * familia (mg | U | mEq | mmol | mL) y todo tiempo a horas.
 */

/* ------------------------------------------------------------------ */
/* Unidades                                                            */
/* ------------------------------------------------------------------ */

export type Familia = 'g' | 'U' | 'mEq' | 'mmol' | 'mL';

/** Factor de conversión a la unidad canónica de cada familia. */
export const AMT: Record<string, { f: number; fam: Familia }> = {
  ng:   { f: 1e-6, fam: 'g' },
  mcg:  { f: 1e-3, fam: 'g' },
  mg:   { f: 1,    fam: 'g' },
  g:    { f: 1e3,  fam: 'g' },
  mU:   { f: 1e-3, fam: 'U' },
  U:    { f: 1,    fam: 'U' },
  kU:   { f: 1e3,  fam: 'U' },
  mEq:  { f: 1,    fam: 'mEq' },
  mmol: { f: 1,    fam: 'mmol' },
  mL:   { f: 1,    fam: 'mL' },
};

/** Factor de tiempo a horas. */
const TF: Record<string, number> = { min: 60, hr: 1 };

export const RATEU: Record<Familia, string[]> = {
  g:    ['ng/kg/min','mcg/kg/min','mcg/kg/hr','mg/kg/min','mg/kg/hr','mcg/min','mcg/hr','mg/min','mg/hr','g/hr'],
  U:    ['mU/kg/min','mU/min','U/kg/hr','U/min','U/hr'],
  mEq:  ['mEq/kg/hr','mEq/hr'],
  mmol: ['mmol/kg/hr','mmol/hr'],
  mL:   ['mL/kg/min','mL/kg/hr','mL/hr'],
};

export const ABSU: Record<Familia, string[]> = {
  g:    ['mcg/min','mcg/hr','mg/min','mg/hr','g/hr'],
  U:    ['mU/min','U/min','U/hr'],
  mEq:  ['mEq/hr'],
  mmol: ['mmol/hr'],
  mL:   ['mL/hr'],
};

export const DOSEU: Record<Familia, string[]> = {
  g:    ['ng/kg','mcg/kg','mg/kg','g/kg','mcg','mg','g'],
  U:    ['U/kg','U','mU'],
  mEq:  ['mEq/kg','mEq'],
  mmol: ['mmol/kg','mmol'],
  mL:   ['mL/kg','mL'],
};

export interface UnidadRitmo { amt: string; f: number; fam: Familia; kg: boolean; tf: number; t: 'min' | 'hr' }
export interface UnidadDosis { amt: string; f: number; fam: Familia; kg: boolean }

/** Parsea una unidad de ritmo: "mcg/kg/min" → { f: 0.001, kg: true, tf: 60 } */
export function parseRitmo(u: string): UnidadRitmo {
  const p = String(u).split('/');
  const a = p[0];
  const t = p[p.length - 1];
  const meta = AMT[a] ?? { f: 1, fam: 'g' as Familia };
  return { amt: a, f: meta.f, fam: meta.fam, kg: p.indexOf('kg') > 0, tf: TF[t] ?? 1, t: TF[t] ? (t as 'min' | 'hr') : 'hr' };
}

/** Parsea una unidad de dosis: "mg/kg" → { f: 1, kg: true } */
export function parseDosis(u: string): UnidadDosis {
  const p = String(u).split('/');
  const a = p[0];
  const meta = AMT[a] ?? { f: 1, fam: 'g' as Familia };
  return { amt: a, f: meta.f, fam: meta.fam, kg: p.indexOf('kg') > 0 };
}

export function familiaDe(unidad: string): Familia {
  return (AMT[String(unidad).split('/')[0]] ?? { fam: 'g' as Familia }).fam;
}

/* ------------------------------------------------------------------ */
/* Tipos del catálogo                                                  */
/* ------------------------------------------------------------------ */

export interface Dilucion {
  /** cantidad de fármaco */        m: number;
  /** unidad de esa cantidad */     um: string;
  /** volumen final en mL */        v: number;
  /** diluyente */                  d: string;
}

export interface BloqueInfusion { u: string; lo: number; hi: number; dil: Dilucion }
export interface BloqueBolo {
  u: string; lo: number; hi: number;
  /** tope absoluto por dosis, en la unidad de masa de `u` */ tope?: number;
  via?: string; dil: Dilucion;
}

export interface Farmaco {
  id: string;
  n: string;
  a?: string[];
  c: string;
  fav?: 0 | 1 | boolean;
  alerta?: 0 | 1 | boolean;
  /** peso sugerido para dosificar */ pref?: 'total' | 'ideal' | 'ajustado' | 'magro';
  inf?: BloqueInfusion;
  bol?: BloqueBolo;
  nota?: string;
}

export interface ItemSet { d: string; modo: 'inf' | 'bol'; val: number }
export interface SetFarmacos { id: string; n: string; items: ItemSet[] }

export interface Catalogo {
  version: number;
  cats: Record<string, string>;
  drugs: Farmaco[];
  sets: SetFarmacos[];
}

/* ------------------------------------------------------------------ */
/* Cálculo                                                             */
/* ------------------------------------------------------------------ */

/** Concentración en unidad canónica por mL. */
export function concentracion(dil?: Dilucion): number {
  if (!dil || !dil.v) return 1;
  const f = (AMT[dil.um] ?? { f: 1 }).f;
  return (dil.m * f) / dil.v;
}

/** Ritmo en su unidad → cantidad canónica por hora. */
export function ritmoADosisHora(valor: number, unidad: string, pesoKg: number): number {
  const u = parseRitmo(unidad);
  return valor * u.f * (u.kg ? pesoKg : 1) * u.tf;
}

/** Cantidad canónica por hora → ritmo en la unidad pedida. */
export function dosisHoraARitmo(dosisPorHora: number, unidad: string, pesoKg: number): number {
  const u = parseRitmo(unidad);
  const den = u.f * (u.kg ? pesoKg : 1) * u.tf;
  return den ? dosisPorHora / den : 0;
}

/** Dosis de bolo en su unidad → cantidad canónica total. */
export function dosisACantidad(valor: number, unidad: string, pesoKg: number): number {
  const u = parseDosis(unidad);
  return valor * u.f * (u.kg ? pesoKg : 1);
}

/** Cantidad canónica total → dosis en la unidad pedida. */
export function cantidadADosis(cantidad: number, unidad: string, pesoKg: number): number {
  const u = parseDosis(unidad);
  const den = u.f * (u.kg ? pesoKg : 1);
  return den ? cantidad / den : 0;
}

export interface ResultadoInfusion {
  mlPorHora: number;
  dosisPorHora: number;
  gotasPorMin: number;
  concentracion: number;
  rangoMlPorHora: [number, number];
  fueraDeRango: boolean;
}

export function calcularInfusion(
  inf: BloqueInfusion,
  valor: number,
  unidad: string,
  pesoKg: number,
  gotasPorMl = 20,
  dil: Dilucion = inf.dil,
): ResultadoInfusion {
  const c = concentracion(dil);
  const dph = ritmoADosisHora(valor, unidad, pesoKg);
  const lo = ritmoADosisHora(inf.lo, inf.u, pesoKg);
  const hi = ritmoADosisHora(inf.hi, inf.u, pesoKg);
  const ml = c ? dph / c : 0;
  return {
    mlPorHora: ml,
    dosisPorHora: dph,
    gotasPorMin: (ml * gotasPorMl) / 60,
    concentracion: c,
    rangoMlPorHora: [c ? lo / c : 0, c ? hi / c : 0],
    fueraDeRango: dph < lo * 0.999 || dph > hi * 1.001,
  };
}

export interface ResultadoBolo {
  ml: number;
  cantidad: number;
  concentracion: number;
  fueraDeRango: boolean;
  superaTope: boolean;
}

export function calcularBolo(
  bol: BloqueBolo,
  valor: number,
  unidad: string,
  pesoKg: number,
  dil: Dilucion = bol.dil,
): ResultadoBolo {
  const c = concentracion(dil);
  const cant = dosisACantidad(valor, unidad, pesoKg);
  const lo = dosisACantidad(bol.lo, bol.u, pesoKg);
  const hi = dosisACantidad(bol.hi, bol.u, pesoKg);
  const topeCanon = bol.tope ? bol.tope * (AMT[parseDosis(bol.u).amt] ?? { f: 1 }).f : 0;
  return {
    ml: c ? cant / c : 0,
    cantidad: cant,
    concentracion: c,
    fueraDeRango: cant < lo * 0.999 || cant > hi * 1.001,
    superaTope: !!topeCanon && cant > topeCanon * 1.001,
  };
}

/* ------------------------------------------------------------------ */
/* Pesos y pediatría                                                   */
/* ------------------------------------------------------------------ */

export interface Paciente { peso: number; talla: number; edad: number; sexo: 'm' | 'f' }
export interface Pesos { total: number; ideal: number; ajustado: number; magro: number; imc: number; superficie: number }

export function pesos(p: Paciente): Pesos {
  const W = p.peso || 0;
  const T = p.talla || 0;
  const over = Math.max(0, T / 2.54 - 60);
  const ideal = T ? (p.sexo === 'm' ? 50 : 45.5) + 2.3 * over : 0;          // Devine
  const imc = T ? W / Math.pow(T / 100, 2) : 0;
  const magro = T && imc                                                     // Janmahasatian
    ? (p.sexo === 'm' ? (9270 * W) / (6680 + 216 * imc) : (9270 * W) / (8780 + 244 * imc))
    : 0;
  return {
    total: W,
    ideal,
    ajustado: ideal ? ideal + 0.4 * (W - ideal) : 0,
    magro,
    imc,
    superficie: T ? Math.sqrt((T * W) / 3600) : 0,                           // Mosteller
  };
}

/** Mantenimiento hídrico 4-2-1, en mL/hr. */
export function holliday(pesoKg: number): number {
  return pesoKg <= 10 ? pesoKg * 4 : pesoKg <= 20 ? 40 + (pesoKg - 10) * 2 : 60 + (pesoKg - 20);
}

export function pediatria(edadAnios: number, pesoKg: number) {
  return {
    pesoEstimado: (edadAnios + 4) * 2,                 // APLS
    tetSinBalon: edadAnios / 4 + 4,                    // Cole
    tetConBalon: edadAnios / 4 + 3.5,
    profundidadCm: edadAnios / 4 + 12,
    volumenTidalMl: pesoKg * 7,
    liquidosMlHr: holliday(pesoKg),
    volemiaMl: pesoKg * (edadAnios < 1 ? 80 : 70),
    desfibrilacionJ: pesoKg * 4,
    cardioversionJ: pesoKg * 1,
    adrenalinaParoMcg: pesoKg * 10,
    atropinaMcg: Math.max(100, pesoKg * 20),
    bolocristaloideMl: pesoKg * 10,
  };
}

/* ------------------------------------------------------------------ */
/* Formato                                                             */
/* ------------------------------------------------------------------ */

/** Redondeo con precisión variable, igual que la app original. */
export function fmt(x: number | null | undefined): string {
  if (x == null || !isFinite(x)) return '';
  const a = Math.abs(x);
  const d = a >= 100 ? 0 : a >= 10 ? 1 : a >= 1 ? 2 : a >= 0.1 ? 2 : a >= 0.01 ? 3 : 4;
  let s = Number(x).toFixed(d);
  if (s.indexOf('.') > -1) s = s.replace(/0+$/, '').replace(/\.$/, '');
  return s;
}
