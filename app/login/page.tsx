"use client";

import { useState } from "react";

type Mode = "login" | "first" | "forgot";

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="11" width="16" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 1 1 8 0v3" />
    </svg>
  );
}

function IdCardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M8 10h.01" />
      <path d="M12 10h5" />
      <path d="M8 14h8" />
    </svg>
  );
}

function EyeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          password,
        }),
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

  const title =
    mode === "login"
      ? "Accede a tu App Clínica"
      : mode === "first"
      ? "Activa tu acceso"
      : "Recupera tu contraseña";

  const helper =
    mode === "login"
      ? "Inicia sesión con tu correo y contraseña."
      : mode === "first"
      ? "Valida tu compra con tu correo y documento para crear tu contraseña."
      : "Te enviaremos un enlace para restablecer tu contraseña.";

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#eef2f7] px-4 py-8">
      <div className="absolute inset-0">
        <div className="absolute left-[-80px] top-[-60px] h-72 w-72 rounded-full bg-[#65C4EB]/20 blur-3xl" />
        <div className="absolute right-[-60px] top-[120px] h-72 w-72 rounded-full bg-[#BDABF5]/20 blur-3xl" />
        <div className="absolute bottom-[-40px] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#F39169]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-md">
        <div className="pt-4 text-center">
          <div className="relative mb-8 flex justify-center">
  {/* Glow fondo */}
  <div className="absolute h-[140px] w-[140px] rounded-[40px] bg-gradient-to-br from-cyan-200 via-blue-200 to-violet-200 blur-2xl opacity-60" />

  {/* Contenedor glass */}
  <div className="relative flex h-[120px] w-[120px] items-center justify-center rounded-[32px] bg-white/40 shadow-[0_20px_60px_rgba(15,23,42,0.25)] backdrop-blur-2xl ring-1 ring-white/50">

    <img
      src="https://academiadeanestesia.com/wp-content/uploads/2026/04/vapora-app-ico-ios.png"
      alt="Vapora"
      className="h-[90px] w-[90px] object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.25)]"
    />
  </div>
</div>

          <h1 className="text-4xl font-black tracking-tight text-slate-900">
            Vapora
          </h1>
          <p className="mt-3 text-xl font-medium text-slate-500">{title}</p>

          <div className="mt-6 rounded-[28px] border border-white/60 bg-white/50 px-6 py-5 text-slate-500 shadow-[0_12px_40px_rgba(31,41,55,0.08)] backdrop-blur-xl">
            <p className="text-base leading-relaxed">{helper}</p>
          </div>
        </div>

        <div className="mt-6 rounded-[34px] border border-white/60 bg-white/55 p-6 shadow-[0_12px_40px_rgba(31,41,55,0.08)] backdrop-blur-xl">
          <div className="mb-6 grid grid-cols-3 gap-2 rounded-2xl bg-slate-100/70 p-1">
            <button
              onClick={() => setMode("login")}
              disabled={loading}
              className={`rounded-2xl px-3 py-2 text-sm font-bold transition ${
                mode === "login"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500"
              }`}
            >
              Entrar
            </button>

            <button
              onClick={() => setMode("first")}
              disabled={loading}
              className={`rounded-2xl px-3 py-2 text-sm font-bold transition ${
                mode === "first"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500"
              }`}
            >
              Activar
            </button>

            <button
              onClick={() => setMode("forgot")}
              disabled={loading}
              className={`rounded-2xl px-3 py-2 text-sm font-bold transition ${
                mode === "forgot"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500"
              }`}
            >
              Recuperar
            </button>
          </div>

          <div className="space-y-5">
            <div>
              <label className="mb-3 block text-sm font-bold text-slate-800">
                Correo electrónico
              </label>
              <div className="flex items-center rounded-2xl border border-white/70 bg-[#f8fafc]/90 px-4 py-4 shadow-inner">
                <MailIcon className="mr-3 h-5 w-5 text-slate-400" />
                <input
                  type="email"
                  placeholder="ejemplo@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent text-base text-slate-800 outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            {mode === "first" && (
              <div>
                <label className="mb-3 block text-sm font-bold text-slate-800">
                  Documento
                </label>
                <div className="flex items-center rounded-2xl border border-white/70 bg-[#f8fafc]/90 px-4 py-4 shadow-inner">
                  <IdCardIcon className="mr-3 h-5 w-5 text-slate-400" />
                  <input
                    placeholder="Número de documento"
                    value={document}
                    onChange={(e) => setDocument(e.target.value)}
                    className="w-full bg-transparent text-base text-slate-800 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>
            )}

            {mode !== "forgot" && (
              <div>
                <label className="mb-3 block text-sm font-bold text-slate-800">
                  {mode === "first" ? "Crea tu contraseña" : "Contraseña"}
                </label>
                <div className="flex items-center rounded-2xl border border-white/70 bg-[#f8fafc]/90 px-4 py-4 shadow-inner">
                  <LockIcon className="mr-3 h-5 w-5 text-slate-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-transparent text-base text-slate-800 outline-none placeholder:text-slate-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="ml-3 text-slate-400 transition hover:text-slate-600"
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            )}

            {mode === "login" && (
              <button
                onClick={handleLogin}
                disabled={loading}
                className="w-full rounded-2xl bg-gradient-to-r from-[#2D74DA] to-[#4C8EF0] px-4 py-4 text-lg font-bold text-white shadow-[0_10px_24px_rgba(45,116,218,0.28)] transition hover:scale-[1.01] disabled:opacity-60"
              >
                {loading ? "Entrando..." : "Iniciar sesión"}
              </button>
            )}

            {mode === "first" && (
              <button
                onClick={handleFirstAccess}
                disabled={loading}
                className="w-full rounded-2xl bg-gradient-to-r from-[#2D74DA] to-[#4C8EF0] px-4 py-4 text-lg font-bold text-white shadow-[0_10px_24px_rgba(45,116,218,0.28)] transition hover:scale-[1.01] disabled:opacity-60"
              >
                {loading ? "Validando..." : "Validar y crear acceso"}
              </button>
            )}

            {mode === "forgot" && (
              <button
                onClick={handleForgotPassword}
                disabled={loading}
                className="w-full rounded-2xl bg-gradient-to-r from-[#2D74DA] to-[#4C8EF0] px-4 py-4 text-lg font-bold text-white shadow-[0_10px_24px_rgba(45,116,218,0.28)] transition hover:scale-[1.01] disabled:opacity-60"
              >
                {loading ? "Enviando..." : "Enviar recuperación"}
              </button>
            )}

            {mode === "login" && (
              <button
                onClick={() => setMode("forgot")}
                className="block w-full text-center text-base font-medium text-slate-500 transition hover:text-slate-700"
              >
                ¿Olvidaste tu contraseña?
              </button>
            )}

            {message && (
              <div className="rounded-2xl border border-white/70 bg-white/70 px-4 py-3 text-sm text-slate-600 shadow-sm">
                {message}
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center text-sm leading-relaxed text-slate-400">
          <p>
            Al acceder a Vapora, aceptas nuestros{" "}
            <span className="font-semibold text-slate-600">
              Términos y Condiciones
            </span>{" "}
            y nuestra{" "}
            <span className="font-semibold text-slate-600">
              Política de Privacidad
            </span>.
          </p>
        </div>
      </div>
    </div>
  );
}