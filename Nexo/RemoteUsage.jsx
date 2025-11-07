// ExampleRemoteUsage.jsx
import React, { useState } from "react";
import GenericButton from "./GenericButton";
import GenericInput from "./GenericInput";

const ExampleRemoteUsage = () => {
  const [email, setEmail] = useState("");

  const handleClick = () => {
    alert(`Enviando datos de: ${email}`);
  };

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h3>Ejemplo: configuración desde API remota</h3>
      <GenericInput value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <GenericButton onClick={handleClick} />
    </div>
  );
};

export default ExampleRemoteUsage;