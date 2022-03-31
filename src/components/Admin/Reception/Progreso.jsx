import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetAllCategoryPackage } from "../../../actions/categorypackageAction";
import { GetAllservices } from "../../../actions/serviceAction";
import { GetAllTypePackage } from "../../../actions/typepackageAction";
import { GetCustomerReception } from "../../../actions/receptionAction";
import { useFetchToken } from "../../../hooks/useFetch";
import SpinnerButton from "../../Spinners/SpinnerButton";
import toast from "react-hot-toast";
import { Fieldset } from "primereact/fieldset";
import { StartTrackingRecived } from "../../../actions/trackingAction";
import { TabPanel, TabView } from "primereact/tabview";
import {
  CityService,
  CountryService,
  StateService,
} from "../../../service/ServiceDireciont";
import { SelectCountry } from "../../Register/Select/SelectCountry";
import { SelectState } from "../../Register/Select/SelectState";
import { SelectCity } from "../../Register/Select/SelectCity";
import { Divider } from "@mui/material";
import { GetTrackingByInformation } from "../../../actions/TrackingInformationAction";
export default function Progreso({
  COD_COUNTRY,
  COD_CUSTOMER,
  RECEIVED_TRACKING,
  NUM_TRACKING,
  COD_TRACKING
}) {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [sednDatos, setsednDatos] = useState(false);
  const { services, loadingServices } = useSelector((state) => state.services);
  const [calculoDolares, setCaluloDolares] = useState(0);
  const [calculoLempiras, setCaluloLempiras] = useState(0);
  const { TypePackage, loadingTypePackage } = useSelector((state) => state.typepackage
  );
  const [Dataseguridad, statusSeguridad] = useFetchToken(`seguridad/9`);
  const [OrdenTrankings, loaddin_DataOrdenTracking] = useFetchToken(`orden/${COD_TRACKING}`);
  const selectStatusTracking = [
    { value: "PENDING" },
    { value: "RECEIVED" },
    { value: "CANCELED" },
  ];
  const { categoryPackage, loading } = useSelector(
    (state) => state.categorypackage
  );
  const { TrackingPendiente, loaddinPendiente } = useSelector(
    (state) => state.reception
  );
  const [task, setTask] = useState({
    HEIGHT_PACKAGE: "",
    WIDTH_PACKAGE: "",
    WEIGHT_PACKAGE: "",
    VOL_PACKAGE: "",
    SERVICE_NAME: "",
    NOM_PACKAGE: "",
    COD_CATPACKAGE: "",
    NUM_TRACKING_: "",
    COD_SERVICE: "",
    RECEIVED_TRACKING_: "",
    DES_TRACKING: "",
    COD_TYPEPACKAGE: "",
    COD_TRACKING: "",
    PRICE_PACKAGE: "",
    IND_TRACKING: "",
    COD_PACKAGE: "",
  });

  const [Direcciones, setDirecciones] = useState({
    COD_COUNTRY_ORIGIN: "",
    COD_CITY_ORIGIN: "",
    COD_STATE_ORIGIN: "",

    COD_COUNTRY_DESTINO: "",
    COD_CITY_DESTINO: "",
    COD_STATE_DESTINO: "",
  });
  const [Precio, statusServicio] = useFetchToken(
    `typepackage/${task.COD_TYPEPACKAGE}`
  );

  const [ApiCities, set_ApiCities] = useState([]);
  const [ApiCountryOrigin, set_ApiCountryOrigin] = useState([]);
  const [ApiStateOrigin, set_ApiStateOrigin] = useState([]);
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
      }
    }
    dispatch(
      GetCustomerReception(
        `tracking/received/${RECEIVED_TRACKING}/${COD_CUSTOMER}/${NUM_TRACKING}`,
        setTask
      )
    );
    dispatch(GetAllCategoryPackage());
    dispatch(GetAllservices());
    dispatch(GetAllTypePackage());
    dispatch(GetTrackingByInformation());
  }, [dispatch, PaisOrigin, StateOrigin]);

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  const handleCalculo = (e) => {
    const precioDolares =
      parseFloat(e.target.value) * parseFloat(Precio.PREC_TYPEPACKAGE);
    const precioLempiras =
      parseFloat(e.target.value) *
      parseFloat(Precio.PREC_TYPEPACKAGE) *
      parseFloat(Dataseguridad.DATO_SEGURIDAD);
    setCaluloDolares(precioDolares);
    setCaluloLempiras(precioLempiras);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      task.WEIGHT_PACKAGE === " " ||
      task.WEIGHT_PACKAGE === 0 ||
      task.WEIGHT_PACKAGE <= 0
    ) {
      toast.error(`Todos los datos son necesario`);
    } else {
      dispatch(StartTrackingRecived(task, COD_CUSTOMER, setsednDatos));

      history(`/admin/reception/country/${COD_COUNTRY}/`);
    }
  };
  return (
    <>
      <div className="flex justify-between">
        <h2 className="my-6 text-2xl font-semibold text-gray-700">
          Tracking Pendiente - {task.NUM_TRACKING_}
        </h2>
      </div>
      <TabView>
        <TabPanel header="Direcciones de envio">
          <Divider align="center" type="dashed">
            <b>Paquete de origen</b>
          </Divider>
          <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
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
                <SelectCountry ApiCountry={ApiCountryOrigin} />
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
                <SelectState ApiState={ApiStateOrigin} />
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
                <SelectCity ApiCities={ApiCities} />
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
        </TabPanel>










        <TabPanel header="Informacion de tracking">
            <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
              <label className="block mt-4 text-sm w-full md:px-2">
                <span className="text-gray-700 dark:text-gray-900">
                  Proceso tracking
                </span>
                <select
                  className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Peso de tracking"
                  name="RECEIVED_TRACKING_"
                  onChange={handleChange}
                  value={task.RECEIVED_TRACKING_}
                >
                  {selectStatusTracking.map((item) => (
                    <option
                      key={item.value}
                      defaultValue={item.value === task.RECEIVED_TRACKING_}
                      disabled={item.value === task.RECEIVED_TRACKING_}
                    >
                      {item.value}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block mt-4 text-sm w-full md:px-2">
                <span className="text-gray-700 dark:text-gray-900">
                  Tipo de envio
                </span>
                {loadingTypePackage ? (
                  <select
                    className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Tipo de envio  tracking"
                    name="COD_TYPEPACKAGE"
                    onChange={handleChange}
                    value={task.COD_TYPEPACKAGE}
                  >
                    {TypePackage.map((item) => (
                      <option
                        key={item.COD_TYPEPACKAGE}
                        defaultValue={
                          task.COD_TYPEPACKAGE === item.COD_TYPEPACKAGE
                        }
                      >
                        {" "}
                        {item.NAM_TYPEPACKAGE}{" "}
                      </option>
                    ))}
                  </select>
                ) : (
                  <SpinnerButton />
                )}
              </label>
              <label className="block mt-4 text-sm w-full md:px-2">
                <span className="text-gray-700 dark:text-gray-900">
                  Servicio de envio
                </span>
                {loadingServices ? (
                  <select
                    className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Numero de tracking"
                    name="SERVICE_NAME"
                    onChange={handleChange}
                    value={task.SERVICE_NAME}
                  >
                    {services.map((item) => (
                      <option
                        key={item.value}
                        defaultValue={task.SERVICE_NAME === item.value}
                      >
                        {item.label}{" "}
                      </option>
                    ))}
                  </select>
                ) : (
                  <SpinnerButton />
                )}
              </label>
              <label className="block mt-4 text-sm w-full md:px-2">
                <span className="text-gray-700 dark:text-gray-900">
                  Número de Tracking
                </span>
                <input
                  className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Numero de tracking"
                  name="NUM_TRACKING_"
                  onChange={handleChange}
                  value={task.NUM_TRACKING_}
                />
              </label>
              Crear Porceso de pago
            </div>
            <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
              <label className="block mt-4 text-sm w-full md:px-2">
                <span className="text-gray-700 dark:text-gray-900 items-center">
                  Descripción tracking
                </span>
                <textarea
                  placeholder="Description"
                  className="p-3 m-3 overflow-y-auto h-16 border rounded w-full border-gray-200 resize-none focus:outline-none"
                  name="DES_TRACKING"
                  onChange={handleChange}
                  value={task.DES_TRACKING}
                />
              </label>
              <label className="block mt-4 text-sm w-full md:px-2">
                <span className="text-gray-700 dark:text-gray-900 items-center">
                  Nombre Tracking
                </span>
                <textarea
                  placeholder="Description"
                  className="p-3 m-3 overflow-y-auto h-16 border rounded w-full border-gray-200  resize-none focus:outline-none"
                  name="NOM_PACKAGE"
                  value={task.NOM_PACKAGE}
                  onChange={handleChange}
                ></textarea>
              </label>
              {/* <label className="flex justify-center mt-4 text-sm w-full md:px-2 pt-12">
            <span className="text-gray-700 dark:text-gray-900 items-center">
              Estado Tracking
            </span>
            <select
                className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Numero de tracking"
                name="IND_TRACKING"
                onChange={handleChange}
                value={task.IND_TRACKING}
                >
                  <option
                    key={item.value}
                    defaultValue={task.SERVICE_NAME === item.value}
                  >
                    {item.label}{" "}
                  </option>
              </select>
          </label> */}
            </div>

            <form>
              <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
                <label className="block mt-4 text-sm w-full md:px-2">
                  <span className="text-gray-700 dark:text-gray-900">
                    Cambio de dolar
                  </span>
                  {statusSeguridad ? (
                    <input
                      className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Cambio dolar de tracking"
                      disabled={true}
                      defaultValue={Dataseguridad.DATO_SEGURIDAD}
                    />
                  ) : (
                    <SpinnerButton />
                  )}
                </label>
                <label className="block mt-4 text-sm w-full md:px-2">
                  <span className="text-gray-700 dark:text-gray-900">
                    Costo de servico
                  </span>
                  {statusServicio ? (
                    <input
                      className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Costo de servicio de envio"
                      disabled={true}
                      value={Precio.PREC_TYPEPACKAGE}
                    />
                  ) : (
                    <SpinnerButton />
                  )}
                </label>
                <label className="block mt-4 text-sm w-full md:px-2">
                  <span className="text-gray-700 dark:text-gray-900">
                    Peso paquete *
                  </span>
                  <input
                    className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Pesode tracking"
                    type="number"
                    name="WEIGHT_PACKAGE"
                    onChange={(e) => {
                      handleChange(e), handleCalculo(e);
                    }}
                    value={task.WEIGHT_PACKAGE}
                  />
                </label>
                <label className="block mt-4 text-sm w-full md:px-2">
                  <span className="text-gray-700 dark:text-gray-900">
                    Calculo en dolares USD
                  </span>
                  <input
                    className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Costo dolares de tracking"
                    disabled={true}
                    value={isNaN(calculoDolares) ? 0 : calculoDolares}
                  />
                </label>
                <label className="block mt-4 text-sm w-full md:px-2">
                  <span className="text-gray-700 dark:text-gray-900">
                    Calculo en Lempiras LPS
                  </span>
                  <input
                    className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Numero de tracking"
                    disabled={true}
                    value={isNaN(calculoLempiras) ? 0 : calculoLempiras}
                  />
                </label>
              </div>
            </form>
        </TabPanel>
      </TabView>

      
      
    </>
  );
}
