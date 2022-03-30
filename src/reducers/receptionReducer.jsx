import { types } from "../types/types";


 const initialState = {
  startUploadReceptionPendiente: false,
  loaddinPendiente: false,
};
export const receptionReducer = (state = initialState, action) => {
  //acciones con un switch
  switch (action.type) {
    case types.GetOneOrdenByUser:
      return {
        ...state,
        ...action.payload,
        loaddinPendiente:true
      };
    case types.EndAddTrackinRecived:
      return {
        ...state,
        startUploadReceptionPendiente : action.payload,
      };
    default:
      return state;
  }
};
