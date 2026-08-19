"use client";

import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import {
  AMT, RATEU, ABSU, DOSEU,
  parseRitmo, parseDosis, concentracion,
  ritmoADosisHora, dosisHoraARitmo, dosisACantidad, cantidadADosis,
  pesos as calcPesos, holliday, fmt,
  type Catalogo, type Farmaco, type Familia, type Dilucion,
} from "@/lib/infusilat/engine";
import {
  cargar, guardar, guardarYa, vigilarConexion, restaurarOriginal,
  verNovedades, aplicarNovedades, exportar, SinSuscripcion,
  type Estado, type Paciente,
} from "@/lib/infusilat/store";

const AC = "#0284c7";        // acento InfusiLat
const AC_SOFT = "#e0f2fe";

const DILUYENTES = ['SSN 0.9%','DAD 5%','agua estéril','Ringer lactato','sin diluir','solución lista','diluyente propio'];

/* ── Iconos ──────────────────────────────────────────────────────── */

function ChevronLeftIcon(p: React.SVGProps<SVGSVGElement>) {
  return <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>;
}
function ChevronRightIcon(p: React.SVGProps<SVGSVGElement>) {
  return <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>;
}
function ChevronDownIcon(p: React.SVGProps<SVGSVGElement>) {
  return <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>;
}
function UserIcon(p: React.SVGProps<SVGSVGElement>) {
  return <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="8" r="4"/></svg>;
}
function StarIcon({ filled, ...p }: { filled?: boolean } & React.SVGProps<SVGSVGElement>) {
  return <svg {...p} viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.9 21l1.2-6.8-5-4.9 6.9-1z"/></svg>;
}
function AlertIcon(p: React.SVGProps<SVGSVGElement>) {
  return <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.7 18-8-14a2 2 0 0 0-3.5 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.7-3Z"/><path d="M12 9v4M12 17h.01"/></svg>;
}
function SearchIcon(p: React.SVGProps<SVGSVGElement>) {
  return <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>;
}
function CloudOffIcon(p: React.SVGProps<SVGSVGElement>) {
  return <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 2 20 20"/><path d="M5.8 5.8A6 6 0 0 0 8 18h9a4 4 0 0 0 2.4-7.2"/><path d="M9.7 4.5A6 6 0 0 1 18 10"/></svg>;
}

/* Iconos de la barra inferior — portados del HTML original */
function NavFavIcon(p: React.SVGProps<SVGSVGElement>) {
  return <svg {...p} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.9 21l1.2-6.8-5-4.9 6.9-1z"/></svg>;
}
function NavCatsIcon(p: React.SVGProps<SVGSVGElement>) {
  return <svg {...p} viewBox="0 0 24 24" fill="currentColor"><path d="M9 2h6v6.2l5 9.1A3 3 0 0 1 17.4 22H6.6A3 3 0 0 1 4 17.3l5-9.1zm2 2v4.7L6.6 17h10.8L13 8.7V4z"/></svg>;
}
function NavSetsIcon(p: React.SVGProps<SVGSVGElement>) {
  return <svg {...p} viewBox="0 0 24 24" fill="currentColor"><path d="M3 4h18v4H3zm0 6h18v4H3zm0 6h18v4H3z"/></svg>;
}
function NavPesoIcon(p: React.SVGProps<SVGSVGElement>) {
  return <svg {...p} viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a3 3 0 0 1 2.8 2H19a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4.2A3 3 0 0 1 12 3zm0 5a5 5 0 0 0-4.6 3h9.2A5 5 0 0 0 12 8z"/></svg>;
}
function NavCfgIcon(p: React.SVGProps<SVGSVGElement>) {
  return <svg {...p} viewBox="0 0 24 24" fill="currentColor"><path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm9 4c0-.7-.1-1.3-.2-2l2-1.5-2-3.5-2.4 1a8 8 0 0 0-1.7-1l-.4-2.5h-4l-.4 2.5a8 8 0 0 0-1.7 1l-2.4-1-2 3.5L3.2 10a8 8 0 0 0 0 4l-2 1.5 2 3.5 2.4-1c.5.4 1.1.7 1.7 1l.4 2.5h4l.4-2.5c.6-.3 1.2-.6 1.7-1l2.4 1 2-3.5-2-1.5c.1-.7.2-1.3.2-2z"/></svg>;
}

/* ── Cabecera ────────────────────────────────────────────────────── */

function AppHeader({ title, onBack, onProfile }: { title: string; onBack: () => void; onProfile: () => void }) {
  return (
    <header className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="flex items-center gap-2.5 px-3.5 py-2.5">
        <button onClick={onBack} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 hover:bg-slate-200 transition active:scale-95">
          <ChevronLeftIcon className="w-3.5 h-3.5 text-slate-500" />
        </button>
        <div className="flex-1 flex items-center justify-center gap-2 min-w-0">
          <div className="w-[26px] h-[26px] rounded-[7px] overflow-hidden flex-shrink-0" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.12)" }}>
            <img src="https://academiadeanestesia.com/wp-content/uploads/2026/04/vapora-app-ico-ios.png" alt="Vapora" className="w-full h-full object-cover" />
          </div>
          <div className="flex items-baseline gap-1.5 min-w-0">
            <span className="text-[15px] font-semibold text-slate-900 tracking-tight">Vapora</span>
            <span className="text-[11px] font-light text-slate-400 tracking-wide truncate">· {title}</span>
          </div>
        </div>
        <button onClick={onProfile} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 hover:bg-slate-200 transition active:scale-95">
          <UserIcon className="w-3.5 h-3.5 text-slate-500" />
        </button>
      </div>
    </header>
  );
}

function PageFooter() {
  return (
    <div className="flex flex-col items-center gap-[6px] py-8 px-4">
      <p className="text-center text-[13px] text-slate-500">
        Desarrollada por el <strong className="font-semibold text-slate-700">Dr. Herman Granados</strong> — Anestesia Latina
      </p>
      <p className="text-center text-[12px] text-slate-400">
        Vapora.app es una aplicación web con fines académicos y educativos
      </p>
    </div>
  );
}

/* ── Utilidades ──────────────────────────────────────────────────── */

const num = (v: string | number) => {
  const n = parseFloat(String(v).replace(",", "."));
  return isFinite(n) ? n : 0;
};

type Pestana = "fav" | "cats" | "sets" | "peso" | "cfg";
type Vista = Pestana | "list" | "drug" | "set" | "edit";
type ModoPeso = "total" | "ideal" | "ajustado" | "magro";

const WLBL: Record<ModoPeso, string> = { total: "total", ideal: "ideal", ajustado: "ajust.", magro: "magro" };

/* ── Componente principal ────────────────────────────────────────── */

type Props = { userId: string; onBack: () => void; onProfile: () => void };

export default function CalcInfusiLat({ userId, onBack, onProfile }: Props) {
  const [estado, setEstado] = useState<Estado | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [aviso, setAviso] = useState<string | null>(null);
  const [sinRed, setSinRed] = useState(false);

  const [tab, setTab] = useState<Pestana>("fav");
  const [vista, setVista] = useState<Vista>("fav");
  const [cat, setCat] = useState<string | null>(null);
  const [q, setQ] = useState("");
  const [drugId, setDrugId] = useState<string | null>(null);
  const [setIdx, setSetIdx] = useState<number>(0);
  const [modo, setModo] = useState<"inf" | "bol" | "nota">("inf");
  const [wMode, setWMode] = useState<ModoPeso>("total");
  const [desde, setDesde] = useState<Vista>("fav");

  const estadoRef = useRef<Estado | null>(null);
  estadoRef.current = estado;

  /* --- Carga inicial --- */
  useEffect(() => {
    let vivo = true;
    cargar(userId, (remoto) => {
      if (!vivo) return;
      setEstado(remoto);
      setAviso("Se cargaron los cambios de tu otro dispositivo");
    })
      .then(({ estado }) => { if (vivo) setEstado(estado); })
      .catch((e) => {
        if (!vivo) return;
        setError(e instanceof SinSuscripcion ? "sin_suscripcion" : "error");
      });
    return () => { vivo = false; };
  }, [userId]);

  /* --- Reintento al volver la red --- */
  useEffect(() => {
    const off = vigilarConexion(userId, () => estadoRef.current!);
    const onOff = () => setSinRed(!navigator.onLine);
    window.addEventListener("online", onOff);
    window.addEventListener("offline", onOff);
    setSinRed(typeof navigator !== "undefined" && !navigator.onLine);
    return () => {
      off();
      window.removeEventListener("online", onOff);
      window.removeEventListener("offline", onOff);
    };
  }, [userId]);

  /* --- Subir lo pendiente al salir --- */
  useEffect(() => () => {
    if (estadoRef.current) void guardarYa(userId, estadoRef.current);
  }, [userId]);

  useEffect(() => {
    if (!aviso) return;
    const t = setTimeout(() => setAviso(null), 4000);
    return () => clearTimeout(t);
  }, [aviso]);

  /* --- Mutación --- */
  const actualizar = useCallback((mut: (e: Estado) => Estado) => {
    setEstado((prev) => {
      if (!prev) return prev;
      const nuevo = mut(prev);
      guardar(userId, nuevo);
      return nuevo;
    });
  }, [userId]);

  const drugs = estado?.data.drugs ?? [];
  const cats = estado?.data.cats ?? {};
  const sets = estado?.data.sets ?? [];
  const pac = estado?.pac ?? { peso: 70, talla: 170, edad: 40, sexo: "m" as const };
  const prefs = estado?.prefs ?? { gotas: 20, wUnit: "kg" as const, tema: "claro" as const };

  const q_ = useMemo(() => calcPesos(pac), [pac]);

  const W = useMemo(() => {
    if (wMode === "ideal" && q_.ideal) return q_.ideal;
    if (wMode === "ajustado" && q_.ajustado) return q_.ajustado;
    if (wMode === "magro" && q_.magro) return q_.magro;
    return q_.total;
  }, [wMode, q_]);

  const drug = drugId ? drugs.find((d) => d.id === drugId) ?? null : null;

  /* --- Pantallas de excepción --- */

  if (error === "sin_suscripcion") {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-md mx-auto min-h-screen sm:border-x border-slate-100 flex flex-col">
          <AppHeader title="InfusiLat" onBack={onBack} onProfile={onProfile} />
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center gap-4">
            <AlertIcon className="w-12 h-12 text-slate-300" />
            <p className="text-[15px] font-semibold text-slate-700">Tu acceso Premium no está activo</p>
            <p className="text-[13px] text-slate-400 leading-relaxed">
              InfusiLat forma parte de las herramientas Premium de Vapora.
            </p>
            <button onClick={onBack} className="mt-2 px-5 py-3 rounded-xl text-white text-[14px] font-bold" style={{ background: AC }}>
              Volver
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!estado) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-md mx-auto min-h-screen sm:border-x border-slate-100 flex flex-col">
          <AppHeader title="InfusiLat" onBack={onBack} onProfile={onProfile} />
          <div className="flex-1 flex flex-col items-center justify-center gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-slate-200 animate-spin" style={{ borderTopColor: AC }} />
            <p className="text-[13px] text-slate-400">{error ? "No se pudo cargar" : "Cargando catálogo…"}</p>
          </div>
        </div>
      </div>
    );
  }

  /* --- Navegación --- */

  const irA = (t: Pestana) => { setTab(t); setVista(t); setCat(null); setQ(""); };
  const abrirDrug = (id: string, from?: Vista) => {
    setDesde(from ?? vista);
    setDrugId(id);
    const d = drugs.find((x) => x.id === id);
    setModo(d?.inf ? "inf" : d?.bol ? "bol" : "nota");
    setVista("drug");
  };

  const tituloVista =
    vista === "drug" ? drug?.n ?? "Fármaco"
    : vista === "list" ? (cat ? cats[cat] : "Todos")
    : vista === "set" ? sets[setIdx]?.n ?? "Set"
    : vista === "edit" ? "Editar"
    : { fav: "Favoritos", cats: "Fármacos", sets: "Sets", peso: "Peso y pediatría", cfg: "Ajustes" }[tab];

  const mostrarBarraPeso = !["peso", "cfg", "edit"].includes(vista);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <style>{`
        input[type=number]{-moz-appearance:textfield}
        input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}
      `}</style>

      <div className="max-w-md mx-auto bg-white min-h-screen sm:border-x border-slate-100 flex flex-col">
        <AppHeader title={`InfusiLat · ${tituloVista}`} onBack={vista === tab ? onBack : () => setVista(desde === "drug" ? "cats" : desde)} onProfile={onProfile} />

        {/* Barra de peso */}
        {mostrarBarraPeso && (
          <div className="sticky top-[53px] z-20 bg-white/95 backdrop-blur-md border-b border-slate-100 px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Peso</span>
              <input
                type="number" inputMode="decimal" step="0.1" value={fmt(pac.peso)}
                onChange={(e) => actualizar((s) => ({ ...s, pac: { ...s.pac, peso: num(e.target.value) } }))}
                className="flex-1 min-w-0 bg-slate-50 border border-slate-100 rounded-lg px-3 py-1.5 text-[16px] font-bold text-right text-slate-800 outline-none focus:border-[#0284c7] transition"
              />
              <button
                onClick={() => {
                  const m: ModoPeso[] = ["total", "ideal", "ajustado", "magro"];
                  setWMode(m[(m.indexOf(wMode) + 1) % m.length]);
                }}
                className="text-[11px] font-bold px-2.5 py-1.5 rounded-full whitespace-nowrap transition"
                style={{ background: AC, color: "white" }}
              >
                {WLBL[wMode]} {fmt(W)} kg
              </button>
            </div>
          </div>
        )}

        {/* Avisos */}
        {(aviso || sinRed) && (
          <div className="px-4 pt-3">
            {sinRed && (
              <div className="flex items-center gap-2 rounded-xl px-3 py-2 mb-2 text-[12px] font-medium" style={{ background: "#fffbeb", border: "1px solid #fde68a", color: "#92400e" }}>
                <CloudOffIcon className="w-4 h-4 shrink-0" />
                Sin conexión — tus cambios se guardan y se subirán al volver
              </div>
            )}
            {aviso && (
              <div className="rounded-xl px-3 py-2 mb-2 text-[12px] font-medium" style={{ background: AC_SOFT, border: `1px solid ${AC}33`, color: "#075985" }}>
                {aviso}
              </div>
            )}
          </div>
        )}

        <main className="flex-1 flex flex-col w-full">
          {vista === "fav" && <VistaFav drugs={drugs} cats={cats} onOpen={(id) => abrirDrug(id, "fav")} onQuitarFav={(id) => actualizar((s) => ({ ...s, data: { ...s.data, drugs: s.data.drugs.map((d) => d.id === id ? { ...d, fav: 0 } : d) } }))} />}

          {vista === "cats" && <VistaCats drugs={drugs} cats={cats} q={q} setQ={setQ} onCat={(c) => { setCat(c); setVista("list"); }} onOpen={(id) => abrirDrug(id, "cats")} />}

          {vista === "list" && <VistaList drugs={drugs} cats={cats} cat={cat} onOpen={(id) => abrirDrug(id, "list")} onEliminar={(id) => actualizar((s) => ({ ...s, data: { ...s.data, drugs: s.data.drugs.filter((d) => d.id !== id) } }))} />}

          {vista === "drug" && drug && (
            <VistaDrug
              drug={drug} W={W} wMode={wMode} gotas={prefs.gotas}
              modo={modo} setModo={setModo}
              onFav={() => actualizar((s) => ({ ...s, data: { ...s.data, drugs: s.data.drugs.map((d) => d.id === drug.id ? { ...d, fav: d.fav ? 0 : 1 } : d) } }))}
              onDil={(campo, dil) => actualizar((s) => ({
                ...s,
                data: {
                  ...s.data,
                  drugs: s.data.drugs.map((d) => {
                    if (d.id !== drug.id) return d;
                    if (campo === "inf" && d.inf) return { ...d, inf: { ...d.inf, dil } };
                    if (campo === "bol" && d.bol) return { ...d, bol: { ...d.bol, dil } };
                    return d;
                  }),
                },
              }))}
            />
          )}

          {vista === "sets" && <VistaSets sets={sets} drugs={drugs} onOpen={(i) => { setSetIdx(i); setVista("set"); }} onEliminar={(i) => actualizar((s) => ({ ...s, data: { ...s.data, sets: s.data.sets.filter((_, j) => j !== i) } }))} />}

          {vista === "set" && sets[setIdx] && (
            <VistaSet
              set={sets[setIdx]} drugs={drugs} W={W} wMode={wMode}
              onVal={(i, val) => actualizar((s) => ({ ...s, data: { ...s.data, sets: s.data.sets.map((st, j) => j !== setIdx ? st : { ...st, items: st.items.map((it, k) => k === i ? { ...it, val } : it) }) } }))}
              onDrug={(id) => abrirDrug(id, "set")}
            />
          )}

          {vista === "peso" && (
            <VistaPeso
              pac={pac} pesos={q_} wMode={wMode} setWMode={setWMode}
              onPac={(p) => actualizar((s) => ({ ...s, pac: { ...s.pac, ...p } }))}
            />
          )}

          {vista === "cfg" && (
            <VistaCfg
              estado={estado} userId={userId}
              onGotas={(g) => actualizar((s) => ({ ...s, prefs: { ...s.prefs, gotas: g } }))}
              onRestaurado={(e) => { setEstado(e); setAviso("Catálogo restaurado"); irA("fav"); }}
              onNovedades={(e) => { setEstado(e); setAviso("Fármacos nuevos añadidos"); }}
            />
          )}

          <PageFooter />
        </main>

        {/* Navegación inferior */}
        <div
          className="sticky bottom-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-100"
          style={{ paddingBottom: "max(10px, env(safe-area-inset-bottom))" }}
        >
          <nav className="flex max-w-md mx-auto pt-1.5">
            {([
              ["fav", "Favoritos", NavFavIcon],
              ["cats", "Fármacos", NavCatsIcon],
              ["sets", "Sets", NavSetsIcon],
              ["peso", "Peso", NavPesoIcon],
              ["cfg", "Ajustes", NavCfgIcon],
            ] as [Pestana, string, React.ComponentType<React.SVGProps<SVGSVGElement>>][]).map(([k, label, Icono]) => (
              <button
                key={k} onClick={() => irA(k)}
                className="flex-1 flex flex-col items-center gap-1 py-1.5 transition active:scale-95"
                style={{ color: tab === k ? AC : "#94a3b8" }}
              >
                <Icono className="w-[22px] h-[22px]" />
                <span className="text-[10px] font-semibold leading-none">{label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

/* ── Fila de fármaco ─────────────────────────────────────────────── */

function FilaDrug({ d, cats, onClick }: { d: Farmaco; cats: Record<string, string>; onClick: () => void }) {
  return (
    <button onClick={onClick} className="w-full flex items-center gap-2.5 px-4 py-3 border-b border-slate-50 last:border-0 text-left hover:bg-slate-50 transition active:bg-slate-100">
      <div className="flex-1 min-w-0">
        <div className="text-[15px] font-semibold text-slate-800 truncate">{d.n}</div>
        <div className="text-[11.5px] text-slate-400 truncate">{cats[d.c] ?? ""}</div>
      </div>
      {d.inf && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0" style={{ background: AC_SOFT, color: AC }}>inf</span>}
      {d.bol && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 bg-emerald-50 text-emerald-600">bolo</span>}
      {d.alerta ? <span className="text-[10px] font-black px-2 py-0.5 rounded-full shrink-0 bg-red-50 text-red-500">!</span> : null}
      <ChevronRightIcon className="w-3.5 h-3.5 text-slate-300 shrink-0" />
    </button>
  );
}

/* ── Vista: Favoritos ────────────────────────────────────────────── */

function VistaFav({ drugs, cats, onOpen, onQuitarFav }: {
  drugs: Farmaco[]; cats: Record<string, string>; onOpen: (id: string) => void; onQuitarFav: (id: string) => void;
}) {
  const favs = drugs.filter((d) => d.fav);
  return (
    <div className="px-4 py-4">
      {favs.length === 0 ? (
        <div className="text-center py-16 px-6">
          <StarIcon className="w-10 h-10 mx-auto mb-3 text-slate-200" />
          <p className="text-[14px] text-slate-400 leading-relaxed">
            Sin favoritos todavía.<br />Marca la estrella dentro de cualquier fármaco.
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
          {favs.map((d) => (
            <div key={d.id} className="relative flex items-stretch">
              <div className="flex-1 min-w-0"><FilaDrug d={d} cats={cats} onClick={() => onOpen(d.id)} /></div>
              <button onClick={() => onQuitarFav(d.id)} className="px-3 border-b border-slate-50 text-[11px] font-bold text-slate-300 hover:text-red-500 transition">
                Quitar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Vista: Categorías ───────────────────────────────────────────── */

function VistaCats({ drugs, cats, q, setQ, onCat, onOpen }: {
  drugs: Farmaco[]; cats: Record<string, string>; q: string; setQ: (s: string) => void;
  onCat: (c: string | null) => void; onOpen: (id: string) => void;
}) {
  const cuenta = useMemo(() => {
    const c: Record<string, number> = {};
    drugs.forEach((d) => { c[d.c] = (c[d.c] ?? 0) + 1; });
    return c;
  }, [drugs]);

  const resultados = useMemo(() => {
    const t = q.toLowerCase().trim();
    if (!t) return [];
    return drugs.filter((d) => (d.n + " " + (d.a ?? []).join(" ")).toLowerCase().includes(t));
  }, [q, drugs]);

  return (
    <div className="px-4 py-4 space-y-4">
      <div className="relative">
        <SearchIcon className="w-4 h-4 text-slate-300 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar fármaco…"
          className="w-full bg-slate-50 border border-slate-100 rounded-xl pl-10 pr-4 py-3 text-[15px] text-slate-800 outline-none focus:border-[#0284c7] transition placeholder:text-slate-300"
          style={{ fontSize: "16px" }}
        />
      </div>

      {q.trim() ? (
        resultados.length ? (
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
            {resultados.map((d) => <FilaDrug key={d.id} d={d} cats={cats} onClick={() => onOpen(d.id)} />)}
          </div>
        ) : (
          <div className="text-center py-14 text-[14px] text-slate-400">Sin resultados</div>
        )
      ) : (
        <>
          <button onClick={() => onCat(null)} className="w-full bg-white rounded-2xl border border-slate-100 shadow-sm px-4 py-3.5 flex items-center gap-3 text-left hover:bg-slate-50 transition">
            <span className="flex-1 text-[15px] font-bold text-slate-800">Todos los fármacos</span>
            <span className="text-[11px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">{drugs.length}</span>
            <ChevronRightIcon className="w-3.5 h-3.5 text-slate-300" />
          </button>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400 px-1 mb-2">Categorías</p>
            <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
              {Object.keys(cats).map((k) => (
                <button key={k} onClick={() => onCat(k)} className="w-full flex items-center gap-3 px-4 py-3 border-b border-slate-50 last:border-0 text-left hover:bg-slate-50 transition">
                  <span className="flex-1 text-[14.5px] font-medium text-slate-700 truncate">{cats[k]}</span>
                  <span className="text-[11px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full shrink-0">{cuenta[k] ?? 0}</span>
                  <ChevronRightIcon className="w-3.5 h-3.5 text-slate-300 shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/* ── Vista: Lista ────────────────────────────────────────────────── */

function VistaList({ drugs, cats, cat, onOpen, onEliminar }: {
  drugs: Farmaco[]; cats: Record<string, string>; cat: string | null;
  onOpen: (id: string) => void; onEliminar: (id: string) => void;
}) {
  const lista = useMemo(
    () => (cat ? drugs.filter((d) => d.c === cat) : drugs).slice().sort((a, b) => a.n.localeCompare(b.n, "es")),
    [drugs, cat],
  );

  const grupos = useMemo(() => {
    const g: Record<string, Farmaco[]> = {};
    lista.forEach((d) => {
      const l = d.n[0].toUpperCase();
      (g[l] ??= []).push(d);
    });
    return g;
  }, [lista]);

  return (
    <div className="px-4 py-4 space-y-4">
      {Object.keys(grupos).map((letra) => (
        <div key={letra}>
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400 px-1 mb-2">{letra}</p>
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
            {grupos[letra].map((d) => (
              <div key={d.id} className="relative flex items-stretch">
                <div className="flex-1 min-w-0"><FilaDrug d={d} cats={cats} onClick={() => onOpen(d.id)} /></div>
                <button
                  onClick={() => { if (confirm(`¿Eliminar «${d.n}» del catálogo?`)) onEliminar(d.id); }}
                  className="px-3 border-b border-slate-50 text-[11px] font-bold text-slate-200 hover:text-red-500 transition"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Tarjeta de dilución ─────────────────────────────────────────── */

function TarjetaDil({ dil, fam, onChange }: { dil: Dilucion; fam: Familia; onChange: (d: Dilucion) => void }) {
  const c = concentracion(dil);
  const unidades = Object.keys(AMT).filter((k) => AMT[k].fam === fam);
  const diluyentes = DILUYENTES.includes(dil.d) ? DILUYENTES : [dil.d, ...DILUYENTES];

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 space-y-3">
      <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">Dilución</p>

      <div className="flex items-center gap-2">
        <span className="w-16 text-[12px] text-slate-400 text-right shrink-0">Fármaco</span>
        <input
          inputMode="decimal" value={fmt(dil.m)}
          onChange={(e) => onChange({ ...dil, m: num(e.target.value) })}
          className="flex-1 min-w-0 bg-slate-50 border border-slate-100 rounded-lg px-3 py-2 text-[16px] font-bold text-right text-slate-800 outline-none focus:border-[#0284c7] transition"
        />
        <select
          value={dil.um} onChange={(e) => onChange({ ...dil, um: e.target.value })}
          className="bg-slate-50 border border-slate-100 rounded-lg px-2 py-2 text-[13px] text-slate-700 outline-none shrink-0"
          style={{ fontSize: "16px", maxWidth: 90 }}
        >
          {unidades.map((u) => <option key={u} value={u}>{u}</option>)}
        </select>
      </div>

      <div className="flex items-center gap-2">
        <span className="w-16 text-[12px] text-slate-400 text-right shrink-0">en</span>
        <input
          inputMode="decimal" value={fmt(dil.v)}
          onChange={(e) => onChange({ ...dil, v: num(e.target.value) || 1 })}
          className="flex-1 min-w-0 bg-slate-50 border border-slate-100 rounded-lg px-3 py-2 text-[16px] font-bold text-right text-slate-800 outline-none focus:border-[#0284c7] transition"
        />
        <span className="text-[13px] text-slate-400 w-[90px] shrink-0">mL</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="w-16 text-[12px] text-slate-400 text-right shrink-0">de</span>
        <select
          value={dil.d} onChange={(e) => onChange({ ...dil, d: e.target.value })}
          className="flex-1 min-w-0 bg-slate-50 border border-slate-100 rounded-lg px-3 py-2 text-[13px] text-slate-700 outline-none"
          style={{ fontSize: "16px" }}
        >
          {diluyentes.map((d) => <option key={d} value={d}>{d}</option>)}
        </select>
      </div>

      <div className="flex items-center gap-2 pt-2 border-t border-dashed border-slate-100">
        <span className="w-16 text-[12px] text-slate-400 text-right shrink-0">=</span>
        <span className="flex-1 text-right text-[17px] font-bold" style={{ color: AC }}>
          {fmt(c / (AMT[dil.um]?.f ?? 1))}
        </span>
        <span className="text-[13px] text-slate-400 w-[90px] shrink-0">{dil.um}/mL</span>
      </div>
    </div>
  );
}

/* ── Vista: Fármaco ──────────────────────────────────────────────── */

function VistaDrug({ drug, W, wMode, gotas, modo, setModo, onFav, onDil }: {
  drug: Farmaco; W: number; wMode: ModoPeso; gotas: number;
  modo: "inf" | "bol" | "nota"; setModo: (m: "inf" | "bol" | "nota") => void;
  onFav: () => void; onDil: (campo: "inf" | "bol", d: Dilucion) => void;
}) {
  const tabs: ["inf" | "bol" | "nota", string][] = [];
  if (drug.inf) tabs.push(["inf", "Infusión"]);
  if (drug.bol) tabs.push(["bol", "Bolo"]);
  tabs.push(["nota", "Nota"]);

  const modoOk = tabs.some((t) => t[0] === modo) ? modo : tabs[0][0];

  return (
    <div className="px-4 py-4 space-y-4">
      {drug.alerta ? (
        <div className="flex items-start gap-2.5 rounded-xl px-3.5 py-3" style={{ background: "#fef2f2", border: "1px solid #fecaca" }}>
          <AlertIcon className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
          <p className="text-[12.5px] text-red-800 leading-relaxed">
            Fármaco de alto riesgo — verifica dilución, bomba y rótulo antes de administrar.
          </p>
        </div>
      ) : null}

      <div className="flex bg-slate-100 rounded-xl p-1">
        {tabs.map(([k, label]) => (
          <button
            key={k} onClick={() => setModo(k)}
            className="flex-1 py-2 rounded-lg text-[13.5px] font-semibold transition"
            style={modoOk === k ? { background: AC, color: "white" } : { color: "#94a3b8" }}
          >
            {label}
          </button>
        ))}
      </div>

      {modoOk === "inf" && drug.inf && (
        <PanelInf drug={drug} W={W} wMode={wMode} gotas={gotas} onDil={(d) => onDil("inf", d)} />
      )}
      {modoOk === "bol" && drug.bol && (
        <PanelBol drug={drug} W={W} wMode={wMode} onDil={(d) => onDil("bol", d)} />
      )}
      {modoOk === "nota" && (
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
          <p className="text-[14.5px] text-slate-600 leading-relaxed whitespace-pre-wrap">{drug.nota || "Sin notas."}</p>
        </div>
      )}

      <button
        onClick={onFav}
        className="w-full flex items-center justify-center gap-2 rounded-xl py-3.5 text-[14px] font-bold transition border"
        style={drug.fav
          ? { background: AC_SOFT, borderColor: `${AC}44`, color: AC }
          : { background: "white", borderColor: "#e2e8f0", color: "#64748b" }}
      >
        <StarIcon filled={!!drug.fav} className="w-4 h-4" />
        {drug.fav ? "Quitar de favoritos" : "Añadir a favoritos"}
      </button>
    </div>
  );
}

/* ── Panel de infusión ───────────────────────────────────────────── */

function unidadAbsPorDefecto(u: string, fam: Familia): string {
  const a = parseRitmo(u).amt + "/hr";
  return ABSU[fam].includes(a) ? a : ABSU[fam][ABSU[fam].length - 1];
}

function PanelInf({ drug, W, wMode, gotas, onDil }: {
  drug: Farmaco; W: number; wMode: ModoPeso; gotas: number; onDil: (d: Dilucion) => void;
}) {
  const inf = drug.inf!;
  const fam = (AMT[parseRitmo(inf.u).amt] ?? { fam: "g" as Familia }).fam;

  const [uRate, setURate] = useState(inf.u);
  const [uAbs, setUAbs] = useState(() => unidadAbsPorDefecto(inf.u, fam));
  // Estado canónico: cantidad por hora. Todo lo demás se deriva.
  const [dph, setDph] = useState(() => ritmoADosisHora(inf.lo, inf.u, W));

  // Al cambiar de fármaco se reinicia al mínimo del rango
  const idRef = useRef(drug.id);
  useEffect(() => {
    if (idRef.current !== drug.id) {
      idRef.current = drug.id;
      setURate(inf.u);
      setUAbs(unidadAbsPorDefecto(inf.u, fam));
      setDph(ritmoADosisHora(inf.lo, inf.u, W));
    }
  }, [drug.id, inf.u, inf.lo, W, fam]);

  const c = concentracion(inf.dil);
  const ml = c ? dph / c : 0;
  const lo = ritmoADosisHora(inf.lo, inf.u, W);
  const hi = ritmoADosisHora(inf.hi, inf.u, W);
  const fuera = dph < lo * 0.999 || dph > hi * 1.001;
  const gotasMin = (ml * gotas) / 60;

  const campo = (valor: number, onChange: (n: number) => void, resaltado?: boolean, grande?: boolean) => (
    <input
      inputMode="decimal" value={fmt(valor)}
      onChange={(e) => onChange(num(e.target.value))}
      className="flex-1 min-w-0 bg-slate-50 border rounded-lg px-3 py-2 font-bold text-right outline-none transition"
      style={{
        fontSize: grande ? "22px" : "17px",
        borderColor: resaltado ? "#fca5a5" : "#f1f5f9",
        color: resaltado ? "#dc2626" : grande ? AC : "#1e293b",
      }}
    />
  );

  return (
    <>
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-16 text-[12px] text-slate-400 text-right shrink-0">Ritmo</span>
          {campo(dosisHoraARitmo(dph, uRate, W), (n) => setDph(ritmoADosisHora(n, uRate, W)), fuera)}
          <select
            value={uRate} onChange={(e) => setURate(e.target.value)}
            className="bg-slate-50 border border-slate-100 rounded-lg px-2 py-2 text-[12.5px] text-slate-700 outline-none shrink-0"
            style={{ fontSize: "16px", maxWidth: 118 }}
          >
            {RATEU[fam].map((u) => <option key={u} value={u}>{u}</option>)}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-16 text-[12px] text-slate-400 text-right shrink-0">=</span>
          {campo(dosisHoraARitmo(dph, uAbs, W), (n) => setDph(ritmoADosisHora(n, uAbs, W)))}
          <select
            value={uAbs} onChange={(e) => setUAbs(e.target.value)}
            className="bg-slate-50 border border-slate-100 rounded-lg px-2 py-2 text-[12.5px] text-slate-700 outline-none shrink-0"
            style={{ fontSize: "16px", maxWidth: 118 }}
          >
            {ABSU[fam].map((u) => <option key={u} value={u}>{u}</option>)}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-16 text-[12px] text-slate-400 text-right shrink-0">=</span>
          {campo(ml, (n) => setDph(n * c), fuera, true)}
          <span className="text-[13px] font-medium text-slate-400 shrink-0" style={{ width: 118 }}>mL/hr</span>
        </div>

        <div className="pt-3 border-t border-dashed border-slate-100 text-[12.5px] text-slate-500 leading-relaxed">
          Rango <b className="text-slate-700">{fmt(inf.lo)} – {fmt(inf.hi)}</b> {inf.u}<br />
          = <b className="text-slate-700">{fmt(c ? lo / c : 0)} – {fmt(c ? hi / c : 0)}</b> mL/hr con esta dilución<br />
          ≈ <b className="text-slate-700">{fmt(gotasMin)}</b> gotas/min ({gotas} gotas/mL) · peso {WLBL[wMode]} {fmt(W)} kg
          {fuera && <><br /><span className="text-red-500 font-semibold">Fuera del rango habitual</span></>}
        </div>
      </div>

      <TarjetaDil dil={inf.dil} fam={fam} onChange={onDil} />
    </>
  );
}

/* ── Panel de bolo ───────────────────────────────────────────────── */

function PanelBol({ drug, W, wMode, onDil }: {
  drug: Farmaco; W: number; wMode: ModoPeso; onDil: (d: Dilucion) => void;
}) {
  const bol = drug.bol!;
  const fam = (AMT[parseDosis(bol.u).amt] ?? { fam: "g" as Familia }).fam;

  const [uDose, setUDose] = useState(bol.u);
  const [uAmt, setUAmt] = useState(() => parseDosis(bol.u).amt);
  const [amt, setAmt] = useState(() => dosisACantidad(bol.lo, bol.u, W));

  const idRef = useRef(drug.id);
  useEffect(() => {
    if (idRef.current !== drug.id) {
      idRef.current = drug.id;
      setUDose(bol.u);
      setUAmt(parseDosis(bol.u).amt);
      setAmt(dosisACantidad(bol.lo, bol.u, W));
    }
  }, [drug.id, bol.u, bol.lo, W]);

  const c = concentracion(bol.dil);
  const ml = c ? amt / c : 0;
  const lo = dosisACantidad(bol.lo, bol.u, W);
  const hi = dosisACantidad(bol.hi, bol.u, W);
  const topeCanon = bol.tope ? bol.tope * (AMT[parseDosis(bol.u).amt]?.f ?? 1) : 0;
  const fuera = amt < lo * 0.999 || amt > hi * 1.001;
  const superaTope = !!topeCanon && amt > topeCanon * 1.001;
  const mal = fuera || superaTope;

  const fAmt = AMT[uAmt]?.f ?? 1;

  const campo = (valor: number, onChange: (n: number) => void, resaltado?: boolean, grande?: boolean) => (
    <input
      inputMode="decimal" value={fmt(valor)}
      onChange={(e) => onChange(num(e.target.value))}
      className="flex-1 min-w-0 bg-slate-50 border rounded-lg px-3 py-2 font-bold text-right outline-none transition"
      style={{
        fontSize: grande ? "22px" : "17px",
        borderColor: resaltado ? "#fca5a5" : "#f1f5f9",
        color: resaltado ? "#dc2626" : grande ? AC : "#1e293b",
      }}
    />
  );

  return (
    <>
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-16 text-[12px] text-slate-400 text-right shrink-0">Dosis</span>
          {campo(cantidadADosis(amt, uDose, W), (n) => setAmt(dosisACantidad(n, uDose, W)), mal)}
          <select
            value={uDose} onChange={(e) => setUDose(e.target.value)}
            className="bg-slate-50 border border-slate-100 rounded-lg px-2 py-2 text-[12.5px] text-slate-700 outline-none shrink-0"
            style={{ fontSize: "16px", maxWidth: 118 }}
          >
            {DOSEU[fam].map((u) => <option key={u} value={u}>{u}</option>)}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-16 text-[12px] text-slate-400 text-right shrink-0">=</span>
          {campo(amt / fAmt, (n) => setAmt(n * fAmt))}
          <select
            value={uAmt} onChange={(e) => setUAmt(e.target.value)}
            className="bg-slate-50 border border-slate-100 rounded-lg px-2 py-2 text-[12.5px] text-slate-700 outline-none shrink-0"
            style={{ fontSize: "16px", maxWidth: 118 }}
          >
            {Object.keys(AMT).filter((k) => AMT[k].fam === fam).map((u) => <option key={u} value={u}>{u}</option>)}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-16 text-[12px] text-slate-400 text-right shrink-0">=</span>
          {campo(ml, (n) => setAmt(n * c), mal, true)}
          <span className="text-[13px] font-medium text-slate-400 shrink-0" style={{ width: 118 }}>mL</span>
        </div>

        <div className="pt-3 border-t border-dashed border-slate-100 text-[12.5px] text-slate-500 leading-relaxed">
          Rango <b className="text-slate-700">{fmt(bol.lo)} – {fmt(bol.hi)}</b> {bol.u}
          {" = "}<b className="text-slate-700">{fmt(lo / fAmt)} – {fmt(hi / fAmt)}</b> {uAmt}
          {bol.tope ? <><br />Máximo por dosis <b className="text-slate-700">{fmt(bol.tope)} {parseDosis(bol.u).amt}</b></> : null}
          {bol.via ? <><br />Vía: <b className="text-slate-700">{bol.via}</b></> : null}
          <br />peso {WLBL[wMode]} {fmt(W)} kg
          {superaTope
            ? <><br /><span className="text-red-500 font-semibold">Supera el máximo por dosis</span></>
            : fuera
              ? <><br /><span className="text-red-500 font-semibold">Fuera del rango habitual</span></>
              : null}
        </div>
      </div>

      <TarjetaDil dil={bol.dil} fam={fam} onChange={onDil} />
    </>
  );
}

/* ── Vista: Sets ─────────────────────────────────────────────────── */

function VistaSets({ sets, drugs, onOpen, onEliminar }: {
  sets: Catalogo["sets"]; drugs: Farmaco[]; onOpen: (i: number) => void; onEliminar: (i: number) => void;
}) {
  if (!sets.length) return <div className="text-center py-16 text-[14px] text-slate-400">Sin sets</div>;
  return (
    <div className="px-4 py-4">
      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
        {sets.map((s, i) => (
          <div key={s.id} className="relative flex items-stretch">
            <button onClick={() => onOpen(i)} className="flex-1 min-w-0 flex items-center gap-2.5 px-4 py-3 border-b border-slate-50 text-left hover:bg-slate-50 transition">
              <div className="flex-1 min-w-0">
                <div className="text-[15px] font-semibold text-slate-800 truncate">{s.n}</div>
                <div className="text-[11.5px] text-slate-400 truncate">
                  {s.items.map((x) => drugs.find((d) => d.id === x.d)?.n ?? "?").join(" · ")}
                </div>
              </div>
              <span className="text-[11px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full shrink-0">{s.items.length}</span>
              <ChevronRightIcon className="w-3.5 h-3.5 text-slate-300 shrink-0" />
            </button>
            <button
              onClick={() => { if (confirm(`¿Eliminar el set «${s.n}»?`)) onEliminar(i); }}
              className="px-3 border-b border-slate-50 text-[11px] font-bold text-slate-200 hover:text-red-500 transition"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function VistaSet({ set, drugs, W, wMode, onVal, onDrug }: {
  set: Catalogo["sets"][number]; drugs: Farmaco[]; W: number; wMode: ModoPeso;
  onVal: (i: number, val: number) => void; onDrug: (id: string) => void;
}) {
  return (
    <div className="px-4 py-4 space-y-3">
      {set.items.map((it, i) => {
        const d = drugs.find((x) => x.id === it.d);
        if (!d) return null;
        const esInf = it.modo === "bol" && d.bol ? false : !!d.inf;
        const src = esInf ? d.inf! : d.bol!;
        const c = concentracion(src.dil);
        const cant = esInf ? ritmoADosisHora(it.val, src.u, W) : dosisACantidad(it.val, src.u, W);
        const lo = esInf ? ritmoADosisHora(src.lo, src.u, W) : dosisACantidad(src.lo, src.u, W);
        const hi = esInf ? ritmoADosisHora(src.hi, src.u, W) : dosisACantidad(src.hi, src.u, W);
        const fuera = cant < lo * 0.999 || cant > hi * 1.001;

        return (
          <div key={`${it.d}-${i}`} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
            <div className="flex items-center gap-2 mb-3">
              <b className="flex-1 text-[15px] font-semibold text-slate-800 truncate">{d.n}</b>
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0"
                style={esInf ? { background: AC_SOFT, color: AC } : { background: "#ecfdf5", color: "#059669" }}
              >
                {esInf ? "infusión" : "bolo"}
              </span>
              <button onClick={() => onDrug(d.id)} className="text-slate-300 hover:text-slate-500 transition shrink-0">
                <ChevronRightIcon className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <input
                inputMode="decimal" value={fmt(it.val)}
                onChange={(e) => onVal(i, num(e.target.value))}
                className="flex-1 min-w-0 bg-slate-50 border border-slate-100 rounded-lg px-3 py-2 text-[16px] font-bold text-right text-slate-800 outline-none focus:border-[#0284c7] transition"
              />
              <span className="text-[12px] text-slate-400 shrink-0" style={{ minWidth: 74 }}>{src.u}</span>
              <span className="text-[12px] text-slate-300 shrink-0">=</span>
              <span
                className="text-[17px] font-bold text-right shrink-0"
                style={{ minWidth: 58, color: fuera ? "#dc2626" : AC }}
              >
                {fmt(c ? cant / c : 0)}
              </span>
              <span className="text-[12px] text-slate-400 shrink-0">{esInf ? "mL/hr" : "mL"}</span>
            </div>

            <p className="text-[11.5px] text-slate-400 leading-relaxed">
              {fmt(src.dil.m)} {src.dil.um} en {fmt(src.dil.v)} mL de {src.dil.d} · rango {fmt(src.lo)}–{fmt(src.hi)} {src.u}
              {fuera && <span className="text-red-500 font-semibold"> · fuera de rango</span>}
            </p>
          </div>
        );
      })}
    </div>
  );
}

/* ── Vista: Peso y pediatría ─────────────────────────────────────── */

function Stat({ l, v, u }: { l: string; v: number; u: string }) {
  return (
    <div className="bg-slate-50 border border-slate-100 rounded-xl px-3 py-2.5">
      <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold mb-0.5">{l}</div>
      <div className="text-[19px] font-bold text-slate-800">
        {fmt(v)} <span className="text-[11px] font-normal text-slate-400">{u}</span>
      </div>
    </div>
  );
}

function VistaPeso({ pac, pesos, wMode, setWMode, onPac }: {
  pac: Paciente; pesos: ReturnType<typeof calcPesos>; wMode: ModoPeso;
  setWMode: (m: ModoPeso) => void; onPac: (p: Partial<Paciente>) => void;
}) {
  const esPed = pac.edad < 14 || pesos.total < 40;
  const W = pesos.total;
  const E = pac.edad;

  const fila = (label: string, campo: keyof Paciente, unidad: string) => (
    <div className="flex items-center gap-2">
      <span className="w-14 text-[12px] text-slate-400 text-right shrink-0">{label}</span>
      <input
        inputMode="decimal" value={fmt(pac[campo] as number)}
        onChange={(e) => onPac({ [campo]: num(e.target.value) } as Partial<Paciente>)}
        className="flex-1 min-w-0 bg-slate-50 border border-slate-100 rounded-lg px-3 py-2 text-[17px] font-bold text-right text-slate-800 outline-none focus:border-[#0284c7] transition"
      />
      <span className="text-[12px] text-slate-400 w-10 shrink-0">{unidad}</span>
    </div>
  );

  return (
    <div className="px-4 py-4 space-y-5">
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 space-y-3">
        {fila("Peso", "peso", "kg")}
        {fila("Talla", "talla", "cm")}
        {fila("Edad", "edad", "años")}
        <div className="flex items-center gap-2">
          <span className="w-14 text-[12px] text-slate-400 text-right shrink-0">Sexo</span>
          <div className="flex gap-2">
            {(["m", "f"] as const).map((s) => (
              <button
                key={s} onClick={() => onPac({ sexo: s })}
                className="px-3.5 py-1.5 rounded-full text-[12.5px] font-semibold transition border"
                style={pac.sexo === s
                  ? { background: AC, borderColor: AC, color: "white" }
                  : { background: "white", borderColor: "#e2e8f0", color: "#94a3b8" }}
              >
                {s === "m" ? "Masculino" : "Femenino"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400 px-1 mb-2">Pesos de dosificación</p>
        <div className="grid grid-cols-2 gap-2.5">
          <Stat l="Total" v={pesos.total} u="kg" />
          <Stat l="Ideal (Devine)" v={pesos.ideal} u="kg" />
          <Stat l="Ajustado" v={pesos.ajustado} u="kg" />
          <Stat l="Magro" v={pesos.magro} u="kg" />
          <Stat l="IMC" v={pesos.imc} u="kg/m²" />
          <Stat l="Sup. corporal" v={pesos.superficie} u="m²" />
        </div>
        <div className="flex gap-2 flex-wrap mt-3">
          {(["total", "ideal", "ajustado", "magro"] as ModoPeso[]).map((m) => (
            <button
              key={m} onClick={() => setWMode(m)}
              className="px-3.5 py-1.5 rounded-full text-[12.5px] font-semibold transition border"
              style={wMode === m
                ? { background: AC, borderColor: AC, color: "white" }
                : { background: "white", borderColor: "#e2e8f0", color: "#94a3b8" }}
            >
              {m}
            </button>
          ))}
        </div>
        <p className="text-[11.5px] text-slate-400 leading-relaxed mt-2.5">
          El peso marcado es el que usan todas las calculadoras. Propofol y relajantes: ajustado o ideal.
          Remifentanilo: magro. Hidrosolubles y sugammadex: total.
        </p>
      </div>

      {esPed && (
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400 px-1 mb-2">Pediatría</p>
          <div className="grid grid-cols-2 gap-2.5">
            <Stat l="Peso estimado" v={(E + 4) * 2} u="kg" />
            <Stat l="TET sin balón" v={E / 4 + 4} u="mm DI" />
            <Stat l="TET con balón" v={E / 4 + 3.5} u="mm DI" />
            <Stat l="Profundidad" v={E / 4 + 12} u="cm" />
            <Stat l="Volumen tidal" v={W * 7} u="mL" />
            <Stat l="Líquidos 4-2-1" v={holliday(W)} u="mL/hr" />
            <Stat l="Volemia" v={W * (E < 1 ? 80 : 70)} u="mL" />
            <Stat l="Desfibrilación" v={W * 4} u="J" />
            <Stat l="Cardioversión" v={W * 1} u="J" />
            <Stat l="Adrenalina paro" v={W * 10} u="mcg" />
            <Stat l="Atropina" v={Math.max(100, W * 20)} u="mcg" />
            <Stat l="Bolo cristaloide" v={W * 10} u="mL" />
          </div>
          <p className="text-[11.5px] text-slate-400 leading-relaxed mt-2.5">
            Peso estimado APLS (edad+4)×2 · TET Cole · desfibrilación 4 J/kg · cardioversión 1 J/kg (2 J/kg si falla) · adrenalina 10 µg/kg.
          </p>
        </div>
      )}
    </div>
  );
}

/* ── Vista: Ajustes ──────────────────────────────────────────────── */

function VistaCfg({ estado, userId, onGotas, onRestaurado, onNovedades }: {
  estado: Estado; userId: string;
  onGotas: (g: number) => void;
  onRestaurado: (e: Estado) => void;
  onNovedades: (e: Estado) => void;
}) {
  const [novedades, setNovedades] = useState<{ total: number } | null>(null);
  const [ocupado, setOcupado] = useState(false);

  useEffect(() => {
    verNovedades().then((n) => { if (n.total > 0) setNovedades({ total: n.total }); }).catch(() => {});
  }, []);

  return (
    <div className="px-4 py-4 space-y-5">
      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400 px-1 mb-2">Goteo</p>
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
          <div className="flex items-center gap-2">
            <input
              inputMode="decimal" value={estado.prefs.gotas}
              onChange={(e) => onGotas(num(e.target.value) || 20)}
              className="flex-1 bg-slate-50 border border-slate-100 rounded-lg px-3 py-2 text-[17px] font-bold text-right text-slate-800 outline-none focus:border-[#0284c7] transition"
            />
            <span className="text-[12px] text-slate-400 shrink-0">gotas/mL</span>
          </div>
          <p className="text-[11.5px] text-slate-400 mt-2">Macrogotero 20 · microgotero 60.</p>
        </div>
      </div>

      {novedades && (
        <div className="rounded-2xl p-4" style={{ background: AC_SOFT, border: `1px solid ${AC}33` }}>
          <p className="text-[13px] font-semibold mb-2.5" style={{ color: "#075985" }}>
            Hay {novedades.total} {novedades.total === 1 ? "fármaco nuevo" : "fármacos nuevos"} en el catálogo base
          </p>
          <p className="text-[11.5px] leading-relaxed mb-3" style={{ color: "#0369a1" }}>
            Solo se añaden. No se modifica ni se elimina nada de lo que tú hayas editado.
          </p>
          <button
            disabled={ocupado}
            onClick={async () => {
              setOcupado(true);
              try {
                const e = await aplicarNovedades(userId);
                if (e) { onNovedades(e); setNovedades(null); }
              } catch { /* nada */ }
              setOcupado(false);
            }}
            className="w-full rounded-xl py-3 text-[14px] font-bold text-white transition disabled:opacity-50"
            style={{ background: AC }}
          >
            {ocupado ? "Añadiendo…" : "Añadirlos"}
          </button>
        </div>
      )}

      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400 px-1 mb-2">Catálogo</p>
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 space-y-2.5">
          <p className="text-[12px] text-slate-400 leading-relaxed">
            {estado.data.drugs.length} fármacos · {estado.data.sets.length} sets.
            Tu copia es tuya: los cambios que hagas no se pierden ni se sobrescriben.
          </p>
          <button
            onClick={() => exportar(estado)}
            className="w-full rounded-xl py-3 text-[14px] font-semibold text-slate-600 bg-slate-50 border border-slate-100 transition hover:bg-slate-100"
          >
            Exportar copia (JSON)
          </button>
          <button
            disabled={ocupado}
            onClick={async () => {
              if (!confirm("Se perderán tus cambios y fármacos añadidos. ¿Continuar?")) return;
              setOcupado(true);
              try { onRestaurado(await restaurarOriginal(userId)); } catch { /* nada */ }
              setOcupado(false);
            }}
            className="w-full rounded-xl py-3 text-[14px] font-semibold text-red-500 bg-white border border-red-200 transition hover:bg-red-50 disabled:opacity-50"
          >
            Restaurar catálogo original
          </button>
        </div>
      </div>
    </div>
  );
}
