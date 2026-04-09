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

type FarmacoState = {
  nombre: string;
  vol: number | string;
  dosis: string;
  max: string;
};

type Props = {
  onBack: () => void;
};

export default function CalcANALGESIQ({ onBack }: Props) {
  const [data, setData] = useState({
    via: "Intravenosa",
    nominal: "240",
    flujo: "2",
    ofa: false,
    tipoBomba: "flujo fijo",
    edad: "",
    cantidadFarmacos: 1,
    farmacos: Array(5).fill(0).map(() => ({ nombre: "", vol: 0, dosis: "", max: "" })) as FarmacoState[],
    epi: { anes: "Bupivacaína 0.5%", c1: 0.5, c2: "", v2: "240" },
  });

  const [calc, setCalc] = useState({
    hrs: 0,
    dias: "0.00",
    volF: 0,
    volS: 0,
    lim: 1,
    maxVia: 5,
    errors: [] as string[],
    warns: [] as string[],
    doseAlerts: [] as string[],
  });

  useEffect(() => {
    const maxVia = 5;
    const activeCount = Math.min(data.cantidadFarmacos || 1, maxVia);
    const active = data.farmacos.slice(0, activeCount);

    const volF = active.reduce((acc, f) => acc + (Number(f.vol) || 0), 0);
    const hrs = Number(data.flujo) > 0 ? Number(data.nominal) / Number(data.flujo) : 0;
    const dias = (hrs / 24).toFixed(2);

    const eM: string[] = [];
    const wM: string[] = [];
    const dA: string[] = [];

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
  const maxMg = maxMgMatch
    ? parseInputToMg(
        maxMgMatch[1] + (maxText.includes("g") ? "g" : "mg"),
        f.nombre
      )
    : null;

  if (inMg && maxMg && Number(dias) > 0 && inMg / Number(dias) > maxMg * 1.001) {
    dA.push(`¡SOBREDOSIS! ${f.nombre} supera el límite seguro de ${maxText}.`);
  }
});

    setCalc({
      hrs,
      dias,
      volF,
      volS: Math.max(0, Number(data.nominal) - volF),
      lim: activeCount,
      maxVia,
      errors: eM,
      warns: wM,
      doseAlerts: dA,
    });
  }, [data]);

  function updateF(idx: number, field: "nombre" | "vol" | "dosis" | "max", val: string) {
    const next = [...data.farmacos];

    if (field === "nombre") {
      const m = masterMedicamentos.find((x) => x.nombre === val);
      if (m) {
        const d =
          data.via === "Epidural" && "concentracionEpi" in m && m.concentracionEpi
            ? `${m.concentracionEpi.val * Number(data.nominal)} ${m.concentracionEpi.unit}`
            : "";

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

        if (m.presStr.toLowerCase().includes("mcg")) {
          displayVal = Math.round(mgCalc * 1000);
          unit = "mcg";
        } else if (mgCalc >= 1000 && (m.nombre === "Dipirona" || m.nombre === "Paracetamol")) {
          displayVal = mgCalc / 1000;
          unit = "g";
        } else {
          displayVal = Math.round(mgCalc * 100) / 100;
        }

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
      if (nextF[i].nombre.includes("acaína") || nextF[i].nombre === "") {
        tidx = i;
        break;
      }
    }

    if (tidx === -1) tidx = 0;

    const med = masterMedicamentos.find((m) => m.nombre === anes);
    nextF[tidx] = { nombre: anes, dosis: `${Number(c2)}%`, vol: v1, max: (med as any)?.max || "" };

    setData({
      ...data,
      farmacos: nextF,
      cantidadFarmacos: Math.max(data.cantidadFarmacos, tidx + 1),
    });
  }

  function resetFarmacos() {
    setData({
      ...data,
      farmacos: Array(5).fill(0).map(() => ({ nombre: "", vol: 0, dosis: "", max: "" })),
    });
  }

  const isBlocked = calc.errors.length > 0 || calc.doseAlerts.length > 0;

  return (
    <div className="min-h-screen bg-white sm:bg-[#F0EAE6] font-sans text-slate-800">
      <div className="max-w-md mx-auto bg-white min-h-screen sm:border-x border-slate-200 flex flex-col">
        <header className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
          <div className="h-20 flex items-center justify-center relative px-4">
            <button onClick={onBack} className="absolute left-4 p-2 rounded-full hover:bg-[#F3EDE9] text-slate-600 transition-colors">
              ←
            </button>
            <h1 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#65C4EB] via-[#BDABF5] to-[#F39169] bg-clip-text text-transparent tracking-wide">
              VAPORA.app
            </h1>
          </div>
        </header>

        <div className="bg-white p-6 md:p-8 text-center relative overflow-hidden border-b border-[#F0EAE6]">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#65C4EB] via-[#BDABF5] to-[#F39169]" />
          <h1 className="text-3xl md:text-4xl font-black tracking-wider">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#65C4EB] to-[#BDABF5]">ANALGES</span>
            <span className="text-[#BDABF5]">IQ</span>
          </h1>
          <p className="text-slate-400 text-xs md:text-sm font-bold uppercase tracking-[0.2em] mt-2 mb-1">
            Calculadora de Bombas Elastoméricas
          </p>
        </div>

        <div className="p-4 sm:p-6 space-y-8 flex-grow">
          <section className="space-y-5">
            <div className="flex items-center gap-2 border-b border-[#F0EAE6] pb-2 font-black uppercase text-sm md:text-base text-slate-700">
              <SettingsIcon className="w-6 h-6 text-[#65C4EB]" />
              PARÁMETROS GENERALES
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-bold text-slate-400 uppercase block">Edad (Años)</label>
                <input
                  type="number"
                  min="0"
                  value={data.edad}
                  onChange={(e) => setData({ ...data, edad: e.target.value })}
                  className="w-full p-3 bg-[#F3EDE9] rounded-xl text-base outline-none"
                  placeholder="Ej: 68"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-bold text-slate-400 uppercase block">Flujo de la Bomba (mL/h)</label>
                <input
                  type="number"
                  min="0"
                  max="14"
                  step="1"
                  value={data.flujo}
                  onKeyDown={(e) => {
                    if ([".", ",", "e", "E", "-", "+"].includes(e.key)) e.preventDefault();
                  }}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === "") setData({ ...data, flujo: "" });
                    else if (Number(val) <= 14) setData({ ...data, flujo: parseInt(val, 10).toString() });
                  }}
                  placeholder="Máx: 14"
                  className="w-full p-3 bg-[#F3EDE9] rounded-xl text-base outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-bold text-slate-400 uppercase block">Tipo de Bomba</label>
                <select
                  value={data.tipoBomba}
                  onChange={(e) => setData({ ...data, tipoBomba: e.target.value })}
                  className="w-full p-3 bg-[#F3EDE9] rounded-xl text-base outline-none"
                >
                  {["flujo fijo", "flujo fijo + PCA", "flujo múltiple", "flujo múltiple + PCA"].map((t) => (
                    <option key={t} value={t}>{t.toUpperCase()}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-bold text-slate-400 uppercase block">Volumen Nominal (mL)</label>
                <div className="flex gap-2">
                  {["100", "240", "275"].map((v) => (
                    <button
                      key={v}
                      onClick={() => setData({ ...data, nominal: v, epi: { ...data.epi, v2: v } })}
                      className={`flex-1 py-3 rounded-xl text-sm font-black transition-all ${
                        data.nominal === String(v)
                          ? "bg-[#65C4EB] text-slate-900 shadow-md"
                          : "bg-[#F3EDE9] text-slate-500"
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-bold text-slate-400 uppercase block">Vía Administración</label>
                <select
                  value={data.via}
                  onChange={(e) =>
                    setData({
                      ...data,
                      via: e.target.value,
                      ofa: e.target.value === "Intravenosa" ? data.ofa : false,
                      cantidadFarmacos: Math.min(data.cantidadFarmacos || 1, 5),
                      farmacos: Array(5).fill(0).map(() => ({ nombre: "", vol: 0, dosis: "", max: "" })),
                    })
                  }
                  className="w-full p-3 bg-[#F3EDE9] rounded-xl text-base outline-none"
                >
                  {["Intravenosa", "Epidural", "Subcutánea"].map((v) => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-bold text-slate-400 uppercase block">Cantidad de Fármacos</label>
                <select
                  value={data.cantidadFarmacos}
                  onChange={(e) => setData({ ...data, cantidadFarmacos: Number(e.target.value) })}
                  className="w-full p-3 bg-[#F3EDE9] rounded-xl text-base outline-none"
                >
                  {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>{num} {num === 1 ? "Fármaco" : "Fármacos"}</option>
                  ))}
                </select>
              </div>

              {data.via === "Intravenosa" && (
                <label className="md:col-span-2 flex items-center bg-[#F3EDE9]/50 p-4 rounded-xl border border-[#F0EAE6] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={data.ofa}
                    onChange={(e) => setData({ ...data, ofa: e.target.checked })}
                    className="w-6 h-6 mr-4"
                  />
                  <span className="text-sm font-black text-slate-700 uppercase">Infusión Sin Opioides (OFA)</span>
                </label>
              )}
            </div>

            {data.ofa && data.via === "Intravenosa" && (
              <div className="bg-emerald-50 p-5 rounded-2xl flex items-start gap-4 border border-emerald-200">
                <AlertTriangleIcon className="w-7 h-7 text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-black uppercase text-emerald-800 tracking-wide">Esquema Libre de Opioides (OFA)</p>
                  <p className="text-sm font-bold text-emerald-700 leading-tight mt-1.5">
                    Medicamentos <span className="font-black text-emerald-900 uppercase">Fentanilo, Morfina, Meperidina y Tramadol</span> no están disponibles.
                  </p>
                </div>
              </div>
            )}

            {Number(data.edad) > 65 && (
              <div className="bg-amber-50 p-5 rounded-2xl flex items-start gap-4 border border-amber-200">
                <AlertTriangleIcon className="w-7 h-7 text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-black uppercase text-amber-800 tracking-wide">Paciente Adulto Mayor</p>
                  <p className="text-sm font-bold text-amber-700 leading-tight mt-1.5">
                    Considerar reducción empírica de dosis entre <span className="font-black text-amber-900">30% y 50%</span>.
                  </p>
                </div>
              </div>
            )}

            <div className="bg-[#65C4EB]/10 p-5 rounded-2xl flex items-start gap-4">
              <ClockIcon className="w-8 h-8 text-[#65C4EB] mt-1 shrink-0" />
              <div>
                <p className="text-[11px] font-black uppercase text-slate-500">Duración Estimada de la Bomba:</p>
                <p className="text-2xl font-black text-[#65C4EB] leading-tight">
                  {calc.dias} Días ≈ {Math.round(calc.hrs)} horas
                </p>
              </div>
            </div>
          </section>

          {data.via === "Epidural" && (
            <section className="bg-white p-6 rounded-[2rem] border border-[#F3EDE9] space-y-6 shadow-sm">
              <div className="flex items-center gap-2 font-black text-[#F39169] text-sm uppercase">
                Concentración epidural
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  {masterMedicamentos.filter((m) => "c1" in m && m.c1).map((m) => (
                    <label
                      key={m.nombre}
                      className={`flex items-center p-4 border-2 rounded-2xl cursor-pointer ${
                        data.epi.anes === m.nombre ? "bg-[#F9CE6F]/20 border-[#F9CE6F]" : "bg-white border-[#F3EDE9]"
                      }`}
                    >
                      <input
                        type="radio"
                        checked={data.epi.anes === m.nombre}
                        onChange={() => setData({ ...data, epi: { ...data.epi, anes: m.nombre, c1: m.c1 as number } })}
                        className="w-6 h-6 mr-4"
                      />
                      <span className="text-base font-bold">{m.nombre}</span>
                    </label>
                  ))}
                </div>

                <div className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-[#F39169] uppercase tracking-wider block">CONC. FINAL DESEADA (C₂ %)</label>
                    <input
                      type="number"
                      step="0.001"
                      value={data.epi.c2}
                      onChange={(e) => setData({ ...data, epi: { ...data.epi, c2: e.target.value } })}
                      className="w-full p-4 bg-white border border-[#F3EDE9] rounded-xl text-xl font-black text-slate-800 outline-none"
                      placeholder="0.125"
                    />
                  </div>

                  <div className="bg-[#F39169] px-5 py-7 rounded-[1.5rem] text-white shadow-lg text-center">
                    <p className="text-xs font-black uppercase tracking-widest mb-1 opacity-90">VOLUMEN REQUERIDO (V₁)</p>
                    <div className="flex items-baseline justify-center gap-2 mb-5">
                      <span className="text-6xl font-black">
                        {Number(data.epi.c2) > 0 && Number(data.epi.v2) > 0
                          ? Math.round((Number(data.epi.c2) * Number(data.epi.v2)) / data.epi.c1)
                          : 0}
                      </span>
                      <span className="text-3xl font-bold opacity-90">mL</span>
                    </div>
                    <button
                      onClick={applyEpi}
                      className="w-full bg-white text-[#F39169] font-black text-sm py-4 rounded-xl uppercase tracking-wider"
                    >
                      APLICAR A MEZCLA
                    </button>
                  </div>
                </div>
              </div>
            </section>
          )}

          <section className="bg-white p-5 md:p-6 rounded-[2rem] border border-[#F3EDE9] space-y-6 shadow-sm">
            <div className="flex items-center justify-between gap-4 border-b border-[#F3EDE9] pb-4">
              <div className="flex items-center gap-2 font-black text-[#BDABF5] text-sm uppercase">
                <BeakerIcon className="w-6 h-6" />
                FÁRMACOS
              </div>
              <button onClick={resetFarmacos} className="inline-flex items-center gap-1.5 bg-[#F3EDE9] text-[#F39169] px-4 py-2.5 rounded-lg text-xs font-black uppercase">
                <Trash2Icon className="w-4 h-4" />
                Limpiar
              </button>
            </div>

            <div className="space-y-4">
              {data.farmacos.slice(0, calc.lim).map((f, i) => (
                <div key={i} className="flex flex-col gap-3 sm:gap-4 p-5 bg-white rounded-2xl border border-[#F3EDE9] shadow-sm">
                  <div>
                    <label className="text-xs font-black text-[#BDABF5] uppercase mb-1.5 block">Fármaco {i + 1}</label>
                    <select
                      value={f.nombre}
                      onChange={(e) => updateF(i, "nombre", e.target.value)}
                      className="w-full p-2.5 h-12 bg-[#F3EDE9]/30 rounded-xl text-sm sm:text-base font-bold outline-none"
                    >
                      <option value="">Seleccione...</option>
                      {masterMedicamentos
                        .filter((m) => {
                          if (data.via === "Intravenosa" && !m.iv) return false;
                          if (data.via === "Epidural" && !m.epi) return false;
                          if (data.via === "Subcutánea" && !m.sub) return false;
                          if (data.ofa && m.opioide) return false;
                          if ((m as any).soloSinOpioides && !data.ofa) return false;
                          return true;
                        })
                        .sort((a, b) => a.nombre.localeCompare(b.nombre))
                        .map((m) => (
                          <option key={m.nombre} value={m.nombre}>{m.nombre}</option>
                        ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-black text-slate-400 uppercase block mb-1.5">Dosis Total Infusión</label>
                    <input
                      type="text"
                      value={f.dosis}
                      onChange={(e) => updateF(i, "dosis", e.target.value)}
                      className="w-full p-2.5 h-12 bg-[#BDABF5]/5 rounded-xl text-sm sm:text-base font-black border border-[#F0EAE6] outline-none"
                      placeholder="Ej: 120 mg"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-black text-slate-400 uppercase block mb-1.5">Máx Día</label>
                    <div className="h-12 flex items-center justify-center text-xs bg-[#F3EDE9]/50 rounded-xl font-black text-slate-500 uppercase border border-[#F0EAE6]">
                      {f.max || "---"}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-black text-slate-400 uppercase block mb-1.5">Vol (mL)</label>
                    <input
                      type="number"
                      value={f.vol || ""}
                      onChange={(e) => updateF(i, "vol", e.target.value)}
                      className="w-full h-12 p-2.5 bg-white rounded-xl text-sm sm:text-base font-black border border-[#F3EDE9] outline-none"
                    />
                  </div>
                </div>
              ))}
            </div>

            {(calc.errors.length > 0 || calc.warns.length > 0 || calc.doseAlerts.length > 0) && (
              <div className="space-y-3 mt-5">
                {calc.warns.map((w, i) => (
                  <div key={i} className="p-4 bg-[#F9CE6F]/20 text-slate-800 text-xs sm:text-sm font-bold border border-[#F9CE6F] rounded-xl flex items-center gap-3">
                    <AlertTriangleIcon className="w-5 h-5 shrink-0 text-[#F39169]" />
                    {w}
                  </div>
                ))}
                {calc.errors.map((e, i) => (
                  <div key={i} className="p-4 bg-[#F39169]/10 text-[#F39169] text-xs sm:text-sm font-black border border-[#F39169]/30 rounded-xl flex items-center gap-3">
                    <XCircleIcon className="w-5 h-5 shrink-0 text-[#F39169]" />
                    {e}
                  </div>
                ))}
                {calc.doseAlerts.map((a, i) => (
                  <div key={i} className="p-4 bg-[#F39169]/20 text-[#F39169] text-xs sm:text-sm font-black border border-[#F39169]/50 rounded-xl flex items-center gap-3">
                    <AlertTriangleIcon className="w-5 h-5 shrink-0 text-[#F39169]" />
                    {a}
                  </div>
                ))}
              </div>
            )}

            <div className="bg-[#BDABF5] p-6 rounded-2xl text-white shadow-xl flex justify-between items-center mt-4">
              <span className="text-sm font-black uppercase opacity-90 tracking-widest">Volumen Fármacos</span>
              <span className="text-3xl font-black">{calc.volF} mL</span>
            </div>
          </section>

          <section className="mt-10 pt-10 border-t-2 border-dashed border-[#F3EDE9]">
            {!isBlocked ? (
              <div className="bg-[#65C4EB]/10 rounded-3xl p-8 border border-[#65C4EB]/30 shadow-inner">
                <div className="space-y-6">
                  <div className="flex items-center gap-2 text-[#65C4EB] font-black uppercase text-base tracking-widest">
                    <ClipboardListIcon className="w-6 h-6" />
                    Resumen de Carga
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                      <p className="text-xs text-slate-500 uppercase font-black mb-2">Volumen para completar infusión</p>
                      <div className="flex items-baseline justify-center md:justify-start gap-2">
                        <span className="text-7xl font-black text-[#65C4EB]">{calc.volS}</span>
                        <span className="text-3xl font-bold text-[#65C4EB]">mL</span>
                      </div>
                    </div>

                    <div className="w-full md:w-auto bg-white px-8 py-6 rounded-2xl border border-[#F3EDE9] shadow-sm">
                      <p className="text-xs font-black text-slate-600 uppercase leading-relaxed">
                        Sugerencia:
                        <br />
                        <span className="text-[#65C4EB] text-sm">Solución Salina 0.9%</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-[#F39169]/10 p-10 rounded-3xl border-2 border-[#F39169]/30 text-center shadow-lg">
                <XCircleIcon className="w-16 h-16 text-[#F39169] mx-auto mb-5" />
                <h3 className="text-[#F39169] font-black text-2xl uppercase mb-3">Mezcla No Permitida</h3>
                <p className="text-sm text-slate-600 font-bold px-6 leading-relaxed">
                  Por seguridad, corrige las alertas críticas indicadas para desbloquear el cálculo final de carga.
                </p>
              </div>
            )}
          </section>
        </div>

        <div className="bg-[#F3EDE9] p-8 text-xs sm:text-sm text-center text-slate-600 leading-relaxed border-t border-[#F0EAE6]">
          <p className="font-black uppercase mb-3 text-slate-700 tracking-widest">Aviso Médico Legal y Descargo de Responsabilidad</p>
          <p className="max-w-3xl mx-auto font-medium">
            Esta aplicación es una herramienta de apoyo académico diseñada exclusivamente para el <strong>Curso Taller de Bombas Elastoméricas</strong> y no sustituye el criterio clínico profesional. Los cálculos generados son referenciales y no constituyen protocolos de prescripción. El profesional asume la responsabilidad absoluta de la verificación de dosis.
          </p>
        </div>
      </div>
    </div>
  );
}