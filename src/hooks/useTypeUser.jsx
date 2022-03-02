import { useState, useEffect } from "react";
import { fetchConToken } from "../util/fetch";
export const useTypeUser = (id) => {
  const [typeUsesState, settypeUsesState] = useState([]);
  const [loading, setloding] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await fetchConToken(`roles/${id}`, {}, "GET");
      const json = await data.json();
      settypeUsesState(json);
      setloding(true);
    })();
  }, [id]);
  return {
    typeUsesState,
    loading,
  };
};
