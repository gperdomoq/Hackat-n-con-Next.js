"use client";

import { useState, ChangeEvent, FormEvent } from "react";

type Datos = {
  username: string;
  fullName: string;
  age: string;
};

type Errores = Partial<Record<keyof Datos, string>>;

const datosIniciales: Datos = { username: "", fullName: "", age: "" };

function validar(datos: Datos): Errores {
  const errores: Errores = {};

  const username = datos.username.trim();
  if (!username) errores.username = "El username es obligatorio";
  else if (username.length < 3) errores.username = "Mínimo 3 caracteres";
  else if (!/^[a-zA-Z0-9_]+$/.test(username))
    errores.username = "Solo letras, números y guion bajo";

  const fullName = datos.fullName.trim();
  if (!fullName) errores.fullName = "El nombre es obligatorio";
  else if (fullName.length < 3) errores.fullName = "Mínimo 3 caracteres";
  else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/.test(fullName))
    errores.fullName = "Solo letras y espacios";

  const age = datos.age.trim();
  if (!age) errores.age = "La edad es obligatoria";
  else if (!/^\d+$/.test(age)) errores.age = "Debe ser un número entero";
  else if (Number(age) < 1 || Number(age) > 120)
    errores.age = "Debe estar entre 1 y 120";

  return errores;
}

export default function Formulario() {
  const [datos, setDatos] = useState<Datos>(datosIniciales);
  const [errores, setErrores] = useState<Errores>({});
  const [enviado, setEnviado] = useState<Datos | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDatos({ ...datos, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nuevosErrores = validar(datos);
    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length === 0) {
      setEnviado(datos);
    } else {
      setEnviado(null);
    }
  };

  return (
    <div className="formulario-reto3">
      <form onSubmit={handleSubmit} noValidate>
        <div className="campo">
          <label htmlFor="username">Username:</label>
          <input id="username" name="username" type="text" value={datos.username} onChange={handleChange} />
          {errores.username && <p className="error">{errores.username}</p>}
        </div>

        <div className="campo">
          <label htmlFor="fullName">FullName:</label>
          <input id="fullName" name="fullName" type="text" value={datos.fullName} onChange={handleChange} />
          {errores.fullName && <p className="error">{errores.fullName}</p>}
        </div>

        <div className="campo">
          <label htmlFor="age">Age:</label>
          <input id="age" name="age" type="text" inputMode="numeric" value={datos.age} onChange={handleChange} />
          {errores.age && <p className="error">{errores.age}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>

      {enviado && (
        <ul className="resultado">
          <li>UserName: {enviado.username.trim().toUpperCase()}</li>
          <li>FullName: {enviado.fullName.trim().toUpperCase()}</li>
          <li>Age: {enviado.age.trim()}</li>
        </ul>
      )}
    </div>
  );
}