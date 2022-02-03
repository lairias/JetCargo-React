import React , { useState } from "react";
const Contex = React.createContext({})
export function UserContextProvider ({ children }) {
const [jwt, set_jwt] = useState(null)
    return <Contex.Provider value = {{jwt}}>
        {children}
    </Contex.Provider>
}

export default Contex