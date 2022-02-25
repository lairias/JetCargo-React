import { combineReducers } from "redux";

import { autReducer } from "./authReducer";
import { permissionReducer } from "./permissionReducer";
import { searchReducer } from "./searcReducer";
import {tokenReducer} from "./tokenReducer";


export const rootReducer = combineReducers({ 
    auth: autReducer,
    permission:permissionReducer,
    search:searchReducer,
    token: tokenReducer
 });
