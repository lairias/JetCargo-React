import { types } from "../types/types";

const initialState = {
  loading: false,
  StarPost: false,
};

export const categorypackageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PostCategoryPackage:
      return {
        ...state,
        payload: action.payload,
        loading: true,
        StarPost: true,
      };
    case types.StartPostCategoryPackage:
      return {
        ...state,
        payload: action.payload,
        StarPost: false,
      };
    case types.GetAllCategoryPackage:
      return {
        ...state,
        ...action.payload,
        loading: true,
      };
    default:
      return state;
  }
};
