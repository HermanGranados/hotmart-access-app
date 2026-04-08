"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [document, setDocument] = useState("");
  const [mode, setMode] = useState<"first" | "magic">("first");
  const [message, setMessage] = useState("");

  async function handleFirstAccess() {
    setMessage("");

    const res = await fetch("/api/auth/first-access", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, document }),
    });

    const data = await res.json();
    setMessage(data.message || data.error || "Ocurrió un error");
  }

  async function handleMagicLink() {
    setMessage("");

    const res = await fetch("/api/auth/magic-link", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    setMessage(data.message || data.error || "Ocurrió un error");
  }

  return (
    <div style={{ padding: 40, maxWidth: 420 }}>
      <h1>Login Academia de Anestesia</h1>

      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        <button onClick={() => setMode("first")}>Primer acceso</button>
        <button onClick={() => setMode("magic")}>Ya tengo acceso</button>
      </div>

      <input
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", marginBottom: 12, width: "100%" }}
      />

      {mode === "first" && (
        <input
          placeholder="Documento"
          value={document}
          onChange={(e) => setDocument(e.target.value)}
          style={{ display: "block", marginBottom: 12, width: "100%" }}
        />
      )}

      {mode === "first" ? (
        <button onClick={handleFirstAccess}>Validar y enviar acceso</button>
      ) : (
        <button onClick={handleMagicLink}>Enviarme enlace</button>
      )}

      {message && <p style={{ marginTop: 16 }}>{message}</p>}
    </div>
  );
}