import { combineReducers } from "redux";

import { autReducer } from "./authReducer";
import { permissionReducer } from "./permissionReducer";
import { searchReducer } from "./searcReducer";


export const rootReducer = combineReducers({ 
    auth: autReducer,
    permission:permissionReducer,
    search:searchReducer });
