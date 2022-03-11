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
  loadingServices: false,
};
export const serviceReducer = (state = initialState, action) => {
  //acciones con un switch
  switch (action.type) {
    case types.GetAllServices:
      return {
        ...state,
        ...action.payload,
        loadingServices: true,
      };
    default:
      return state;
  }
};
