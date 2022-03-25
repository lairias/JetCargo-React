import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TabView, TabPanel } from 'primereact/tabview';
import { useForms } from "../../../hooks/useForms";
import { GetAllCategoryPackage } from "../../../actions/categorypackageAction";
import { GetAllservices } from "../../../actions/serviceAction";
import SpinnerButton from "../../Spinners/SpinnerButton";
import { useFetchToken } from "../../../hooks/useFetch";
import { GetAllTypePackage } from "../../../actions/typepackageAction";
import { GetTrackingAll, StartTrackingRecived } from "../../../actions/trackingAction";
import { InputSwitch } from "primereact/inputswitch";

export default function ModalEditNewTrackingPendiente({setIsOpen,dataNewModal, COD_TYPEPACKAGE_data, RECEIVED_TRACKING_data,setLoading,set_dataTracking}) {
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
  const { services, loadingServices } = useSelector((state) => state.services);
  const { TypePackage, loadingTypePackage } = useSelector(
    (state) => state.typepackage
  );

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
    },
    handleInputChange,
  ] = useForms({
    HEIGHT_PACKAGE: dataNewModal.HEIGHT_PACKAGE,
    WIDTH_PACKAGE: dataNewModal.WIDTH_PACKAGE,
    WEIGHT_PACKAGE: dataNewModal.WEIGHT_PACKAGE,
    COD_TYPEPACKAGE: dataNewModal.COD_TYPEPACKAGE,
    VOL_PACKAGE: dataNewModal.VOL_PACKAGE,
    NOM_PACKAGE: dataNewModal.NOM_PACKAGE,
    COD_CATPACKAGE: dataNewModal.COD_CATPACKAGE,
    SERVICE_NAME: dataNewModal.SERVICE_NAME,
    COD_SERVICE: dataNewModal.COD_SERVICE,
    RECEIVED_TRACKING: dataNewModal.RECEIVED_TRACKING,
    NUM_TRACKING: dataNewModal.NUM_TRACKING,
    DES_TRACKING: dataNewModal.DES_TRACKING,
    COD_TRACKING: dataNewModal.COD_TRACKING,
  });
  const [checbox, set_checbox] = useState(Boolean(dataNewModal.IND_TRACKING));
  const [Dataseguridad, statusSeguridad] = useFetchToken(`seguridad/9`);
  const [Precio, statusServicio] = useFetchToken(
    `typepackage/${COD_TYPEPACKAGE}`
  );
  //   /********************************************************************** */
  //   /****************************************************Variables de funciones */
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      StartTrackingRecived(
        HEIGHT_PACKAGE,
        WIDTH_PACKAGE,
        WEIGHT_PACKAGE,
        COD_TYPEPACKAGE,
        VOL_PACKAGE,
        NOM_PACKAGE,
        COD_CATPACKAGE,
        SERVICE_NAME,
        COD_SERVICE,
        RECEIVED_TRACKING,
        NUM_TRACKING,
        DES_TRACKING,
        COD_TRACKING,
        dataNewModal.COD_PACKAGE,
        checbox,
        setIsOpen
      )
    );
      dispatch(GetTrackingAll(set_dataTracking,setLoading,`tracking/${COD_TYPEPACKAGE_data}/${RECEIVED_TRACKING_data}`))
      setIsOpen(false)
  };
  const selectStatusTracking = [
    { value: "PENDING" },
    { value: "RECEIVED" },
    { value: "DELIVERED" },
    { value: "CANCELED" },
    { value: "IN_PROGRESS" },
  ];

  const handleCostoPeso = (e) => {
    setIsCalculo(Precio.PREC_TYPEPACKAGE * e.target.value);
  };

  //   /********************************************************************** */
  //   /********************************************************************** */
  return (
    <>
      <div  className="z-50 fixed w-full flex justify-center inset-0">
        <div className="w-full h-full bg-gray-500 bg-opacity-50 z-0 absolute inset-0" />
        <div className="mx-auto container">
          <div className="flex items-center justify-center h-full w-full">
            <div className="bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5">
              <div className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
                <p className="text-base font-semibold">
                  Tracking {dataNewModal.NUM_TRACKING}{" "}
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
                          defaultValue={RECEIVED_TRACKING === item.value}
                        >
                          {" "}
                          {item.value}{" "}
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
                            value={item.COD_TYPEPACKAGE}
                            defaultValue={
                              dataNewModal.COD_TYPEPACKAGE ===
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
                      value={NUM_TRACKING}
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
                              value={Dataseguridad.DATO_SEGURIDAD}
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
                            placeholder="Numero de tracking"
                            value={WEIGHT_PACKAGE}
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
                            Calculo *
                          </span>
                          <input
                            className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Numero de tracking"
                            value={
                              !parseFloat(dataNewModal.PRICE_PACKAGE)
                                ? isCalculo
                                : dataNewModal.PRICE_PACKAGE
                            }
                          />
                        </label>
                        <label className="block mt-4 text-sm w-full md:px-2">
                          <span className="text-gray-700 dark:text-gray-900">
                            Ancho paquete *
                          </span>
                          <input
                            className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Numero de tracking"
                            value={WIDTH_PACKAGE}
                            name="WIDTH_PACKAGE"
                            onChange={handleInputChange}
                          />
                        </label>
                        <label className="block mt-4 text-sm w-full md:px-2">
                          <span className="text-gray-700 dark:text-gray-900">
                            Altura paquete *
                          </span>
                          <input
                            className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Numero de tracking"
                            value={HEIGHT_PACKAGE}
                            name="HEIGHT_PACKAGE"
                            onChange={handleInputChange}
                          />
                        </label>
                        <label className="block mt-4 text-sm w-full md:px-2">
                          <span className="text-gray-700 dark:text-gray-900">
                            Volumen paquete *
                          </span>
                          <input
                            className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Numero de tracking"
                            value={VOL_PACKAGE}
                            name="VOL_PACKAGE"
                            onChange={handleInputChange}
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
                          defaultValue={DES_TRACKING}
                        />
                        <textarea
                          placeholder="Description"
                          className="p-3 m-3 overflow-y-auto h-16 border rounded w-full border-gray-200  resize-none focus:outline-none"
                          name="NOM_PACKAGE"
                          defaultValue={NOM_PACKAGE}
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
                    className="px-6 py-3 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white"
                  >
                    Crear Porceso de pago
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
