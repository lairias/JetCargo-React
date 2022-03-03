import React, { useState } from "react";
const Contex = React.createContext({});
export function UserContextProvider({ children }) {
  const [jwt, set_jwt] = useState(() =>
    window.sessionStorage.getItem("Jet-Cargo_jwt_login")
  );
  const [permission, set_permission] = useState(() =>
    window.sessionStorage.getItem("Jet-Cargo_permisos")
  );
  return (
    <Contex.Provider value={{ jwt, set_jwt, permission, set_permission }}>
      {children}
    </Contex.Provider>
  );
}

export default Contex;
