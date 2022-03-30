import { useState } from "react";

export const useForm = <T extends Object>(formulario: T) => {
  const [state, setState] = useState({
    email: "famoso@correo.com",
    password: "12312456",
  });

  const onchange = (value: string, field: keyof T) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return {
    ...state,
    formulario: state,
    onchange,
  };
};
