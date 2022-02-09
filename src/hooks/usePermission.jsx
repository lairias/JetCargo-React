import { useContext, useCallback, useEffect } from "react";
import ContePermission from "../context/users/Permission/PermissionContex.js";
export const usePermissionUser = () => {
  const {Permission, set_Permission} = useContext(ContePermission);

  const userPermission = useCallback(() => {
    set_Permission("mensaje");
  }, [set_Permission]);

  return {
    userPermission,
    Permission
  };
};
