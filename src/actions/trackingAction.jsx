import toast from "react-hot-toast";
import { types } from "../types/types";
import { fetchConToken } from "../util/fetch";

export function GetSeartTrackingService(COD_SERVICE, NUM_TRACKING) {
return async function (dispatch) {
    dispatch(
        StartSearcTrackingService(true)
    );
    const data = await fetchConToken(
    `tracking/search/${COD_SERVICE}/${NUM_TRACKING}`,
    {},
    "GET"
    );
    const json = await data.json();
    console.log(json);
    if (json.ok) {
        toast.error(`Número de tracking "${NUM_TRACKING}" no disponible` , { duration: 3000 })
    dispatch(
        DataSearcTrackingService({
        TrackingSearch: json.TrackingNumber,
        createTracking:false
        })
    );


    dispatch(
        StartSearcTrackingService(false)
    );
    dispatch(
        EventoShowCreateTracking(false)
    );
}else{
    dispatch(
        DataSearcTrackingService({
        TrackingSearch: json.TrackingNumber,
        createTracking:true
        })
    );
     dispatch(
        StartSearcTrackingService(false)
    );
     dispatch(
        EventoShowCreateTracking(true)
    );
    }
};
}
export function statusTracking(valor) {
return async function (dispatch) {
    dispatch(
        StartSearcTrackingService(valor)
    );
};
}



const DataSearcTrackingService = (search) => ({
  type: types.SearcTrackingService,
  payload: search,
});
const StartSearcTrackingService = (status) => ({
  type: types.StarSearcTrackingService,
  payload: status,
});
const EventoShowCreateTracking = (status) => ({
  type: types.ShowCreateTracking,
  payload: status,
});
