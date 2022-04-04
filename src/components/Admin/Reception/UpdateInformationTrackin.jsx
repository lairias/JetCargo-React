import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { GetAllCategoryPackage } from "../../../actions/categorypackageAction";
import { GetAllservices } from "../../../actions/serviceAction";
import { GetAllTypePackage } from "../../../actions/typepackageAction";
import { useFetchToken } from "../../../hooks/useFetch";
import SpinnerButton from "../../Spinners/SpinnerButton";
import toast from "react-hot-toast";
import Select from 'react-select';
import { SpinerLoader } from "../../Spinners/Loader";
import {
  CityService,
  CountryService,
  StateService,
} from "../../../service/ServiceDireciont";
import { SelectCountry } from "../../Register/Select/SelectCountry";
import { SelectState } from "../../Register/Select/SelectState";
import { SelectCity } from "../../Register/Select/SelectCity";
import { Divider } from "@mui/material";
import {
  GetTrackingByInformation,
  SendTrackingInformation,
} from "../../../actions/TrackingInformationAction";
export default function UpdateInformationTrackin({}) {
  const history = useNavigate();
  const dispatch = useDispatch();
  const { COD_COUNTRY, COD_ORDEN, COD_ORIGEN, COD_DESTINO } = useParams();
  const [sednDatos, setsednDatos] = useState(false);
  
  const [DataDestino, loadding_Destino] = useFetchToken(
    `trackingInformation/destino/${COD_DESTINO}`
  );
  const [DataOrigen, loadding_Origen] = useFetchToken(
    `trackingInformation/inicio/${COD_ORIGEN}`
  );
  console.log(DataDestino);
  const selectStatusTracking = [
    { value: "PENDING" },
    { value: "RECEIVED" },
    { value: "CANCELED" },
    { value: "DELIVERED" },
    { value: "IN_PROGRESS" },
  ];

  const [Direcciones, setDirecciones] = useState({
    COD_COUNTRY_ORIGIN: "",
    COD_CITY_ORIGIN: "",
    COD_STATE_ORIGIN: "",
    COD_COUNTRY_DESTINO: "",
    COD_CITY_DESTINO: "",
    COD_STATE_DESTINO: "",
  });

  const [ApiCities, set_ApiCities] = useState([]);
  const [ApiCountryOrigin, set_ApiCountryOrigin] = useState([]);
  const [ApiStateOrigin, set_ApiStateOrigin] = useState([]);
  const [ApiCitiesDestino, set_ApiCitiesDestino] = useState([]);
  const [ApiCountryDestino, set_ApiCountryDestino] = useState([]);
  const [ApiStateDestino, set_ApiStateDestino] = useState([]);
  const [PaisOrigin, set_paisOrigin] = useState();
  const [PaisDestino, set_paisDestino] = useState();
  const [StateOrigin, set_stateOrigin] = useState();
  const [StateDestino, set_stateDestino] = useState();
  const [CityOrigin, set_cityOrigin] = useState();
  const [CityDestino, set_cityDestino] = useState();
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
    }

    dispatch(GetAllCategoryPackage());
    dispatch(GetAllservices());
    dispatch(GetAllTypePackage());
    dispatch(GetTrackingByInformation(COD_ORDEN));
  }, [
    dispatch,
    PaisOrigin,
    StateOrigin,
    PaisDestino,
    StateDestino,
    CityOrigin,
    CityDestino,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      task.WEIGHT_PACKAGE === " " ||
      task.WEIGHT_PACKAGE === 0 ||
      task.WEIGHT_PACKAGE <= 0 ||
      Direcciones.COD_COUNTRY_ORIGIN === "" ||
      Direcciones.COD_COUNTRY_DESTINO === "" ||
      Direcciones.COD_STATE_ORIGIN === "" ||
      Direcciones.COD_STATE_DESTINO === "" ||
      Direcciones.COD_CITY_ORIGIN === "" ||
      Direcciones.COD_CITY_DESTINO === ""
    ) {
      toast.error(`Todos los datos son necesario`);
    } else {
      // history(`/admin/reception/country/${COD_COUNTRY}/`);
    }
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-20 shadow-xl rounded-lg mt-16">
        <div className="flex justify-between">
          <h2 className="my-6 text-2xl font-semibold text-gray-700">
            {/* Tracking Progreso - {task.NUM_TRACKING_} */}
          </h2>
        </div>
        <Divider align="center" type="dashed">
          <b>Paquete de origen</b>
        </Divider>
        <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-800">País</span>
            <Select options={ApiCountryOrigin}
            defaultValue={{ value: 3}}></Select>
            <select
              onChange={(e) => {
                set_paisOrigin(e.target.value);
                setDirecciones({
                  ...Direcciones,
                  COD_COUNTRY_ORIGIN: e.target.value,
                });
              }}
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              value={Direcciones.COD_COUNTRY_ORIGIN}
            >
              <option value="">-- Seleccione --</option>
              {ApiCountryOrigin.map((item) => (
    <option key={item.COD_COUNTRY} value={item.COD_COUNTRY}>
     { item.NAM_COUNTRY} 
    </option>
  ))}
            </select>
            
          </label>
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-800">
              Departamento
            </span>
            <select
              disabled={Direcciones.COD_COUNTRY_ORIGIN ? false : true}
              onChange={(e) => {
                set_stateOrigin(e.target.value);
                setDirecciones({
                  ...Direcciones,
                  COD_CITY_ORIGIN: e.target.value,
                });
              }}
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              value={Direcciones.COD_CITY_ORIGIN}
            >
              <option value="">-- Seleccione --</option>
              <SelectState ApiState={ApiStateOrigin} />
            </select>
          </label>
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-800">Ciudad</span>
            <select
              disabled={Direcciones.COD_CITY_ORIGIN ? false : true}
              onChange={(e) => {
                set_cityOrigin(e.target.value);
                setDirecciones({
                  ...Direcciones,
                  COD_STATE_ORIGIN: e.target.value,
                });
              }}
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              value={Direcciones.COD_STATE_ORIGIN}
            >
              <option value="">-- Seleccione --</option>
              <SelectCity ApiCities={ApiCities} />
            </select>
          </label>
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-800">Estado</span>
            <select
              onChange={(e) => {
                set_paisOrigin(e.target.value);
                setDirecciones({
                  ...Direcciones,
                  COD_COUNTRY_ORIGIN: e.target.value,
                });
              }}
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              value={Direcciones.COD_COUNTRY_ORIGIN}
            >
              <option value="">-- Seleccione --</option>
              <SelectCountry ApiCountry={ApiCountryOrigin} />
            </select>
          </label>
        </div>
        <Divider align="center" type="dashed">
          <b>Paquete de Destino</b>
        </Divider>

        <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-800">País</span>
            <select
              disabled={Direcciones.COD_STATE_ORIGIN ? false : true}
              onChange={(e) => {
                set_paisDestino(e.target.value);
                setDirecciones({
                  ...Direcciones,
                  COD_COUNTRY_DESTINO: e.target.value,
                });
              }}
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              value={Direcciones.COD_COUNTRY_DESTINO}
            >
              <option value="">-- Seleccione --</option>
              <SelectCountry ApiCountry={ApiCountryDestino} />
            </select>
          </label>
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-800">
              Departamento
            </span>
            <select
              disabled={Direcciones.COD_COUNTRY_DESTINO ? false : true}
              onChange={(e) => {
                set_stateDestino(e.target.value);
                setDirecciones({
                  ...Direcciones,
                  COD_CITY_DESTINO: e.target.value,
                });
              }}
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              value={Direcciones.COD_CITY_DESTINO}
            >
              <option value="">-- Seleccione --</option>
              <SelectState ApiState={ApiStateDestino} />
            </select>
          </label>
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-800">Ciudad</span>
            <select
              disabled={Direcciones.COD_CITY_DESTINO ? false : true}
              onChange={(e) => {
                set_cityDestino(e.target.value);
                setDirecciones({
                  ...Direcciones,
                  COD_STATE_DESTINO: e.target.value,
                });
              }}
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              value={Direcciones.COD_STATE_DESTINO}
            >
              <option value="">-- Seleccione --</option>
              <SelectCity ApiCities={ApiCitiesDestino} />
            </select>
          </label>
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-800">País</span>
            <select
              onChange={(e) => {
                set_paisOrigin(e.target.value);
                setDirecciones({
                  ...Direcciones,
                  COD_COUNTRY_ORIGIN: e.target.value,
                });
              }}
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              value={Direcciones.COD_COUNTRY_ORIGIN}
            >
              <option value="">-- Seleccione --</option>
              <SelectCountry ApiCountry={ApiCountryOrigin} />
            </select>
          </label>
        </div>
        <div className="flex items-center justify-around mt-9">
          <button className="px-6 py-3 bg-gray-400 hover:bg-gray-500 shadow rounded text-sm text-white">
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            disabled={sednDatos}
            className="px-6 py-3 bg-indigo-700  shadow rounded text-sm text-white"
          >
            {sednDatos ? <SpinnerButton /> : " Crear Porceso de pago"}
          </button>
        </div>
      </div>
    </>
  );
}
