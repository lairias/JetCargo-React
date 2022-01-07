import React, { useReducer } from 'react'
import { UserReducer } from "./UserReducer"
import { UserContext } from "./UserContext";
import axios from "axios"

export const UserState = ({ children }) =>
{
    const initialState = {
        users: [],
        selectedUsers: null,
    };

    const [state, dispatch] = useReducer(UserReducer, initialState)

    const getUsers = async() => {
       const res =  await axios.get("http://localhost:4000/api/users/");
       console.log(res)
       dispatch({
         type: "GET_USERS",
         payload: res.data.data,
       });
     };

    const getProfile = () => { };

    return (
        <UserContext.Provider
            value={{ users: state.users, selectedUsers: state.selectedUsers, getProfile, getUsers }}
        >
            {children}
        </UserContext.Provider>
    );
}
