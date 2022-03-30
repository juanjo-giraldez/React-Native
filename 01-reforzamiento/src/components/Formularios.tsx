import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
export const Formularios = () => {
  const { formulario, onchange } = useForm({
    email: "famoso@correo.com",
    password: "12312456",
  });
  return (
    <>
      <h3>Formularios</h3>
      <input
        type="text"
        className="form-control"
        placeholder="email"
        value={formulario.email}
        onChange={({ target }) => onchange(target.value, "email")}
      />

      <input
        type="text"
        className="form-control mt-2 mb-2"
        placeholder="password"
        value={formulario.password}
        onChange={({ target }) => onchange(target.value, "password")}
      />

      <code>
        <pre>{JSON.stringify(formulario, null, 2)}</pre>
      </code>
    </>
  );
};
