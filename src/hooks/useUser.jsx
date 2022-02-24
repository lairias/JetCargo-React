import { useContext, useCallback } from "react";
import Context from "../context/users/UserContext";
export const useUser = () => {
  const { jwt, set_jwt, permission, set_permission } = useContext(Context);

  const login = useCallback(
    (token) => {
      set_jwt(token);
      window.sessionStorage.setItem("Jet-Cargo_jwt_login", token);
    },
    [set_jwt]
  );
  const PermisosUser = useCallback(
    (List) => {
      set_permission(List);
    },
    [set_permission]
  );
  const logout = useCallback(() => {
    set_jwt(null);
    window.sessionStorage.removeItem("Jet-Cargo_jwt_login");
  }, [set_jwt]);

  return {
    isLogged: Boolean(jwt),
    login,
    permission,
    PermisosUser,
    userToken: jwt,
    logout,
  };
};
