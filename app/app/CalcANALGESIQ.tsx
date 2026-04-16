"use client";

import { useEffect, useState } from "react";

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

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
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
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  );
}

function ClipboardListIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M8 11h8M8 16h8" />
    </svg>
  );
}

function Trash2Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <line x1="10" x2="10" y1="11" y2="17" />
      <line x1="14" x2="14" y1="11" y2="17" />
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
      <path d="M20 21a8 8 0 0 0-16 0" />
      <circle cx="12" cy="8" r="4" />
    </svg>
  );
}

// ── Shared ─────────────────────────────────────────────────────────────────

function AppHeader({ title, onBack, onProfile }: { title: string; onBack: () => void; onProfile?: () => void }) {
  return (
    <header className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-100">
      <div className="flex items-center gap-2.5 px-3.5 py-2.5">
        <button onClick={onBack}
          className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 hover:bg-slate-200 transition active:scale-95">
          <ChevronLeftIcon className="w-3.5 h-3.5 text-slate-500" />
        </button>
        <div className="flex-1 flex items-center justify-center gap-2">
          <div className="w-[26px] h-[26px] rounded-[7px] overflow-hidden flex-shrink-0"
            style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.12)" }}>
            <img src="https://academiadeanestesia.com/wp-content/uploads/2026/04/vapora-app-ico-ios.png"
              alt="Vapora" className="w-full h-full object-cover" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-[15px] font-semibold text-slate-900 tracking-tight">Vapora</span>
            <span className="text-[11px] font-light text-slate-400 tracking-wide">· {title}</span>
          </div>
        </div>
        <button onClick={onProfile}
          className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 hover:bg-slate-200 transition active:scale-95">
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

// ── Data ───────────────────────────────────────────────────────────────────

const masterMedicamentos = [
  { nombre: "Bupivacaína 0.5%", iv: false, epi: true, sub: true, pres: { mg: 5, ml: 1 }, presStr: "5 mg en 1 mL", c1: 0.5 },
  { nombre: "Bupivacaína 0.75%", iv: false, epi: true, sub: true, pres: { mg: 7.5, ml: 1 }, presStr: "7.5 mg en 1 mL", c1: 0.75 },
  { nombre: "Ropivacaína 0.2%", iv: false, epi: true, sub: true, pres: { mg: 2, ml: 1 }, presStr: "2 mg en 1 mL", c1: 0.2 },
  { nombre: "Ropivacaína 0.75%", iv: false, epi: true, sub: true, pres: { mg: 7.5, ml: 1 }, presStr: "7.5 mg en 1 mL", c1: 0.75 },
  { nombre: "Fentanilo", iv: true, epi: true, sub: true, opioide: true, concentracionEpi: { val: 2, unit: "mcg" }, pres: { mg: 0.5, ml: 10 }, presStr: "50 mcg/mL" },
  { nombre: "Morfina", iv: true, epi: true, sub: true, opioide: true, max: "20 mg dia", pres: { mg: 10, ml: 1 }, presStr: "10 mg en 1 mL", concentracionEpi: { val: 0.05, unit: "mg" } },
  { nombre: "Buprenorfina", iv: false, epi: true, sub: true, opioide: true, concentracionEpi: { val: 0.01, unit: "mg" }, pres: { mg: 0.3, ml: 1 }, presStr: "0.3 mg en 1 mL" },
  { nombre: "Sufentanilo", iv: false, epi: true, sub: true, opioide: true, concentracionEpi: { val: 0.5, unit: "mcg" }, pres: { mg: 0.05, ml: 1 }, presStr: "50 mcg en 1 mL" },
  { nombre: "Tramadol", iv: true, epi: false, sub: true, opioide: true, max: "400 mg dia", pres: { mg: 100, ml: 2 }, presStr: "100 mg en 2 mL" },
  { nombre: "Meperidina", iv: true, epi: false, sub: false, opioide: true, max: "???", pres: { mg: 100, ml: 2 }, presStr: "100 mg en 2 mL" },
  { nombre: "Dipirona", iv: true, epi: false, sub: true, max: "6 g dia", pres: { mg: 1000, ml: 2 }, presStr: "1 g en 2 mL" },
  { nombre: "Ketorolaco", iv: true, epi: false, sub: true, max: "120 mg dia", pres: { mg: 30, ml: 1 }, presStr: "30 mg en 1 mL" },
  { nombre: "Paracetamol", iv: true, epi: false, sub: false, max: "4 g dia", pres: { mg: 1000, ml: 6.7 }, presStr: "1 g en 6.7 mL" },
  { nombre: "Ketoprofeno", iv: true, epi: false, sub: false, max: "300 mg dia", pres: { mg: 100, ml: 2 }, presStr: "100 mg en 2 mL" },
  { nombre: "Dexketoprofeno", iv: true, epi: false, sub: false, max: "150 mg dia", pres: { mg: 50, ml: 2 }, presStr: "50 mg en 2 mL" },
  { nombre: "Diclofenaco", iv: true, epi: false, sub: false, max: "150 mg dia", pres: { mg: 75, ml: 3 }, presStr: "75 mg en 3 mL" },
  { nombre: "Nefopam", iv: true, epi: false, sub: false, max: "120 mg dia", pres: { mg: 20, ml: 2 }, presStr: "20 mg en 2 mL" },
  { nombre: "Dexametasona", iv: true, epi: false, sub: true, max: "8 mg dia", pres: { mg: 4, ml: 1 }, presStr: "4 mg en 1 mL" },
  { nombre: "Ondansetrón", iv: true, epi: false, sub: true, max: "32 mg dia", pres: { mg: 8, ml: 4 }, presStr: "8 mg en 4 mL" },
  { nombre: "Ketamina", iv: true, epi: false, sub: true, max: "20 mg dia", pres: { mg: 50, ml: 1 }, presStr: "50 mg en 1 mL", soloSinOpioides: true },
  { nombre: "Lidocaína 2%", iv: true, epi: false, sub: true, max: "50 mg dia", pres: { mg: 20, ml: 1 }, presStr: "20 mg en 1 mL", soloSinOpioides: true },
] as const;

const compatData: Record<string, Record<string, string>> = {
  Dexametasona: { Ketorolaco: "W", Dipirona: "W", Ketamina: "W", Ondansetrón: "W", Morfina: "W", Tramadol: "W" },
  Fentanilo: { Bupivacaína: "C", Dipirona: "X", Ketamina: "C", Ondansetrón: "C", "Lidocaína 2%": "C" },
  Bupivacaína: { Ketorolaco: "X", Dipirona: "X", Ketamina: "C", Morfina: "C", "Lidocaína 2%": "C", Tramadol: "X" },
  Ketorolaco: { Dipirona: "C", Ketamina: "C", Ondansetrón: "C", Morfina: "C", Tramadol: "C" },
  Dipirona: { Ketamina: "C", Ondansetrón: "C", Morfina: "X", Tramadol: "C" },
  Ketamina: { Ondansetrón: "C", Morfina: "C", "Lidocaína 2%": "C", Tramadol: "C" },
  Ondansetrón: { Morfina: "C", Tramadol: "C" },
};

function parseInputToMg(text: string | number | null | undefined, medName: string) {
  if (!text) return null;
  const cleanText = String(text).replace(",", ".");
  const match = cleanText.match(/(\d+(\.\d+)?)\s*(mg|g|mcg|ug)?/i);
  if (!match) return null;
  let val = parseFloat(match[1]);
  let unit = match[3] ? match[3].toLowerCase() : "";
  if (!unit) {
    if (["Dipirona", "Paracetamol"].includes(medName)) val = val < 50 ? val * 1000 : val;
    else unit = "mg";
  }
  if (unit === "g") return val * 1000;
  if (unit === "mcg" || unit === "ug") return val / 1000;
  return val;
}

type FarmacoState = { nombre: string; vol: number | string; dosis: string; max: string; };
type Props = { onBack: () => void; onProfile?: () => void; };

export default function CalcANALGESIQ({ onBack, onProfile }: Props) {
  const [data, setData] = useState({
    via: "Intravenosa",
    nominal: "240",
    nominalCustom: "",
    useCustomNominal: false,
    flujo: "2",
    ofa: false,
    tipoBomba: "flujo fijo",
    edad: "",
    cantidadFarmacos: 1,
    farmacos: Array(5).fill(0).map(() => ({ nombre: "", vol: 0, dosis: "", max: "" })) as FarmacoState[],
    epi: { anes: "Bupivacaína 0.5%", c1: 0.5, c2: "", v2: "240" },
  });

  const nominalEfectivo = data.useCustomNominal && data.nominalCustom ? data.nominalCustom : data.nominal;

  const [calc, setCalc] = useState({
    hrs: 0, dias: "0.0", volF: 0, volS: 0, lim: 1, maxVia: 5,
    errors: [] as string[], warns: [] as string[], doseAlerts: [] as string[],
  });

  useEffect(() => {
    const maxVia = 5;
    const activeCount = Math.min(data.cantidadFarmacos || 1, maxVia);
    const active = data.farmacos.slice(0, activeCount);
    const volF = active.reduce((acc, f) => acc + (Number(f.vol) || 0), 0);
    const hrs = Number(data.flujo) > 0 ? Number(nominalEfectivo) / Number(data.flujo) : 0;
    // ✅ Fix #4: 1 decimal redondeado
    const dias = (hrs / 24).toFixed(1);
    const eM: string[] = [], wM: string[] = [], dA: string[] = [];

    const meds = active.filter((f) => f.nombre);
    for (let i = 0; i < meds.length; i++) {
      for (let j = i + 1; j < meds.length; j++) {
        const m1 = meds[i].nombre.includes("acaína") ? "Bupivacaína" : meds[i].nombre;
        const m2 = meds[j].nombre.includes("acaína") ? "Bupivacaína" : meds[j].nombre;
        const status = compatData[m1]?.[m2] || compatData[m2]?.[m1] || "U";
        if (status === "X") eM.push(`Mezcla ${meds[i].nombre} + ${meds[j].nombre} no recomendada.`);
        if (status === "W") wM.push(`Posible precipitado: ${meds[i].nombre} + ${meds[j].nombre}.`);
      }
    }

    active.forEach((f) => {
      const med = masterMedicamentos.find((m) => m.nombre === f.nombre);
      const inMg = parseInputToMg(f.dosis, f.nombre);
      const maxText = (med as { max?: string } | undefined)?.max || "";
      const maxMgMatch = maxText.replace(",", ".").match(/(\d+(\.\d+)?)/);
      const maxMg = maxMgMatch ? parseInputToMg(maxMgMatch[1] + (maxText.includes("g") ? "g" : "mg"), f.nombre) : null;
      if (inMg && maxMg && Number(dias) > 0 && inMg / Number(dias) > maxMg * 1.001) {
        dA.push(`¡SOBREDOSIS! ${f.nombre} supera el límite seguro de ${maxText}.`);
      }
    });

    setCalc({ hrs, dias, volF, volS: Math.max(0, Number(nominalEfectivo) - volF), lim: activeCount, maxVia, errors: eM, warns: wM, doseAlerts: dA });
  }, [data, nominalEfectivo]);

  function updateF(idx: number, field: "nombre" | "vol" | "dosis" | "max", val: string) {
    const next = [...data.farmacos];
    if (field === "nombre") {
      const m = masterMedicamentos.find((x) => x.nombre === val);
      if (m) {
        const d = data.via === "Epidural" && "concentracionEpi" in m && m.concentracionEpi
          ? `${m.concentracionEpi.val * Number(nominalEfectivo)} ${m.concentracionEpi.unit}` : "";
        const v = m.pres ? Math.round(((parseInputToMg(d, val) || 0) / m.pres.mg) * m.pres.ml) : 0;
        next[idx] = { nombre: val, max: (m as any).max || "", dosis: d, vol: v };
      } else {
        next[idx] = { nombre: "", vol: 0, dosis: "", max: "" };
      }
    } else if (field === "dosis") {
      next[idx].dosis = val;
      const m = masterMedicamentos.find((x) => x.nombre === next[idx].nombre);
      next[idx].vol = m?.pres ? Math.round(((parseInputToMg(val, m.nombre) || 0) / m.pres.mg) * m.pres.ml) : 0;
    } else if (field === "vol") {
      const numericVal = val === "" ? "" : Number(val);
      next[idx].vol = numericVal;
      const m = masterMedicamentos.find((x) => x.nombre === next[idx].nombre);
      if (m && m.pres && Number(numericVal) > 0) {
        const mgCalc = (Number(numericVal) / m.pres.ml) * m.pres.mg;
        let displayVal: number = mgCalc;
        let unit = "mg";
        if (m.presStr.toLowerCase().includes("mcg")) { displayVal = Math.round(mgCalc * 1000); unit = "mcg"; }
        else if (mgCalc >= 1000 && (m.nombre === "Dipirona" || m.nombre === "Paracetamol")) { displayVal = mgCalc / 1000; unit = "g"; }
        else { displayVal = Math.round(mgCalc * 100) / 100; }
        next[idx].dosis = `${displayVal} ${unit}`;
      } else if (numericVal === 0 || numericVal === "") {
        next[idx].dosis = "";
      }
    } else {
      next[idx][field] = val;
    }
    setData({ ...data, farmacos: next });
  }

  function applyEpi() {
    const { c1, c2, anes, v2 } = data.epi;
    const v1 = Number(c2) > 0 && Number(v2) > 0 ? Math.round((Number(c2) * Number(v2)) / c1) : 0;
    if (v1 <= 0) return;
    const nextF = [...data.farmacos];
    let tidx = -1;
    for (let i = 0; i < 5; i++) {
      if (nextF[i].nombre.includes("acaína") || nextF[i].nombre === "") { tidx = i; break; }
    }
    if (tidx === -1) tidx = 0;
    const med = masterMedicamentos.find((m) => m.nombre === anes);
    nextF[tidx] = { nombre: anes, dosis: `${Number(c2)}%`, vol: v1, max: (med as any)?.max || "" };
    setData({ ...data, farmacos: nextF, cantidadFarmacos: Math.max(data.cantidadFarmacos, tidx + 1) });
  }

  function resetFarmacos() {
    setData({ ...data, farmacos: Array(5).fill(0).map(() => ({ nombre: "", vol: 0, dosis: "", max: "" })) });
  }

  const isBlocked = calc.errors.length > 0 || calc.doseAlerts.length > 0;

  // Condiciones de alertas
  const showOfa = data.ofa && data.via === "Intravenosa";
  // ✅ Fix #2: solo para Intravenosa
  const showEdad = Number(data.edad) > 65 && data.via === "Intravenosa";
  const showPca = data.tipoBomba.includes("PCA");

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <style>{`input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}`}</style>
      <div className="max-w-md mx-auto bg-white min-h-screen sm:border-x border-slate-100 flex flex-col">

        <AppHeader title="ANALGESIQ" onBack={onBack} onProfile={onProfile} />

        {/* Hero */}
        <div className="bg-white px-6 pt-6 pb-5 text-center border-b border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#65C4EB] via-[#BDABF5] to-[#F39169]" />
          <div className="w-14 h-14 mb-3 rounded-[16px] overflow-hidden mx-auto flex items-center justify-center mt-2"
            style={{ background: "linear-gradient(160deg,#0f0c29,#1a1040)", boxShadow: "0 4px 16px rgba(129,140,248,0.3)" }}>
            <img src="https://anestesialatina.com/wp-content/uploads/2026/03/infusion.png" alt="ANALGESIQ" className="w-10 h-10 object-contain" />
          </div>
          <h1 className="text-3xl font-black tracking-wider mb-1">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#65C4EB] to-[#BDABF5]">ANALGES</span>
            <span className="text-[#BDABF5]">IQ</span>
          </h1>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">
            Calculadora de Bombas Elastoméricas
          </p>
        </div>

        <div className="p-4 sm:p-6 space-y-8 flex-grow">

          {/* Parámetros generales */}
          <section className="space-y-5">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-2 font-black uppercase text-sm text-slate-700">
              <SettingsIcon className="w-5 h-5 text-[#65C4EB]" />
              Parámetros Generales
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase block">Edad (Años)</label>
                <input type="number" inputMode="decimal" min="0" value={data.edad}
                  onChange={(e) => setData({ ...data, edad: e.target.value })}
                  className="w-full p-3 bg-slate-50 rounded-xl outline-none border border-slate-100"
                  style={{ fontSize: "16px" }} placeholder="Ej: 68" />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase block">Flujo de la Bomba (mL/h)</label>
                <input type="number" inputMode="decimal" min="0" max="14" step="1" value={data.flujo}
                  onKeyDown={(e) => { if ([".", ",", "e", "E", "-", "+"].includes(e.key)) e.preventDefault(); }}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === "") setData({ ...data, flujo: "" });
                    else if (Number(val) <= 14) setData({ ...data, flujo: parseInt(val, 10).toString() });
                  }}
                  placeholder="Máx: 14"
                  className="w-full p-3 bg-slate-50 rounded-xl outline-none border border-slate-100"
                  style={{ fontSize: "16px" }} />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase block">Tipo de Bomba</label>
                <select value={data.tipoBomba}
                  onChange={(e) => setData({ ...data, tipoBomba: e.target.value })}
                  className="w-full p-3 bg-slate-50 rounded-xl outline-none border border-slate-100"
                  style={{ fontSize: "16px" }}>
                  {["flujo fijo", "flujo fijo + PCA", "flujo múltiple", "flujo múltiple + PCA"].map((t) => (
                    <option key={t} value={t}>{t.toUpperCase()}</option>
                  ))}
                </select>
              </div>

              {/* Volumen nominal */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase block">Volumen Nominal (mL)</label>
                <div className="flex gap-2">
                  {["100", "240", "275"].map((v) => (
                    <button key={v}
                      onClick={() => setData({ ...data, nominal: v, useCustomNominal: false, epi: { ...data.epi, v2: v } })}
                      className={`flex-1 py-3 rounded-xl text-sm font-black transition-all ${
                        !data.useCustomNominal && data.nominal === v
                          ? "bg-[#65C4EB] text-slate-900 shadow-md"
                          : "bg-slate-100 text-slate-500"
                      }`}>
                      {v}
                    </button>
                  ))}
                  <button
                    onClick={() => setData({ ...data, useCustomNominal: true })}
                    className={`flex-1 py-3 rounded-xl text-sm font-black transition-all ${
                      data.useCustomNominal ? "bg-[#BDABF5] text-white shadow-md" : "bg-slate-100 text-slate-500"
                    }`}>
                    Otro
                  </button>
                </div>
                {data.useCustomNominal && (
                  <input type="number" inputMode="decimal" min="1" placeholder="Ej: 150"
                    value={data.nominalCustom}
                    onChange={(e) => setData({ ...data, nominalCustom: e.target.value, epi: { ...data.epi, v2: e.target.value } })}
                    className="w-full p-3 bg-[#BDABF5]/10 rounded-xl outline-none border border-[#BDABF5]/30 font-bold text-slate-800 text-center sm:text-left"
                    style={{ fontSize: "16px" }} autoFocus />
                )}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase block">Vía Administración</label>
                <select value={data.via}
                  onChange={(e) => setData({
                    ...data, via: e.target.value,
                    ofa: e.target.value === "Intravenosa" ? data.ofa : false,
                    cantidadFarmacos: Math.min(data.cantidadFarmacos || 1, 5),
                    farmacos: Array(5).fill(0).map(() => ({ nombre: "", vol: 0, dosis: "", max: "" })),
                  })}
                  className="w-full p-3 bg-slate-50 rounded-xl outline-none border border-slate-100"
                  style={{ fontSize: "16px" }}>
                  {["Intravenosa", "Epidural", "Subcutánea"].map((v) => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase block">Cantidad de Fármacos</label>
                <select value={data.cantidadFarmacos}
                  onChange={(e) => setData({ ...data, cantidadFarmacos: Number(e.target.value) })}
                  className="w-full p-3 bg-slate-50 rounded-xl outline-none border border-slate-100"
                  style={{ fontSize: "16px" }}>
                  {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>{num} {num === 1 ? "Fármaco" : "Fármacos"}</option>
                  ))}
                </select>
              </div>

              {data.via === "Intravenosa" && (
                <label className="md:col-span-2 flex items-center bg-slate-50 p-4 rounded-xl border border-slate-100 cursor-pointer">
                  <input type="checkbox" checked={data.ofa}
                    onChange={(e) => setData({ ...data, ofa: e.target.checked })}
                    className="w-6 h-6 mr-4 accent-[#65C4EB]" />
                  <span className="text-sm font-black text-slate-700 uppercase">Infusión Sin Opioides (OFA)</span>
                </label>
              )}
            </div>

            {/* ✅ Fix #6: todas las advertencias ANTES de duración estimada */}
            <div className="space-y-3">

              {/* ✅ Fix #1: texto OFA corregido */}
              {showOfa && (
                <div className="bg-emerald-50 p-4 rounded-2xl flex items-start gap-3 border border-emerald-200">
                  <AlertTriangleIcon className="w-6 h-6 text-emerald-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-black uppercase text-emerald-800">Esquema Libre de Opioides (OFA)</p>
                    <p className="text-sm font-bold text-emerald-700 leading-tight mt-1">
                      Medicamentos <span className="font-black uppercase">Fentanilo, Morfina, Meperidina y Tramadol</span> no están disponibles.
                    </p>
                  </div>
                </div>
              )}

              {/* ✅ Fix #2: solo IV, texto corregido */}
              {showEdad && (
                <div className="bg-amber-50 p-4 rounded-2xl flex items-start gap-3 border border-amber-200">
                  <AlertTriangleIcon className="w-6 h-6 text-amber-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-black uppercase text-amber-800">Paciente Adulto Mayor</p>
                    <p className="text-sm font-bold text-amber-700 leading-tight mt-1">
                      Considerar reducción empírica de dosis entre <span className="font-black text-amber-900">30% y 50%</span>.
                    </p>
                  </div>
                </div>
              )}

              {/* ✅ Fix #3 & #5: solo una advertencia PCA, rojo claro, texto correcto */}
              {showPca && (
                <div className="bg-red-50 p-4 rounded-2xl flex items-start gap-3 border border-red-200">
                  <AlertTriangleIcon className="w-6 h-6 text-red-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-black uppercase text-red-700">ATENCIÓN: USO DE PCA</p>
                    <p className="text-sm font-bold text-red-600 leading-relaxed mt-1">
                      La duración estimada puede verse afectada, ya que la PCA administra 0.5 mL cada 30 minutos. Limitar a máximo 4 bolos/día.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* ✅ Fix #4: duración con 1 decimal — DESPUÉS de las advertencias */}
            <div className="bg-[#65C4EB]/10 p-4 rounded-2xl flex items-start gap-3">
              <ClockIcon className="w-7 h-7 text-[#65C4EB] mt-0.5 shrink-0" />
              <div>
                <p className="text-[11px] font-black uppercase text-slate-500">Duración Estimada:</p>
                <p className="text-2xl font-black text-[#65C4EB] leading-tight">
                  {calc.dias} días ≈ {Math.round(calc.hrs)} horas
                </p>
              </div>
            </div>
          </section>

          {/* Epidural */}
          {data.via === "Epidural" && (
            <section className="bg-white p-5 rounded-[2rem] border border-slate-100 space-y-5 shadow-sm">
              <div className="font-black text-[#F39169] text-sm uppercase">Concentración epidural</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-3">
                  {masterMedicamentos
                    .filter((m): m is (typeof masterMedicamentos)[number] & { c1: number } => "c1" in m && typeof m.c1 === "number")
                    .map((m) => (
                      <label key={m.nombre}
                        className={`flex items-center p-3 border-2 rounded-2xl cursor-pointer ${
                          data.epi.anes === m.nombre ? "bg-[#F9CE6F]/20 border-[#F9CE6F]" : "bg-white border-slate-100"
                        }`}>
                        <input type="radio" checked={data.epi.anes === m.nombre}
                          onChange={() => setData({ ...data, epi: { ...data.epi, anes: m.nombre, c1: m.c1 } })}
                          className="w-5 h-5 mr-3" />
                        <span className="text-sm font-bold">{m.nombre}</span>
                      </label>
                    ))}
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-black text-[#F39169] uppercase tracking-wider block mb-1">CONC. FINAL (C₂ %)</label>
                    <input type="number" inputMode="decimal" step="0.001" value={data.epi.c2}
                      onChange={(e) => setData({ ...data, epi: { ...data.epi, c2: e.target.value } })}
                      className="w-full p-3 bg-white border border-slate-100 rounded-xl font-black text-slate-800 outline-none"
                      style={{ fontSize: "16px" }} placeholder="0.125" />
                  </div>
                  <div className="bg-[#F39169] px-4 py-5 rounded-[1.5rem] text-white text-center">
                    <p className="text-xs font-black uppercase tracking-widest mb-1 opacity-90">VOLUMEN REQUERIDO (V₁)</p>
                    <div className="flex items-baseline justify-center gap-2 mb-4">
                      <span className="text-5xl font-black">
                        {Number(data.epi.c2) > 0 && Number(data.epi.v2) > 0
                          ? Math.round((Number(data.epi.c2) * Number(data.epi.v2)) / data.epi.c1) : 0}
                      </span>
                      <span className="text-2xl font-bold opacity-90">mL</span>
                    </div>
                    <button onClick={applyEpi}
                      className="w-full bg-white text-[#F39169] font-black text-sm py-3 rounded-xl uppercase">
                      APLICAR A MEZCLA
                    </button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Fármacos */}
          <section className="bg-white p-4 sm:p-5 rounded-[2rem] border border-slate-100 space-y-5 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 font-black text-[#BDABF5] text-sm uppercase">
                <BeakerIcon className="w-5 h-5" />
                Fármacos
              </div>
              <button onClick={resetFarmacos}
                className="inline-flex items-center gap-1.5 bg-slate-100 text-[#F39169] px-3 py-2 rounded-lg text-xs font-black uppercase">
                <Trash2Icon className="w-4 h-4" />
                Limpiar
              </button>
            </div>

            <div className="space-y-4">
              {data.farmacos.slice(0, calc.lim).map((f, i) => (
                <div key={i} className="flex flex-col gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <div>
                    <label className="text-xs font-black text-[#BDABF5] uppercase mb-1.5 block">Fármaco {i + 1}</label>
                    <select value={f.nombre} onChange={(e) => updateF(i, "nombre", e.target.value)}
                      className="w-full p-2.5 h-11 bg-slate-50 rounded-xl font-bold outline-none border border-slate-100"
                      style={{ fontSize: "16px" }}>
                      <option value="">Seleccione...</option>
                      {masterMedicamentos
                        .filter((m) => {
                          if (data.via === "Intravenosa" && !m.iv) return false;
                          if (data.via === "Epidural" && !m.epi) return false;
                          if (data.via === "Subcutánea" && !m.sub) return false;
                          if (data.ofa && "opioide" in m && m.opioide) return false;
                          if ("soloSinOpioides" in m && m.soloSinOpioides && !data.ofa) return false;
                          return true;
                        })
                        .sort((a, b) => a.nombre.localeCompare(b.nombre))
                        .map((m) => <option key={m.nombre} value={m.nombre}>{m.nombre}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-black text-slate-400 uppercase block mb-1.5 text-center">Dosis Total Infusión</label>
                    <input type="text" value={f.dosis} onChange={(e) => updateF(i, "dosis", e.target.value)}
                      className="w-full p-2.5 h-11 bg-[#BDABF5]/5 rounded-xl font-black border border-slate-100 outline-none text-center"
                      style={{ fontSize: "16px" }} placeholder="Ej: 120 mg" />
                  </div>

                  <div>
                    <label className="text-xs font-black text-slate-400 uppercase block mb-1.5 text-center">Máx Día</label>
                    <div className="h-11 flex items-center justify-center text-sm bg-slate-50 rounded-xl font-black text-slate-500 uppercase border border-slate-100">
                      {f.max || "---"}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-black text-slate-400 uppercase block mb-1.5 text-center">Vol (mL)</label>
                    <input type="number" inputMode="decimal" value={f.vol || ""} onChange={(e) => updateF(i, "vol", e.target.value)}
                      className="w-full h-11 p-2.5 bg-white rounded-xl font-black border border-slate-100 outline-none text-center"
                      style={{ fontSize: "16px" }} />
                  </div>
                </div>
              ))}
            </div>

            {(calc.errors.length > 0 || calc.warns.length > 0 || calc.doseAlerts.length > 0) && (
              <div className="space-y-3 mt-4">
                {calc.warns.map((w, i) => (
                  <div key={i} className="p-3 bg-[#F9CE6F]/20 text-slate-800 text-xs font-bold border border-[#F9CE6F] rounded-xl flex items-center gap-3">
                    <AlertTriangleIcon className="w-5 h-5 shrink-0 text-[#F39169]" />{w}
                  </div>
                ))}
                {calc.errors.map((e, i) => (
                  <div key={i} className="p-3 bg-[#F39169]/10 text-[#F39169] text-xs font-black border border-[#F39169]/30 rounded-xl flex items-center gap-3">
                    <XCircleIcon className="w-5 h-5 shrink-0" />{e}
                  </div>
                ))}
                {calc.doseAlerts.map((a, i) => (
                  <div key={i} className="p-3 bg-[#F39169]/20 text-[#F39169] text-xs font-black border border-[#F39169]/50 rounded-xl flex items-center gap-3">
                    <AlertTriangleIcon className="w-5 h-5 shrink-0" />{a}
                  </div>
                ))}
              </div>
            )}

            <div className="bg-[#BDABF5] p-5 rounded-2xl text-white flex justify-between items-center mt-4">
              <span className="text-sm font-black uppercase opacity-90 tracking-widest">Volumen Fármacos</span>
              <span className="text-3xl font-black">{calc.volF} mL</span>
            </div>
          </section>

          {/* Resumen */}
          <section className="mt-8 pt-8 border-t-2 border-dashed border-slate-100">
            {!isBlocked ? (
              <div className="bg-[#65C4EB]/10 rounded-3xl p-6 border border-[#65C4EB]/30">
                <div className="space-y-5">
                  <div className="flex items-center gap-2 text-[#65C4EB] font-black uppercase text-sm tracking-widest">
                    <ClipboardListIcon className="w-5 h-5" />
                    Resumen de Carga
                  </div>
                  <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                      <p className="text-xs text-slate-500 uppercase font-black mb-1">Volumen para completar</p>
                      <div className="flex items-baseline justify-center md:justify-start gap-2">
                        <span className="text-7xl font-black text-[#65C4EB]">{calc.volS}</span>
                        <span className="text-3xl font-bold text-[#65C4EB]">mL</span>
                      </div>
                    </div>
                    <div className="w-full md:w-auto bg-white px-6 py-5 rounded-2xl border border-slate-100 shadow-sm">
                      <p className="text-xs font-black text-slate-600 uppercase leading-relaxed">
                        Sugerencia:<br />
                        <span className="text-[#65C4EB] text-sm">Solución Salina 0.9%</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-[#F39169]/10 p-8 rounded-3xl border-2 border-[#F39169]/30 text-center">
                <XCircleIcon className="w-14 h-14 text-[#F39169] mx-auto mb-4" />
                <h3 className="text-[#F39169] font-black text-xl uppercase mb-2">Mezcla No Permitida</h3>
                <p className="text-sm text-slate-600 font-bold px-4 leading-relaxed">
                  Corrige las alertas críticas para desbloquear el cálculo.
                </p>
              </div>
            )}
          </section>

          <div className="bg-slate-50 p-5 rounded-2xl text-xs text-center text-slate-500 leading-relaxed border border-slate-100">
            <p className="font-black uppercase mb-2 text-slate-600 tracking-widest">Aviso Médico Legal</p>
            <p className="font-medium">
              Herramienta de apoyo académico para el <strong>Curso Taller de Bombas Elastoméricas</strong>. No sustituye el criterio clínico. Los cálculos son referenciales.
            </p>
          </div>
        </div>

        <PageFooter />
      </div>
    </div>
  );
}
