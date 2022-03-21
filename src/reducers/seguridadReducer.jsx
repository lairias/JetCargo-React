import { types } from "../types/types";

const initialState = {
  checking: true,
};
export const seguridadReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GetAllSeguridad:
      return {
        ...state,
        ...action.payload,
        checking: false,
      };
    default:
      return state;
  }
};
