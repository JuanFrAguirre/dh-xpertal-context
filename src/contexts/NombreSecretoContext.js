import { createContext, useState } from "react";

export const pepitoContext = createContext();

export const NombreSecretoComponent = ({ children }) => {
  const [nombreSecreto, setNombreSecreto] = useState("Guillermo");

  const valores = {
    asd: "asd",
  };

  return (
    <pepitoContext.Provider
      value={{ nombreSecreto, setNombreSecreto, valores }}
    >
      {children}
    </pepitoContext.Provider>
  );
};
