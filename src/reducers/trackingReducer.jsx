import { types } from "../types/types";

const initialState = {
  loadinSearcTrackingService: false,
  StarSearcTrackingServiceStatus: false,
  StatusShowCreateTracking: false,
  StatusPostCreateTracking: false,
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
    case types.StarPostTrackingServiceCustomer:
      return {
        StatusPostCreateTracking: action.payload,
      };
    case types.PostTrackingServiceCustomer:
      return {
        ...state,
        ...action.payload,
      };
    case types.SaveDataTrackingServiceCustomer:
      return {
        ...state,
        ...action.payload,
      };
    case types.GetAlltracking:
      return {
        ...state,
        ...action.payload,
        AllTracking: action.payload,
      };
    default:
      return state;
  }
};
