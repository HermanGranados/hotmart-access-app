"use client";

import { useState, useEffect } from "react";

export default function VaporaClient() {
  const [vistaActual, setVistaActual] = useState("home");

  return (
    <div style={{ padding: 40 }}>
      <h1>Vapora (Next Version)</h1>

      {vistaActual === "home" && (
        <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
          <button onClick={() => setVistaActual("calc1")}>MACFlow</button>
          <button onClick={() => setVistaActual("calc2")}>LOCUDose</button>
          <button onClick={() => setVistaActual("calc3")}>ANALGESIQ</button>
        </div>
      )}

      {vistaActual === "calc1" && <div style={{ marginTop: 20 }}>MACFlow aquí</div>}
      {vistaActual === "calc2" && <div style={{ marginTop: 20 }}>LOCUDose aquí</div>}
      {vistaActual === "calc3" && <div style={{ marginTop: 20 }}>ANALGESIQ aquí</div>}
    </div>
  );
}