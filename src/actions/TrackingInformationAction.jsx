import { types } from "../types/types";
import { fetchConToken } from "../util/fetch";

export function GetTrackingByInformation(COD_ORDEN) {
  return async function (dispatch) {
    const data = await fetchConToken(
      `trackingInformation/orden/${COD_ORDEN}`,
      {},
      "GET"
    );
    const json = await data.json();
    console.log(json);
  };
}
export function SendTrackingInformation(task, Direcciones, COD_CUSTOMER,OrdenTrankings) {
  return async function (dispatch) {
    const data = await fetchConToken(
      `trackingInformation`,
      {task, Direcciones, COD_CUSTOMER,OrdenTrankings},
      "POST",
    );
    const json = await data.json();
    console.log(json);
  };
}

const GetPackageLockerUser = (LockerPackage) => ({
  type: types.GetAllPackageLockerUser,
  payload: LockerPackage,
});
