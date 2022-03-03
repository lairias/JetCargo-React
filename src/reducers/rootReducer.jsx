import { combineReducers } from "redux";

import { autReducer } from "./authReducer";
import { permissionReducer } from "./permissionReducer";
import { searchReducer } from "./searcReducer";
import { tokenReducer } from "./tokenReducer";
import { categorypackageReducer } from "./categorypackageReducer";
import { customersReducer } from "./customerReducer";
import { lokersReducer } from "./lockerReducer";

export const rootReducer = combineReducers({
  auth: autReducer,
  permission: permissionReducer,
  search: searchReducer,
  token: tokenReducer,
  categorypackage: categorypackageReducer,
  customers: customersReducer,
  locker: lokersReducer,
});
