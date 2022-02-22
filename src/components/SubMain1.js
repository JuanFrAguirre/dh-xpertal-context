import React, { useContext, useEffect } from "react";
import App from "../App";
import { pepitoContext } from "../contexts/NombreSecretoContext";

const SubMain1 = () => {
  const nombreSecreto = useContext(pepitoContext);

  useEffect(() => console.log(nombreSecreto), []);

  return (
    <div>
      <h4>El nombre recibido es: {nombreSecreto.nombreSecreto}</h4>
      <button onClick={() => nombreSecreto.setNombreSecreto("Aaron")}>
        Cambiar nombre secreto
      </button>
    </div>
  );
};

export default SubMain1;
