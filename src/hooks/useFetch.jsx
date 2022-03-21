import { useState, useEffect } from "react";
import { fetchConToken } from "../util/fetch";
export const useFetchToken = (ruta) => {
  const [typeUsesState, settypeUsesState] = useState([]);
  const [loading, setloding] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await fetchConToken(ruta, {}, "GET");
      const json = await data.json();
      settypeUsesState(json);
      setloding(true);
    })();
  }, [ruta]);
  return [typeUsesState,
    loading];
};
