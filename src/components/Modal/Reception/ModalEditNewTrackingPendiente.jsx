import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TabView, TabPanel } from "primereact/tabview";
import { useForms } from "../../../hooks/useForms";
import { GetAllCategoryPackage } from "../../../actions/categorypackageAction";
import { GetAllservices } from "../../../actions/serviceAction";
import SpinnerButton from "../../Spinners/SpinnerButton";
import { useFetchToken } from "../../../hooks/useFetch";
import { GetAllTypePackage } from "../../../actions/typepackageAction";
import {
  GetTrackingAll,
  StartTrackingRecived,
} from "../../../actions/trackingAction";
import { InputSwitch } from "primereact/inputswitch";
import toast, { Toaster } from "react-hot-toast";

export default function ModalEditNewTrackingPendiente({
  setIsOpen,
  COD_TYPEPACKAGE_data,
  RECEIVED_TRACKING_data,
  setLoading,
  set_dataTracking,
}) {
  /****************************************************Variables de State */
  /********************************************************************** */
  
  const [isCalculo, setIsCalculo] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllCategoryPackage());
    dispatch(GetAllservices());
    dispatch(GetAllTypePackage());
  }, [dispatch]);
  const { categoryPackage, loading } = useSelector(
    (state) => state.categorypackage
  );
  const { modalOrdenPendiente,startUploadReceptionPendiente } = useSelector(
    (state) => state.reception
  );
  const { id } = useSelector((state) => state.auth);
  const { services, loadingServices } = useSelector((state) => state.services);
  const { TypePackage, loadingTypePackage } = useSelector(
    (state) => state.typepackage
  );
  console.log( modalOrdenPendiente)
  /****************************************************Variables de Hooks */
  const [
    {
      HEIGHT_PACKAGE,
      WIDTH_PACKAGE,
      WEIGHT_PACKAGE,
      VOL_PACKAGE,
      SERVICE_NAME,
      NOM_PACKAGE,
      COD_CATPACKAGE,
      NUM_TRACKING,
      COD_SERVICE,
      RECEIVED_TRACKING,
      DES_TRACKING,
      COD_TYPEPACKAGE,
      COD_TRACKING,
      PRICE_PACKAGE,
    },
    handleInputChange,
  ] = useForms({
    PRICE_PACKAGE: modalOrdenPendiente.PRICE_PACKAGE === null ? 0 : modalOrdenPendiente.PRICE_PACKAGE,
    HEIGHT_PACKAGE: modalOrdenPendiente.HEIGHT_PACKAGE === null ? 0 : modalOrdenPendiente.HEIGHT_PACKAGE,
    WIDTH_PACKAGE: modalOrdenPendiente.WIDTH_PACKAGE,
    WEIGHT_PACKAGE: modalOrdenPendiente.WEIGHT_PACKAGE ,
    COD_TYPEPACKAGE: modalOrdenPendiente.COD_TYPEPACKAGE,
    VOL_PACKAGE: modalOrdenPendiente.VOL_PACKAGE,
    NOM_PACKAGE: modalOrdenPendiente.NOM_PACKAGE,
    COD_CATPACKAGE: modalOrdenPendiente.COD_CATPACKAGE,
    SERVICE_NAME: modalOrdenPendiente.SERVICE_NAME,
    COD_SERVICE: modalOrdenPendiente.COD_SERVICE,
    RECEIVED_TRACKING: modalOrdenPendiente.RECEIVED_TRACKING,
    NUM_TRACKING: modalOrdenPendiente.NUM_TRACKING,
    DES_TRACKING: modalOrdenPendiente.DES_TRACKING,
    COD_TRACKING: modalOrdenPendiente.COD_TRACKING,
  });
  const [checbox, set_checbox] = useState(Boolean(modalOrdenPendiente.IND_TRACKING));
  const [Dataseguridad, statusSeguridad] = useFetchToken(`seguridad/9`);
  const [Precio, statusServicio] = useFetchToken(
    `typepackage/${COD_TYPEPACKAGE}`
  );
  //   /********************************************************************** */
  //   /****************************************************Variables de funciones */
  const handleSubmit = (e) => {

    e.preventDefault();
  
      if(WEIGHT_PACKAGE === " " && WEIGHT_PACKAGE <= 0){
        toast.error(`${WEIGHT_PACKAGE} no es un peso valido`);
      }
    // if(WEIGHT_PACKAGE === " " && WEIGHT_PACKAGE <= 0){
    //   toast.error(`${WEIGHT_PACKAGE} no es un peso valido`);
    // }else{
    //   dispatch(
    //     StartTrackingRecived(
    //       HEIGHT_PACKAGE,
    //       WIDTH_PACKAGE,
    //       WEIGHT_PACKAGE,
    //       COD_TYPEPACKAGE,
    //       VOL_PACKAGE,
    //       NOM_PACKAGE,
    //       COD_CATPACKAGE,
    //       SERVICE_NAME,
    //       COD_SERVICE,
    //       RECEIVED_TRACKING,
    //       NUM_TRACKING,
    //       DES_TRACKING,
    //       COD_TRACKING,
    //       id,
    //       modalOrdenPendiente.COD_PACKAGE,
    //       checbox,
    //       setIsOpen,
    //     )
    //   );
    //   dispatch(
    //     GetTrackingAll(
    //       set_dataTracking,
    //       setLoading,
    //       `tracking/${COD_TYPEPACKAGE_data}/${RECEIVED_TRACKING_data}`
    //     )
    //   );
    // }
    
  };
  const selectStatusTracking = [
    { value: "PENDING" },
    { value: "RECEIVED" },
    { value: "DELIVERED" },
    { value: "CANCELED" },
    { value: "IN_PROGRESS" },
  ];
  const handleCostoPeso = (e) => {
    setIsCalculo(
      parseFloat(Precio.PREC_TYPEPACKAGE) * parseFloat(e.target.value)
    );
  };
    /********************************************************************** */
    /********************************************************************** */
  return (
    <>
      <Toaster />
      <div className="z-50 fixed w-full flex justify-center inset-0">
        <div className="w-full h-full bg-gray-500 bg-opacity-50 z-0 absolute inset-0" />
        <div className="mx-auto container">
          <div className="flex items-center justify-center h-full w-full">
            <div className="bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5">
              <div className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
                <p className="text-base font-semibold">
                  Tracking <span className="text-bold">{NUM_TRACKING}</span> 
                </p>
                <button onClick={setIsOpen} className="focus:outline-none">
                  X
                </button>
              </div>
              <div className="px-4  md:px-10  md:pb-4 pb-7 ">
                <TabView>
                  <TabPanel header="Estado">
                    <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
                      <label className="block mt-4 text-sm w-full md:px-2">
                        <span className="text-gray-700 dark:text-gray-900">
                          Proceso tracking
                        </span>
                        <select
                          className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Numero de tracking"
                          value={RECEIVED_TRACKING}
                          name="RECEIVED_TRACKING"
                          onChange={handleInputChange}
                        >
                          {selectStatusTracking.map((item) => (
                            <option
                              key={item.value}
                              defaultValue={item.value === "RECEIVED"}
                            >
                              {item.value === "PENDING"
                                ? "RECEIVED"
                                : item.value}
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
                            placeholder="Numero de tracking"
                            value={COD_TYPEPACKAGE}
                            name="COD_TYPEPACKAGE"
                            onChange={handleInputChange}
                          >
                            {TypePackage.map((item) => (
                              <option
                                key={item.COD_TYPEPACKAGE}
                                defaultValue={
                                  modalOrdenPendiente.COD_TYPEPACKAGE ===
                                  item.COD_TYPEPACKAGE
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
                          Número de Tracking
                        </span>
                        <input
                          className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Numero de tracking"
                          value={NUM_TRACKING === null ? " " : NUM_TRACKING}
                          name="NUM_TRACKING"
                          onChange={handleInputChange}
                        />
                      </label>
                    </div>

                    <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
                      <label className="block mt-4 text-sm w-full md:px-2">
                        <span className="text-gray-700 dark:text-gray-900 items-center">
                          Estado tracking
                        </span>
                        <InputSwitch
                          checked={checbox}
                          onChange={(e) => set_checbox(!checbox)}
                        />
                      </label>
                    </div>
                  </TabPanel>
                  <TabPanel header="Dimensiones tracking">
                    <form>
                      <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
                        <label className="block mt-4 text-sm w-full md:px-2">
                          <span className="text-gray-700 dark:text-gray-900">
                            Cambio de dolar
                          </span>
                          {statusSeguridad ? (
                            <input
                              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              placeholder="Numero de tracking"
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
                              placeholder="Numero de tracking"
                              disabled={true}
                              defaultValue={Precio.PREC_TYPEPACKAGE}
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
                            placeholder="Numero de tracking"
                            value={
                              WEIGHT_PACKAGE === null ? " " : WEIGHT_PACKAGE
                            }
                            type="number"
                            name="WEIGHT_PACKAGE"
                            onChange={(e) => {
                              handleCostoPeso(e);
                              handleInputChange(e);
                            }}
                          />
                        </label>
                      </div>

                      <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
                        <label className="block mt-4 text-sm w-full md:px-2">
                          <span className="text-gray-700 dark:text-gray-900">
                            Calculo en dolares USD
                          </span>
                          <input
                            className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Numero de tracking"
                            disabled={true}
                            value={
                              
                              PRICE_PACKAGE >= 0 ? isNaN(isCalculo) ? 0 : isCalculo : PRICE_PACKAGE
                            }
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
                            value={
                              PRICE_PACKAGE >= 0
                                ? isNaN(
                                    parseFloat(isCalculo) *
                                      parseFloat(Dataseguridad.DATO_SEGURIDAD)
                                  )
                                  
                                  : isNaN(parseFloat(PRICE_PACKAGE) *
                                    parseFloat(Dataseguridad.DATO_SEGURIDAD))
                            }
                            // value={
                            //   PRICE_PACKAGE >= 0
                            //     ? isNaN(
                            //         parseFloat(isCalculo) *
                            //           parseFloat(Dataseguridad.DATO_SEGURIDAD)
                            //       )
                            //       ? 0
                            //       : parseFloat(isCalculo) *
                            //         parseFloat(Dataseguridad.DATO_SEGURIDAD)
                            //     : parseFloat(PRICE_PACKAGE) *        parseFloat(Dataseguridad.DATO_SEGURIDAD)
                            // }
                          />
                        </label>
                      </div>
                    </form>
                  </TabPanel>
                  <TabPanel header="Datos tracking">
                    <form>
                      <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
                        <label className="block mt-4 text-sm w-full md:px-2">
                          <span className="text-gray-700 dark:text-gray-900">
                            Servicio de envio
                          </span>
                          {loadingServices ? (
                            <select
                              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              placeholder="Numero de tracking"
                              value={SERVICE_NAME}
                              name="SERVICE_NAME"
                              onChange={handleInputChange}
                            >
                              {services.map((item) => (
                                <option
                                  key={item.value}
                                  defaultValue={SERVICE_NAME === item.value}
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
                            Servicio de envio
                          </span>
                          {loading ? (
                            <select
                              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              placeholder="Numero de tracking"
                              value={COD_CATPACKAGE}
                              name="COD_CATPACKAGE"
                              onChange={handleInputChange}
                            >
                              {categoryPackage.map((item) => (
                                <option
                                  key={item.COD_CATPACKAGE}
                                  defaultValue={
                                    COD_CATPACKAGE === item.COD_CATPACKAGE
                                  }
                                >
                                  {item.NAM_CATPACKAGE}{" "}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <SpinnerButton />
                          )}
                        </label>
                      </div>
                      <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
                        <label className="block mt-4 text-sm w-full md:px-2">
                          <span className="text-gray-700 dark:text-gray-900">
                            Número de Tracking
                          </span>
                          <input
                            className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Numero de tracking"
                            value={NUM_TRACKING}
                            name="NUM_TRACKING"
                            onChange={handleInputChange}
                          />
                        </label>
                        <textarea
                          placeholder="Description"
                          className="p-3 m-3 overflow-y-auto h-16 border rounded w-full border-gray-200 resize-none focus:outline-none"
                          name="DES_TRACKING"
                          onChange={handleInputChange}
                          value={DES_TRACKING}
                        />
                        <textarea
                          placeholder="Description"
                          className="p-3 m-3 overflow-y-auto h-16 border rounded w-full border-gray-200  resize-none focus:outline-none"
                          name="NOM_PACKAGE"
                          value={NOM_PACKAGE}
                          onChange={handleInputChange}
                        ></textarea>
                      </div>
                    </form>
                  </TabPanel>
                </TabView>
                <div className="flex items-center justify-between mt-9">
                  <button
                    onClick={setIsOpen}
                    className="px-6 py-3 bg-gray-400 hover:bg-gray-500 shadow rounded text-sm text-white"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={startUploadReceptionPendiente}
                    className="px-6 py-3 bg-indigo-700  shadow rounded text-sm text-white"
                  >
                    {startUploadReceptionPendiente ? (
                      <SpinnerButton />
                    ) : (
                      "Crear Porceso de pago"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
