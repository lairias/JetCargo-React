import { types } from "../types/types";

export const showModal = (stado) => ({
  type: types.ShowModalCreateLockerCustomer,
  payload: stado,
});
