import { useState, useEffect } from "react";
import { fetchConToken } from "../util/fetch";
export const useFetchToken = (ruta, data2 = {}, metod = "GET") => {
  const [typeUsesState, settypeUsesState] = useState([]);
  const [loading, setloding] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await fetchConToken(ruta, data2, metod);
      const json = await data.json();
      settypeUsesState(json);
      setloding(true);
    })();
  }, [ruta]);
  return [typeUsesState, loading];
};
