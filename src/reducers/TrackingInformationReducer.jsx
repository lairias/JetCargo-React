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
    GetAllUbicationTrackingByTracking: false,
    GetAllUbicationTracking: false,
};
export const TrackingInformationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GetAllUbicationTracking:
      return {
        ...state,
        ...action.payload,
        GetAllUbicationTracking:true
      };
    case types.GetAllUbicationTrackingByTracking:
      return {
        ...state,
        GetAllUbicationTrackingByTracking: false,
      };
    default:
      return state;
  }
};
