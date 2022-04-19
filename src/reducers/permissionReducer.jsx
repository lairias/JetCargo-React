import { types } from "../types/types";
const initialState = {
  loading: false,
};

export const permissionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GetAllPermission:
      return {
        ...state,
        ...action.payload,
        loading: true,
      };
    case types.GetAllPermissionRole:
      return {
        ...state,
        ...action.payload,
      };
    case types.GetAPermission:
      return {
        ...action.payload,
        loading: true,
      };
    case types.GetAPermissionEdit:
      return {
        ...action.payload,
        loading: true,
      };
    default:
      return state;
  }
};
