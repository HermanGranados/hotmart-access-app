/**
 * Vapora — registro de herramientas.
 *
 * FUENTE ÚNICA. Al añadir una calculadora nueva se toca **solo este archivo**:
 * aparece automáticamente en la app y en la versión pública, con su tarjeta
 * ya montada y su candado o su acceso libre según corresponda.
 *
 * No pongas aquí lógica de las calculadoras — solo cómo se presentan.
 */

export type Acceso = "libre" | "premium";

export interface Herramienta {
  /** Debe coincidir con el valor de `vistaActual` que la abre. */
  id: string;
  nombre: string;
  descripcion: string;
  /** Frase corta bajo la descripción en las tarjetas gratuitas. */
  detalle?: string;
  icono: string;
  acceso: Acceso;
  /**
   * Solo una herramienta debería llevarlo. Se dibuja como tarjeta grande
   * en lugar de fila compacta.
   */
  destacada?: boolean;
  /** Colores de la tarjeta. */
  color: {
    /** Degradado del borde. */
    borde: string;
    /** Fondo de la tarjeta (oscuro en premium, claro en libre). */
    fondo: string;
    /** Degradado del texto del nombre. */
    texto: string;
    /** Color del acento: flecha, halo, badge. */
    acento: string;
    /** Fondo del recuadro del icono. */
    iconoFondo: string;
  };
}

export const HERRAMIENTAS: Herramienta[] = [
  {
    id: "analgesiq",
    nombre: "ANALGESIQ",
    descripcion: "Calculadora avanzada para bombas elastoméricas con compatibilidad, dosis y alertas clínicas.",
    icono: "https://anestesialatina.com/wp-content/uploads/2026/03/infusion.png",
    acceso: "premium",
    destacada: true,
    color: {
      borde: "linear-gradient(135deg,#c084fc,#818cf8,#38bdf8,#a78bfa)",
      fondo: "linear-gradient(160deg,#0f0c29,#1a1040,#0d1b3e)",
      texto: "linear-gradient(135deg,#e9d5ff,#c4b5fd,#93c5fd)",
      acento: "#a78bfa",
      iconoFondo: "rgba(255,255,255,0.1)",
    },
  },
  {
    id: "infusilat",
    nombre: "InfusiLat",
    descripcion: "Cálculo de infusiones, bolos y diluciones",
    icono: "https://infusilat.academiadeanestesia.com/infusilat-ico.jpg",
    acceso: "premium",
    color: {
      borde: "linear-gradient(135deg,#0284c7,#38bdf8,#7dd3fc)",
      fondo: "linear-gradient(160deg,#051d2e,#0c2d45)",
      texto: "linear-gradient(135deg,#bae6fd,#7dd3fc,#38bdf8)",
      acento: "#38bdf8",
      iconoFondo: "rgba(255,255,255,0.18)",
    },
  },
  {
    id: "epimix",
    nombre: "EpiMix",
    descripcion: "Mezclas para Analgesia Epidural",
    icono: "https://academiadeanestesia.com/wp-content/uploads/2026/04/EpiMIx-logo.png",
    acceso: "premium",
    color: {
      borde: "linear-gradient(135deg,#f43f5e,#fb7185,#fda4af)",
      fondo: "linear-gradient(160deg,#1a0510,#2d0a1e)",
      texto: "linear-gradient(135deg,#fecdd3,#fda4af,#fb7185)",
      acento: "#fb7185",
      iconoFondo: "rgba(255,255,255,0.18)",
    },
  },
  {
    id: "mac",
    nombre: "MACFlow",
    descripcion: "Consumo de anestésicos inhalatorios",
    detalle: "Sevo · Desf · Iso",
    icono: "https://academiadeanestesia.com/wp-content/uploads/2026/04/anesthesia.png",
    acceso: "libre",
    color: {
      borde: "linear-gradient(135deg,#bae6fd,#e0f2fe,#f0f9ff)",
      fondo: "linear-gradient(135deg,#e0f2fe,#bae6fd)",
      texto: "",
      acento: "#38bdf8",
      iconoFondo: "linear-gradient(135deg,#e0f2fe,#bae6fd)",
    },
  },
  {
    id: "locu",
    nombre: "LOCUDose",
    descripcion: "Cálculo de anestésicos locales",
    detalle: "Dilución · Dosis regional",
    icono: "https://academiadeanestesia.com/wp-content/uploads/2026/03/calculator.png",
    acceso: "libre",
    color: {
      borde: "linear-gradient(135deg,#bbf7d0,#dcfce7,#f0fdf4)",
      fondo: "linear-gradient(135deg,#f0fdf4,#dcfce7)",
      texto: "",
      acento: "#34d399",
      iconoFondo: "linear-gradient(135deg,#f0fdf4,#dcfce7)",
    },
  },
  {
    id: "hipersaline",
    nombre: "HiperSaline",
    descripcion: "Solución Salina Hipertónica",
    detalle: "Protocolo de preparación",
    icono: "https://academiadeanestesia.com/wp-content/uploads/2026/04/HiperSaline-Logo.png",
    acceso: "libre",
    color: {
      borde: "linear-gradient(135deg,#a7f3d0,#d1fae5,#ecfdf5)",
      fondo: "linear-gradient(135deg,#d1fae5,#a7f3d0)",
      texto: "",
      acento: "#2dd4bf",
      iconoFondo: "linear-gradient(135deg,#d1fae5,#a7f3d0)",
    },
  },
];

/* ── Ayudas ──────────────────────────────────────────────────────── */

export const PREMIUM = HERRAMIENTAS.filter((h) => h.acceso === "premium");
export const LIBRES = HERRAMIENTAS.filter((h) => h.acceso === "libre");

/** La destacada va primero; el resto en el orden del archivo. */
export const DESTACADA = PREMIUM.find((h) => h.destacada) ?? null;
export const PREMIUM_COMPACTAS = PREMIUM.filter((h) => !h.destacada);

export function herramienta(id: string): Herramienta | undefined {
  return HERRAMIENTAS.find((h) => h.id === id);
}

/** Nombres de las premium, para el banner de la versión pública. */
export const NOMBRES_PREMIUM = PREMIUM.map((h) => h.nombre).join(" · ");