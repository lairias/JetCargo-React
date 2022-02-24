import { useState, useEffect } from "react";
import { TypeUserService } from "../service/ServiceTypeUsers";
export const useTypeUser = (token, id) => {
  const [typeUsesState, settypeUsesState] = useState([]);
  const [loading, setloding] = useState(false);

  useEffect(() => {
    TypeUserService(token, id).then((element) => {
      settypeUsesState(element.data);
      setloding(true);
    });
  }, [token, id]);
  return {
    typeUsesState,
    loading,
  };
};
