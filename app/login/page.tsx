"use client";

import { useState } from "react";

type Mode = "login" | "first" | "forgot";

export default function LoginPage() {
  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [document, setDocument] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          password,
        }),
      });

      const data = await res.json();
      console.log("LOGIN RESPONSE:", data);

      if (data.ok && data.redirectTo) {
        window.location.href = data.redirectTo;
        return;
      }

      setMessage(data.error || "Ocurrió un error");
    } catch (error) {
      setMessage("No se pudo conectar con el servidor");
    } finally {
      setLoading(false);
    }
  }

  async function handleFirstAccess() {
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/first-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          document: document.trim(),
          password,
        }),
      });

      const data = await res.json();
      setMessage(data.message || data.error || "Ocurrió un error");
    } catch {
      setMessage("No se pudo conectar con el servidor");
    } finally {
      setLoading(false);
    }
  }

  async function handleForgotPassword() {
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();
      setMessage(data.message || data.error || "Ocurrió un error");
    } catch {
      setMessage("No se pudo conectar con el servidor");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: 40, maxWidth: 420 }}>
      <h1>Login Academia de Anestesia</h1>

      <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
        <button onClick={() => setMode("login")} disabled={loading}>
          Iniciar sesión
        </button>
        <button onClick={() => setMode("first")} disabled={loading}>
          Primer acceso
        </button>
        <button onClick={() => setMode("forgot")} disabled={loading}>
          Olvidé mi contraseña
        </button>
      </div>

      <input
        type="email"
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

      {mode === "login" && (
        <button onClick={handleLogin} disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </button>
      )}

      {mode === "first" && (
        <button onClick={handleFirstAccess} disabled={loading}>
          {loading ? "Validando..." : "Validar y crear acceso"}
        </button>
      )}

      {mode === "forgot" && (
        <button onClick={handleForgotPassword} disabled={loading}>
          {loading ? "Enviando..." : "Enviar recuperación"}
        </button>
      )}

      {message && <p style={{ marginTop: 16 }}>{message}</p>}
    </div>
  );
}