import { types } from "../types/types";

const initialState = {
  loadingCustomers: false,
  customers: false,
};

export const customersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GetAllCustomers:
      return {
        ...state,
        ...action.payload,
        loadingCustomers: true,
      };
    default:
      return state;
  }
};
