import {types} from "../types/types";

const initialState = {
    loadingLokersUser: false,
    loadingLoker: false,
}

export const lokersReducer = (state = initialState, action) => {
switch (action.type) {
    case types.GetCasilleroUser:
        return {
            ...state,
          ...action.payload,
          loadingLokersUser: true
        }
        default:
      return state;
  }
};

