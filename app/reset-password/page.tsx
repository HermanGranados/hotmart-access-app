"use client";

import { useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase-browser";

function LockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="11" width="16" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 1 1 8 0v3" />
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

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function ResetPasswordPage() {
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleUpdate() {
    if (!password || password.length < 8) {
      setMessage("La contraseña debe tener al menos 8 caracteres.");
      return;
    }
    if (password !== confirm) {
      setMessage("Las contraseñas no coinciden.");
      return;
    }

    setMessage("");
    setLoading(true);

    const supabase = createSupabaseBrowserClient();
    const { error } = await supabase.auth.updateUser({ password });

    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    setSuccess(true);
    setMessage("Tu contraseña fue actualizada correctamente.");
  }

  function handleClose() {
    setShowModal(false);
    setPassword("");
    setConfirm("");
    setMessage("");
    setSuccess(false);
    setShowPass(false);
    setShowConfirm(false);
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "#f8f8f8", fontFamily: "'Inter', sans-serif" }}
    >
      {/* Tarjeta central */}
      <div
        className="w-full max-w-[380px] rounded-[28px] p-8 text-center"
        style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(20px)", border: "0.5px solid rgba(255,255,255,0.7)" }}
      >
        {/* Ícono */}
        <div
          className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center"
          style={{ background: "linear-gradient(135deg,#ede9fe,#ddd6fe)" }}
        >
          <LockIcon className="w-7 h-7 text-violet-500" />
        </div>

        <h1 className="text-[22px] font-semibold text-slate-800 tracking-tight mb-2">
          Cambiar contraseña
        </h1>
        <p className="text-[14px] text-slate-400 font-light mb-7">
          Establece una nueva contraseña segura para tu cuenta de Vapora.
        </p>

        <button
          onClick={() => setShowModal(true)}
          className="w-full rounded-[14px] py-[15px] text-[15px] font-semibold text-white transition-all"
          style={{ background: "#2D74DA", boxShadow: "0 8px 24px rgba(45,116,218,0.28)" }}
        >
          Cambiar contraseña
        </button>

        <button
          onClick={() => window.history.back()}
          className="mt-4 block w-full text-center text-[13px] font-light text-slate-400 hover:text-slate-600 transition"
        >
          Volver atrás
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ background: "rgba(15,23,42,0.35)", backdropFilter: "blur(6px)" }}>

          <div
            className="w-full max-w-[420px] rounded-[28px] p-7 relative"
            style={{ background: "white", boxShadow: "0 24px 60px rgba(15,23,42,0.18)" }}
          >
            {/* Botón cerrar */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 transition"
            >
              <XIcon className="w-4 h-4" />
            </button>

            {/* Ícono modal */}
            <div className="flex flex-col items-center text-center mb-6">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{ background: "linear-gradient(135deg,#ede9fe,#ddd6fe)" }}
              >
                {success
                  ? <CheckIcon className="w-6 h-6 text-violet-500" />
                  : <LockIcon className="w-6 h-6 text-violet-500" />
                }
              </div>
              <h2 className="text-[20px] font-semibold text-slate-800 tracking-tight">
                {success ? "¡Contraseña actualizada!" : "Cambiar contraseña"}
              </h2>
              <p className="text-[13px] text-slate-400 font-light mt-1">
                {success
                  ? "Ya puedes iniciar sesión con tu nueva contraseña."
                  : "Ingresa tu nueva contraseña."
                }
              </p>
            </div>

            {/* Formulario */}
            {!success ? (
              <div className="space-y-4">
                {/* Campo nueva contraseña */}
                <div>
                  <label className="block text-[12px] font-semibold text-slate-600 mb-2 uppercase tracking-wide">
                    Nueva contraseña
                  </label>
                  <div
                    className="flex items-center gap-3 rounded-[14px] px-4 py-3.5"
                    style={{ background: "#f8fafc", border: "0.5px solid #e2e8f0" }}
                  >
                    <LockIcon className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    <input
                      type={showPass ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="flex-1 bg-transparent text-slate-800 outline-none"
                      style={{ fontSize: "16px", fontWeight: 400 }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass((v) => !v)}
                      className="text-slate-400 hover:text-slate-600 transition"
                    >
                      {showPass
                        ? <EyeOffIcon className="w-4 h-4" />
                        : <EyeIcon className="w-4 h-4" />
                      }
                    </button>
                  </div>
                </div>

                {/* Campo confirmar */}
                <div>
                  <label className="block text-[12px] font-semibold text-slate-600 mb-2 uppercase tracking-wide">
                    Confirmar contraseña
                  </label>
                  <div
                    className="flex items-center gap-3 rounded-[14px] px-4 py-3.5"
                    style={{ background: "#f8fafc", border: "0.5px solid #e2e8f0" }}
                  >
                    <LockIcon className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    <input
                      type={showConfirm ? "text" : "password"}
                      placeholder="••••••••"
                      value={confirm}
                      onChange={(e) => setConfirm(e.target.value)}
                      className="flex-1 bg-transparent text-slate-800 outline-none"
                      style={{ fontSize: "16px", fontWeight: 400 }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm((v) => !v)}
                      className="text-slate-400 hover:text-slate-600 transition"
                    >
                      {showConfirm
                        ? <EyeOffIcon className="w-4 h-4" />
                        : <EyeIcon className="w-4 h-4" />
                      }
                    </button>
                  </div>
                </div>

                {/* Mensaje de error */}
                {message && (
                  <p className="text-[12px] text-red-500 font-medium text-center px-2">
                    {message}
                  </p>
                )}

                {/* Botón */}
                <button
                  onClick={handleUpdate}
                  disabled={loading}
                  className="w-full rounded-[14px] py-[15px] text-[15px] font-semibold text-white transition-all disabled:opacity-60 mt-2"
                  style={{ background: "#2D74DA", boxShadow: "0 8px 24px rgba(45,116,218,0.25)" }}
                >
                  {loading ? "Actualizando..." : "Actualizar contraseña"}
                </button>
              </div>
            ) : (
              /* Estado éxito */
              <div className="space-y-3">
                <button
                  onClick={() => { window.location.href = "/login"; }}
                  className="w-full rounded-[14px] py-[15px] text-[15px] font-semibold text-white transition-all"
                  style={{ background: "#2D74DA", boxShadow: "0 8px 24px rgba(45,116,218,0.25)" }}
                >
                  Ir al inicio de sesión
                </button>
                <button
                  onClick={handleClose}
                  className="w-full rounded-[14px] py-[13px] text-[14px] font-medium text-slate-500 hover:text-slate-700 transition"
                >
                  Cerrar
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
