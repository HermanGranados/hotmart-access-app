"use client";

import { useState } from "react";
import CalcANALGESIQ from "./CalcANALGESIQ";

function ActivityIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

function WindIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.8 19.6A2 2 0 1 0 14 16H2" />
      <path d="M17.5 8a2.5 2.5 0 1 1 2 4H2" />
      <path d="M9.8 4.4A2 2 0 1 1 11 8H2" />
    </svg>
  );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function AlertCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  );
}

function ChevronLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21a8 8 0 0 0-16 0" />
      <circle cx="12" cy="8" r="4" />
    </svg>
  );
}

function CrownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m2 7 4.5 4.5L12 4l5.5 7.5L22 7l-2 13H4L2 7Z" />
    </svg>
  );
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function KeyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7.5" cy="15.5" r="5.5" />
      <path d="m21 2-9.6 9.6" />
      <path d="m15.5 7.5 3 3L22 7l-3-3" />
    </svg>
  );
}

function LogOutIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <path d="M16 17l5-5-5-5" />
      <path d="M21 12H9" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function PageFooter() {
  return (
    <div className="flex flex-col items-center gap-[6px] py-8 px-4">
      <p className="text-center text-[13px] text-slate-500">
        Desarrollada por el{" "}
        <strong className="font-semibold text-slate-700">Dr. Herman Granados</strong>{" "}
        — Anestesia Latina
      </p>
      <p className="text-center text-[12px] text-slate-400">
        Vapora.app es una aplicación web con fines académicos y educativos
      </p>
    </div>
  );
}

// ── Header Home ──
function HomeHeader({ onProfile }: { onProfile: () => void }) {
  return (
    <header className="sticky top-0 z-30 w-full bg-white border-b border-slate-100">
      <div className="flex items-center justify-between gap-3 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-[12px] overflow-hidden flex-shrink-0"
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.12)" }}>
            <img
              src="https://academiadeanestesia.com/wp-content/uploads/2026/04/vapora-app-ico-ios.png"
              alt="Vapora"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-[18px] font-black text-slate-900 leading-tight tracking-tight">
              Vapora.app
            </div>
            <div className="text-[11px] text-slate-400 font-medium mt-0.5">
              Calculadoras para tu día a día en Anestesia
            </div>
          </div>
        </div>
        <button
          onClick={onProfile}
          className="w-9 h-9 rounded-full bg-slate-100 border border-slate-100 flex items-center justify-center flex-shrink-0 hover:bg-slate-200 transition active:scale-95"
        >
          <UserIcon className="w-4 h-4 text-slate-500" />
        </button>
      </div>
    </header>
  );
}

// ── Header Apps internas ──
function AppHeader({ title, onBack, onProfile }: { title: string; onBack: () => void; onProfile: () => void }) {
  return (
    <header className="sticky top-0 z-30 w-full bg-white border-b border-slate-100">
      <div className="flex items-center gap-2.5 px-3.5 py-2.5">
        <button
          onClick={onBack}
          className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 hover:bg-slate-200 transition active:scale-95"
        >
          <ChevronLeftIcon className="w-3.5 h-3.5 text-slate-500" />
        </button>

        <div className="flex-1 flex items-center justify-center gap-2">
          <div className="w-[26px] h-[26px] rounded-[7px] overflow-hidden flex-shrink-0"
            style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.12)" }}>
            <img
              src="https://academiadeanestesia.com/wp-content/uploads/2026/04/vapora-app-ico-ios.png"
              alt="Vapora"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-[15px] font-black text-slate-900 tracking-tight">{title}</span>
        </div>

        <button
          onClick={onProfile}
          className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 hover:bg-slate-200 transition active:scale-95"
        >
          <UserIcon className="w-3.5 h-3.5 text-slate-500" />
        </button>
      </div>
    </header>
  );
}

function CalcMACFlow({ onBack, onProfile }: { onBack: () => void; onProfile: () => void }) {
  const [anesthetic, setAnesthetic] = useState<"Sevoflurano" | "Desflurano">("Sevoflurano");
  const [fgf, setFgf] = useState("1.0");
  const [conc, setConc] = useState("2.0");
  const [dur, setDur] = useState("1.0");

  const isSevo = anesthetic === "Sevoflurano";
  const theme = {
    bg: isSevo ? "bg-[#F9CE6F]" : "bg-[#65C4EB]",
    border: isSevo ? "border-[#F9CE6F]" : "border-[#65C4EB]",
    accent: isSevo ? "#F9CE6F" : "#65C4EB",
    billing: isSevo ? "20 ml/hora" : "35 ml/hora",
    btnSevo: isSevo ? "bg-[#F9CE6F] text-slate-900" : "bg-slate-100 text-slate-500",
    btnDesf: !isSevo ? "bg-[#65C4EB] text-slate-900" : "bg-slate-100 text-slate-500",
    textGradient: isSevo ? "from-[#F9CE6F] to-[#F39169]" : "from-[#65C4EB] to-[#BDABF5]",
  };

  const numFgf = parseFloat(fgf) || 0;
  const numConc = parseFloat(conc) || 0;
  const numDur = parseFloat(dur) || 0;
  const rate = 3 * numFgf * numConc;
  const total = rate * numDur;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <div className="max-w-md mx-auto bg-white min-h-screen sm:border-x border-slate-100 flex flex-col">
        <AppHeader title="MACFlow" onBack={onBack} onProfile={onProfile} />
        <main className="flex-1 flex flex-col w-full pb-12">
          <div className="h-1.5 w-full bg-gradient-to-r from-[#65C4EB] via-[#BDABF5] to-[#F39169]" />

          <div className="pt-8 pb-4 px-5 text-center flex flex-col items-center border-b border-slate-100">
            <div className="w-16 h-16 mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-sky-100 flex items-center justify-center">
              <img src="https://academiadeanestesia.com/wp-content/uploads/2026/04/anesthesia.png" alt="MACFlow" className="w-11 h-11 object-contain" />
            </div>
            <h2 className={`text-4xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${theme.textGradient} mb-1`}>
              MACFLOW
            </h2>
            <p className="text-slate-400 font-bold text-xs tracking-[0.2em] uppercase">
              Consumo Anestésicos Inhalatorios
            </p>
          </div>

          <div className="px-4 sm:px-6 py-6 space-y-6 flex-grow">
            <div className="flex rounded-xl overflow-hidden border border-slate-100 shadow-sm">
              <button onClick={() => { setAnesthetic("Sevoflurano"); setConc("2.0"); }}
                className={`flex-1 py-3 text-sm font-semibold transition-colors ${theme.btnSevo}`}>
                Sevoflurano
              </button>
              <button onClick={() => { setAnesthetic("Desflurano"); setConc("6.0"); }}
                className={`flex-1 py-3 text-sm font-semibold transition-colors ${theme.btnDesf}`}>
                Desflurano
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="flex items-center text-sm font-medium text-slate-600 mb-2">
                  <WindIcon className="w-4 h-4 mr-1.5 text-slate-400" />
                  Flujo de Gas Fresco (L/min)
                </label>
                <div className="flex items-center space-x-4">
                  <input type="range" min="0.1" max="10" step="0.1" value={fgf}
                    onChange={(e) => setFgf(e.target.value)}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer"
                    style={{ accentColor: theme.accent }} />
                  <input type="number" step="0.1" min="0" value={fgf}
                    onChange={(e) => setFgf(e.target.value)}
                    className={`w-20 text-center border-b-2 ${theme.border} focus:outline-none font-bold text-xl p-1 text-slate-800`} />
                </div>
              </div>
              <div>
                <label className="flex items-center text-sm font-medium text-slate-600 mb-2">
                  <ActivityIcon className="w-4 h-4 mr-1.5 text-slate-400" />
                  Concentración (Vol %)
                </label>
                <div className="flex items-center space-x-4">
                  <input type="range" min="0.1" max="15" step="0.1" value={conc}
                    onChange={(e) => setConc(e.target.value)}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer"
                    style={{ accentColor: theme.accent }} />
                  <input type="number" step="0.1" min="0" value={conc}
                    onChange={(e) => setConc(e.target.value)}
                    className={`w-20 text-center border-b-2 ${theme.border} focus:outline-none font-bold text-xl p-1 text-slate-800`} />
                </div>
              </div>
              <div>
                <label className="flex items-center text-sm font-medium text-slate-600 mb-2">
                  <ClockIcon className="w-4 h-4 mr-1.5 text-slate-400" />
                  Tiempo (Horas)
                </label>
                <div className="flex items-center space-x-4">
                  <input type="range" min="0.1" max="12" step="0.1" value={dur}
                    onChange={(e) => setDur(e.target.value)}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer"
                    style={{ accentColor: theme.accent }} />
                  <input type="number" step="0.1" min="0" value={dur}
                    onChange={(e) => setDur(e.target.value)}
                    className={`w-20 text-center border-b-2 ${theme.border} focus:outline-none font-bold text-xl p-1 text-slate-800`} />
                </div>
              </div>
            </div>

            <div className={`${theme.bg} rounded-2xl p-6 shadow-sm text-center`}>
              <div className="flex flex-col items-center space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wider font-bold text-slate-900/70">Tasa por Hora</p>
                  <p className="text-4xl font-black text-slate-900">
                    {rate.toFixed(1)} <span className="text-xl font-medium opacity-80">ml/h</span>
                  </p>
                </div>
                <div className="w-full h-px bg-white/40" />
                <div>
                  <p className="text-xs uppercase tracking-wider font-bold text-slate-900/70">Consumo Total</p>
                  <p className="text-5xl font-black text-slate-900">
                    {total.toFixed(1)} <span className="text-2xl font-medium opacity-80">ml</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border-l-4 border-[#F39169] rounded-r-xl p-4 flex items-start">
              <AlertCircleIcon className="w-5 h-5 text-[#F39169] mr-3 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-slate-600">
                <strong>Referencia:</strong> Para {anesthetic} suele sugerirse cobro estándar de{" "}
                <span className="font-semibold bg-white px-2 py-0.5 rounded shadow-sm">{theme.billing}</span>.{" "}
                (Fórmula: 3 × {numFgf} × {numConc}).
              </p>
            </div>
          </div>
          <PageFooter />
        </main>
      </div>
    </div>
  );
}

function CalcLOCUDose({ onBack, onProfile }: { onBack: () => void; onProfile: () => void }) {
  const [mode, setMode] = useState<"bomba" | "regional">("bomba");
  const [stockConc, setStockConc] = useState(0.5);
  const [finalConc, setFinalConc] = useState("");
  const [finalVol, setFinalVol] = useState("");
  const [weight, setWeight] = useState("");
  const [regionalAnes, setRegionalAnes] = useState({ label: "Bupivacaína 0.25%", conc: 0.25, max: 2 });

  let errorMsg = "";
  let reqVol: number | null = null;
  let diluent: number | null = null;
  let maxVol: number | null = null;
  let totalMg: number | null = null;

  if (mode === "bomba") {
    const c2 = parseFloat(finalConc);
    const v2 = parseFloat(finalVol);
    const c1 = stockConc;
    if (c1 > 0 && !isNaN(c2) && !isNaN(v2) && c2 > 0 && v2 > 0) {
      if (c2 > c1) { errorMsg = "Error: C. Final > C. Origen"; }
      else { reqVol = (c2 * v2) / c1; diluent = v2 - reqVol; }
    }
  } else {
    const w = parseInt(weight, 10);
    if (w > 0 && !isNaN(w)) {
      totalMg = regionalAnes.max * w;
      maxVol = regionalAnes.max * (w / 10) * (1 / regionalAnes.conc);
    }
  }

  const bombaOptions = [
    { label: "Bupivacaína 0.5%", val: 0.5 },
    { label: "Ropivacaína 0.2%", val: 0.2 },
    { label: "Ropivacaína 0.75%", val: 0.75 },
    { label: "Levobupivacaína 1%", val: 1.0 },
  ];

  const regionalOptions = [
    { label: "Bupivacaína 0.25%", conc: 0.25, max: 2 },
    { label: "Bupivacaína 0.5%", conc: 0.5, max: 2 },
    { label: "Ropivacaína 0.2%", conc: 0.2, max: 3 },
    { label: "Ropivacaína 0.75%", conc: 0.75, max: 3 },
    { label: "Lidocaína 1%", conc: 1.0, max: 4.5 },
    { label: "Lidocaína 2%", conc: 2.0, max: 4.5 },
    { label: "Levobupivacaína 0.5%", conc: 0.5, max: 2 },
    { label: "Levobupivacaína 1%", conc: 1.0, max: 2 },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <div className="max-w-md mx-auto bg-white min-h-screen sm:border-x border-slate-100 flex flex-col">
        <AppHeader title="LOCUDose" onBack={onBack} onProfile={onProfile} />
        <main className="flex-1 flex flex-col w-full pb-12">
          <div className="h-1.5 w-full bg-gradient-to-r from-[#65C4EB] via-[#BDABF5] to-[#F9CE6F]" />

          <div className="pt-8 pb-6 px-6 border-b border-slate-100 text-center flex flex-col items-center">
            <div className="w-16 h-16 mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
              <img src="https://academiadeanestesia.com/wp-content/uploads/2026/03/calculator.png" alt="LOCUDose" className="w-11 h-11 object-contain" />
            </div>
            <h2 className="text-4xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#65C4EB] to-[#BDABF5] mb-2 uppercase">
              LocuDose
            </h2>
            <p className="text-slate-400 font-bold text-xs tracking-[0.15em] uppercase">
              Calculadora de Anestésico Local
            </p>
          </div>

          <div className="px-4 sm:px-6 py-6 space-y-6 flex-grow">
            <div className="flex bg-slate-100 p-1.5 rounded-xl">
              <button onClick={() => setMode("bomba")}
                className={`flex-1 py-3 text-sm font-bold uppercase tracking-wider rounded-lg transition-all ${mode === "bomba" ? "bg-white text-[#F39169] shadow-sm" : "text-slate-400"}`}>
                Bomba Elastomérica
              </button>
              <button onClick={() => setMode("regional")}
                className={`flex-1 py-3 text-sm font-bold uppercase tracking-wider rounded-lg transition-all ${mode === "regional" ? "bg-white text-[#F39169] shadow-sm" : "text-slate-400"}`}>
                Anestesia Regional
              </button>
            </div>

            {mode === "bomba" && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Anestésico Local a utilizar</label>
                  <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl space-y-3">
                    {bombaOptions.map((opt) => (
                      <label key={opt.label} className="flex items-center text-sm text-slate-600 cursor-pointer">
                        <input type="radio" name="bomba_stock" value={opt.val}
                          checked={stockConc === opt.val} onChange={() => setStockConc(opt.val)}
                          className="w-5 h-5 mr-3 accent-[#F39169]" />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Concentración Final Deseada:</label>
                  <div className="relative flex items-center">
                    <span className="absolute left-4 text-[#BDABF5] font-bold">%</span>
                    <input type="number" step="0.001" min="0" placeholder="Ej. 0.125" value={finalConc}
                      onChange={(e) => setFinalConc(e.target.value)}
                      className="w-full py-4 pl-10 pr-4 text-slate-800 text-sm font-medium border border-slate-100 rounded-xl focus:border-[#65C4EB] focus:outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Volumen Final Deseado:</label>
                  <div className="relative flex items-center">
                    <span className="absolute left-4 text-[#BDABF5] font-bold">ml</span>
                    <input type="number" step="0.1" min="0" placeholder="Ej. 100" value={finalVol}
                      onChange={(e) => setFinalVol(e.target.value)}
                      className="w-full py-4 pl-12 pr-4 text-slate-800 text-sm font-medium border border-slate-100 rounded-xl focus:border-[#65C4EB] focus:outline-none transition-all" />
                  </div>
                </div>
              </div>
            )}

            {mode === "regional" && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Peso del Paciente:</label>
                  <div className="relative flex items-center">
                    <span className="absolute left-4 text-[#BDABF5] font-bold">kg</span>
                    <input type="number" step="1" min="1" placeholder="Ej. 70" value={weight}
                      onChange={(e) => setWeight(e.target.value.replace(/[^0-9]/g, ""))}
                      className="w-full py-4 pl-14 pr-4 text-slate-800 text-sm font-medium border border-slate-100 rounded-xl focus:border-[#65C4EB] focus:outline-none transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Anestésico Local a utilizar</label>
                  <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {regionalOptions.map((opt) => (
                      <label key={opt.label} className="flex items-center text-sm text-slate-600 cursor-pointer">
                        <input type="radio" name="regional_anes"
                          checked={regionalAnes.label === opt.label} onChange={() => setRegionalAnes(opt)}
                          className="w-5 h-5 mr-3 accent-[#F39169] flex-shrink-0" />
                        <span className="truncate">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white p-6 rounded-2xl border-2 border-slate-100 shadow-sm text-center">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                {mode === "bomba" ? "Volumen de Anestésico Requerido" : "Volumen Máximo Permitido"}
              </h4>
              <div className="inline-flex items-baseline justify-center bg-slate-50 px-8 py-4 rounded-xl border border-slate-100">
                {errorMsg ? (
                  <span className="text-red-500 font-bold text-sm">{errorMsg}</span>
                ) : (
                  <>
                    <span className="font-black text-5xl text-[#F39169]">
                      {mode === "bomba" ? (reqVol !== null ? reqVol.toFixed(1) : "0.0") : (maxVol !== null ? maxVol.toFixed(1) : "0.0")}
                    </span>
                    <span className="text-[#65C4EB] font-bold text-xl ml-2">ml</span>
                  </>
                )}
              </div>
              {mode === "regional" && totalMg !== null && (
                <div className="mt-6 text-sm text-slate-500 font-medium">
                  Dosis total equivalente:
                  <span className="text-[#F39169] font-black text-lg ml-1">{totalMg.toFixed(0)} mg</span>
                </div>
              )}
            </div>

            {mode === "bomba" && diluent !== null && !errorMsg && (
              <div className="bg-slate-50 p-5 rounded-xl border-2 border-[#F9CE6F] text-center">
                <span className="block text-sm text-slate-600 font-medium mb-1">Volumen de Diluyente a agregar:</span>
                <div className="font-bold text-3xl text-[#65C4EB]">
                  {diluent.toFixed(1)} <span className="text-lg">ml</span>
                </div>
              </div>
            )}
          </div>
          <PageFooter />
        </main>
      </div>
    </div>
  );
}

async function handleLogout() {
  try {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/login";
  } catch {
    window.location.href = "/login";
  }
}

type Props = {
  isPremium: boolean;
  userEmail: string;
  planName: string | null;
  daysRemaining: number | null;
};

export default function VaporaClient({ isPremium, userEmail, planName, daysRemaining }: Props) {
  const [vistaActual, setVistaActual] = useState<"home" | "mac" | "locu" | "analgesiq">("home");
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      {/* Home */}
      {vistaActual === "home" && (
        <div className="min-h-screen bg-white">
          <div className="max-w-md mx-auto bg-white min-h-screen sm:border-x border-slate-100">
            <HomeHeader onProfile={() => setShowProfile(true)} />

            <div className="px-4 pt-6 pb-4 space-y-6">
              {/* Herramientas Premium */}
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-slate-400 px-1 mb-4">
                  Herramientas Premium
                </p>
                <div
                  className="rounded-[28px] p-[1.5px]"
                  style={{
                    background: "linear-gradient(135deg,#c084fc,#818cf8,#38bdf8,#a78bfa)",
                    boxShadow: "0 12px 40px rgba(129,140,248,0.28)",
                  }}
                >
                  <div
                    className="rounded-[27px] p-6 relative overflow-hidden"
                    style={{ background: "linear-gradient(160deg,#0f0c29,#1a1040,#0d1b3e)" }}
                  >
                    <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full pointer-events-none"
                      style={{ background: "radial-gradient(circle,rgba(167,139,250,0.22),transparent 70%)" }} />
                    <div className="absolute bottom-[-40px] left-[-30px] w-[160px] h-[160px] rounded-full pointer-events-none"
                      style={{ background: "radial-gradient(circle,rgba(56,189,248,0.14),transparent 70%)" }} />

                    <div className="relative z-10 flex items-center justify-between gap-3 mb-4">
                      <div className="w-16 h-16 rounded-[18px] flex items-center justify-center overflow-hidden flex-shrink-0"
                        style={{ background: "rgba(255,255,255,0.1)", border: "0.5px solid rgba(255,255,255,0.2)" }}>
                        <img src="https://anestesialatina.com/wp-content/uploads/2026/03/infusion.png"
                          alt="ANALGESIQ" className="w-11 h-11 object-contain" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full"
                        style={{
                          background: "linear-gradient(135deg,rgba(192,132,252,0.3),rgba(129,140,248,0.3))",
                          border: "0.5px solid rgba(192,132,252,0.5)",
                          color: "#e9d5ff",
                        }}>
                        ✦ Premium
                      </span>
                    </div>

                    <div className="relative z-10 text-[30px] font-black tracking-tight mb-5"
                      style={{
                        background: "linear-gradient(135deg,#e9d5ff,#c4b5fd,#93c5fd)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}>
                      ANALGESIQ
                    </div>

                    <p className="relative z-10 text-[13px] leading-relaxed mb-6"
                      style={{ color: "rgba(255,255,255,0.5)" }}>
                      Calculadora avanzada para bombas elastoméricas con compatibilidad, dosis y alertas clínicas.
                    </p>

                    <button
                      onClick={() => { if (isPremium) setVistaActual("analgesiq"); }}
                      className="relative z-10 w-full rounded-[14px] py-[14px] text-[14px] font-bold text-white transition-all"
                      style={{ background: "rgba(167,139,250,0.25)", border: "0.5px solid rgba(167,139,250,0.4)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "linear-gradient(135deg,#a78bfa,#818cf8)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(167,139,250,0.25)"; }}
                    >
                      {isPremium ? "Abrir ANALGESIQ →" : "🔒 Requiere membresía Premium"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Herramientas incluidas */}
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-slate-400 px-1 mb-4">
                  Herramientas incluidas
                </p>
                <div className="space-y-3">
                  <button onClick={() => setVistaActual("mac")}
                    className="w-full bg-white rounded-[20px] border border-slate-100 p-4 flex items-center gap-4 text-left shadow-sm hover:shadow-md transition-all active:scale-[0.99]">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden flex-shrink-0"
                      style={{ background: "linear-gradient(135deg,#e0f2fe,#bae6fd)" }}>
                      <img src="https://academiadeanestesia.com/wp-content/uploads/2026/04/anesthesia.png"
                        alt="MACFlow" className="w-10 h-10 object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[16px] font-black text-slate-900 mb-0.5">MACFlow</div>
                      <div className="text-[13px] text-slate-400">Consumo de anestésicos inhalatorios</div>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <ChevronRightIcon className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                  </button>

                  <button onClick={() => setVistaActual("locu")}
                    className="w-full bg-white rounded-[20px] border border-slate-100 p-4 flex items-center gap-4 text-left shadow-sm hover:shadow-md transition-all active:scale-[0.99]">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden flex-shrink-0"
                      style={{ background: "linear-gradient(135deg,#f0fdf4,#dcfce7)" }}>
                      <img src="https://academiadeanestesia.com/wp-content/uploads/2026/03/calculator.png"
                        alt="LOCUDose" className="w-10 h-10 object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[16px] font-black text-slate-900 mb-0.5">LOCUDose</div>
                      <div className="text-[13px] text-slate-400">Cálculo de anestésicos locales</div>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <ChevronRightIcon className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <PageFooter />
          </div>
        </div>
      )}

      {vistaActual === "mac" && (
        <CalcMACFlow onBack={() => setVistaActual("home")} onProfile={() => setShowProfile(true)} />
      )}
      {vistaActual === "locu" && (
        <CalcLOCUDose onBack={() => setVistaActual("home")} onProfile={() => setShowProfile(true)} />
      )}
      {vistaActual === "analgesiq" && isPremium && (
        <CalcANALGESIQ onBack={() => setVistaActual("home")} />
      )}

      {/* Panel de perfil */}
      {showProfile && (
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-[6px]">
          <div className="absolute inset-0" onClick={() => setShowProfile(false)} />
          <div className="absolute right-0 top-0 h-full w-[92%] max-w-[360px] border-l border-white/30 bg-white/70 shadow-[0_20px_60px_rgba(15,23,42,0.15)] backdrop-blur-2xl">
            <div className="flex h-full flex-col px-5 py-5 sm:px-6 sm:py-6">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-[19px] font-black tracking-tight text-slate-900">Mi perfil</h2>
                <button onClick={() => setShowProfile(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/60 text-slate-500 shadow-sm ring-1 ring-black/5 transition hover:bg-white">
                  <XIcon className="h-5 w-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 rounded-3xl bg-white/55 p-3 shadow-sm ring-1 ring-white/50 backdrop-blur-xl">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50">
                    <UserIcon className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">Correo electrónico</p>
                    <p className="mt-1 break-all text-[15px] font-bold leading-5 text-slate-900">{userEmail}</p>
                  </div>
                </div>

                <div className="rounded-3xl bg-white/55 p-3 shadow-sm ring-1 ring-white/50 backdrop-blur-xl">
                  <div className="flex items-start gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-50">
                      <CrownIcon className="h-5 w-5 text-violet-600" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">Plan de suscripción</p>
                      <p className="mt-1 text-[15px] font-bold leading-5 text-slate-900">{planName ?? "Sin plan activo"}</p>
                    </div>
                  </div>
                  <div className="my-4 h-px bg-slate-200/70" />
                  <div className="flex items-start gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50">
                      <CalendarIcon className="h-5 w-5 text-cyan-600" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">Días restantes</p>
                      <p className="mt-1 text-[15px] font-bold leading-5 text-slate-900">
                        {daysRemaining !== null ? `${daysRemaining} días` : "—"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <button
                  onClick={() => { setShowProfile(false); window.location.href = "/reset-password"; }}
                  className="flex w-full items-center gap-3 rounded-2xl bg-white/70 px-4 py-4 text-left text-[15px] font-bold text-slate-900 shadow-sm ring-1 ring-white/60 backdrop-blur-xl transition hover:bg-white"
                >
                  <KeyIcon className="h-5 w-5 text-slate-700" />
                  Cambiar contraseña
                </button>
                <button
                  onClick={handleLogout}
                  className="flex w-full items-center gap-3 rounded-2xl px-2 py-3 text-left text-[15px] font-bold text-red-500 transition hover:bg-red-50/70"
                >
                  <LogOutIcon className="h-5 w-5" />
                  Cerrar sesión
                </button>
              </div>

              <div className="mt-auto pt-6">
                <div className="rounded-2xl bg-white/45 px-4 py-3 text-[11px] leading-5 text-slate-400 ring-1 ring-white/50 backdrop-blur-xl">
                  Tu acceso premium se valida automáticamente con tu suscripción activa en Vapora.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
