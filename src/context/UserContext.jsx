import { useState, createContext } from "react";

const Context = createContext({});

export function UserContextProvider(props) {
  const [jwt, setJWT] = useState(null);

  return (
    <Context.Provider
      value={{
        jwt,
        setJWT,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default Context;

