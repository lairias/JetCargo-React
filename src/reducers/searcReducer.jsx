import { types } from "../types/types";

const initialState = {
  data: " ",
};

export const searchReducer = (state = initialState, action) => {
  //acciones con un switch
  switch (action.type) {
    case types.DataSearch:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
