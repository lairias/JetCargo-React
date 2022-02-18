import React, { useState } from "react";
const ContexPermission = React.createContext(null);

export const PermissionContextProvider = ({ children }) => {
  const [Permission, set_Permission] = useState([]);
  return (
    <ContexPermission.Provider value={{ Permission, set_Permission }}>
      {children}
    </ContexPermission.Provider>
  );
};

export default ContexPermission;
