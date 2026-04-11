"use client";

import { useState } from "react";

type Mode = "login" | "first" | "forgot";

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="11" width="16" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 1 1 8 0v3" />
    </svg>
  );
}

function IdCardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M8 10h.01" />
      <path d="M12 10h5" />
      <path d="M8 14h8" />
    </svg>
  );
}

function EyeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 3 18 18" />
      <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
      <path d="M9.9 5.2A10.7 10.7 0 0 1 12 5c6.5 0 10 7 10 7a17.6 17.6 0 0 1-3.2 4.2" />
      <path d="M6.6 6.7C3.8 8.5 2 12 2 12a17.8 17.8 0 0 0 5.4 5.5" />
    </svg>
  );
}

export default function LoginPage() {
  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [document, setDocument] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleLogin() {
    setMessage("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), password }),
      });
      const data = await res.json();
      if (data.ok && data.redirectTo) {
        window.location.href = data.redirectTo;
        return;
      }
      setMessage(data.error || "Ocurrió un error");
    } catch {
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), document: document.trim(), password }),
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
        headers: { "Content-Type": "application/json" },
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

  const modeTitle =
    mode === "login"
      ? "Inicia sesión con tu correo"
      : mode === "first"
      ? "Activa tu acceso con tu correo electronico y numero de documento con el que hiciste tu compra en Hotmart"
      : "Recupera tu contraseña";

  const inputBase =
    "flex items-center rounded-2xl border border-white/70 bg-[#f8fafc]/90 px-4 py-[14px] gap-[10px]";
  const iconBase = "h-[17px] w-[17px] text-slate-400 shrink-0";

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-8"
      style={{ background: "#eef2f7", fontFamily: "'Inter', sans-serif" }}
    >
      <div className="w-full max-w-[390px]">

        {/* Card principal */}
        <div
          className="w-full rounded-[36px] border border-white/75 p-8"
          style={{ background: "rgba(255,255,255,0.60)", backdropFilter: "blur(20px)" }}
        >
          {/* Ícono */}
          <div
            className="mx-auto mb-[18px] overflow-hidden rounded-[22px] border border-white/60"
            style={{ width: 84, height: 84, boxShadow: "0 10px 28px rgba(15,23,42,0.13)" }}
          >
            <img
              src="https://academiadeanestesia.com/wp-content/uploads/2026/04/vapora-app-ico-ios.png"
              alt="Vapora"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Título */}
          <h1 className="text-center text-[26px] font-extrabold tracking-tight text-slate-900 mb-1">
            Vapora.app
          </h1>
          <p className="text-center text-[14px] font-medium text-slate-500 mb-6">
            {modeTitle}
          </p>

          {/* Tabs */}
          <div
            className="grid grid-cols-3 gap-1 rounded-2xl p-1 mb-5"
            style={{ background: "rgba(241,245,249,0.85)" }}
          >
            {(["login", "first", "forgot"] as Mode[]).map((m) => (
              <button
                key={m}
                onClick={() => { setMode(m); setMessage(""); }}
                disabled={loading}
                className={`rounded-xl py-2 text-[13px] font-semibold transition ${
                  mode === m
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-400"
                }`}
              >
                {m === "login" ? "Entrar" : m === "first" ? "Activar" : "Recuperar"}
              </button>
            ))}
          </div>

          {/* Campos */}
          <div className="space-y-3">
            {/* Email */}
            <div className={inputBase}>
              <MailIcon className={iconBase} />
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent text-[15px] font-medium text-slate-800 outline-none placeholder:text-slate-400 placeholder:font-normal"
              />
            </div>

            {/* Documento (solo modo activar) */}
            {mode === "first" && (
              <div className={inputBase}>
                <IdCardIcon className={iconBase} />
                <input
                  placeholder="Número de documento"
                  value={document}
                  onChange={(e) => setDocument(e.target.value)}
                  className="w-full bg-transparent text-[15px] font-medium text-slate-800 outline-none placeholder:text-slate-400 placeholder:font-normal"
                />
              </div>
            )}

            {/* Contraseña */}
            {mode !== "forgot" && (
              <div className={inputBase}>
                <LockIcon className={iconBase} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder={mode === "first" ? "Crea tu contraseña" : "Contraseña"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent text-[15px] font-medium text-slate-800 outline-none placeholder:text-slate-400 placeholder:font-normal"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="text-slate-400 hover:text-slate-600 transition"
                >
                  {showPassword ? (
                    <EyeOffIcon className={iconBase} />
                  ) : (
                    <EyeIcon className={iconBase} />
                  )}
                </button>
              </div>
            )}

            {/* Botón acción */}
            <button
              onClick={
                mode === "login"
                  ? handleLogin
                  : mode === "first"
                  ? handleFirstAccess
                  : handleForgotPassword
              }
              disabled={loading}
              className="w-full rounded-2xl py-[14px] text-[17px] font-bold text-white transition disabled:opacity-60"
              style={{
                background: "#2D74DA",
                boxShadow: "0 10px 24px rgba(45,116,218,0.32)",
              }}
            >
              {loading
                ? mode === "login"
                  ? "Entrando..."
                  : mode === "first"
                  ? "Validando..."
                  : "Enviando..."
                : mode === "login"
                ? "Iniciar sesión"
                : mode === "first"
                ? "Validar y crear acceso"
                : "Enviar recuperación"}
            </button>

            {/* Olvidé contraseña */}
            {mode === "login" && (
              <button
                onClick={() => { setMode("forgot"); setMessage(""); }}
                className="block w-full text-center text-[13px] font-light text-slate-500 hover:text-slate-700 transition"
              >
                ¿Olvidaste tu contraseña?
              </button>
            )}

            {/* Mensaje de respuesta */}
            {message && (
              <div className="rounded-2xl border border-white/70 bg-white/70 px-4 py-3 text-sm text-slate-600 shadow-sm">
                {message}
              </div>
            )}
          </div>
        </div>

        {/* Links legales */}
        <p className="mt-[18px] text-center text-[12px] text-slate-400">
          <a href="/terminos" className="font-medium text-slate-500 underline underline-offset-2">
            Términos y Condiciones
          </a>
          {" · "}
          <a href="/privacidad" className="font-medium text-slate-500 underline underline-offset-2">
            Política de Privacidad
          </a>
        </p>

        {/* Créditos */}
        <div className="mt-14 flex flex-col items-center gap-[6px]">
          <p className="text-center text-[13px] text-slate-500">
            Desarrollada por el{" "}
            <strong className="font-semibold text-slate-700">Dr. Herman Granados</strong>{" "}
            — Anestesia Latina
          </p>
          <p className="text-center text-[12px] text-slate-400">
            Vapora.app es una aplicación web con fines académicos y educativos
          </p>
        </div>

      </div>
    </div>
  );
}