// GenericButton.jsx
import React from "react";

/**
 * Componente de botón genérico
 * @param {Object} props - Propiedades del componente
 * @param {string} props.label - Texto que muestra el botón
 * @param {function} props.onClick - Función que se ejecuta al hacer clic
 * @param {string} [props.type="button"] - Tipo de botón (button, submit, reset)
 * @param {Object} [props.style={}] - Estilos inline opcionales
 */
const GenericButton = ({ label, onClick, type = "button", style = {} }) => {
  return (
    <button type={type} onClick={onClick} style={style}>
      {label}
    </button>
  );
};

/* export default GenericButton;


ExampleButtonUsage.jsx
import React from "react";
import GenericButton from "./GenericButton";

const buttonConfig = {
  label: "Ir al Inicio",
  type: "button",
  style: { backgroundColor: "#4CAF50", color: "#fff", padding: "10px 20px" },
};

const ExampleButtonUsage = () => {
  const handleClick = () => {
    console.log("Navegando a la pantalla principal...");
  };

  return <GenericButton {...buttonConfig} onClick={handleClick} />;
};

export default ExampleButtonUsage;
*/