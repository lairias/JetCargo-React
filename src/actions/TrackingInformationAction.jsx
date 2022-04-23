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
  };
}

export function GettrackingByInformation(COD_DESTINO,COD_ORIGEN,setDataCargada,setLoaddin){
return async function(dispatch){
  
  
  const DataDestino = await fetchConToken(
    `trackingInformation/destino/${COD_DESTINO}`,
    {},
    "GET"
  );

  const json = await DataDestino.json();
  const DataOrigen = await fetchConToken(
    `trackingInformation/inicio/${COD_ORIGEN}`,
    {},
    "GET"
    );
    const json1 = await DataOrigen.json();
    setDataCargada({
      COD_TRACKINFORMATION_DESTINO: json.Origen[0].COD_TRACKINFORMATION_DESTINO,
      COD_ORDEN: json.Origen[0].COD_ORDEN,
      COD_DESTINATION_COUNTRY: json.Origen[0].COD_DESTINATION_COUNTRY,
      COD_DESTINATION_STATE:  json.Origen[0].COD_DESTINATION_STATE,
      COD_DESTINATION_CITY: json.Origen[0].COD_DESTINATION_CITY,
      CHECKPOINT_DELIVERY_STATUS_DESTINO: json.Origen[0].CHECKPOINT_DELIVERY_STATUS,
      DAT_ADD_TRACKINFORMATION_DESTINO: json.Origen[0].DAT_ADD_TRACKINFORMATION,
      COD_TRACKINFORMATION_ORIGIN:json1.Origen[0].COD_TRACKINFORMATION_ORIGIN,
      COD_ORDEN_ORIGIN: json1.Origen[0].COD_ORDEN,
      COD_ORIGIN_COUNTRY:   json1.Origen[0].COD_ORIGIN_COUNTRY,
      COD_ORIGIN_STATE: json1.Origen[0].COD_ORIGIN_STATE,
      COD_ORIGIN_CITY: json1.Origen[0].COD_ORIGIN_CITY,
      CHECKPOINT_DELIVERY_STATUS_ORIGIN: json1.Origen[0].CHECKPOINT_DELIVERY_STATUS,
      DAT_ADD_TRACKINFORMATION_ORIGEN: json1.Origen[0].DAT_ADD_TRACKINFORMATION,
      NAM_COUNTRY_ORIGEN: json1.Origen[0].NAM_COUNTRY,
      NAM_COUNTRY_DESTINO: json.Origen[0].NAM_COUNTRY,
      NAM_CITY_ORIGEN: json1.Origen[0].NAM_CITY,
      NAM_CITY_DESTINO: json.Origen[0].NAM_CITY,
      NAM_STATE_ORIGEN: json1.Origen[0].NAM_STATE,
      NAM_STATE_DESTINO: json.Origen[0].NAM_STATE,
      Loadding_Data:true
    });
    setLoaddin(true);
}
}
export function SendTrackingInformation(task, Direcciones, COD_CUSTOMER,COD_ORDEN,setEfecto) {
  return async function (dispatch) {
    try{
      const data = await fetchConToken(
        `trackingInformation/admin`,
        {task, Direcciones, COD_CUSTOMER,COD_ORDEN},
        "POST",
      );
      
      setEfecto(true);
    }catch(error){
    }
  };
}
export function PutTrackingOrigenDestino(
  PaisOrigin,
  PaisDestino,
  StateOrigin,
  StateDestino,
  CityOrigin,
  CityDestino,
  COD_ORDEN,
  STATUS_ORIGIN,
STATUS_DESTINO,
set_SenData) {
  return async function (dispatch) {
    await fetchConToken(
      `trackingInformation`,
      {PaisOrigin,
        PaisDestino,
        StateOrigin,
        StateDestino,
        CityOrigin,
        CityDestino,
        COD_ORDEN,
        STATUS_ORIGIN,
        STATUS_DESTINO},
      "PUT",
    );
      set_SenData(true);
  };
}

const GetPackageLockerUser = (LockerPackage) => ({
  type: types.GetAllPackageLockerUser,
  payload: LockerPackage,
});
