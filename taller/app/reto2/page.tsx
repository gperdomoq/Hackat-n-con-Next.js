"use client";
import { useState } from "react";

export default function Reto2() {
  const [porcentaje, setPorcentaje] = useState(0);
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const valor = Number(e.target.value);

    if (valor < 0 || valor > 100) {
      setError("El valor debe estar entre 0 y 100");
      return;
    }

    setError("");
    setPorcentaje(valor);
  }

  return (
    <main className="p-10 max-w-md mx-auto font-serif text-stone-700">
      <h1 className="text-2xl font-bold mb-4 text-center">Progress bar</h1>

      <div className="w-full h-6 bg-stone-300 rounded-full mb-6">
        <div
          className="h-6 bg-rose-700 rounded-full text-white text-xs flex items-center justify-center"
          style={{ width: `${porcentaje}%` }}
        >
          {porcentaje}%
        </div>
      </div>

      <label className="block text-sm font-medium mb-1">Input Percentage:</label>
      <input
        type="number"
        value={porcentaje}
        onChange={handleChange}
        className="w-full border border-stone-300 rounded px-3 py-2"
      />
      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </main>
  );
}
