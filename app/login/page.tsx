"use client";

import { useState } from "react";

type Mode = "login" | "first" | "forgot";

export default function LoginPage() {
  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [document, setDocument] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleLogin() {
    setMessage("");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.ok && data.redirectTo) {
      window.location.href = data.redirectTo;
      return;
    }

    setMessage(data.error || "Ocurrió un error");
  }

  async function handleFirstAccess() {
    setMessage("");

    const res = await fetch("/api/auth/first-access", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, document, password }),
    });

    const data = await res.json();
    setMessage(data.message || data.error || "Ocurrió un error");
  }

  async function handleForgotPassword() {
    setMessage("");

    const res = await fetch("/api/auth/reset-password", {
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

      <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
        <button onClick={() => setMode("login")}>Iniciar sesión</button>
        <button onClick={() => setMode("first")}>Primer acceso</button>
        <button onClick={() => setMode("forgot")}>Olvidé mi contraseña</button>
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

      {mode !== "forgot" && (
        <input
          type="password"
          placeholder={mode === "first" ? "Crea tu contraseña" : "Contraseña"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: "block", marginBottom: 12, width: "100%" }}
        />
      )}

      {mode === "login" && <button onClick={handleLogin}>Entrar</button>}
      {mode === "first" && <button onClick={handleFirstAccess}>Validar y crear acceso</button>}
      {mode === "forgot" && <button onClick={handleForgotPassword}>Enviar recuperación</button>}

      {message && <p style={{ marginTop: 16 }}>{message}</p>}
    </div>
  );
}