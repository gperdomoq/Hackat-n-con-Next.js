"use client";
import { useEffect, useState } from "react";

export default function Reto4() {
  const [segundos, setSegundos] = useState(0);
  const [corriendo, setCorriendo] = useState(false);

  useEffect(() => {
    if (!corriendo) return;

    const intervalo = setInterval(() => {
      setSegundos((prev_state) => prev_state + 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [corriendo]);

  function handleReset() {
    setCorriendo(false);
    setSegundos(0);
  }

  const minutos = Math.floor(segundos / 60);
  const restantes = segundos % 60;

  return (
    <main className="p-10 max-w-md mx-auto font-serif text-stone-700 text-center">
      <h1 className="text-2xl font-bold mb-4">Timer</h1>

      <p className="text-xl mb-6">
        {minutos} mins {restantes} secs
      </p>

      <div className="flex gap-2 justify-center">
        <button
          onClick={() => setCorriendo(true)}
          className="px-4 py-2 rounded bg-green-700 text-white"
        >
          Start
        </button>
        <button
          onClick={() => setCorriendo(false)}
          className="px-4 py-2 rounded bg-red-600 text-white"
        >
          Stop
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 rounded bg-yellow-400 text-stone-900"
        >
          Reset
        </button>
      </div>
    </main>
  );
}
