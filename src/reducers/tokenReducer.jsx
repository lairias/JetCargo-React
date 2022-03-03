import { types } from "../types/types";

const initialState = {
  checking: false,
};

export const tokenReducer = (state = initialState, action) => {
  //acciones con un switch
  switch (action.type) {
    case types.forgotPasswordChecking:
      return {
        checking: true,
      };
    default:
      return state;
  }
};
