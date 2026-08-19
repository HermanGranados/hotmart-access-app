"use client";

import { useState } from "react";

const HOTMART_URL = "https://pay.hotmart.com/S105284325L";

// ── Icons ──────────────────────────────────────────────────────────────────

function XCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  );
}

function BeakerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 3h15M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3M6 14h12" />
    </svg>
  );
}

function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function WindIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.8 19.6A2 2 0 1 0 14 16H2" /><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2" /><path d="M9.8 4.4A2 2 0 1 1 11 8H2" />
    </svg>
  );
}

function ActivityIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function AlertCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" />
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

function ChevronLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" /><path d="m6 6 12 12" />
    </svg>
  );
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function ZapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

// ── Footer ─────────────────────────────────────────────────────────────────

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

// ── Calculadora MACFlow ────────────────────────────────────────────────────

function CalcMACFlow({ onBack }: { onBack: () => void }) {
  const [anesthetic, setAnesthetic] = useState<"Sevoflurano" | "Desflurano" | "Isoflurano">("Sevoflurano");
  const [fgf, setFgf] = useState("1.0");
  const [conc, setConc] = useState("2.0");
  const [dur, setDur] = useState("1.0");

  const isSevo = anesthetic === "Sevoflurano";
  const isDesf = anesthetic === "Desflurano";
  const isIso = anesthetic === "Isoflurano";
  const theme = {
    bg: isSevo ? "bg-[#F9CE6F]" : isDesf ? "bg-[#65C4EB]" : "bg-[#A78BFA]",
    border: isSevo ? "border-[#F9CE6F]" : isDesf ? "border-[#65C4EB]" : "border-[#A78BFA]",
    accent: isSevo ? "#F9CE6F" : isDesf ? "#65C4EB" : "#A78BFA",
    billing: isSevo ? "20 ml/hora" : isDesf ? "35 ml/hora" : "10 ml/hora",
    btnSevo: isSevo ? "bg-[#F9CE6F] text-slate-900" : "bg-slate-100 text-slate-500",
    btnDesf: isDesf ? "bg-[#65C4EB] text-slate-900" : "bg-slate-100 text-slate-500",
    btnIso: isIso ? "bg-[#A78BFA] text-white" : "bg-slate-100 text-slate-500",
    textGradient: isSevo ? "from-[#F9CE6F] to-[#F39169]" : isDesf ? "from-[#65C4EB] to-[#BDABF5]" : "from-[#A78BFA] to-[#7C3AED]",
  };

  const numFgf = parseFloat(fgf) || 0;
  const numConc = parseFloat(conc) || 0;
  const numDur = parseFloat(dur) || 0;
  const rate = 3 * numFgf * numConc;
  const total = rate * numDur;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <style>{`input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}`}</style>
      <div className="max-w-md mx-auto bg-white min-h-screen sm:border-x border-slate-100 flex flex-col">
        <header className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-100">
          <div className="flex items-center gap-2.5 px-3.5 py-2.5">
            <button onClick={onBack} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 hover:bg-slate-200 transition active:scale-95">
              <ChevronLeftIcon className="w-3.5 h-3.5 text-slate-500" />
            </button>
            <div className="flex-1 flex items-center justify-center gap-2">
              <div className="w-[26px] h-[26px] rounded-[7px] overflow-hidden flex-shrink-0" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.12)" }}>
                <img src="https://academiadeanestesia.com/wp-content/uploads/2026/04/vapora-app-ico-ios.png" alt="Vapora" className="w-full h-full object-cover" />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-[15px] font-semibold text-slate-900 tracking-tight">Vapora</span>
                <span className="text-[11px] font-light text-slate-400 tracking-wide">· MACFlow</span>
              </div>
            </div>
            <div className="w-8" />
          </div>
        </header>

        <main className="flex-1 flex flex-col w-full pb-12">
          <div className="h-1.5 w-full bg-gradient-to-r from-[#65C4EB] via-[#BDABF5] to-[#F39169]" />
          <div className="pt-8 pb-4 px-5 text-center flex flex-col items-center border-b border-slate-100">
            <div className="w-16 h-16 mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-sky-100 flex items-center justify-center">
              <img src="https://academiadeanestesia.com/wp-content/uploads/2026/04/anesthesia.png" alt="MACFlow" className="w-11 h-11 object-contain" />
            </div>
            <h2 className={`text-4xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${theme.textGradient} mb-1`}>MACFLOW</h2>
            <p className="text-slate-400 font-bold text-xs tracking-[0.2em] uppercase">Consumo Anestésicos Inhalatorios</p>
          </div>

          <div className="px-4 sm:px-6 py-6 space-y-6 flex-grow">
            <div className="flex rounded-xl overflow-hidden border border-slate-100 shadow-sm">
              <button onClick={() => { setAnesthetic("Sevoflurano"); setConc("2.0"); }} className={`flex-1 py-3 text-sm font-semibold transition-colors ${theme.btnSevo}`}>Sevoflurano</button>
              <button onClick={() => { setAnesthetic("Desflurano"); setConc("6.0"); }} className={`flex-1 py-3 text-sm font-semibold transition-colors ${theme.btnDesf}`}>Desflurano</button>
              <button onClick={() => { setAnesthetic("Isoflurano"); setConc("1.2"); }} className={`flex-1 py-3 text-sm font-semibold transition-colors ${theme.btnIso}`}>Isoflurano</button>
            </div>

            <div className="space-y-6">
              {[
                { label: "Flujo de Gas Fresco (L/min)", icon: <WindIcon className="w-4 h-4 mr-1.5 text-slate-400" />, val: fgf, set: setFgf, min: 0.1, max: 10 },
                { label: "Concentración (Vol %)", icon: <ActivityIcon className="w-4 h-4 mr-1.5 text-slate-400" />, val: conc, set: setConc, min: 0.1, max: 15 },
                { label: "Tiempo (Horas)", icon: <ClockIcon className="w-4 h-4 mr-1.5 text-slate-400" />, val: dur, set: setDur, min: 0.1, max: 12 },
              ].map(({ label, icon, val, set, min, max }) => (
                <div key={label}>
                  <label className="flex items-center text-sm font-medium text-slate-600 mb-2">{icon}{label}</label>
                  <div className="flex items-center space-x-4">
                    <input type="range" min={min} max={max} step="0.1" value={val}
                      onChange={(e) => set(e.target.value.replace(",", "."))}
                      className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer"
                      style={{ accentColor: theme.accent }} />
                    <input type="text" inputMode="decimal" value={val}
                      onChange={(e) => set(e.target.value.replace(",", "."))}
                      className={`w-20 text-center border-b-2 ${theme.border} focus:outline-none font-bold p-1 text-slate-800`}
                      style={{ fontSize: "16px" }} />
                  </div>
                </div>
              ))}
            </div>

            <div className={`${theme.bg} rounded-2xl p-6 shadow-sm text-center`}>
              <div className="flex flex-col items-center space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-wider font-bold text-slate-900/70">Tasa por Hora</p>
                  <p className="text-4xl font-black text-slate-900">{rate.toFixed(1)} <span className="text-xl font-medium opacity-80">ml/h</span></p>
                </div>
                <div className="w-full h-px bg-white/40" />
                <div>
                  <p className="text-xs uppercase tracking-wider font-bold text-slate-900/70">Consumo Total</p>
                  <p className="text-5xl font-black text-slate-900">{total.toFixed(1)} <span className="text-2xl font-medium opacity-80">ml</span></p>
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

// ── Calculadora LOCUDose ───────────────────────────────────────────────────

function CalcLOCUDose({ onBack }: { onBack: () => void }) {
  const [mode, setMode] = useState<"bomba" | "regional">("bomba");
  const [stockConc, setStockConc] = useState(0.5);
  const [finalConc, setFinalConc] = useState("");
  const [finalVol, setFinalVol] = useState("");
  const [weight, setWeight] = useState("");
  const [regionalAnes, setRegionalAnes] = useState({ label: "Bupivacaína 0.25%", conc: 0.25, max: 2 });

  let errorMsg = "", reqVol: number | null = null, diluent: number | null = null, maxVol: number | null = null, totalMg: number | null = null;

  if (mode === "bomba") {
    const c2 = parseFloat(finalConc), v2 = parseFloat(finalVol), c1 = stockConc;
    if (c1 > 0 && !isNaN(c2) && !isNaN(v2) && c2 > 0 && v2 > 0) {
      if (c2 > c1) errorMsg = "Error: C. Final > C. Origen";
      else { reqVol = (c2 * v2) / c1; diluent = v2 - reqVol; }
    }
  } else {
    const w = parseInt(weight, 10);
    if (w > 0 && !isNaN(w)) { totalMg = regionalAnes.max * w; maxVol = regionalAnes.max * (w / 10) * (1 / regionalAnes.conc); }
  }

  const bombaOptions = [{ label: "Bupivacaína 0.5%", val: 0.5 }, { label: "Ropivacaína 0.2%", val: 0.2 }, { label: "Ropivacaína 0.75%", val: 0.75 }, { label: "Levobupivacaína 1%", val: 1.0 }];
  const regionalOptions = [
    { label: "Bupivacaína 0.25%", conc: 0.25, max: 2 }, { label: "Bupivacaína 0.5%", conc: 0.5, max: 2 },
    { label: "Ropivacaína 0.2%", conc: 0.2, max: 3 }, { label: "Ropivacaína 0.75%", conc: 0.75, max: 3 },
    { label: "Lidocaína 1%", conc: 1.0, max: 4.5 }, { label: "Lidocaína 2%", conc: 2.0, max: 4.5 },
    { label: "Levobupivacaína 0.5%", conc: 0.5, max: 2 }, { label: "Levobupivacaína 1%", conc: 1.0, max: 2 },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <style>{`input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}`}</style>
      <div className="max-w-md mx-auto bg-white min-h-screen sm:border-x border-slate-100 flex flex-col">
        <header className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-100">
          <div className="flex items-center gap-2.5 px-3.5 py-2.5">
            <button onClick={onBack} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 hover:bg-slate-200 transition active:scale-95">
              <ChevronLeftIcon className="w-3.5 h-3.5 text-slate-500" />
            </button>
            <div className="flex-1 flex items-center justify-center gap-2">
              <div className="w-[26px] h-[26px] rounded-[7px] overflow-hidden flex-shrink-0" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.12)" }}>
                <img src="https://academiadeanestesia.com/wp-content/uploads/2026/04/vapora-app-ico-ios.png" alt="Vapora" className="w-full h-full object-cover" />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-[15px] font-semibold text-slate-900 tracking-tight">Vapora</span>
                <span className="text-[11px] font-light text-slate-400 tracking-wide">· LOCUDose</span>
              </div>
            </div>
            <div className="w-8" />
          </div>
        </header>

        <main className="flex-1 flex flex-col w-full pb-12">
          <div className="h-1.5 w-full bg-gradient-to-r from-[#65C4EB] via-[#BDABF5] to-[#F9CE6F]" />
          <div className="pt-8 pb-6 px-6 border-b border-slate-100 text-center flex flex-col items-center">
            <div className="w-16 h-16 mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
              <img src="https://academiadeanestesia.com/wp-content/uploads/2026/03/calculator.png" alt="LOCUDose" className="w-11 h-11 object-contain" />
            </div>
            <h2 className="text-4xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#65C4EB] to-[#BDABF5] mb-2 uppercase">LocuDose</h2>
            <p className="text-slate-400 font-bold text-xs tracking-[0.15em] uppercase">Calculadora de Anestésico Local</p>
          </div>

          <div className="px-4 sm:px-6 py-6 space-y-6 flex-grow">
            <div className="flex bg-slate-100 p-1.5 rounded-xl">
              <button onClick={() => setMode("bomba")} className={`flex-1 py-3 text-sm font-bold uppercase tracking-wider rounded-lg transition-all ${mode === "bomba" ? "bg-white text-[#F39169] shadow-sm" : "text-slate-400"}`}>Bomba Elastomérica</button>
              <button onClick={() => setMode("regional")} className={`flex-1 py-3 text-sm font-bold uppercase tracking-wider rounded-lg transition-all ${mode === "regional" ? "bg-white text-[#F39169] shadow-sm" : "text-slate-400"}`}>Anestesia Regional</button>
            </div>

            {mode === "bomba" && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Anestésico Local a utilizar</label>
                  <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl space-y-3">
                    {bombaOptions.map((opt) => (
                      <label key={opt.label} className="flex items-center text-sm text-slate-600 cursor-pointer">
                        <input type="radio" name="bomba_stock" value={opt.val} checked={stockConc === opt.val} onChange={() => setStockConc(opt.val)} className="w-5 h-5 mr-3 accent-[#F39169]" />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Concentración Final Deseada:</label>
                  <div className="relative flex items-center">
                    <span className="absolute left-4 text-[#BDABF5] font-bold">%</span>
                    <input type="text" inputMode="decimal" placeholder="Ej. 0.125" value={finalConc} onChange={(e) => setFinalConc(e.target.value.replace(",", "."))}
                      className="w-full py-4 pl-10 pr-4 text-slate-800 font-medium border border-slate-100 rounded-xl focus:border-[#65C4EB] focus:outline-none transition-all" style={{ fontSize: "16px" }} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Volumen Final Deseado:</label>
                  <div className="relative flex items-center">
                    <span className="absolute left-4 text-[#BDABF5] font-bold">ml</span>
                    <input type="text" inputMode="decimal" placeholder="Ej. 100" value={finalVol} onChange={(e) => setFinalVol(e.target.value.replace(",", "."))}
                      className="w-full py-4 pl-12 pr-4 text-slate-800 font-medium border border-slate-100 rounded-xl focus:border-[#65C4EB] focus:outline-none transition-all" style={{ fontSize: "16px" }} />
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
                    <input type="number" inputMode="numeric" placeholder="Ej. 70" value={weight} onChange={(e) => setWeight(e.target.value.replace(/[^0-9]/g, ""))}
                      className="w-full py-4 pl-14 pr-4 text-slate-800 font-medium border border-slate-100 rounded-xl focus:border-[#65C4EB] focus:outline-none transition-all" style={{ fontSize: "16px" }} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Anestésico Local a utilizar</label>
                  <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {regionalOptions.map((opt) => (
                      <label key={opt.label} className="flex items-center text-sm text-slate-600 cursor-pointer">
                        <input type="radio" name="regional_anes" checked={regionalAnes.label === opt.label} onChange={() => setRegionalAnes(opt)} className="w-5 h-5 mr-3 accent-[#F39169] flex-shrink-0" />
                        <span className="truncate">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white p-6 rounded-2xl border-2 border-slate-100 shadow-sm text-center">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{mode === "bomba" ? "Volumen de Anestésico Requerido" : "Volumen Máximo Permitido"}</h4>
              <div className="inline-flex items-baseline justify-center bg-slate-50 px-8 py-4 rounded-xl border border-slate-100">
                {errorMsg ? <span className="text-red-500 font-bold text-sm">{errorMsg}</span> : (
                  <><span className="font-black text-5xl text-[#F39169]">{mode === "bomba" ? (reqVol !== null ? reqVol.toFixed(1) : "0.0") : (maxVol !== null ? maxVol.toFixed(1) : "0.0")}</span><span className="text-[#65C4EB] font-bold text-xl ml-2">ml</span></>
                )}
              </div>
              {mode === "regional" && totalMg !== null && (
                <div className="mt-6 text-sm text-slate-500 font-medium">Dosis total equivalente: <span className="text-[#F39169] font-black text-lg ml-1">{totalMg.toFixed(0)} mg</span></div>
              )}
            </div>

            {mode === "bomba" && diluent !== null && !errorMsg && (
              <div className="bg-slate-50 p-5 rounded-xl border-2 border-[#F9CE6F] text-center">
                <span className="block text-sm text-slate-600 font-medium mb-1">Volumen de Diluyente a agregar:</span>
                <div className="font-bold text-3xl text-[#65C4EB]">{diluent.toFixed(1)} <span className="text-lg">ml</span></div>
              </div>
            )}
          </div>
          <PageFooter />
        </main>
      </div>
    </div>
  );
}

// ── Popup Upgrade Premium ──────────────────────────────────────────────────

function UpgradePopup({ tool, onClose }: { tool: "analgesiq" | "epimix"; onClose: () => void }) {
  const toolInfo = {
    analgesiq: {
      name: "ANALGESIQ",
      desc: "Calculadora avanzada para bombas elastoméricas con compatibilidad, dosis y alertas clínicas.",
      icon: "https://anestesialatina.com/wp-content/uploads/2026/03/infusion.png",
      gradient: "from-[#a78bfa] to-[#818cf8]",
    },
    epimix: {
      name: "EpiMix",
      desc: "Calculadora de mezclas para analgesia epidural con técnicas DPE, CSE y modos PCEA/PIEB.",
      icon: "https://academiadeanestesia.com/wp-content/uploads/2026/04/EpiMIx-logo.png",
      gradient: "from-[#F43F5E] to-[#fb7185]",
    },
  }[tool];

  return (
    <div className="fixed inset-0 z-[55] flex items-center justify-center px-4"
      style={{ background: "rgba(8,6,24,0.8)", backdropFilter: "blur(14px)" }}
      onClick={onClose}>
      <div className="w-full max-w-[390px] rounded-[28px] overflow-hidden"
        style={{ boxShadow: "0 32px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.12)" }}
        onClick={(e) => e.stopPropagation()}>

        {/* Header oscuro */}
        <div className="relative px-6 pt-7 pb-6 text-center"
          style={{ background: "linear-gradient(135deg,#1a1040,#0f0c29)" }}>
          <button onClick={onClose}
            className="absolute top-4 right-4 flex items-center justify-center rounded-full transition"
            style={{ width: 28, height: 28, background: "rgba(255,255,255,0.08)", border: "0.5px solid rgba(255,255,255,0.12)" }}>
            <XIcon style={{ width: 11, height: 11, stroke: "rgba(255,255,255,0.5)", strokeWidth: 2 }} />
          </button>
          <div className="mx-auto mb-4 flex items-center justify-center rounded-[18px] overflow-hidden"
            style={{ width: 64, height: 64, background: "rgba(255,255,255,0.1)", border: "0.5px solid rgba(255,255,255,0.2)" }}>
            <img src={toolInfo.icon} alt={toolInfo.name} className="w-10 h-10 object-contain" />
          </div>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ background: "rgba(192,132,252,0.2)", border: "0.5px solid rgba(192,132,252,0.4)", color: "#e9d5ff" }}>
              ✦ Premium
            </span>
          </div>
          <h2 style={{ fontSize: 22, fontWeight: 800, background: "linear-gradient(135deg,#e9d5ff,#c4b5fd,#93c5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "-0.4px", marginBottom: 8 }}>
            {toolInfo.name}
          </h2>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
            {toolInfo.desc}
          </p>
        </div>

        {/* Body */}
        <div className="bg-white px-6 py-5 space-y-4">

          {/* Beneficios */}
          <div className="space-y-2">
            {[
              { icon: <ZapIcon className="w-4 h-4" />, text: "Acceso a todas las herramientas Premium" },
              { icon: <ShieldIcon className="w-4 h-4" />, text: "Alertas clínicas y compatibilidad de fármacos" },
              { icon: <StarIcon className="w-4 h-4" />, text: "Actualizaciones basadas en evidencia reciente" },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-3 text-sm text-slate-600">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-violet-500" style={{ background: "#f5f3ff" }}>
                  {icon}
                </div>
                {text}
              </div>
            ))}
          </div>

          {/* Botón comprar */}
          <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer"
            className="block w-full rounded-[14px] text-white font-bold text-center transition-all"
            style={{ padding: "15px", fontSize: 16, background: "linear-gradient(135deg,#a78bfa,#818cf8)", boxShadow: "0 8px 24px rgba(129,140,248,0.4)" }}>
            Obtener acceso Premium →
          </a>

          {/* Separador */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-slate-100" />
            <span className="text-[11px] text-slate-400 font-medium">¿Ya compraste?</span>
            <div className="flex-1 h-px bg-slate-100" />
          </div>

          {/* Botones secundarios */}
          <div className="grid grid-cols-2 gap-2">
            <a href="/login?tab=first"
              className="block text-center py-3 rounded-[12px] text-[13px] font-semibold text-violet-600 transition-colors"
              style={{ background: "#f5f3ff", border: "1px solid #ede9fe" }}>
              Activar cuenta
            </a>
            <a href="/login"
              className="block text-center py-3 rounded-[12px] text-[13px] font-semibold text-slate-600 transition-colors"
              style={{ background: "#f8fafc", border: "1px solid #f1f5f9" }}>
              Iniciar sesión
            </a>
          </div>

          <p className="text-center text-[11px] text-slate-400">
            Acceso anual · Pago único · Activación inmediata
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Calculadora HiperSaline ───────────────────────────────────────────────

const hiperOptions = [
  { val: "20", label: "Sodio Cloruro 3.4 mEq/mL", desc: "Cloruro de Sodio 20%", pres: "Ampolla 10 mL" },
  { val: "17.7", label: "Sodio Cloruro 3 mEq/mL", desc: "Cloruro de Sodio 17.7%", pres: "Ampolla 10 mL" },
  { val: "11.7", label: "Sodio Cloruro 2 mEq/mL", desc: "Cloruro de Sodio 11.7%", pres: "Ampolla 10 mL" },
  { val: "10", label: "Sodio Cloruro 1.7 mEq/mL", desc: "Cloruro de Sodio 10%", pres: "Ampolla 10 mL" },
  { val: "3", label: "Sodio Cloruro 0.51 mEq/mL", desc: "Cloruro de Sodio 3%", pres: "Bolsa 250 mL" },
];

function CalcHiperSaline({ onBack }: { onBack: () => void }) {
  const [vf, setVf] = useState("");
  const [cf, setCf] = useState("");
  const [c1, setC1] = useState("20");
  const [c2, setC2] = useState("0.9");
  const [showFormula, setShowFormula] = useState(false);

  let errorMsg = "", v1: number | null = null, v2: number | null = null;
  const numVf = parseFloat(vf), numCf = parseFloat(cf), numC1 = parseFloat(c1), numC2 = parseFloat(c2);

  if (vf !== "" && cf !== "") {
    if (numVf <= 0) errorMsg = "El Volumen Final debe ser mayor a 0 mL.";
    else if (numCf <= numC2) errorMsg = "Error: La concentración objetivo debe ser mayor que la del diluyente.";
    else if (numCf >= numC1) errorMsg = "Error: La concentración objetivo debe ser menor que la de la solución hipertónica base.";
    else { v1 = (numVf * (numCf - numC2)) / (numC1 - numC2); v2 = numVf - v1; }
  }

  const selectedOpt = hiperOptions.find((o) => o.val === c1);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <div className="max-w-md mx-auto bg-white min-h-screen sm:border-x border-slate-100 flex flex-col">
        <header className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-100">
          <div className="flex items-center gap-2.5 px-3.5 py-2.5">
            <button onClick={onBack} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 hover:bg-slate-200 transition active:scale-95">
              <ChevronLeftIcon className="w-3.5 h-3.5 text-slate-500" />
            </button>
            <div className="flex-1 flex items-center justify-center gap-2">
              <div className="w-[26px] h-[26px] rounded-[7px] overflow-hidden flex-shrink-0" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.12)" }}>
                <img src="https://academiadeanestesia.com/wp-content/uploads/2026/04/vapora-app-ico-ios.png" alt="Vapora" className="w-full h-full object-cover" />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-[15px] font-semibold text-slate-900 tracking-tight">Vapora</span>
                <span className="text-[11px] font-light text-slate-400 tracking-wide">· HiperSaline</span>
              </div>
            </div>
            <div className="w-8" />
          </div>
        </header>
        <main className="flex-1 flex flex-col w-full pb-12">
          <div className="h-1.5 w-full bg-gradient-to-r from-[#059669] via-[#10B981] to-[#34D399]" />
          <div className="pt-8 pb-6 px-6 border-b border-slate-100 text-center flex flex-col items-center">
            <div className="w-16 h-16 mb-4 rounded-2xl overflow-hidden flex items-center justify-center" style={{ background: "linear-gradient(135deg,#d1fae5,#a7f3d0)" }}>
              <img src="https://academiadeanestesia.com/wp-content/uploads/2026/04/HiperSaline-Logo.png" alt="HiperSaline" className="w-11 h-11 object-contain" />
            </div>
            <h2 className="text-4xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#34D399] mb-2 uppercase">HIPERSALINE</h2>
            <p className="text-slate-400 font-bold text-xs tracking-[0.15em] uppercase">Solución Salina Hipertónica</p>
          </div>
          <div className="px-4 sm:px-6 py-6 space-y-6 flex-grow">
            <style>{`input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}`}</style>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl border-2 border-emerald-200 shadow-md flex flex-col items-center justify-center focus-within:border-[#10B981] transition-all overflow-hidden">
                <div className="w-full bg-emerald-50/60 px-4 py-2.5 border-b border-emerald-100 text-center">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Conc. Objetivo</label>
                </div>
                <div className="flex items-baseline justify-center gap-1 px-4 py-6">
                  <input type="text" inputMode="decimal" placeholder="0" value={cf} onChange={(e) => setCf(e.target.value.replace(",", "."))}
                    className="w-full text-center font-black text-[#10B981] bg-transparent outline-none placeholder:text-emerald-100"
                    style={{ fontSize: "44px", lineHeight: 1, MozAppearance: "textfield" }} />
                  <span className="text-lg font-bold text-slate-400 self-end pb-1">%</span>
                </div>
              </div>
              <div className="bg-white rounded-2xl border-2 border-emerald-200 shadow-md flex flex-col items-center justify-center focus-within:border-[#10B981] transition-all overflow-hidden">
                <div className="w-full bg-emerald-50/60 px-4 py-2.5 border-b border-emerald-100 text-center">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Volumen Final</label>
                </div>
                <div className="flex items-baseline justify-center gap-1 px-4 py-6">
                  <input type="number" inputMode="decimal" placeholder="0" value={vf} onChange={(e) => setVf(e.target.value.replace(",", "."))}
                    className="w-full text-center font-black text-[#10B981] bg-transparent outline-none placeholder:text-emerald-100"
                    style={{ fontSize: "44px", lineHeight: 1, MozAppearance: "textfield" }} />
                  <span className="text-lg font-bold text-slate-400 self-end pb-1">mL</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-emerald-200 shadow-sm">
              <label className="block text-sm font-semibold text-slate-700 mb-3">Solución Hipertónica Base</label>
              <select value={c1} onChange={(e) => setC1(e.target.value)} className="w-full py-3 px-4 bg-slate-50 text-slate-800 font-bold rounded-xl border border-slate-100 focus:border-[#10B981] focus:outline-none transition-all" style={{ fontSize: "16px" }}>
                {hiperOptions.map((opt) => <option key={opt.val} value={opt.val}>{opt.label}</option>)}
              </select>
              <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Presentación:</span>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[11px] font-bold text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded-md border border-[#10B981]/20">{selectedOpt?.desc}</span>
                  <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">{selectedOpt?.pres}</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-emerald-200 shadow-sm">
              <label className="block text-sm font-semibold text-slate-700 mb-3">Diluyente</label>
              <select value={c2} onChange={(e) => setC2(e.target.value)} className="w-full py-3 px-4 bg-slate-50 text-slate-800 font-bold rounded-xl border border-slate-100 focus:border-[#10B981] focus:outline-none transition-all" style={{ fontSize: "16px" }}>
                <option value="0.9">Cloruro de Sodio (0.9%)</option>
                <option value="0">Agua Estéril (0%)</option>
              </select>
            </div>
            <div className="bg-white p-6 rounded-2xl border-2 border-emerald-200 shadow-md">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 text-center">Protocolo de Preparación</h4>
              {errorMsg ? (
                <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200 text-center flex flex-col items-center">
                  <XCircleIcon className="w-10 h-10 text-red-400 mb-3" />
                  <span className="text-red-600 font-bold text-sm leading-relaxed">{errorMsg}</span>
                </div>
              ) : v1 !== null && v2 !== null ? (
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-5 bg-emerald-50/50 border border-emerald-100 rounded-xl">
                    <div className="bg-[#10B981] text-white font-black w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1">1</div>
                    <div className="flex-1">
                      <p className="text-slate-600 text-sm leading-relaxed">Extraer <strong className="text-[#10B981] text-lg">{v1.toFixed(1)} mL</strong> de Solución Hipertónica.</p>
                      <p className="text-xs text-slate-500 mt-1.5 font-bold uppercase tracking-wide">{selectedOpt?.label}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="text-[10px] font-bold text-[#10B981] bg-[#10B981]/10 px-2 py-1 rounded-md border border-[#10B981]/20">{selectedOpt?.desc}</span>
                        <span className="text-[10px] font-bold text-slate-600 bg-white px-2 py-1 rounded-md border border-slate-200 shadow-sm">{selectedOpt?.pres}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-5 bg-emerald-50/50 border border-emerald-100 rounded-xl">
                    <div className="bg-[#10B981] text-white font-black w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1">2</div>
                    <div>
                      <p className="text-slate-600 text-sm leading-relaxed">Mezclar con <strong className="text-[#10B981] text-lg">{v2.toFixed(1)} mL</strong> de Diluyente.</p>
                      <p className="text-xs text-slate-400 mt-1 font-semibold uppercase tracking-wide">{c2 === "0" ? "Agua Estéril (0%)" : "Cloruro de Sodio (0.9%)"}</p>
                    </div>
                  </div>
                  <div className="pt-4 mt-4 border-t-2 border-dashed border-slate-100">
                    <div className="rounded-3xl p-7 text-white flex flex-col items-center relative overflow-hidden" style={{ background: "linear-gradient(160deg,#052e16,#064e3b,#065f46)" }}>
                      <div className="absolute top-[-40px] right-[-40px] w-[160px] h-[160px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(16,185,129,0.25),transparent 70%)" }} />
                      <p className="text-[10px] text-[#6EE7B7] font-black uppercase tracking-[0.2em] mb-3 relative z-10">Mezcla Lista</p>
                      <div className="flex items-baseline gap-2 mb-3 relative z-10">
                        <span className="text-7xl font-black text-[#10B981]">{numVf}</span>
                        <span className="text-4xl font-medium text-emerald-300">mL</span>
                      </div>
                      <p className="text-xs text-emerald-300/70 font-bold uppercase tracking-widest text-center relative z-10">Solución Hipertónica al {numCf}%</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="py-10 text-center opacity-50 flex flex-col items-center">
                  <BeakerIcon className="w-12 h-12 mb-3 text-slate-400" />
                  <p className="text-sm font-semibold text-slate-500">Ingrese los valores para calcular</p>
                </div>
              )}
            </div>
            <div className="rounded-xl border border-slate-100 overflow-hidden">
              <button onClick={() => setShowFormula(!showFormula)} className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-2">
                  <InfoIcon className="w-5 h-5 text-[#10B981]" />
                  <span className="text-sm font-bold text-slate-700 uppercase tracking-wide">Fórmula y Explicación</span>
                </div>
                <ChevronDownIcon className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${showFormula ? "rotate-180" : ""}`} />
              </button>
              {showFormula && (
                <div className="p-5 pt-2 text-sm text-slate-600 border-t border-slate-100">
                  <p className="mb-3 leading-relaxed">Utiliza el principio de conservación de masa con la ecuación de <strong>Balance de Masa</strong>:</p>
                  <div className="bg-white p-4 rounded-xl border border-slate-100 text-center font-mono font-medium text-[#10B981] mb-4 shadow-sm">
                    C<sub>Base</sub> × V<sub>Base</sub> + C<sub>Dil</sub> × V<sub>Dil</sub> = C<sub>Obj</sub> × V<sub>Final</sub>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-500">Calcula el volumen exacto de solución hipertónica a extraer y resta al volumen total para hallar el diluyente necesario.</p>
                </div>
              )}
            </div>
          </div>
          <PageFooter />
        </main>
      </div>
    </div>
  );
}

// ── Home público principal ─────────────────────────────────────────────────

type Vista = "home" | "mac" | "locu" | "hipersaline";
type PremiumTool = "analgesiq" | "epimix" | null;

export default function PublicClient() {
  const [vista, setVista] = useState<Vista>("home");
  const [upgradeFor, setUpgradeFor] = useState<PremiumTool>(null);

  function tryPremium(tool: PremiumTool) {
    setUpgradeFor(tool);
  }

  if (vista === "mac") return <CalcMACFlow onBack={() => setVista("home")} />;
  if (vista === "locu") return <CalcLOCUDose onBack={() => setVista("home")} />;
  if (vista === "hipersaline") return <CalcHiperSaline onBack={() => setVista("home")} />;


  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="max-w-md mx-auto bg-white min-h-screen sm:border-x border-slate-100">

          {/* Header */}
          <header className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-100">
            <div className="flex items-center justify-between gap-3 px-5 py-3.5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[11px] overflow-hidden flex-shrink-0" style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.12)" }}>
                  <img src="https://academiadeanestesia.com/wp-content/uploads/2026/04/vapora-app-ico-ios.png" alt="Vapora" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-[17px] font-semibold text-slate-900 leading-tight tracking-tight">
                    Vapora<span className="font-light text-slate-400">.app</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-light tracking-wide mt-0.5">
                    Calculadoras para tu día a día en Anestesia
                  </div>
                </div>
              </div>
              <a href="/login"
                className="px-4 py-2 rounded-full text-[13px] font-semibold text-white transition-all"
                style={{ background: "linear-gradient(135deg,#a78bfa,#818cf8)", boxShadow: "0 4px 12px rgba(129,140,248,0.3)" }}>
                Entrar
              </a>
            </div>
          </header>

          <div className="px-4 pt-6 pb-4 space-y-6">

            {/* Banner Premium */}
            <div className="rounded-[20px] p-[1.5px]"
              style={{ background: "linear-gradient(135deg,#c084fc,#818cf8,#38bdf8)", boxShadow: "0 8px 32px rgba(129,140,248,0.2)" }}>
              <div className="rounded-[19px] px-5 py-4 flex items-center gap-4"
                style={{ background: "linear-gradient(135deg,#1a1040,#0f0c29)" }}>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: "#c4b5fd" }}>
                    ✦ Vapora Premium
                  </p>
                  <p className="text-white text-[14px] font-semibold leading-snug">
                    ANALGESIQ · EpiMix · HiperSaline
                  </p>
                  <p className="text-[12px] mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                    Herramientas clínicas avanzadas
                  </p>
                </div>
                <a href={HOTMART_URL} target="_blank" rel="noopener noreferrer"
                  className="flex-shrink-0 px-4 py-2.5 rounded-[12px] text-[13px] font-bold text-white transition-all"
                  style={{ background: "linear-gradient(135deg,#a78bfa,#818cf8)", boxShadow: "0 4px 16px rgba(129,140,248,0.4)", whiteSpace: "nowrap" }}>
                  Ver planes →
                </a>
              </div>
            </div>

            {/* Herramientas Premium */}
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-slate-400 px-1 mb-4">
                Herramientas Premium
              </p>

              {/* ANALGESIQ */}
              <div className="rounded-[28px] p-[1.5px] mb-3"
                style={{ background: "linear-gradient(135deg,#c084fc,#818cf8,#38bdf8,#a78bfa)", boxShadow: "0 12px 40px rgba(129,140,248,0.28)" }}>
                <div className="rounded-[27px] p-6 relative overflow-hidden"
                  style={{ background: "linear-gradient(160deg,#0f0c29,#1a1040,#0d1b3e)" }}>
                  <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle,rgba(167,139,250,0.22),transparent 70%)" }} />
                  <div className="relative z-10 flex items-center justify-between gap-3 mb-4">
                    <div className="w-16 h-16 rounded-[18px] flex items-center justify-center overflow-hidden flex-shrink-0"
                      style={{ background: "rgba(255,255,255,0.1)", border: "0.5px solid rgba(255,255,255,0.2)" }}>
                      <img src="https://anestesialatina.com/wp-content/uploads/2026/03/infusion.png" alt="ANALGESIQ" className="w-11 h-11 object-contain" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full"
                      style={{ background: "linear-gradient(135deg,rgba(192,132,252,0.3),rgba(129,140,248,0.3))", border: "0.5px solid rgba(192,132,252,0.5)", color: "#e9d5ff" }}>
                      ✦ Premium
                    </span>
                  </div>
                  <div className="relative z-10 text-[30px] font-black tracking-tight mb-2"
                    style={{ background: "linear-gradient(135deg,#e9d5ff,#c4b5fd,#93c5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    ANALGESIQ
                  </div>
                  <p className="relative z-10 text-[13px] leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
                    Calculadora avanzada para bombas elastoméricas con compatibilidad, dosis y alertas clínicas.
                  </p>
                  <button onClick={() => tryPremium("analgesiq")}
                    className="relative z-10 w-full rounded-[14px] py-[14px] text-[14px] font-bold text-white transition-all"
                    style={{ background: "rgba(167,139,250,0.25)", border: "0.5px solid rgba(167,139,250,0.4)" }}>
                    🔒 Requiere membresía Premium
                  </button>
                </div>
              </div>

              {/* EpiMix */}
              <button onClick={() => tryPremium("epimix")}
                className="w-full rounded-[20px] overflow-hidden text-left active:scale-[0.99] transition-all mt-3"
                style={{ background: "linear-gradient(135deg,#f43f5e,#fb7185,#fda4af)", boxShadow: "0 8px 28px rgba(244,63,94,0.22)", padding: "1.5px" }}>
                <div className="rounded-[19px] p-4 flex items-center gap-4 relative overflow-hidden"
                  style={{ background: "linear-gradient(160deg,#1a0510,#2d0a1e)" }}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden flex-shrink-0"
                    style={{ background: "rgba(255,255,255,0.18)", border: "0.5px solid rgba(244,63,94,0.3)" }}>
                    <img src="https://academiadeanestesia.com/wp-content/uploads/2026/04/EpiMIx-logo.png" alt="EpiMix" className="w-10 h-10 object-contain" />
                  </div>
                  <div className="flex-1 min-w-0 relative z-10">
                    <div className="text-[16px] font-black mb-0.5"
                      style={{ background: "linear-gradient(135deg,#fecdd3,#fda4af,#fb7185)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                      EpiMix <span style={{ WebkitTextFillColor: "rgba(253,164,175,0.6)", fontSize: 12 }}>✦</span>
                    </div>
                    <div className="text-[13px]" style={{ color: "rgba(255,255,255,0.45)" }}>Mezclas para Analgesia Epidural</div>
                  </div>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
                    style={{ background: "rgba(244,63,94,0.2)", border: "0.5px solid rgba(244,63,94,0.3)" }}>
                    <ChevronRightIcon className="w-3.5 h-3.5" style={{ color: "#fb7185" }} />
                  </div>
                </div>
              </button>


            </div>

            {/* Herramientas Gratuitas */}
            <div>
              <div className="flex items-center gap-2 px-1 mb-4">
                <p className="text-[11px] font-black uppercase tracking-[0.16em] text-slate-400">
                  Herramientas gratuitas
                </p>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                  Sin registro
                </span>
              </div>
              <div className="space-y-3">

                {/* MACFlow */}
                <button onClick={() => setVista("mac")}
                  className="w-full rounded-[20px] p-[1px] text-left active:scale-[0.99] transition-all"
                  style={{ background: "linear-gradient(135deg,#bae6fd,#e0f2fe,#f0f9ff)", boxShadow: "0 4px 16px rgba(14,165,233,0.12)" }}>
                  <div className="rounded-[19px] bg-white p-4 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden flex-shrink-0 relative"
                      style={{ background: "linear-gradient(135deg,#e0f2fe,#bae6fd)" }}>
                      <img src="https://academiadeanestesia.com/wp-content/uploads/2026/04/anesthesia.png" alt="MACFlow" className="w-10 h-10 object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[16px] font-black text-slate-900">MACFlow</span>
                        <span className="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-md bg-sky-50 text-sky-500 border border-sky-100">Gratis</span>
                      </div>
                      <div className="text-[12px] text-slate-400 leading-snug">Consumo de anestésicos inhalatorios</div>
                      <div className="flex items-center gap-1 mt-1.5">
                        <span className="text-[10px] text-slate-300 font-medium">Sevo · Desf · Iso</span>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "linear-gradient(135deg,#e0f2fe,#bae6fd)" }}>
                      <ChevronRightIcon className="w-3.5 h-3.5 text-sky-400" />
                    </div>
                  </div>
                </button>

                {/* LOCUDose */}
                <button onClick={() => setVista("locu")}
                  className="w-full rounded-[20px] p-[1px] text-left active:scale-[0.99] transition-all"
                  style={{ background: "linear-gradient(135deg,#bbf7d0,#dcfce7,#f0fdf4)", boxShadow: "0 4px 16px rgba(34,197,94,0.12)" }}>
                  <div className="rounded-[19px] bg-white p-4 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden flex-shrink-0"
                      style={{ background: "linear-gradient(135deg,#f0fdf4,#dcfce7)" }}>
                      <img src="https://academiadeanestesia.com/wp-content/uploads/2026/03/calculator.png" alt="LOCUDose" className="w-10 h-10 object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[16px] font-black text-slate-900">LOCUDose</span>
                        <span className="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-500 border border-emerald-100">Gratis</span>
                      </div>
                      <div className="text-[12px] text-slate-400 leading-snug">Cálculo de anestésicos locales</div>
                      <div className="flex items-center gap-1 mt-1.5">
                        <span className="text-[10px] text-slate-300 font-medium">Dilución · Dosis regional</span>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "linear-gradient(135deg,#f0fdf4,#dcfce7)" }}>
                      <ChevronRightIcon className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                  </div>
                </button>

                {/* HiperSaline */}
                <button onClick={() => setVista("hipersaline")}
                  className="w-full rounded-[20px] p-[1px] text-left active:scale-[0.99] transition-all"
                  style={{ background: "linear-gradient(135deg,#a7f3d0,#d1fae5,#ecfdf5)", boxShadow: "0 4px 16px rgba(16,185,129,0.12)" }}>
                  <div className="rounded-[19px] bg-white p-4 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden flex-shrink-0"
                      style={{ background: "linear-gradient(135deg,#d1fae5,#a7f3d0)" }}>
                      <img src="https://academiadeanestesia.com/wp-content/uploads/2026/04/HiperSaline-Logo.png" alt="HiperSaline" className="w-10 h-10 object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[16px] font-black text-slate-900">HiperSaline</span>
                        <span className="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-md bg-teal-50 text-teal-500 border border-teal-100">Gratis</span>
                      </div>
                      <div className="text-[12px] text-slate-400 leading-snug">Solución Salina Hipertónica</div>
                      <div className="flex items-center gap-1 mt-1.5">
                        <span className="text-[10px] text-slate-300 font-medium">Protocolo de preparación</span>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "linear-gradient(135deg,#d1fae5,#a7f3d0)" }}>
                      <ChevronRightIcon className="w-3.5 h-3.5 text-teal-400" />
                    </div>
                  </div>
                </button>

              </div>
            </div>
          </div>

          <PageFooter />
        </div>
      </div>

      {/* Popup de upgrade */}
      {upgradeFor && (
        <UpgradePopup tool={upgradeFor} onClose={() => setUpgradeFor(null)} />
      )}
    </>
  );
}
