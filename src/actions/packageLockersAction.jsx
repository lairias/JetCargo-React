import { types } from "../types/types";
import { fetchConToken } from "../util/fetch";

//Acciones para el login

//Acciones para serrar sesion
export function StartGetAllPackageLocker(COD_CUSTOMER, COD_LOCKER) {
  return async function (dispatch) {
    const data = await fetchConToken(
      `package/${COD_CUSTOMER}/${COD_LOCKER}`,
      {},
      "GET"
    );
    const json = await data.json();
    if (json.ok) {
      dispatch(
        GetPackageLockerUser({
          packagesLocker: json.packageLokerCustomer,
        })
      );
    } else {
      dispatch(
        GetPackageLockerUser({
          packagesLocker: json.packageLokerCustomer,
        })
      );
    }
  };
}

const GetPackageLockerUser = (LockerPackage) => ({
  type: types.GetAllPackageLockerUser,
  payload: LockerPackage,
});
