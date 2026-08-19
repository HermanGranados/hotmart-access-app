"use client";

import type { Herramienta } from "@/lib/herramientas";

function ChevronRightIcon(p: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

/**
 * Tarjeta grande para la herramienta destacada.
 * `bloqueada` decide si muestra el candado o el botón de abrir.
 */
export function TarjetaDestacada({ h, bloqueada, onClick }: {
  h: Herramienta; bloqueada: boolean; onClick: () => void;
}) {
  return (
    <div className="rounded-[28px] p-[1.5px] mb-3"
      style={{ background: h.color.borde, boxShadow: "0 12px 40px rgba(129,140,248,0.28)" }}>
      <div className="rounded-[27px] p-6 relative overflow-hidden" style={{ background: h.color.fondo }}>
        <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${h.color.acento}38,transparent 70%)` }} />

        <div className="relative z-10 flex items-center justify-between gap-3 mb-4">
          <div className="w-16 h-16 rounded-[18px] flex items-center justify-center overflow-hidden flex-shrink-0"
            style={{ background: h.color.iconoFondo, border: "0.5px solid rgba(255,255,255,0.2)" }}>
            <img src={h.icono} alt={h.nombre} className="w-11 h-11 object-contain" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full"
            style={{ background: `${h.color.acento}33`, border: `0.5px solid ${h.color.acento}80`, color: "#e9d5ff" }}>
            ✦ Premium
          </span>
        </div>

        <div className="relative z-10 text-[30px] font-black tracking-tight mb-2"
          style={{ background: h.color.texto, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          {h.nombre}
        </div>
        <p className="relative z-10 text-[13px] leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
          {h.descripcion}
        </p>

        <button onClick={onClick}
          className="relative z-10 w-full rounded-[14px] py-[14px] text-[14px] font-bold text-white transition-all active:scale-[0.99]"
          style={{ background: `${h.color.acento}40`, border: `0.5px solid ${h.color.acento}66` }}>
          {bloqueada ? "🔒 Requiere membresía Premium" : `Abrir ${h.nombre} →`}
        </button>
      </div>
    </div>
  );
}

/** Fila compacta oscura para las premium no destacadas. */
export function TarjetaPremium({ h, onClick }: { h: Herramienta; onClick: () => void }) {
  return (
    <button onClick={onClick}
      className="w-full rounded-[20px] overflow-hidden text-left active:scale-[0.99] transition-all mt-3"
      style={{ background: h.color.borde, boxShadow: `0 8px 28px ${h.color.acento}38`, padding: "1.5px" }}>
      <div className="rounded-[19px] p-4 flex items-center gap-4 relative overflow-hidden" style={{ background: h.color.fondo }}>
        <div className="absolute top-[-30px] right-[-30px] w-[120px] h-[120px] rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle,${h.color.acento}33,transparent 70%)` }} />

        <div className="w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden flex-shrink-0"
          style={{ background: h.color.iconoFondo, border: `0.5px solid ${h.color.acento}4d` }}>
          <img src={h.icono} alt={h.nombre} className="w-full h-full object-cover" />
        </div>

        <div className="flex-1 min-w-0 relative z-10">
          <div className="text-[16px] font-black mb-0.5"
            style={{ background: h.color.texto, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            {h.nombre} <span style={{ WebkitTextFillColor: `${h.color.acento}99`, fontSize: 12 }}>✦</span>
          </div>
          <div className="text-[13px]" style={{ color: "rgba(255,255,255,0.45)" }}>{h.descripcion}</div>
        </div>

        <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
          style={{ background: `${h.color.acento}33`, border: `0.5px solid ${h.color.acento}4d` }}>
          <ChevronRightIcon className="w-3.5 h-3.5" style={{ color: h.color.acento }} />
        </div>
      </div>
    </button>
  );
}

/**
 * Fila clara para las herramientas libres.
 * `mostrarBadge` pinta el sello «Gratis» — se usa en la versión pública,
 * donde tiene sentido distinguirlas; dentro de la app no hace falta.
 */
export function TarjetaLibre({ h, onClick, mostrarBadge }: {
  h: Herramienta; onClick: () => void; mostrarBadge?: boolean;
}) {
  return (
    <button onClick={onClick}
      className="w-full rounded-[20px] p-[1px] text-left active:scale-[0.99] transition-all"
      style={{ background: h.color.borde, boxShadow: `0 4px 16px ${h.color.acento}22` }}>
      <div className="rounded-[19px] bg-white p-4 flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden flex-shrink-0"
          style={{ background: h.color.iconoFondo }}>
          <img src={h.icono} alt={h.nombre} className="w-10 h-10 object-contain" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-[16px] font-black text-slate-900">{h.nombre}</span>
            {mostrarBadge && (
              <span className="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-md"
                style={{ background: `${h.color.acento}1a`, color: h.color.acento, border: `1px solid ${h.color.acento}33` }}>
                Gratis
              </span>
            )}
          </div>
          <div className="text-[12px] text-slate-500 leading-snug">{h.descripcion}</div>
          {h.detalle && <div className="text-[10px] text-slate-400 font-medium mt-1.5">{h.detalle}</div>}
        </div>

        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: h.color.iconoFondo }}>
          <ChevronRightIcon className="w-3.5 h-3.5" style={{ color: h.color.acento }} />
        </div>
      </div>
    </button>
  );
}
