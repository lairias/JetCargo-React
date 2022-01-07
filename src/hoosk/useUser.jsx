import {useCallback, useContext} from 'react'

//importacion del contexto que contiene el jsw del usuario
import Context from "../context/UserContext";

export const useUser = () => {
    const {jwt, setJWT}= useContext(Context)

    const login = useCallback(()=>{
        setJWT("dsf")
    },[setJWT])

    return {
        
        IsLogged: Boolean(jwt),
        login
    }
}
