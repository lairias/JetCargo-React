import { types } from "../types/types";

const initialState = {
  shoModalLockerCustomer: false,
};

export const modal_Locker_Customer = (state = initialState, action) => {
  switch (action.type) {
    case types.ShowModalCreateLockerCustomer:
      return {
        shoModalLockerCustomer: action.payload,
      };

    default:
      return state;
  }
};
