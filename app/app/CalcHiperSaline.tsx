"use client";

import { useState } from "react";

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

function ChevronLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21a8 8 0 0 0-16 0" /><circle cx="12" cy="8" r="4" />
    </svg>
  );
}

function AppHeader({ title, onBack, onProfile }: { title: string; onBack: () => void; onProfile: () => void }) {
  return (
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
            <span className="text-[11px] font-light text-slate-400 tracking-wide">· {title}</span>
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

const hiperOptions = [
  { val: "20", label: "Sodio Cloruro 3.4 mEq/mL", desc: "Cloruro de Sodio 20%", pres: "Ampolla 10 mL" },
  { val: "17.7", label: "Sodio Cloruro 3 mEq/mL", desc: "Cloruro de Sodio 17.7%", pres: "Ampolla 10 mL" },
  { val: "11.7", label: "Sodio Cloruro 2 mEq/mL", desc: "Cloruro de Sodio 11.7%", pres: "Ampolla 10 mL" },
  { val: "10", label: "Sodio Cloruro 1.7 mEq/mL", desc: "Cloruro de Sodio 10%", pres: "Ampolla 10 mL" },
  { val: "3", label: "Sodio Cloruro 0.51 mEq/mL", desc: "Cloruro de Sodio 3%", pres: "Bolsa 250 mL" },
];

type Props = { onBack: () => void; onProfile: () => void; };

export default function CalcHiperSaline({ onBack, onProfile }: Props) {
  const [vf, setVf] = useState("");
  const [cf, setCf] = useState("");
  const [c1, setC1] = useState("20");
  const [c2, setC2] = useState("0.9");
  const [showFormula, setShowFormula] = useState(false);

  let errorMsg = "";
  let v1: number | null = null;
  let v2: number | null = null;

  const numVf = parseFloat(vf);
  const numCf = parseFloat(cf);
  const numC1 = parseFloat(c1);
  const numC2 = parseFloat(c2);

  if (vf !== "" && cf !== "") {
    if (numVf <= 0) errorMsg = "El Volumen Final debe ser mayor a 0 mL.";
    else if (numCf <= numC2) errorMsg = "Error: La concentración objetivo debe ser mayor que la del diluyente.";
    else if (numCf >= numC1) errorMsg = "Error: La concentración objetivo debe ser menor que la de la solución hipertónica base.";
    else {
      v1 = (numVf * (numCf - numC2)) / (numC1 - numC2);
      v2 = numVf - v1;
    }
  }

  const selectedOpt = hiperOptions.find((o) => o.val === c1);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <div className="max-w-md mx-auto bg-white min-h-screen sm:border-x border-slate-100 flex flex-col">
        <AppHeader title="HiperSaline" onBack={onBack} onProfile={onProfile} />

        <main className="flex-1 flex flex-col w-full pb-12">
          <div className="h-1.5 w-full bg-gradient-to-r from-[#059669] via-[#10B981] to-[#34D399]" />

          {/* Hero */}
          <div className="pt-8 pb-6 px-6 border-b border-slate-100 text-center flex flex-col items-center">
            <div className="w-16 h-16 mb-4 rounded-2xl overflow-hidden flex items-center justify-center"
              style={{ background: "linear-gradient(135deg,#d1fae5,#a7f3d0)" }}>
              <img src="https://academiadeanestesia.com/wp-content/uploads/2026/04/HiperSaline-Logo.png"
                alt="HiperSaline" className="w-11 h-11 object-contain" />
            </div>
            <h2 className="text-4xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#34D399] mb-2 uppercase">
              HIPERSALINE
            </h2>
            <p className="text-slate-400 font-bold text-xs tracking-[0.15em] uppercase">
              Solución Salina Hipertónica
            </p>
          </div>

          <div className="px-4 sm:px-6 py-6 space-y-6 flex-grow">

            {/* Inputs principales */}
            <style>{`input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}`}</style>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl border-2 border-emerald-200 shadow-md flex flex-col items-center justify-center focus-within:border-[#10B981] transition-all overflow-hidden">
                <div className="w-full bg-emerald-50/60 px-4 py-2.5 border-b border-emerald-100 text-center">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Conc. Objetivo</label>
                </div>
                <div className="flex items-baseline justify-center gap-1 px-4 py-6">
                  <input type="number" inputMode="decimal" step="0.1" min="0" placeholder="0" value={cf}
                    onChange={(e) => setCf(e.target.value)}
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
                  <input type="number" inputMode="decimal" step="1" min="0" placeholder="0" value={vf}
                    onChange={(e) => setVf(e.target.value)}
                    className="w-full text-center font-black text-[#10B981] bg-transparent outline-none placeholder:text-emerald-100"
                    style={{ fontSize: "44px", lineHeight: 1, MozAppearance: "textfield" }} />
                  <span className="text-lg font-bold text-slate-400 self-end pb-1">mL</span>
                </div>
              </div>
            </div>

            {/* Solución base */}
            <div className="bg-white p-4 rounded-2xl border border-emerald-200 shadow-sm">
              <label className="block text-sm font-semibold text-slate-700 mb-3">Solución Hipertónica Base</label>
              <select value={c1} onChange={(e) => setC1(e.target.value)}
                className="w-full py-3 px-4 bg-slate-50 text-slate-800 font-bold rounded-xl border border-slate-100 focus:border-[#10B981] focus:outline-none transition-all"
                style={{ fontSize: "16px" }}>
                {hiperOptions.map((opt) => (
                  <option key={opt.val} value={opt.val}>{opt.label}</option>
                ))}
              </select>
              <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Presentación:</span>
                <div className="flex flex-wrap gap-2">
                  <span className="text-[11px] font-bold text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded-md border border-[#10B981]/20">
                    {selectedOpt?.desc}
                  </span>
                  <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                    {selectedOpt?.pres}
                  </span>
                </div>
              </div>
            </div>

            {/* Diluyente */}
            <div className="bg-white p-4 rounded-2xl border border-emerald-200 shadow-sm">
              <label className="block text-sm font-semibold text-slate-700 mb-3">Diluyente</label>
              <select value={c2} onChange={(e) => setC2(e.target.value)}
                className="w-full py-3 px-4 bg-slate-50 text-slate-800 font-bold rounded-xl border border-slate-100 focus:border-[#10B981] focus:outline-none transition-all"
                style={{ fontSize: "16px" }}>
                <option value="0.9">Cloruro de Sodio (0.9%)</option>
                <option value="0">Agua Estéril (0%)</option>
              </select>
            </div>

            {/* Resultado */}
            <div className="bg-white p-6 rounded-2xl border-2 border-emerald-200 shadow-md">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 text-center">
                Protocolo de Preparación
              </h4>

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
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Extraer <strong className="text-[#10B981] text-lg">{v1.toFixed(1)} mL</strong> de Solución Hipertónica.
                      </p>
                      <p className="text-xs text-slate-500 mt-1.5 font-bold uppercase tracking-wide">
                        {selectedOpt?.label}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="text-[10px] font-bold text-[#10B981] bg-[#10B981]/10 px-2 py-1 rounded-md border border-[#10B981]/20">{selectedOpt?.desc}</span>
                        <span className="text-[10px] font-bold text-slate-600 bg-white px-2 py-1 rounded-md border border-slate-200 shadow-sm">{selectedOpt?.pres}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-emerald-50/50 border border-emerald-100 rounded-xl">
                    <div className="bg-[#10B981] text-white font-black w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1">2</div>
                    <div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Mezclar con <strong className="text-[#10B981] text-lg">{v2.toFixed(1)} mL</strong> de Diluyente.
                      </p>
                      <p className="text-xs text-slate-400 mt-1 font-semibold uppercase tracking-wide">
                        {c2 === "0" ? "Agua Estéril (0%)" : "Cloruro de Sodio (0.9%)"}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t-2 border-dashed border-slate-100">
                    <div className="rounded-3xl p-7 text-white flex flex-col items-center relative overflow-hidden"
                      style={{ background: "linear-gradient(160deg,#052e16,#064e3b,#065f46)" }}>
                      <div className="absolute top-[-40px] right-[-40px] w-[160px] h-[160px] rounded-full pointer-events-none"
                        style={{ background: "radial-gradient(circle,rgba(16,185,129,0.25),transparent 70%)" }} />
                      <p className="text-[10px] text-[#6EE7B7] font-black uppercase tracking-[0.2em] mb-3 relative z-10">Mezcla Lista</p>
                      <div className="flex items-baseline gap-2 mb-3 relative z-10">
                        <span className="text-7xl font-black text-[#10B981]">{numVf}</span>
                        <span className="text-4xl font-medium text-emerald-300">mL</span>
                      </div>
                      <p className="text-xs text-emerald-300/70 font-bold uppercase tracking-widest text-center relative z-10">
                        Solución Hipertónica al {numCf}%
                      </p>
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

            {/* Fórmula colapsable */}
            <div className="rounded-xl border border-slate-100 overflow-hidden">
              <button onClick={() => setShowFormula(!showFormula)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-2">
                  <InfoIcon className="w-5 h-5 text-[#10B981]" />
                  <span className="text-sm font-bold text-slate-700 uppercase tracking-wide">Fórmula y Explicación</span>
                </div>
                <ChevronDownIcon className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${showFormula ? "rotate-180" : ""}`} />
              </button>
              {showFormula && (
                <div className="p-5 pt-2 text-sm text-slate-600 border-t border-slate-100">
                  <p className="mb-3 leading-relaxed">
                    Utiliza el principio de conservación de masa con la ecuación de <strong>Balance de Masa</strong>:
                  </p>
                  <div className="bg-white p-4 rounded-xl border border-slate-100 text-center font-mono font-medium text-[#10B981] mb-4 shadow-sm">
                    C<sub>Base</sub> × V<sub>Base</sub> + C<sub>Dil</sub> × V<sub>Dil</sub> = C<sub>Obj</sub> × V<sub>Final</sub>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-500">
                    Calcula el volumen exacto de solución hipertónica a extraer y resta al volumen total para hallar el diluyente necesario.
                  </p>
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
