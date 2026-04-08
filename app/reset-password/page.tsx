"use client";

import { useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase-browser";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleUpdatePassword() {
    const supabase = createSupabaseBrowserClient();

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage("Tu contraseña fue actualizada correctamente.");
  }

  return (
    <div style={{ padding: 40, maxWidth: 420 }}>
      <h1>Restablecer contraseña</h1>

      <input
        type="password"
        placeholder="Nueva contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", marginBottom: 12, width: "100%" }}
      />

      <button onClick={handleUpdatePassword}>
        Guardar nueva contraseña
      </button>

      {message && <p style={{ marginTop: 16 }}>{message}</p>}
    </div>
  );
}