import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { GetAllCategoryPackage } from "../../../actions/categorypackageAction";
import { GetAllservices } from "../../../actions/serviceAction";
import { GetAllTypePackage } from "../../../actions/typepackageAction";
import SpinnerButton from "../../Spinners/SpinnerButton";
import toast, { Toaster } from "react-hot-toast";
import Select from "react-select";
import { SpinerLoader } from "../../Spinners/Loader";

import {
  CityService,
  CountryService,
  StateService,
} from "../../../service/ServiceDireciont";
import { Divider } from "@mui/material";
import { PutTrackingOrigenDestino } from "../../../actions/TrackingInformationAction";
export default function FormularioUpdateInformationTracking({
  COD_COUNTRY,
  COD_ORDEN,
  COD_ORIGEN,
  COD_DESTINO,
  DataCargada,
  setDataCargada,
}) {
  const history = useNavigate();
  const dispatch = useDispatch();

  const selectStatusTracking = [
    { value: "PENDING" },
    { value: "DELIVERED" },
    { value: "FAILED" },
  ];
  const [SenData, set_SenData] = useState(false);
  const [ApiCities, set_ApiCities] = useState([]);
  const [ApiCountryOrigin, set_ApiCountryOrigin] = useState([]);
  const [ApiStateOrigin, set_ApiStateOrigin] = useState([]);
  const [ApiCitiesDestino, set_ApiCitiesDestino] = useState([]);
  const [ApiCountryDestino, set_ApiCountryDestino] = useState([]);
  const [ApiStateDestino, set_ApiStateDestino] = useState([]);
  const [PaisOrigin, set_paisOrigin] = useState(DataCargada.COD_ORIGIN_COUNTRY);
  const [PaisDestino, set_paisDestino] = useState(DataCargada.COD_DESTINATION_COUNTRY);
  const [StateOrigin, set_stateOrigin] = useState(DataCargada.COD_ORIGIN_STATE);
  const [StateDestino, set_stateDestino] = useState(DataCargada.COD_DESTINATION_STATE);
  const [CityOrigin, set_cityOrigin] = useState(DataCargada.COD_ORIGIN_CITY);
  const [CityDestino, set_cityDestino] = useState(DataCargada.COD_DESTINATION_CITY);
  ///*********************UseEfect***********************/
  useEffect(() => {
    CountryService().then((element) => {
      set_ApiCountryOrigin(element.data);
    });
    if (PaisOrigin) {
      StateService(PaisOrigin).then((element) => {
        set_ApiStateOrigin(element.data);
      });
      if (StateOrigin) {
        CityService(StateOrigin).then((element) => {
          set_ApiCities(element.data);
        });
        if (CityOrigin) {
          CountryService().then((element) => {
            set_ApiCountryDestino(element.data);
          });
          if (PaisDestino) {
            StateService(PaisDestino).then((element) => {
              set_ApiStateDestino(element.data);
            });
            if (StateDestino) {
              CityService(StateDestino).then((element) => {
                set_ApiCitiesDestino(element.data);
              });
            }
          }
        }
      }
    } else {
      StateService(DataCargada.COD_ORIGIN_COUNTRY).then((element) => {
        set_ApiStateOrigin(element.data);
      });
    }
    if (DataCargada.COD_ORIGIN_STATE) {
      CityService(DataCargada.COD_ORIGIN_STATE).then((element) => {
        set_ApiCities(element.data);
      });
    }
    if (DataCargada.COD_DESTINATION_STATE) {
      CityService(DataCargada.COD_DESTINATION_STATE).then((element) => {
        set_ApiCitiesDestino(element.data);
      });
    }
    if (DataCargada.COD_DESTINATION_COUNTRY) {
      CountryService().then((element) => {
        set_ApiCountryDestino(element.data);
      });
    }
    if (DataCargada.COD_DESTINATION_COUNTRY) {
      StateService(DataCargada.COD_DESTINATION_COUNTRY).then((element) => {
        set_ApiStateDestino(element.data);
      });
    }

    dispatch(GetAllCategoryPackage());
    dispatch(GetAllservices());
    dispatch(GetAllTypePackage());
  }, [
    dispatch,
    PaisOrigin,
    StateOrigin,
    PaisDestino,
    StateDestino,
    CityOrigin,
    CityDestino,
    DataCargada,
  ]);
  const handleChange = (e) =>
    setDataCargada({ ...DataCargada, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      PaisOrigin === "" ||
      PaisDestino === "" ||
      StateOrigin === "" ||
      StateDestino === "" ||
      CityOrigin === "" ||
      CityDestino === ""
    ) {
      toast.error(`Todos los datos son necesario`);
    } else {
      set_SenData(true);
      dispatch(PutTrackingOrigenDestino(
          PaisOrigin,
        PaisDestino,
        StateOrigin,
        StateDestino,
        CityOrigin,
        CityDestino,
        COD_ORDEN,
        DataCargada.CHECKPOINT_DELIVERY_STATUS_ORIGIN,
        DataCargada.CHECKPOINT_DELIVERY_STATUS_DESTINO,
        set_SenData
        ))
        
      // history(`/admin/reception/country/${COD_COUNTRY}/`);
    }
  };

  return (
    <>
      <Toaster />
      <div className="flex justify-between">
        <h2 className="my-6 text-2xl font-semibold text-gray-700">
          Editar proceso de envio.
        </h2>
      </div>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-20 shadow-xl rounded-lg mt-10 pt-5 pb-10">
        <Divider align="center" type="dashed">
          <b>Paquete de origen</b>
        </Divider>
        <div className=" md:justify-between mb-4 md:flex w-full px-2">
          <label className="block mt-4 text-sm w-full px-2">
            <span className="text-gray-700 dark:text-gray-800">País</span>
            <select
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Peso de tracking"
              name="COD_ORIGIN_COUNTRY"
              onChange={(e) => {
                handleChange(e);
                set_paisOrigin(e.target.value);
                set_stateOrigin("");
              }}
              value={DataCargada.COD_ORIGIN_COUNTRY}
            >
              <option value="">-- Seleccione --</option>
              {ApiCountryOrigin.map((item, index) => (
                <option
                  key={index}
                  defaultValue={
                    item.COD_COUNTRY === DataCargada.COD_ORIGIN_COUNTRY
                  }
                  value={item.COD_COUNTRY}
                >
                  {item.NAM_COUNTRY}
                </option>
              ))}
            </select>
          </label>
          <label className="block mt-4 text-sm w-full px-2">
            <span className="text-gray-700 dark:text-gray-800">
              Departamento
            </span>
            <select
              name="COD_ORIGIN_STATE"
              onChange={(e) => {
                handleChange(e);
                set_stateOrigin(e.target.value);
                set_cityOrigin("");
              }}
              value={DataCargada.COD_ORIGIN_STATE}
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            >
              <option value="">-- Seleccione --</option>
              {ApiStateOrigin.map((item) => (
                <option
                  key={item.COD_STATE}
                  defaultValue={item.COD_STATE === DataCargada.COD_ORIGIN_STATE}
                  value={item.COD_STATE}
                >
                  {item.NAM_STATE}
                </option>
              ))}
            </select>
          </label>

          <label className="block mt-4 text-sm w-full px-2">
            <span className="text-gray-700 dark:text-gray-800">Ciudad</span>
            <select
              name="COD_ORIGIN_CITY"
              onChange={(e) => {
                handleChange(e);
                set_cityOrigin(e.target.value);
              }}
              value={DataCargada.COD_ORIGIN_CITY}
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            >
              <option value="">-- Seleccione --</option>
              {ApiCities.map((item) => (
                <option
                  key={item.COD_CITY}
                  defaultValue={item.COD_CITY === DataCargada.COD_ORIGIN_CITY}
                  value={item.COD_CITY}
                >
                  {item.NAM_CITY}
                </option>
              ))}
            </select>
          </label>
          <label className="block mt-4 text-sm w-full px-2">
            <span className="text-gray-700 dark:text-gray-800">
              Estado de envio
            </span>
            <select
              name="CHECKPOINT_DELIVERY_STATUS_ORIGIN"
              onChange={(e) => {
                handleChange(e);
              }}
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              value={DataCargada.CHECKPOINT_DELIVERY_STATUS_ORIGIN}
            >
              {selectStatusTracking.map((item, index) => (
                <option
                  key={index}
                  defaultValue={
                    item.value === DataCargada.CHECKPOINT_DELIVERY_STATUS_ORIGIN
                  }
                  value={item.value}
                >
                  {item.value}
                </option>
              ))}
            </select>
          </label>
        </div>
        <Divider align="center" type="dashed">
          <b>Paquete de Destino</b>
        </Divider>
        <div className=" md:justify-between mb-4 md:flex w-full px-2">
          <label className="block mt-4 text-sm w-full px-2">
            <span className="text-gray-700 dark:text-gray-800">País</span>
            <select
              name="COD_DESTINATION_COUNTRY"
              onChange={(e) => {
                set_paisDestino(e.target.value);
                set_stateDestino("");
                handleChange(e);
              }}
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              value={DataCargada.COD_DESTINATION_COUNTRY}
            >
              <option value="">-- Seleccione --</option>
              {ApiCountryDestino.map((item, index) => (
                <option
                  key={index}
                  value={item.COD_COUNTRY}
                  defaultValue={
                    item.COD_COUNTRY === DataCargada.COD_DESTINATION_COUNTRY
                  }
                >
                  {item.NAM_COUNTRY}
                </option>
              ))}
            </select>
          </label>
          <label className="block mt-4 text-sm w-full px-2">
            <span className="text-gray-700 dark:text-gray-800">
              Departamento
            </span>
            <select
              name="COD_DESTINATION_STATE"
              onChange={(e) => {
                set_stateDestino(e.target.value);
                set_cityDestino("");
                handleChange(e);
              }}
              value={DataCargada.COD_DESTINATION_STATE}
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            >
              <option value="">-- Seleccione --</option>
              {ApiStateDestino.map((items, index) => (
                <option
                  key={items.COD_STATE}
                  value={items.COD_STATE}
                  defaultValue={
                    items.COD_STATE === DataCargada.COD_DESTINATION_STATE
                  }
                >
                  {items.NAM_STATE}
                </option>
              ))}
            </select>
          </label>
          <label className="block mt-4 text-sm w-full px-2">
            <span className="text-gray-700 dark:text-gray-800">Ciudad</span>
            <select
              name="COD_DESTINATION_CITY"
              onChange={(e) => {
                handleChange(e);
                set_cityDestino(e.target.value);
              }}
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              value={DataCargada.COD_DESTINATION_CITY}
            >
              <option value="">-- Seleccione --</option>
              {ApiCitiesDestino.map((item, index) => (
                <option
                  key={index}
                  defaultValue={
                    item.COD_CITY === DataCargada.COD_DESTINATION_CITY
                  }
                  value={item.COD_CITY}
                >
                  {item.NAM_CITY}
                </option>
              ))}
            </select>
          </label>
          <label className="block mt-4 text-sm w-full px-2">
            <span className="text-gray-700 dark:text-gray-800">
              Estado de Entrega
            </span>
            <select
              name="CHECKPOINT_DELIVERY_STATUS_DESTINO"
              onChange={(e) => {
                handleChange(e);
              }}
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              value={DataCargada.CHECKPOINT_DELIVERY_STATUS_DESTINO}
            >
              {selectStatusTracking.map((item, index) => (
                <option
                  key={index}
                  defaultValue={
                    item.value ===
                    DataCargada.CHECKPOINT_DELIVERY_STATUS_DESTINO
                  }
                  value={item.value}
                >
                  {item.value}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="flex items-center justify-around mt-9">
          <button className="px-6 py-3 bg-gray-400 hover:bg-gray-500 shadow rounded text-sm text-white">
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            disabled={SenData}
            className="px-6 py-3 bg-indigo-700  shadow rounded text-sm text-white"
          >
            {SenData ? <SpinnerButton /> : "Guardar"}
          </button>
        </div>
      </div>
    </>
  );
}
