import { useContext, useCallback } from "react";
import ContePermission from "../context/users/Permission/PermissionContex.js";
export const usePermissionUser = () => {
  const { Permission, set_Permission } = useContext(ContePermission);

  const userPermission = useCallback(
    (List) => {
      set_Permission(List);
    },
    [set_Permission]
  );
  return {
    userPermission,
    Permission,
  };
};
