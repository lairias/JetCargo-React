import { types } from "../types/types";

const initialState = {
  loadingLokersUser: false,
  startloadingLoker: false,
  getloadingLoker: false,
};

export const lokersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GetCasilleroUser:
      return {
        ...state,
        ...action.payload,
        loadingLokersUser: true,
      };
    case types.StartAddCasillerosCustomers:
      return {
        ...state,
        ...action.payload,
        getloadingLoker: true,
      };

    case types.EndAddCasillerosCustomers:
      return {
        ...state,
        startloadingLoker: action.payload,
      };
    default:
      return state;
  }
};
