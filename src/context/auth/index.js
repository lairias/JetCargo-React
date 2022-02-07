import { createContext, useContext } from "react";

export const authContex = createContext();
export const useAuth = () => {
  const context = useContext(authContex);
  return context;
};
export function AuthProvider({ children }) {
  const users = {
    login: true,
  };
  return (
    <authContex.Provider value={{ users }}>{children}</authContex.Provider>
  );
}
