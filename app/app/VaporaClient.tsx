"use client";

import { useState } from "react";

export default function VaporaClient() {
  const [vistaActual, setVistaActual] = useState("home");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow rounded-xl p-6">
        
        <h1 className="text-2xl font-bold text-center mb-6">
          Vapora
        </h1>

        {vistaActual === "home" && (
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
        )}

        {vistaActual === "mac" && (
          <div>
            <p>Calculadora MACFlow (próximo paso)</p>
          </div>
        )}

        {vistaActual === "locu" && (
          <div>
            <p>Calculadora LOCUDose (próximo paso)</p>
          </div>
        )}

        {vistaActual === "analgesiq" && (
          <div>
            <p>Calculadora ANALGESIQ (próximo paso)</p>
          </div>
        )}

      </div>
    </div>
  );
}