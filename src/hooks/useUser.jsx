import { useContext, useCallback } from "react"
import Context from "../context/users/UserContext"
export const useUser = ()=>
{
    const { jwt, set_jwt } = useContext(Context);

    const login = useCallback(()=>{
        set_jwt("text")
    },[set_jwt])
    const logout = useCallback(()=>{
        set_jwt(null)
    },[set_jwt])
    
    return {
      isLogged: Boolean(jwt),
      login,
      logout,
    };
}