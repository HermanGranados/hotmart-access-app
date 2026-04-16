"use client";

import { useState, useMemo } from "react";

function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
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

function AlertTriangleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3ZM12 9v4M12 17h.01" />
    </svg>
  );
}

function XCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
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

function Trash2Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
      <line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>
    </svg>
  );
}

function SyringeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m18 2 4 4" /><path d="m17 7 3-3" /><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
      <path d="m9 11 4 4" /><path d="m5 19-3 3" /><path d="m14 4 6 6" />
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

// ── Datos ────────────────────────────────────────────────────────────────

const indOptions: Record<string, { label: string; rec: string }> = {
  labor: { label: "Trabajo de Parto", rec: "L2-L3 o L3-L4" },
  high_abd: { label: "Cirugía Abdominal Alta", rec: "Torácico Bajo (T8-T10)" },
  low_abd: { label: "Cirugía Abdominal Baja", rec: "Torácico Bajo a Lumbar Alto (T10-L1)" },
  thoracic: { label: "Cirugía Torácica", rec: "Torácico Medio (T6-T8)" },
  ortho: { label: "Ortopedia de Miembros Inferiores", rec: "Lumbar (L1-L3)" },
  other: { label: "Otra Indicación", rec: "Según dermatoma quirúrgico" },
};

const laOptions: Record<string, { label: string; cStock: number; limit: number }> = {
  bupi_05: { label: "Bupivacaína 0.5%", cStock: 0.5, limit: 0.125 },
  levo_05: { label: "Levobupivacaína 0.5%", cStock: 0.5, limit: 0.125 },
  ropi_02: { label: "Ropivacaína 0.2%", cStock: 0.2, limit: 0.2 },
  ropi_075: { label: "Ropivacaína 0.75%", cStock: 0.75, limit: 0.2 },
  lido_1: { label: "Lidocaína 1%", cStock: 1.0, limit: 1.0 },
  lido_2: { label: "Lidocaína 2%", cStock: 2.0, limit: 2.0 },
};

const opiOptions: Record<string, { label: string; cStock: number; unit: string }> = {
  none: { label: "Ninguno", cStock: 0, unit: "" },
  fenta: { label: "Fentanilo (50 mcg/mL)", cStock: 50, unit: "mcg/mL" },
  sufa: { label: "Sufentanilo (50 mcg/mL)", cStock: 50, unit: "mcg/mL" },
  morfi: { label: "Morfina (10 mg/mL)", cStock: 10, unit: "mg/mL" },
  bupre: { label: "Buprenorfina (300 mcg/mL)", cStock: 300, unit: "mcg/mL" },
};

const adjOptions: Record<string, { label: string; cStock: number; unit: string }> = {
  none: { label: "Ninguno", cStock: 0, unit: "" },
  cloni: { label: "Clonidina (150 mcg/mL)", cStock: 150, unit: "mcg/mL" },
  adre: { label: "Adrenalina (1 mg/mL)", cStock: 1000, unit: "mcg/mL" },
};

const antiOptions: Record<string, { label: string; pun: string; res: string }> = {
  lmwh_pro: { label: "HBPM Profilaxis (Ej. Enoxaparina 40mg)", pun: "Esperar 12 horas", res: "Reiniciar 4 horas post-punción/retiro" },
  lmwh_tx: { label: "HBPM Tratamiento (Ej. Enoxaparina 1mg/kg/12h)", pun: "Esperar 24 horas", res: "Reiniciar 4 horas post-punción/retiro" },
  ufh_sc: { label: "HNF Subcutánea (Profilaxis)", pun: "Esperar 4 a 6 horas (12h si dosis altas)", res: "Reiniciar 1 hora post-punción/retiro" },
  rivaroxaban: { label: "Rivaroxaban / Apixaban", pun: "Esperar 72 horas (48h en profilaxis)", res: "Reiniciar 6 horas post-punción/retiro" },
  clopi: { label: "Clopidogrel / Ticagrelor", pun: "Esperar 5 a 7 días", res: "Reiniciar 6 horas post-punción/retiro" },
  aspirin: { label: "Aspirina / AINEs (Dosis baja)", pun: "Sin precauciones de tiempo adicionales", res: "Uso normal" },
};

type Props = { onBack: () => void; onProfile: () => void; };

export default function CalcEpiMix({ onBack, onProfile }: Props) {
  const [indication, setIndication] = useState("labor");
  const [laType, setLaType] = useState("bupi_05");
  const [targetLa, setTargetLa] = useState("");
  const [opiType, setOpiType] = useState("fenta");
  const [targetOpi, setTargetOpi] = useState("");
  const [adjType, setAdjType] = useState("none");
  const [targetAdj, setTargetAdj] = useState("");
  const [totalVol, setTotalVol] = useState("");
  const [rate, setRate] = useState("10");
  const [antiCheck, setAntiCheck] = useState(false);
  const [antiType, setAntiType] = useState("lmwh_pro");
  const [showRefs, setShowRefs] = useState(false);

  const numVol = parseFloat(totalVol);
  const numLa = parseFloat(targetLa);
  const numOpi = parseFloat(targetOpi);
  const numAdj = parseFloat(targetAdj);
  const numRate = parseFloat(rate) || 0;

  let errorMsg = "";
  let vLa = 0, vOpi = 0, vAdj = 0, vSaline = 0;

  if (totalVol !== "" && targetLa !== "") {
    if (numVol <= 0) errorMsg = "El volumen total debe ser mayor a 0.";
    else if (numLa > laOptions[laType].cStock) errorMsg = "La concentración objetivo no puede ser mayor a la base.";
    else {
      vLa = (numLa * numVol) / laOptions[laType].cStock;
      if (opiType !== "none" && targetOpi !== "") vOpi = (numOpi * numVol) / opiOptions[opiType].cStock;
      if (adjType !== "none" && targetAdj !== "") vAdj = (numAdj * numVol) / adjOptions[adjType].cStock;
      vSaline = numVol - (vLa + vOpi + vAdj);
      if (vSaline < 0) errorMsg = "El volumen de los componentes excede el volumen total deseado.";
    }
  }

  const showMotorWarning = targetLa !== "" && numLa > laOptions[laType].limit;

  const durationDisplay = useMemo(() => {
    if (numVol > 0 && numRate > 0) {
      const raw = numVol / numRate;
      return raw.toFixed(1).endsWith(".0") ? Math.round(raw).toString() : raw.toFixed(1);
    }
    return null;
  }, [numVol, numRate]);

  function resetAll() {
    setTargetLa(""); setTargetOpi(""); setTargetAdj("");
    setTotalVol(""); setRate("10");
    setOpiType("fenta"); setAdjType("none");
    setAntiCheck(false); setAntiType("lmwh_pro");
    setIndication("labor"); setLaType("bupi_05");
  }

  const getLaSuggestion = (type: string) => {
    if (type.startsWith("bupi")) return "Sugerencia: 0.0625% - 0.125%";
    if (type.startsWith("levo")) return "Sugerencia: 0.0625% - 0.125%";
    if (type.startsWith("ropi")) return "Sugerencia: 0.1% - 0.2%";
    if (type.startsWith("lido")) return "Sugerencia: 0.5% - 1%";
    return "";
  };

  const getOpiSuggestion = (type: string) => {
    if (type === "fenta") return "Sugerencia: 2 mcg/mL";
    if (type === "sufa") return "Sugerencia: 0.5 - 1 mcg/mL";
    if (type === "morfi") return "Sugerencia: 0.03 - 0.05 mg/mL";
    if (type === "bupre") return "Sugerencia: 1 - 4 mcg/mL";
    return "";
  };

  const getAdjSuggestion = (type: string) => {
    if (type === "cloni") return "Sugerencia: 3 mcg/mL";
    if (type === "adre") return "Sugerencia: 2 mcg/mL";
    return "";
  };

  const stepNum = (base: number) => {
    let n = base;
    if (opiType !== "none" && vOpi > 0) n++;
    if (adjType !== "none" && vAdj > 0) n++;
    return n;
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <style>{`input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}`}</style>
      <div className="max-w-md mx-auto bg-white min-h-screen sm:border-x border-slate-100 flex flex-col">
        <AppHeader title="EpiMix" onBack={onBack} onProfile={onProfile} />

        <main className="flex-1 flex flex-col w-full pb-12">
          <div className="h-1.5 w-full bg-gradient-to-r from-[#F43F5E] via-[#FB7185] to-[#FDA4AF]" />

          {/* Hero */}
          <div className="pt-8 pb-6 px-6 border-b border-slate-100 text-center flex flex-col items-center bg-white">
            <div className="w-16 h-16 mb-4 rounded-[18px] flex items-center justify-center overflow-hidden flex-shrink-0"
              style={{ background: "rgba(255,255,255,0.1)", border: "0.5px solid rgba(244,63,94,0.3)" }}>
              <img src="https://academiadeanestesia.com/wp-content/uploads/2026/04/EpiMIx-logo.png"
                alt="EpiMix" className="w-11 h-11 object-contain" />
            </div>
            <h2 className="text-4xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#F43F5E] to-[#FB7185] mb-2 uppercase">
              EPIMIX
            </h2>
            <p className="text-slate-400 font-bold text-xs tracking-[0.15em] uppercase">
              Mezclas para Analgesia Epidural
            </p>
          </div>

          <div className="px-4 sm:px-6 py-6 space-y-6 flex-grow">

            {/* Anticoagulación */}
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
              <label className="flex items-center cursor-pointer mb-3">
                <input type="checkbox" checked={antiCheck} onChange={(e) => setAntiCheck(e.target.checked)}
                  className="w-5 h-5 text-[#F43F5E] focus:ring-[#F43F5E] rounded mr-3 accent-[#F43F5E]" />
                <span className="text-sm font-bold text-slate-700">Paciente en Terapia Anticoagulante</span>
              </label>
              {antiCheck && (
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <select value={antiType} onChange={(e) => setAntiType(e.target.value)}
                    className="w-full py-3 px-4 mb-4 bg-slate-50 text-slate-800 font-bold rounded-xl border border-slate-100 focus:border-[#F43F5E] focus:outline-none transition-all"
                    style={{ fontSize: "16px" }}>
                    {Object.entries(antiOptions).map(([key, opt]) => (
                      <option key={key} value={key}>{opt.label}</option>
                    ))}
                  </select>
                  <div className="bg-rose-50 p-4 rounded-xl border border-rose-200">
                    <div className="flex items-start gap-3">
                      <AlertTriangleIcon className="w-6 h-6 text-rose-500 shrink-0" />
                      <div className="space-y-2 text-sm text-rose-900">
                        <p><strong>Punción / Retiro Catéter:</strong> {antiOptions[antiType].pun}</p>
                        <p><strong>Reinicio Fármaco:</strong> {antiOptions[antiType].res}</p>
                        <p className="text-xs opacity-70 mt-2">Ref: Guías AAGBI / ESRA y ASRA 2025.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Clínica del bloqueo */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2 font-black uppercase text-sm text-slate-700">
                <SettingsIcon className="w-5 h-5 text-[#F43F5E]" />
                Clínica del Bloqueo
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <label className="block text-sm font-semibold text-slate-700 mb-3">Indicación de Analgesia</label>
                <select value={indication} onChange={(e) => setIndication(e.target.value)}
                  className="w-full py-3 px-4 bg-slate-50 text-slate-800 font-bold rounded-xl border border-slate-100 focus:border-[#F43F5E] focus:outline-none transition-all"
                  style={{ fontSize: "16px" }}>
                  {Object.entries(indOptions).map(([key, opt]) => (
                    <option key={key} value={key}>{opt.label}</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Nivel Sugerido</p>
                  <p className="text-base font-black text-[#F43F5E] leading-tight">{indOptions[indication].rec}</p>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Profundidad Catéter</p>
                  <p className="text-sm font-bold text-slate-700 leading-snug">Introducir <strong className="text-[#F43F5E]">4 a 5 cm</strong> en espacio epidural.</p>
                </div>
              </div>
            </div>

            {/* Mezcla de fármacos */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <div className="flex items-center gap-2 font-black uppercase text-sm text-slate-700">
                  <BeakerIcon className="w-5 h-5 text-[#F43F5E]" />
                  Mezcla de Fármacos
                </div>
                <button onClick={resetAll}
                  className="inline-flex items-center gap-1.5 bg-slate-100 text-[#F43F5E] hover:bg-rose-50 px-3 py-2 rounded-lg text-xs font-black tracking-widest uppercase transition-colors">
                  <Trash2Icon className="w-3.5 h-3.5" /> Limpiar
                </button>
              </div>

              {/* Anestésico Local */}
              <div className="bg-rose-50/40 p-5 rounded-2xl border-2 border-rose-100 shadow-sm space-y-4">
                <label className="block text-sm font-bold text-[#F43F5E] uppercase tracking-wide">Anestésico Local</label>
                <select value={laType} onChange={(e) => setLaType(e.target.value)}
                  className="w-full py-3 px-4 bg-white text-slate-800 font-bold rounded-xl border border-rose-100 focus:ring-2 focus:ring-[#F43F5E]/20 focus:outline-none transition-all"
                  style={{ fontSize: "16px" }}>
                  {Object.entries(laOptions).map(([key, opt]) => (
                    <option key={key} value={key}>{opt.label}</option>
                  ))}
                </select>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Concentración Deseada (%)</label>
                  <input type="text" inputMode="decimal" step="0.001" min="0" placeholder="Ej. 0.1" value={targetLa}
                    onChange={(e) => setTargetLa(e.target.value.replace(",", "."))}
                    className="w-full py-3 px-4 text-center text-slate-800 font-black border border-rose-100 bg-white rounded-xl focus:border-[#F43F5E] focus:outline-none transition-all placeholder:text-slate-300"
                    style={{ fontSize: "18px", MozAppearance: "textfield" }} />
                  <p className="text-[10px] text-slate-400 font-medium mt-1.5 text-center">{getLaSuggestion(laType)}</p>
                </div>
                {showMotorWarning && (
                  <div className="bg-amber-50 p-3 rounded-lg border border-amber-200 flex items-start gap-2">
                    <AlertTriangleIcon className="w-5 h-5 text-amber-500 shrink-0" />
                    <p className="text-xs text-amber-800 font-medium">
                      <strong>Atención:</strong> Concentración mayor a la recomendada ({laOptions[laType].limit}%). Riesgo aumentado de bloqueo motor.
                    </p>
                  </div>
                )}
                {laType.startsWith("lido") && (
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 space-y-3">
                    <div className="flex items-start gap-2">
                      <InfoIcon className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <p className="text-xs text-blue-800 font-semibold leading-relaxed">
                        La lidocaína <strong>no es el fármaco habitual</strong> para mantenimiento o infusión continua epidural. Se reserva para usos específicos:
                      </p>
                    </div>
                    <div className="space-y-2.5 pl-6">
                      <div className="text-xs text-blue-700 leading-relaxed">
                        <span className="font-black uppercase tracking-wide block mb-0.5">Dosis de prueba (Test dose)</span>
                        Lidocaína 2% — 3 mL (con adrenalina 1:200.000) para descartar colocación intratecal o intravascular del catéter.
                      </div>
                      <div className="text-xs text-blue-700 leading-relaxed">
                        <span className="font-black uppercase tracking-wide block mb-0.5">Dosis de rescate (Top-up)</span>
                        Lidocaína 2% sin conservantes (con adrenalina 1:200.000) — 10 mL, administrando ~3 mL lentos. Requiere monitorización continua de signos vitales.
                      </div>
                      <div className="text-xs text-blue-700 leading-relaxed">
                        <span className="font-black uppercase tracking-wide block mb-0.5">Anestesia de piel</span>
                        Lidocaína 1% (Xylocaína) — 2 mL antes de la punción epidural para insensibilizar la zona.
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Opioide */}
              <div className="bg-rose-50/40 p-5 rounded-2xl border-2 border-rose-100 shadow-sm space-y-4">
                <label className="block text-sm font-bold text-[#F43F5E] uppercase tracking-wide">Opioide</label>
                <select value={opiType} onChange={(e) => { setOpiType(e.target.value); if (e.target.value === "none") setTargetOpi(""); }}
                  className="w-full py-3 px-4 bg-white text-slate-800 font-bold rounded-xl border border-rose-100 focus:ring-2 focus:ring-[#F43F5E]/20 focus:outline-none transition-all"
                  style={{ fontSize: "16px" }}>
                  {Object.entries(opiOptions).map(([key, opt]) => (
                    <option key={key} value={key}>{opt.label}</option>
                  ))}
                </select>
                {opiType !== "none" && (
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">
                      Dosis Deseada ({opiOptions[opiType].unit})
                    </label>
                    <input type="text" inputMode="decimal" step="0.1" min="0" placeholder="Ej. 2" value={targetOpi}
                      onChange={(e) => setTargetOpi(e.target.value.replace(",", "."))}
                      className="w-full py-3 px-4 text-center text-slate-800 font-black border border-rose-100 bg-white rounded-xl focus:border-[#F43F5E] focus:outline-none transition-all placeholder:text-slate-300"
                      style={{ fontSize: "18px", MozAppearance: "textfield" }} />
                    <p className="text-[10px] text-slate-400 font-medium mt-1.5 text-center">{getOpiSuggestion(opiType)}</p>
                  </div>
                )}
              </div>

              {/* Coadyuvante */}
              <div className="bg-rose-50/40 p-5 rounded-2xl border-2 border-rose-100 shadow-sm space-y-4">
                <label className="block text-sm font-bold text-[#F43F5E] uppercase tracking-wide">Coadyuvante</label>
                <select value={adjType} onChange={(e) => { setAdjType(e.target.value); if (e.target.value === "none") setTargetAdj(""); }}
                  className="w-full py-3 px-4 bg-white text-slate-800 font-bold rounded-xl border border-rose-100 focus:ring-2 focus:ring-[#F43F5E]/20 focus:outline-none transition-all"
                  style={{ fontSize: "16px" }}>
                  {Object.entries(adjOptions).map(([key, opt]) => (
                    <option key={key} value={key}>{opt.label}</option>
                  ))}
                </select>
                {adjType !== "none" && (
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">
                      Dosis Deseada ({adjOptions[adjType].unit})
                    </label>
                    <input type="text" inputMode="decimal" step="0.1" min="0" placeholder="Ej. 2" value={targetAdj}
                      onChange={(e) => setTargetAdj(e.target.value.replace(",", "."))}
                      className="w-full py-3 px-4 text-center text-slate-800 font-black border border-rose-100 bg-white rounded-xl focus:border-[#F43F5E] focus:outline-none transition-all placeholder:text-slate-300"
                      style={{ fontSize: "18px", MozAppearance: "textfield" }} />
                    <p className="text-[10px] text-slate-400 font-medium mt-1.5 text-center">{getAdjSuggestion(adjType)}</p>
                  </div>
                )}
              </div>

              {/* Volumen nominal — tarjeta grande */}
              <div className="bg-white rounded-2xl border-2 border-rose-100 shadow-sm overflow-hidden focus-within:border-[#F43F5E] transition-all">
                <div className="bg-rose-50/60 px-6 py-3 border-b border-rose-100">
                  <p className="text-xs font-black text-slate-500 uppercase tracking-widest text-center">Volumen Nominal Total</p>
                </div>
                <div className="flex items-center justify-center gap-3 px-6 py-6">
                  <input type="number" inputMode="decimal" step="1" min="0" placeholder="0" value={totalVol}
                    onChange={(e) => setTotalVol(e.target.value)}
                    className="text-center font-black text-[#F43F5E] bg-transparent outline-none placeholder:text-rose-200 w-36"
                    style={{ fontSize: "45px", lineHeight: 1, MozAppearance: "textfield" }} />
                  <span className="text-xl font-bold text-slate-400 self-end pb-1">mL</span>
                </div>
              </div>

              {/* Velocidad — slider + input al lado */}
              <div className="bg-rose-50/40 p-5 rounded-2xl border-2 border-rose-100 shadow-sm space-y-3">
                <label className="block text-sm font-bold text-[#F43F5E] uppercase tracking-wide">Velocidad de Infusión Continua</label>
                <div className="flex items-center gap-4">
                  <input type="range" min="1" max="20" step="1" value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    className="flex-1 h-2 rounded-lg appearance-none cursor-pointer bg-rose-200"
                    style={{ accentColor: "#F43F5E" }} />
                  <div className="flex items-center gap-2 bg-white border border-rose-200 rounded-xl px-3 py-2.5 shrink-0">
                    <input type="number" inputMode="decimal" step="1" min="0" value={rate}
                      onChange={(e) => setRate(e.target.value)}
                      className="w-10 text-center text-slate-800 font-black bg-transparent outline-none"
                      style={{ fontSize: "18px", MozAppearance: "textfield" }} />
                    <span className="text-xs font-bold text-slate-400">mL/h</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">Rango habitual: 6-10 mL/h (postoperatorio) o 5-15 mL/h (parto).</p>
              </div>
            </div>

            {/* Resultado */}
            <div className="bg-white p-6 rounded-2xl border-2 border-slate-100 shadow-sm">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 text-center">Protocolo de Preparación</h4>

              {errorMsg ? (
                <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200 text-center flex flex-col items-center">
                  <XCircleIcon className="w-10 h-10 text-red-400 mb-3" />
                  <span className="text-red-600 font-bold text-sm leading-relaxed">{errorMsg}</span>
                </div>
              ) : vLa > 0 ? (
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-rose-50/50 border border-rose-100 rounded-xl">
                    <div className="bg-[#F43F5E] text-white font-black w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5">1</div>
                    <div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Extraer <strong className="text-[#F43F5E] text-lg">{vLa.toFixed(1)} mL</strong> de Anestésico Local.
                      </p>
                      <p className="text-xs text-slate-500 mt-1 font-bold uppercase tracking-wide">{laOptions[laType].label}</p>
                    </div>
                  </div>

                  {opiType !== "none" && vOpi > 0 && (
                    <div className="flex items-start gap-4 p-4 bg-rose-50/50 border border-rose-100 rounded-xl">
                      <div className="bg-[#F43F5E] text-white font-black w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5">2</div>
                      <div>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          Agregar <strong className="text-[#F43F5E] text-lg">{vOpi.toFixed(1)} mL</strong> de Opioide.
                        </p>
                        <p className="text-xs text-slate-500 mt-1 font-bold uppercase tracking-wide">{opiOptions[opiType].label}</p>
                      </div>
                    </div>
                  )}

                  {adjType !== "none" && vAdj > 0 && (
                    <div className="flex items-start gap-4 p-4 bg-rose-50/50 border border-rose-100 rounded-xl">
                      <div className="bg-[#F43F5E] text-white font-black w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5">{stepNum(2)}</div>
                      <div>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          Agregar <strong className="text-[#F43F5E] text-lg">{vAdj.toFixed(1)} mL</strong> de Coadyuvante.
                        </p>
                        <p className="text-xs text-slate-500 mt-1 font-bold uppercase tracking-wide">{adjOptions[adjType].label}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-4 p-4 bg-rose-50/50 border border-rose-100 rounded-xl">
                    <div className="bg-[#F43F5E] text-white font-black w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      {stepNum(opiType !== "none" && vOpi > 0 ? 2 : 1) + 1}
                    </div>
                    <div>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Completar con <strong className="text-[#F43F5E] text-lg">{vSaline.toFixed(1)} mL</strong> de Solución Salina 0.9%.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-2 border-t-2 border-dashed border-slate-100">
                    <div className="rounded-3xl p-6 text-white flex flex-col items-center relative overflow-hidden"
                      style={{ background: "linear-gradient(160deg,#1a0510,#2d0a1e,#1a0510)" }}>
                      <div className="absolute top-[-40px] right-[-40px] w-[160px] h-[160px] rounded-full pointer-events-none"
                        style={{ background: "radial-gradient(circle,rgba(244,63,94,0.2),transparent 70%)" }} />
                      <p className="text-[10px] text-[#FB7185] font-black uppercase tracking-[0.2em] mb-3 relative z-10">Mezcla Lista Epidural</p>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-7xl font-black text-[#F43F5E] relative z-10">{numVol}</span>
                        <span className="text-4xl font-medium text-slate-300">mL</span>
                      </div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center">
                        AL {targetLa}%
                        {opiType !== "none" ? ` + OPI ${targetOpi} ${opiOptions[opiType].unit.toUpperCase()}` : ""}
                        {adjType !== "none" ? ` + ADJ ${targetAdj} ${adjOptions[adjType].unit.toUpperCase()}` : ""}
                      </p>
                      {durationDisplay !== null && (
                        <div className="w-full flex flex-col items-center mt-5 pt-4 border-t border-white/10">
                          <p className="text-[11px] text-slate-300 font-bold uppercase tracking-widest text-center">
                            Duración Estimada: <span className="text-white text-lg font-black mx-1">{durationDisplay} HORAS</span>
                          </p>
                          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest text-center mt-1">
                            A {rate} ML/H
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="py-10 text-center opacity-50 flex flex-col items-center">
                  <SyringeIcon className="w-12 h-12 mb-3 text-slate-400" />
                  <p className="text-sm font-semibold text-slate-500">Ingrese los valores para calcular la mezcla</p>
                </div>
              )}
            </div>

            {/* Referencias */}
            <div className="rounded-xl border border-slate-100 overflow-hidden">
              <button onClick={() => setShowRefs(!showRefs)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-2">
                  <InfoIcon className="w-5 h-5 text-[#F43F5E]" />
                  <span className="text-sm font-bold text-slate-700 uppercase tracking-wide">Referencias y Protocolos</span>
                </div>
                <ChevronDownIcon className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${showRefs ? "rotate-180" : ""}`} />
              </button>
              {showRefs && (
                <div className="p-5 pt-2 text-xs text-slate-600 border-t border-slate-100 space-y-3">
                  <ol className="list-decimal pl-4 space-y-3">
                    <li><strong>Protocol for Postoperative Epidural Analgesia.</strong> NHS Lanarkshire. C. Slorach, C. Clark (2023).</li>
                    <li><strong>Epidural anesthesia – technique, indications and clinical use.</strong> The Anesthesia Guide. Kai Knudsen (2025).</li>
                    <li><strong>Epidural analgesia for labor: Current techniques.</strong> Local and Regional Anesthesia. M. Silva, S. Halpern (2010).</li>
                    <li><strong>Regional anesthesia in the patient receiving antithrombotic or thrombolytic therapy: ASRA Guidelines.</strong> S. Kopp et al. (2025).</li>
                  </ol>
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
