"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [document, setDocument] = useState("");

  async function handleLogin() {
    const res = await fetch("/api/auth/validate-buyer", {
      method: "POST",
      body: JSON.stringify({ email, document }),
    });

    const data = await res.json();

    if (data.ok) {
      window.location.href = "/dashboard";
    } else {
      alert("No autorizado");
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Login Anestesia Latina</h1>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Documento"
        onChange={(e) => setDocument(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>Ingresar</button>
    </div>
  );
}