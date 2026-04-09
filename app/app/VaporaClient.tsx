"use client";

import { useState } from "react";

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

        <main className="flex-1 bg-white flex flex-col w-full pb-12">
          <div className="h-2 w-full bg-gradient-to-r from-[#65C4EB] via-[#BDABF5] to-[#F39169] flex-shrink-0" />

          <div className="pt-8 pb-4 px-5 text-center flex flex-col items-center bg-white flex-shrink-0 border-b border-[#F0EAE6]">
            <MACFlowIcon className="w-16 h-16 sm:w-20 sm:h-20 mb-4 object-contain" />
            <h2
              className={`text-4xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${theme.textGradient} mb-1 transition-all duration-300`}
            >
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
                  <p className="text-sm uppercase tracking-wider font-bold text-slate-900/70">
                    Tasa por Hora
                  </p>
                  <p className="text-4xl font-black text-slate-900">
                    {rate.toFixed(1)} <span className="text-xl font-medium opacity-80">ml/h</span>
                  </p>
                </div>

                <div className="w-full h-px bg-white/40" />

                <div>
                  <p className="text-sm uppercase tracking-wider font-bold text-slate-900/70">
                    Consumo Total
                  </p>
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
                <span className="font-semibold bg-white px-2 py-0.5 rounded shadow-sm">
                  {theme.billing}
                </span>
                . (Fórmula: 3 × {numFgf} × {numConc}).
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default function VaporaClient() {
  const [vistaActual, setVistaActual] = useState<"home" | "mac" | "locu" | "analgesiq">("home");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow rounded-xl p-6">
        {vistaActual === "home" && (
          <>
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
                onClick={() => setVistaActual("analgesiq")}
                className="bg-black text-white p-3 rounded-lg"
              >
                ANALGESIQ
              </button>
            </div>
          </>
        )}

        {vistaActual === "mac" && <CalcMACFlow onBack={() => setVistaActual("home")} />}
        {vistaActual === "locu" && <div className="mt-4">LOCUDose (siguiente paso)</div>}
        {vistaActual === "analgesiq" && <div className="mt-4">ANALGESIQ (siguiente paso)</div>}
      </div>
    </div>
  );
}