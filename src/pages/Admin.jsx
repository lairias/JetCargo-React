import React, {useEffect, useContext} from 'react'
import {UserContext} from "../context/Users/UserContext"
export const Admin = () => {
    const { getUsers } = useContext(UserContext);
    useEffect(() => {
      getUsers();
    }, [getUsers]);
    return (
        <div>
            Dentro del sistema
        </div>
    )
}
