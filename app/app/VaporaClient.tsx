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

function ArrowLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function MACFlowIcon({ className }: { className?: string }) {
  return (
    <img
      src="https://academiadeanestesia.com/wp-content/uploads/2026/04/anesthesia.png"
      alt="MACFlow Logo"
      className={className}
    />
  );
}

function LOCUDoseIcon({ className }: { className?: string }) {
  return (
    <img
      src="https://academiadeanestesia.com/wp-content/uploads/2026/03/calculator.png"
      alt="LOCUDose Logo"
      className={className}
    />
  );
}

function AppHeader({ onBack }: { onBack: () => void }) {
  return (
    <header className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="h-20 flex items-center justify-center relative px-4">
        <button
          onClick={onBack}
          className="absolute left-4 p-2 rounded-full hover:bg-[#F3EDE9] text-slate-600 transition-colors"
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <h1 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#65C4EB] via-[#BDABF5] to-[#F39169] bg-clip-text text-transparent tracking-wide">
          VAPORA.app
        </h1>
      </div>
    </header>
  );
}

function CalcMACFlow({ onBack }: { onBack: () => void }) {
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
    btnSevo: isSevo
      ? "bg-[#F9CE6F] text-slate-900"
      : "bg-[#F0EAE6] text-slate-500 hover:bg-[#F3EDE9]",
    btnDesf: !isSevo
      ? "bg-[#65C4EB] text-slate-900"
      : "bg-[#F0EAE6] text-slate-500 hover:bg-[#F3EDE9]",
    textGradient: isSevo
      ? "from-[#F9CE6F] to-[#F39169]"
      : "from-[#65C4EB] to-[#BDABF5]",
  };

  const numFgf = parseFloat(fgf) || 0;
  const numConc = parseFloat(conc) || 0;
  const numDur = parseFloat(dur) || 0;

  const rate = 3 * numFgf * numConc;
  const total = rate * numDur;

  return (
    <div className="min-h-screen bg-white sm:bg-[#F0EAE6] font-sans text-slate-800">
      <div className="max-w-md mx-auto bg-white min-h-screen sm:border-x border-slate-200 flex flex-col">
        <AppHeader onBack={onBack} />

        <main className="flex-1 bg-white flex flex-col w-full pb-12">
          <div className="h-2 w-full bg-gradient-to-r from-[#65C4EB] via-[#BDABF5] to-[#F39169] flex-shrink-0" />

          <div className="pt-8 pb-4 px-5 text-center flex flex-col items-center bg-white flex-shrink-0 border-b border-[#F0EAE6]">
            <MACFlowIcon className="w-16 h-16 sm:w-20 sm:h-20 mb-4 object-contain" />
            <h2 className={`text-4xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${theme.textGradient} mb-1 transition-all duration-300`}>
              MACFLOW
            </h2>
            <p className="text-slate-500 font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-2">
              Consumo Anestésicos Inhalatorios
            </p>
          </div>

          <div className="px-4 sm:px-6 py-6 space-y-6 flex-grow bg-white">
            <div className="flex rounded-lg overflow-hidden border border-[#F3EDE9] shadow-sm">
              <button
                onClick={() => {
                  setAnesthetic("Sevoflurano");
                  setConc("2.0");
                }}
                className={`flex-1 py-3 text-sm sm:text-base font-semibold transition-colors ${theme.btnSevo}`}
              >
                Sevoflurano
              </button>
              <button
                onClick={() => {
                  setAnesthetic("Desflurano");
                  setConc("6.0");
                }}
                className={`flex-1 py-3 text-sm sm:text-base font-semibold transition-colors ${theme.btnDesf}`}
              >
                Desflurano
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="flex items-center text-base font-medium text-slate-700 mb-2">
                  <WindIcon className="w-5 h-5 mr-1.5 text-slate-500" />
                  Flujo de Gas Fresco (L/min)
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="0.1"
                    max="10"
                    step="0.1"
                    value={fgf}
                    onChange={(e) => setFgf(e.target.value)}
                    className="w-full h-2 bg-[#F3EDE9] rounded-lg appearance-none cursor-pointer"
                    style={{ accentColor: theme.accent }}
                  />
                  <div className="w-20">
                    <input
                      type="number"
                      step="0.1"
                      min="0"
                      value={fgf}
                      onChange={(e) => setFgf(e.target.value)}
                      className={`w-full text-center border-b-2 ${theme.border} focus:outline-none font-bold text-xl p-1 text-slate-800 transition-colors`}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="flex items-center text-base font-medium text-slate-700 mb-2">
                  <ActivityIcon className="w-5 h-5 mr-1.5 text-slate-500" />
                  Concentración (Vol %)
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="0.1"
                    max="15"
                    step="0.1"
                    value={conc}
                    onChange={(e) => setConc(e.target.value)}
                    className="w-full h-2 bg-[#F3EDE9] rounded-lg appearance-none cursor-pointer"
                    style={{ accentColor: theme.accent }}
                  />
                  <div className="w-20">
                    <input
                      type="number"
                      step="0.1"
                      min="0"
                      value={conc}
                      onChange={(e) => setConc(e.target.value)}
                      className={`w-full text-center border-b-2 ${theme.border} focus:outline-none font-bold text-xl p-1 text-slate-800 transition-colors`}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="flex items-center text-base font-medium text-slate-700 mb-2">
                  <ClockIcon className="w-5 h-5 mr-1.5 text-slate-500" />
                  Tiempo (Horas)
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="0.1"
                    max="12"
                    step="0.1"
                    value={dur}
                    onChange={(e) => setDur(e.target.value)}
                    className="w-full h-2 bg-[#F3EDE9] rounded-lg appearance-none cursor-pointer"
                    style={{ accentColor: theme.accent }}
                  />
                  <div className="w-20">
                    <input
                      type="number"
                      step="0.1"
                      min="0"
                      value={dur}
                      onChange={(e) => setDur(e.target.value)}
                      className={`w-full text-center border-b-2 ${theme.border} focus:outline-none font-bold text-xl p-1 text-slate-800 transition-colors`}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={`${theme.bg} rounded-xl p-6 mt-8 shadow-sm transition-colors duration-300 text-center`}>
              <div className="flex flex-col items-center justify-center space-y-4">
                <div>
                  <p className="text-sm uppercase tracking-wider font-bold text-slate-900/70">Tasa por Hora</p>
                  <p className="text-4xl font-black text-slate-900">
                    {rate.toFixed(1)} <span className="text-xl font-medium opacity-80">ml/h</span>
                  </p>
                </div>

                <div className="w-full h-px bg-white/40" />

                <div>
                  <p className="text-sm uppercase tracking-wider font-bold text-slate-900/70">Consumo Total</p>
                  <p className="text-5xl font-black text-slate-900">
                    {total.toFixed(1)} <span className="text-2xl font-medium opacity-80">ml</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F3EDE9] border-l-4 border-[#F39169] rounded-r-lg p-5 flex items-start shadow-sm mt-6">
              <AlertCircleIcon className="w-6 h-6 text-[#F39169] mr-3 flex-shrink-0 mt-0.5" />
              <p className="text-sm sm:text-base text-slate-700">
                <strong>Referencia:</strong> Para {anesthetic} suele sugerirse cobro estándar de{" "}
                <span className="font-semibold bg-white px-2 py-0.5 rounded shadow-sm">{theme.billing}</span>.
                {" "} (Fórmula: 3 × {numFgf} × {numConc}).
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function CalcLOCUDose({ onBack }: { onBack: () => void }) {
  const [mode, setMode] = useState<"bomba" | "regional">("bomba");
  const [stockConc, setStockConc] = useState(0.5);
  const [finalConc, setFinalConc] = useState("");
  const [finalVol, setFinalVol] = useState("");
  const [weight, setWeight] = useState("");
  const [regionalAnes, setRegionalAnes] = useState({
    label: "Bupivacaína 0.25%",
    conc: 0.25,
    max: 2,
  });

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
      if (c2 > c1) {
        errorMsg = "Error: C. Final > C. Origen";
      } else {
        reqVol = (c2 * v2) / c1;
        diluent = v2 - reqVol;
      }
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
    <div className="min-h-screen bg-white sm:bg-[#F0EAE6] font-sans text-slate-800">
      <div className="max-w-md mx-auto bg-white min-h-screen sm:border-x border-slate-200 flex flex-col">
        <AppHeader onBack={onBack} />

        <main className="bg-white flex-1 flex flex-col w-full pb-12">
          <div className="h-2 w-full bg-gradient-to-r from-[#65C4EB] via-[#BDABF5] via-[#F39169] to-[#F9CE6F] flex-shrink-0" />

          <div className="pt-8 pb-6 px-6 border-b border-[#F0EAE6] text-center flex flex-col items-center">
            <LOCUDoseIcon className="w-16 h-16 sm:w-20 sm:h-20 mb-4 object-contain" />
            <h2 className="text-4xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#65C4EB] to-[#BDABF5] mb-2 uppercase">
              LocuDose
            </h2>
            <p className="text-slate-400 font-bold text-xs sm:text-sm tracking-[0.15em] uppercase mb-4">
              Calculadora de Anestésico Local
            </p>
          </div>

          <div className="px-4 sm:px-6 py-6 space-y-6 flex-grow bg-white">
            <div className="flex bg-[#F3EDE9] p-1.5 rounded-xl relative">
              <button
                onClick={() => setMode("bomba")}
                className={`flex-1 py-3 text-sm font-bold uppercase tracking-wider rounded-lg transition-all ${
                  mode === "bomba"
                    ? "bg-white text-[#F39169] shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                Bomba Elastomérica
              </button>
              <button
                onClick={() => setMode("regional")}
                className={`flex-1 py-3 text-sm font-bold uppercase tracking-wider rounded-lg transition-all ${
                  mode === "regional"
                    ? "bg-white text-[#F39169] shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                Anestesia Regional
              </button>
            </div>

            {mode === "bomba" && (
              <div className="space-y-6">
                <div>
                  <label className="block text-base font-semibold text-slate-700 mb-2">
                    Anestésico Local a utilizar
                  </label>
                  <div className="bg-[#F3EDE9]/50 border border-[#F0EAE6] p-4 rounded-xl space-y-3">
                    {bombaOptions.map((opt) => (
                      <label key={opt.label} className="flex items-center text-sm sm:text-base text-slate-600 cursor-pointer">
                        <input
                          type="radio"
                          name="bomba_stock"
                          value={opt.val}
                          checked={stockConc === opt.val}
                          onChange={() => setStockConc(opt.val)}
                          className="w-5 h-5 mr-3 accent-[#F39169]"
                        />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-base font-semibold text-slate-700 mb-2">
                    Concentración Final Deseada:
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-4 text-[#BDABF5] font-bold text-lg">%</span>
                    <input
                      type="number"
                      step="0.001"
                      min="0"
                      placeholder="Ej. 0.125"
                      value={finalConc}
                      onChange={(e) => setFinalConc(e.target.value)}
                      className="w-full py-4 pl-12 pr-4 text-slate-800 text-base font-medium border border-[#F3EDE9] rounded-xl focus:border-[#65C4EB] focus:ring-2 focus:ring-[#65C4EB]/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-base font-semibold text-slate-700 mb-2">
                    Volumen Final Deseado:
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-4 text-[#BDABF5] font-bold text-lg">ml</span>
                    <input
                      type="number"
                      step="0.1"
                      min="0"
                      placeholder="Ej. 100"
                      value={finalVol}
                      onChange={(e) => setFinalVol(e.target.value)}
                      className="w-full py-4 pl-12 pr-4 text-slate-800 text-base font-medium border border-[#F3EDE9] rounded-xl focus:border-[#65C4EB] focus:ring-2 focus:ring-[#65C4EB]/20 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>
            )}

            {mode === "regional" && (
              <div className="space-y-6">
                <div>
                  <label className="block text-base font-semibold text-slate-700 mb-2">
                    Peso del Paciente:
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-4 text-[#BDABF5] font-bold text-lg">kg</span>
                    <input
                      type="number"
                      step="1"
                      min="1"
                      placeholder="Ej. 70"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value.replace(/[^0-9]/g, ""))}
                      className="w-full py-4 pl-14 pr-4 text-slate-800 text-base font-medium border border-[#F3EDE9] rounded-xl focus:border-[#65C4EB] focus:ring-2 focus:ring-[#65C4EB]/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-base font-semibold text-slate-700 mb-2">
                    Anestésico Local a utilizar
                  </label>
                  <div className="bg-[#F3EDE9]/50 border border-[#F0EAE6] p-4 rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {regionalOptions.map((opt) => (
                      <label key={opt.label} className="flex items-center text-sm sm:text-base text-slate-600 cursor-pointer">
                        <input
                          type="radio"
                          name="regional_anes"
                          checked={regionalAnes.label === opt.label}
                          onChange={() => setRegionalAnes(opt)}
                          className="w-5 h-5 mr-3 accent-[#F39169] flex-shrink-0"
                        />
                        <span className="truncate">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white p-6 rounded-2xl border-2 border-[#F3EDE9] shadow-sm text-center mt-8">
              <h4 className="text-sm font-bold text-slate-700 uppercase tracking-widest mb-4">
                {mode === "bomba" ? "Volumen de Anestésico Requerido" : "Volumen Máximo Permitido"}
              </h4>

              <div className="inline-flex items-baseline justify-center bg-[#F0EAE6] px-8 py-4 rounded-xl border border-[#F3EDE9]">
                {errorMsg ? (
                  <span className="text-red-500 font-bold text-sm sm:text-base">{errorMsg}</span>
                ) : (
                  <>
                    <span className="font-black text-5xl text-[#F39169]">
                      {mode === "bomba"
                        ? reqVol !== null
                          ? reqVol.toFixed(1)
                          : "0.0"
                        : maxVol !== null
                        ? maxVol.toFixed(1)
                        : "0.0"}
                    </span>
                    <span className="text-[#65C4EB] font-bold text-xl ml-2">ml</span>
                  </>
                )}
              </div>

              {mode === "regional" && totalMg !== null && (
                <div className="mt-6 text-base text-slate-500 font-medium">
                  Dosis total equivalente:
                  <span className="text-[#F39169] font-black text-lg ml-1">{totalMg.toFixed(0)} mg</span>
                </div>
              )}
            </div>

            {mode === "bomba" && diluent !== null && !errorMsg && (
              <div className="bg-[#F3EDE9]/70 p-5 rounded-xl border-2 border-[#F9CE6F] text-center mt-6">
                <span className="block text-sm sm:text-base text-slate-600 font-medium mb-1">
                  Volumen de Diluyente a agregar:
                </span>
                <div className="font-bold text-3xl text-[#65C4EB]">
                  {diluent.toFixed(1)} <span className="text-lg">ml</span>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

type Props = {
  isPremium: boolean;
  userEmail: string;
};

export default function VaporaClient({ isPremium, userEmail }: Props) {
  const [vistaActual, setVistaActual] = useState<"home" | "mac" | "locu" | "analgesiq">("home");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow rounded-xl p-6">
        {vistaActual === "home" && (
  <div className="min-h-screen bg-[#F0EAE6] flex justify-center">
    <div className="w-full max-w-md bg-white min-h-screen sm:border-x border-slate-200">
      <div className="pt-10 pb-6 text-center">
        <h1 className="text-3xl font-black bg-gradient-to-r from-[#65C4EB] via-[#BDABF5] to-[#F39169] bg-clip-text text-transparent">
          VAPORA
        </h1>
        <p className="text-sm text-slate-400 font-semibold mt-2">
          Herramientas clínicas para anestesia
        </p>
      </div>

      <div className="px-6 pb-6 text-center">
        <h2 className="text-xl font-black text-slate-800 leading-tight">
          Toma decisiones más seguras en quirófano
        </h2>
        <p className="text-sm text-slate-500 mt-2">
          Calculadoras diseñadas para anestesiólogos que quieren rapidez, claridad y seguridad clínica.
        </p>

        <div className="mt-4 space-y-1">
          <p className="text-xs text-slate-400">
            Usuario actual: {userEmail || "sin sesión"}
          </p>
          <p className="text-xs text-slate-400">
            Premium: {isPremium ? "sí" : "no"}
          </p>
        </div>
      </div>

      <div className="px-4 space-y-4 pb-10">
        <button
          onClick={() => {
            if (isPremium) setVistaActual("analgesiq");
          }}
          className={`w-full rounded-3xl p-5 text-left border transition-all shadow-sm ${
            isPremium
              ? "bg-gradient-to-br from-[#65C4EB]/15 via-[#BDABF5]/15 to-[#F39169]/10 border-[#BDABF5]/30 hover:shadow-md"
              : "bg-slate-100 border-slate-200 opacity-95"
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-black text-slate-800">ANALGESIQ</h3>
                <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-full bg-[#BDABF5]/15 text-[#BDABF5] border border-[#BDABF5]/30">
                  Premium
                </span>
              </div>

              <p className="text-sm text-slate-600 mt-2 font-medium">
                Diseña mezclas seguras en segundos
              </p>

              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Calculadora avanzada para bombas elastoméricas con compatibilidad, dosis y alertas clínicas.
              </p>
            </div>

            <div className="text-2xl">
              {isPremium ? "👑" : "🔒"}
            </div>
          </div>

          {!isPremium && (
            <div className="mt-4">
              <p className="text-xs text-slate-500">
                Desbloquéala con Vapora Premium.
              </p>
            </div>
          )}
        </button>

        <div className="pt-2">
          <p className="text-[11px] uppercase tracking-[0.18em] font-black text-slate-400 px-1 mb-3">
            Herramientas incluidas
          </p>

          <div className="space-y-3">
            <button
              onClick={() => setVistaActual("mac")}
              className="w-full p-4 rounded-2xl border border-[#F3EDE9] bg-white shadow-sm hover:shadow-md transition-all text-left"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-black text-slate-800">MACFlow</h4>
                  <p className="text-sm text-slate-500 mt-1">
                    Consumo de anestésicos inhalatorios
                  </p>
                </div>
                <span className="text-xl">💨</span>
              </div>
            </button>

            <button
              onClick={() => setVistaActual("locu")}
              className="w-full p-4 rounded-2xl border border-[#F3EDE9] bg-white shadow-sm hover:shadow-md transition-all text-left"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-black text-slate-800">LOCUDose</h4>
                  <p className="text-sm text-slate-500 mt-1">
                    Cálculo de anestésicos locales
                  </p>
                </div>
                <span className="text-xl">🧪</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
<p className="text-sm text-center text-gray-500 mb-4">
  Usuario actual: {userEmail || "sin sesión"}
</p>
<p className="text-sm text-center text-gray-500 mb-6">
  Premium: {isPremium ? "sí" : "no"}
</p> 
            <h1 className="text-2xl font-bold text-center mb-6">Vapora</h1>

            <div className="flex flex-col gap-4">
              <button
                onClick={() => setVistaActual("mac")}
                className="bg-black text-white p-3 rounded-lg"
              >
                MACFlow
              </button>

              <button
                onClick={() => setVistaActual("locu")}
                className="bg-black text-white p-3 rounded-lg"
              >
                LOCUDose
              </button>

             <button
  onClick={() => {
    if (isPremium) {
      setVistaActual("analgesiq");
    }
  }}
>
  ANALGESIQ { !isPremium && "🔒" }
</button>
            </div>
          </div>
        )}

        {vistaActual === "mac" && <CalcMACFlow onBack={() => setVistaActual("home")} />}
        {vistaActual === "locu" && <CalcLOCUDose onBack={() => setVistaActual("home")} />}
        {vistaActual === "analgesiq" && isPremium && (
  <CalcANALGESIQ onBack={() => setVistaActual("home")} />
)}
      </div>
    </div>!
  );
}