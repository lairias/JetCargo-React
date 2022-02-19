import {  useState,useEffect } from "react";
import {TypeUsersService} from "../service/ServiceTypeUsers"
export const useTypesUses = (token) => {
const [typeUsesState, settypeUsesState] = useState([])
const [loading, setloding] = useState(false)
  useEffect(() => {
    TypeUsersService(token).then(element => { settypeUsesState(element.data); setloding(true)}  )
  }, [token]);
  return {
    typeUsesState,
    loading
  };
};