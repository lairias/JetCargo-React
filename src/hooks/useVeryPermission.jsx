import { useState, useEffect } from "react";
export const useVeryPermisso = (Data, permiso) => {
  let [state, setstate] = useState(false);
  useEffect(() => {
    setstate(Data.includes(permiso));
  }, [Data, permiso]);
  return [state];
};
