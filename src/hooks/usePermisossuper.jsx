import { useState, useEffect } from "react";
export const usePermisossuper = (Data, permiso) => {
  let [state, setstate] = useState();
  useEffect(() => {
    const valor = Data.includes(permiso);
    setstate(valor);
  }, [Data, permiso]);
  return [state];
};
