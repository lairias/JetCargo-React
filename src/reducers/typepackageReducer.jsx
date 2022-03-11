import { types } from "../types/types";

const initialState = {
  loadingTypePackage: false,
};

export const typepackageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GetAllTypePackage:
      return {
        ...state,
        ...action.payload,
        loadingTypePackage: true,
      };
    default:
      return state;
  }
};
