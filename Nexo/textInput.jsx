// GenericInput.jsx
import React from "react";

/**
 * Componente de campo de texto genérico
 * @param {Object} props - Propiedades del componente
 * @param {string} props.name - Nombre del campo
 * @param {string} props.placeholder - Texto guía
 * @param {string} [props.type="text"] - Tipo de input (text, password, email, search, etc.)
 * @param {string|number} [props.value] - Valor actual del input
 * @param {function} props.onChange - Función que maneja el cambio de valor
 * @param {Object} [props.style={}] - Estilos inline opcionales
 */
const GenericInput = ({
  name,
  placeholder,
  type = "text",
  value,
  onChange,
  style = {},
}) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={style}
    />
  );
};

export default GenericInput;


/* ExampleInputUsage.jsx
import React, { useState } from "react";
import GenericInput from "./GenericInput";

const inputConfig = {
  name: "username",
  placeholder: "Ingresa tu usuario",
  type: "text",
  style: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    width: "250px",
  },
};

const ExampleInputUsage = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <GenericInput {...inputConfig} value={value} onChange={handleChange} />
      <p>Valor actual: {value}</p>
    </div>
  );
};

export default ExampleInputUsage;
*/