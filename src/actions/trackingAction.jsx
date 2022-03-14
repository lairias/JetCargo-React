import toast from "react-hot-toast";
import {
  service_normal,
  tracking_normal,
  nombrePackage,
  desPackage,
} from "../components/validations";
import { types } from "../types/types";
import { fetchConToken } from "../util/fetch";

export function GetSeartTrackingService(COD_SERVICE = false, NUM_TRACKING) {
  return async function (dispatch) {
    const DataTracking = await tracking_normal
      .validate({ tracking: NUM_TRACKING })
      .catch(function (err) {
        toast.error(`${err.errors}`, { duration: 3000 });
      });
    const DataService = await service_normal
      .validate({ service: COD_SERVICE.value })
      .catch(function (err) {
        toast.error(`${err.errors}`, { duration: 3000 });
      });

    if (DataService && DataTracking) {
      dispatch(StartSearcTrackingService(true));
      const data = await fetchConToken(
        `tracking/search/${COD_SERVICE.value}/${NUM_TRACKING}`,
        {},
        "GET"
      );
      const json = await data.json();
      console.log(json);
      if (json.ok) {
        toast.error(`Número de tracking "${NUM_TRACKING}" no disponible`, {
          duration: 3000,
        });
        dispatch(
          DataSearcTrackingService({
            TrackingSearch: json.TrackingNumber,
            createTracking: false,
          })
        );
        dispatch(StartSearcTrackingService(false));
        dispatch(EventoShowCreateTracking(false));
      } else {
        dispatch(
          DataSearcTrackingService({
            TrackingSearch: json.TrackingNumber,
            createTracking: true,
          })
        );
        dispatch(StartSearcTrackingService(false));
        dispatch(EventoShowCreateTracking(true));
      }
    }
  };
}

export function statusTracking(valor) {
  return async function (dispatch) {
    dispatch(StartSearcTrackingService(valor));
  };
}

export function DataPostTrackingServiceCustomer(
  COD_SERVICE = false,
  COD_CATEGORY = false,
  COD_TYPE = false,
  NUM_TRACKING,
  NAME_PACKAGE,
  DES_PACKAGE,
  setIsOpen,
  setmodalCreatepackage
) {
  return async function (dispatch) {
    const DataNamePackage = await nombrePackage
      .validate({ NAME_PACKAGE: NAME_PACKAGE })
      .catch(function (err) {
        toast.error(`${err.errors}`, { duration: 3000 });
      });
    const DataDescription = await desPackage
      .validate({ DES_PACKAGE: DES_PACKAGE })
      .catch(function (err) {
        toast.error(`${err.errors}`, { duration: 3000 });
      });
    const DataTracking = await tracking_normal
      .validate({ tracking: NUM_TRACKING })
      .catch(function (err) {
        toast.error(`${err.errors}`, { duration: 3000 });
      });
    const DataService = await service_normal
      .validate({ service: COD_SERVICE.value })
      .catch(function (err) {
        toast.error(`${err.errors}`, { duration: 3000 });
      });
    const DataType = await service_normal
      .validate({ service: COD_TYPE.value })
      .catch(function (err) {
        toast.error(`${err.errors}`, { duration: 3000 });
      });
    const DataCategoria = await service_normal
      .validate({ service: COD_CATEGORY.value })
      .catch(function (err) {
        toast.error(`${err.errors}`, { duration: 3000 });
      });

    if (
      DataNamePackage &&
      DataDescription &&
      DataTracking &&
      DataService &&
      DataType &&
      DataCategoria
    ) {
      setIsOpen(false);
      setmodalCreatepackage(true);
      dispatch(
        DataPostnewTracking({
          COD_SERVICE: COD_SERVICE.value,
          COD_CATEGORY: COD_CATEGORY.value,
          COD_TYPE: COD_TYPE.value,
          NUM_TRACKING,
          NAME_PACKAGE,
          DES_PACKAGE,
        })
      );
    }
  };
}

export function PostTrackingServiceCustomer() {
  return async function (dispatch) {
    dispatch(StartPostTrackingServiceCustomer(true));
    const dataPost = await fetchConToken(`tracking/create`, {}, "POST");
    const json = await dataPost.json();
    console.log(json);
    if (json.ok) {
      toast.success(`Tracking creado con éxito`, { duration: 3000 });
      dispatch(
        DataPostTrackingServiceCustomer({
          StatusPostCreateTracking: true,
        })
      );
      dispatch(EventoShowCreateTracking(false));
    } else {
      toast.error(`Error al crear el tracking`, { duration: 3000 });
      dispatch(
        DataPostTrackingServiceCustomer({
          StatusPostCreateTracking: false,
        })
      );
      dispatch(EventoShowCreateTracking(false));
    }
  };
}

const DataSearcTrackingService = (search) => ({
  type: types.SearcTrackingService,
  payload: search,
});
const DataPostnewTracking = (search) => ({
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
const StatusStartPostTrackingServiceCustomers = (status) => ({
  type: types.StarPostTrackingServiceCustomer,
  payload: status,
});
