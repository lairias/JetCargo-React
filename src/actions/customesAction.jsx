import { types } from "../types/types";
import { fetchConToken } from "../util/fetch";

//Acciones para el login

//acciones para renovar token
export function GetAllCustomers() {
  return async function (dispatch) {
    const data = await fetchConToken("customers", {}, "GET");
    const json = await data.json();
    if (json.ok) {
      dispatch(
        Allcustomes({
          customers: json.customers,
        })
      );
    }
  };
}

const Allcustomes = (customers) => ({
  type: types.GetAllCustomers,
  payload: customers,
});
