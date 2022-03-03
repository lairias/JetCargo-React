import { createContext, useContext } from "react";

export const TokenPassContex = createContext();

export const TokenPass = (token) => {
  const context = useContext(TokenPassContex);
  return context;
};

export function TokenPassProvider({ children }) {
  const TokenP = {
    token: true,
    id: "",
    correo: "",
  };
  return (
    <TokenPassContex.Provider value={{ TokenP }}>
      {children}
    </TokenPassContex.Provider>
  );
}
