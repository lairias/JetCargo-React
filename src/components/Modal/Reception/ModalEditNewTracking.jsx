import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Barcode from "../../../util/Barcode";
import { Accordion, AccordionTab } from "primereact/accordion";
import {
  StarCodLockerRandom,
  AddLokersCustomers,
} from "../../../actions/lockersAction";
import { InputText } from "primereact/inputtext";
import { useForms } from "../../../hooks/useForms";
import { GetAllCategoryPackage } from "../../../actions/categorypackageAction";
import { GetAllservices } from "../../../actions/serviceAction";
import SpinnerButton from "../../Spinners/SpinnerButton";
import { GetSeguridadID } from "../../../actions/serguridadAction";
export default function ModalEditNewTracking({ set_isOpen, dataNewModal }) {
  /****************************************************Variables de State */
  /********************************************************************** */
  const [seguridadDolar, set_seguridadDolar] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllCategoryPackage());
    dispatch(GetAllservices());
    dispatch(GetSeguridadID(7,set_seguridadDolar));
  }, [dispatch]);

  const { categoryPackage, loading } = useSelector(
    (state) => state.categorypackage
  );
  const { services, loadingServices } = useSelector((state) => state.services);
  console.log(seguridadDolar);

  /****************************************************Variables de Hooks */
  const [
    {
      HEIGHT_PACKAGE,
      WIDTH_PACKAGE,
      LENGTH_PACKAGE,
      WEIGHT_PACKAGE,
      PRICE_PACKAGE,
      VOL_PACKAGE,
      SERVICE_NAME,
      NOM_PACKAGE,
      COD_CATPACKAGE,
      NUM_TRACKING,
      RECEIVED_TRACKING,
      DES_TRACKING,
    },
    handleInputChange,
  ] = useForms({
    HEIGHT_PACKAGE: dataNewModal.HEIGHT_PACKAGE,
    WIDTH_PACKAGE: dataNewModal.WIDTH_PACKAGE,
    WEIGHT_PACKAGE: dataNewModal.WEIGHT_PACKAGE,
    PRICE_PACKAGE: 0,
    VOL_PACKAGE: dataNewModal.VOL_PACKAGE,
    NOM_PACKAGE: dataNewModal.NOM_PACKAGE,
    COD_CATPACKAGE: dataNewModal.COD_CATPACKAGE,
    SERVICE_NAME: dataNewModal.SERVICE_NAME,
    COD_SERVICE: dataNewModal.COD_SERVICE,
    RECEIVED_TRACKING: dataNewModal.RECEIVED_TRACKING,
    NUM_TRACKING: dataNewModal.NUM_TRACKING,
    DES_TRACKING: dataNewModal.DES_TRACKING,
  });
  //   /********************************************************************** */
  //   /****************************************************Variables de funciones */
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(StarCodLockerRandom());
  };
  const selectStatusTracking = [
    { value: "PENDING" },
    { value: "RECEIVED" },
    { value: "DELIVERED" },
    { value: "CANCELED" },
    { value: "IN_PROGRESS" },
  ];
  //   /********************************************************************** */

  //   /********************************************************************** */
  return (
    <>
      <div id="popup" className="z-50 fixed w-full flex justify-center inset-0">
        <div className="w-full h-full bg-gray-500 bg-opacity-50 z-0 absolute inset-0" />
        <div className="mx-auto container">
          <div className="flex items-center justify-center h-full w-full">
            <div className="bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5">
              <div className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
                <p className="text-base font-semibold">
                  Tracking {dataNewModal.NUM_TRACKING}{" "}
                </p>
                <button onClick={set_isOpen} className="focus:outline-none">
                  X
                </button>
              </div>
              <div className="px-4  md:px-10  md:pb-4 pb-7 ">
                <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
                  <label className="block mt-4 text-sm w-full md:px-2">
                    <span className="text-gray-700 dark:text-gray-900">
                      Estado tracking
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
                          value={item.value}
                          selected={RECEIVED_TRACKING === item.value}
                        >
                          {" "}
                          {item.value}{" "}
                        </option>
                      ))}
                    </select>
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

                <Accordion className="accordion-custom " activeIndex={0}>
                  <AccordionTab className="p-2" header="Dimensiones de tracking">
                    <form>
                      <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
                      
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
                          Ancho  paquete *
                          </span>
                          <input
                            className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Numero de tracking"
                            value={WIDTH_PACKAGE}
                            name="WIDTH_PACKAGE"
                            onChange={handleInputChange}
                          />
                        </label>
                        
                      </div>

                     

                      <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
                      <label className="block mt-4 text-sm w-full md:px-2">
                          <span className="text-gray-700 dark:text-gray-900">
                          Peso  paquete *
                          </span>
                          <input
                            className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Numero de tracking"
                            value={WEIGHT_PACKAGE}
                            name="WEIGHT_PACKAGE"
                            onChange={handleInputChange}
                          />
                        </label>
                        <label className="block mt-4 text-sm w-full md:px-2">
                          <span className="text-gray-700 dark:text-gray-900">
                          Volumen   paquete *
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
                  </AccordionTab>
                  <AccordionTab className="p-2" header="Datos de tracking">
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
                                  value={item.value}
                                  selected={SERVICE_NAME === item.value}
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
                                  value={item.COD_CATPACKAGE}
                                  selected={
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
                        >
                          {DES_TRACKING}
                        </textarea>
                        <textarea
                          placeholder="Description"
                          className="p-3 m-3 overflow-y-auto h-16 border rounded w-full border-gray-200  resize-none focus:outline-none"
                          name="NOM_PACKAGE"
                          onChange={handleInputChange}
                        >
                          {NOM_PACKAGE}
                        </textarea>
                      </div>

                      <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
                        <div className="mt-8">
                          <Barcode codigo={dataNewModal.NUM_PACKAGE} />
                        </div>
                      </div>
                    </form>
                  </AccordionTab>
                </Accordion>

                <div className="flex items-center justify-between mt-9">
                  <button
                    onClick={set_isOpen}
                    className="px-6 py-3 bg-gray-400 hover:bg-gray-500 shadow rounded text-sm text-white"
                  >
                    Cancel
                  </button>
                  <button className="px-6 py-3 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white">
                    Add User
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

//  <div id="popup" className="z-10 fixed w-full flex justify-center inset-0">
//     <div className="w-full h-full bg-gray-500 bg-opacity-50 z-0 absolute inset-0" />
//  <Transition appear show={isOpen} as={Fragment}>
//     <Dialog
//       as="div"
//       className="fixed inset-0 z-10 overflow-y-auto"
//       onClose={set_isOpen}
//     >
//       <div className="min-h-screen px-4 text-center">
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <Dialog.Overlay className="fixed inset-0" />
//         </Transition.Child>

//         {/* This element is to trick the browser into centering the modal contents. */}
//         <span
//           className="inline-block h-screen align-middle"
//           aria-hidden="true"
//         >
//           &#8203;
//         </span>
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0 scale-95"
//           enterTo="opacity-100 scale-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100 scale-100"
//           leaveTo="opacity-0 scale-95"
//         >
//           <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
//             <Dialog.Title
//               as="h3"
//               className="text-lg font-medium leading-6 text-gray-900 text-center"
//             >
//               {dataNewModal.NUM_TRACKING}

//             </Dialog.Title>
//             <form action="">
//             <label className="block mt-4 text-sm w-full md:px-2">
//                       <span className="text-gray-700 dark:text-gray-900">
//                         Nombre Paquete
//                       </span>
//                       <InputText
//                         className="w-full"
//                         placeholder="Nombre de paquete"
//                         name="NAME_PACKAGE"
//                         keyfilter={/^[^<>*!]+$/}
//                       />
//                     </label>
//             </form>
//             <div className="mt-2">
//               <p className="text-sm text-gray-500">
//                <Barcode codigo={dataNewModal.NUM_PACKAGE} />
//               </p>
//             </div>

//             <div className="mt-4">
//               <button
//                 type="button"
//                 className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
//                 onClick={set_isOpen}
//               >
//                 Got it, thanks!
//               </button>
//             </div>
//           </div>
//         </Transition.Child>
//       </div>
//     </Dialog>
//   </Transition>
//   </div>
