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
import {SpinerLoader} from "../../Spinners/Loader";
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
    { value: "DELIVERED" },
    {value : "IN_PROGRESS"},
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

  console.log(task);
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
          Tracking Progreso - {task.NUM_TRACKING_}
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

      {loaddin_DataOrdenTracking ? (<>
      
      {OrdenTrankings.ok ? (<><div className="flex justify-between mt-10">
        <h2 className="my-6 text-2xl font-semibold text-gray-700">
          Informacion Ubucacion - {task.NUM_TRACKING_}
        </h2>
      </div>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-20 shadow-xl rounded-lg ">
      <div className="px-3 pt-6 pb-6">
            <table className="w-full overflow-x-auto ">
              <tbody>
                <tr>
                  <td>
                    <div className="flex items-center">
                      <div className="bg-gray-100 rounded-sm p-2.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={28}
                          height={28}
                          viewBox="0 0 28 28"
                          fill="none"
                        >
                          <path
                            d="M13.5613 8.42567C12.5393 8.42567 10.9573 7.26367 9.29134 7.30567C7.09334 7.33367 5.07734 8.57967 3.94334 10.5537C1.66134 14.5157 3.35534 20.3677 5.58134 23.5877C6.67334 25.1557 7.96134 26.9197 9.66934 26.8637C11.3073 26.7937 11.9233 25.7997 13.9113 25.7997C15.8853 25.7997 16.4453 26.8637 18.1813 26.8217C19.9453 26.7937 21.0653 25.2257 22.1433 23.6437C23.3893 21.8237 23.9073 20.0597 23.9353 19.9617C23.8933 19.9477 20.5053 18.6457 20.4633 14.7257C20.4353 11.4497 23.1373 9.88167 23.2633 9.81167C21.7233 7.55767 19.3573 7.30567 18.5313 7.24967C16.3753 7.08167 14.5693 8.42567 13.5613 8.42567ZM17.2013 5.12167C18.1113 4.02967 18.7133 2.50367 18.5453 0.991669C17.2433 1.04767 15.6753 1.85967 14.7373 2.95167C13.8973 3.91767 13.1693 5.47167 13.3653 6.95567C14.8073 7.06767 16.2913 6.21367 17.2013 5.12167Z"
                            fill="#6B7280"
                          />
                        </svg>
                      </div>
                      <div className="pl-3">
                        <div className="flex items-center text-sm leading-none">
                          <p className="font-semibold text-gray-800">
                            Apple MacBook Pro 2020
                          </p>
                          <p className="text-blue-500 ml-3">(ID 879-10-940)</p>
                        </div>
                        <p className="text-xs md:text-sm leading-none text-gray-600 mt-2">
                          15’5. Core i5. FHD. Integrated graphics
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="pl-16">
                    <div>
                      <p className="text-sm font-semibold leading-none text-right text-gray-800">
                        $2200
                      </p>
                      <div className="flex items-center justify-center px-2 py-1 mt-2 bg-green-100 rounded-full">
                        <p className="text-xs leading-3 text-green-700">
                          Shipped
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
      </div></>):(<h2 className="my-6 text-2xl font-semibold text-gray-700 text-center mt-10">
      El tracking {task.NUM_TRACKING_} no cuenta con registros de transporte
        </h2>)}
      </>):(<SpinerLoader />)}
      
      
    </>
  );
}
