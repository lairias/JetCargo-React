import { types } from "../types/types";
import { fetchConToken } from "../util/fetch";

export function GetAllservices(evento) {
  return async function (dispatch) {
    const data = await fetchConToken(`service/ind`, {}, "GET");
    const json = await data.json();

    if (json.ok) {
      const DataArray = new Array();
      json.service.forEach((element) => {
        DataArray.push({
          value: element.COD_SERVICE,
          label: element.SERVICE_NAME,
          image: element.SERVICE_LOGO,
        });
      });
      dispatch(
        DataServices({
          services: DataArray,
        })
      );
    }
  };
}

const DataServices = (services) => ({
  type: types.GetAllServices,
  payload: services,
});
