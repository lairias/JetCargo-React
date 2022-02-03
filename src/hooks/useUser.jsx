import { useContext, useCallback } from "react"
import Context from "../context/users/UserContext"
export default function useUser()
{
    const { jwt, set_jwt } = useContext(Context);

    const login = useCallback(()=>{
        set_jwt("text")
    },[set_jwt])
    return{
        isLogged :  Boolean(jwt),
        login
    }
}