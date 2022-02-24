import { types } from "../types/types";

/************
 * Inicio de la aplicacion el estado del login sin datos
 * {}
 * Inicio de logion correcto
 * {
 * id:
 * nombre:
 * permission:
 * token:
 * }
 */

const initialState = {
  checking: true,
};
export const autReducer = (state = initialState, action) => {
  //acciones con un switch
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        ...action.payload,
        checking: false,
      };
    case types.authCheckingFinish:
      return {
        ...state,
        checking: false,
      };
    case types.logout:
      return {
        checking: true,
      };
    default:
      return state;
  }
};
