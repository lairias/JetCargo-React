import { useEffect, useState } from "react";
import { fetchConToken } from "../util/fetch";
export const usePermissionUser = () => {
  const [typeUsesState, settypeUsesState] = useState([]);
  const [loading, setloding] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await fetchConToken(`permission/`, {}, "GET");
      const json = await data.json();

      settypeUsesState(json);
      setloding(true);
    })();
  }, []);
  return [typeUsesState, loading];
};
