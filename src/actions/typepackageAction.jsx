import toast from "react-hot-toast";
import { types } from "../types/types";
import { fetchConToken } from "../util/fetch";

export function GetAllTypePackage(type = false) {
  return async function (dispatch) {
    const data = await fetchConToken(`typepackage/`, {}, "GET");
    const json = await data.json();
    if (type) {
      const DataArray = new Array();
      json.typePackage.forEach((element) => {
        DataArray.push({
          value: element.COD_TYPEPACKAGE,
          label: element.NAM_TYPEPACKAGE,
          prece: element.PREC_TYPEPACKAGE,
        });
      });
      dispatch(
        DataAllTypePackage({
          TypePackage: DataArray,
        })
      );
    } else {
      if (json.ok) {
        dispatch(
          DataAllTypePackage({
            TypePackage: json.typePackage,
          })
        );
      }
    }
  };
}

const DataAllTypePackage = (search) => ({
  type: types.GetAllTypePackage,
  payload: search,
});
