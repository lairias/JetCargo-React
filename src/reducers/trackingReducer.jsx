import { types } from "../types/types";

const initialState = {
  loadinSearcTrackingService: false,
  StarSearcTrackingServiceStatus: false,
  StatusShowCreateTracking: false
};

export const trackingReducer = (state = initialState, action) => {
  //acciones con un switch
  switch (action.type) {
    case types.SearcTrackingService:
      return {
        ...state,
        ...action.payload,
        
      };
    case types.StarSearcTrackingService:
      return {
        StarSearcTrackingServiceStatus: action.payload,
      };
    case types.ShowCreateTracking:
      return {
        StatusShowCreateTracking: action.payload,
      };
    default:
      return state;
  }
};
