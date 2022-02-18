import { useState, useEffect } from "react";
export const useVeryPermisso = (Data,permiso) => {
  let [state, setstate] = useState(false);
useEffect(() => {
     const valor =  Data.name.find(element => element === permiso);
     setstate(Boolean(valor))

  },[Data,permiso]);
  return [
    state,
  ]
    
};