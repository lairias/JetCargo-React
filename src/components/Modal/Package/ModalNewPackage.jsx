import { useEffect, useCallback } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputNumber } from 'primereact/inputnumber';
import SpinnerButton from "../../Spinners/SpinnerButton";
import { useForms } from "../../../hooks/useForms";
export default function ModalVeryTracking({ isOpen, setIsOpen,handleShoModal
  ,handleShoModalNewPackage }) {
  /****************************************************Variables de State */
  const [{ HEIGHT_PACKAGE,WIDTH_PACKAGE,LENGTH_PACKAGE,WEIGHT_PACKAGE,PRICE_PACKAGE,VOL_PACKAGE}, handleInputChange] = useForms(
   { HEIGHT_PACKAGE : 0,
   WIDTH_PACKAGE : 0,
   LENGTH_PACKAGE : 0,
   WEIGHT_PACKAGE : 0,
   PRICE_PACKAGE : 0,
   VOL_PACKAGE : 0}
  );
  /********************************************************************** */
  /****************************************************Variables de Hooks */
  // const dispatch = useDispatch();
  // const { startloadingLoker, getloadingLoker, LockerCodRandom } = useSelector(
  //   (state) => state.locker
  // );
  // const { name, lastname, customer } = useSelector((state) => state.auth);
  // /********************************************************************** */
  // /****************************************************Variables de funciones */
  const handleSubmit = (e) => {};
  const handleRegresar = (e) => {
    handleShoModal(true)
  handleShoModalNewPackage(false)
  };

  /********************************************************************** */
  /********************************************************************** */
  return (
    <>
      <div id="popup" className="z-10 fixed w-full flex justify-center inset-0">
        <div className="w-full h-full bg-gray-500 bg-opacity-50 z-0 absolute inset-0" />
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 w-full z-10 overflow-y-auto"
            onClose={setIsOpen}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0" />
              </Transition.Child>
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Datos de paquetes <button
                      type="button"
                      onClick={handleRegresar}
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    >
                     Regresar
                    </button>
                  </Dialog.Title>
                  <div className="mt-2">
                    <form className="mt-11">
                      <label className="block mt-4 text-sm w-full md:px-2">
                        <span className="text-gray-700 dark:text-gray-900">
                          Altura paquete <span className="text-bold">*Opcional</span> 
                        </span>
                        <InputNumber
                          name="HEIGHT_PACKAGE"
                          value={HEIGHT_PACKAGE}
                          className="w-full"
                          keyfilter="hex"
                          inputId="mile"
                          suffix=" -mt"
                          placeholder="Número de Tracking"
                          onChange={handleInputChange}
                        />
                      </label>
                      <label className="block mt-4 text-sm w-full md:px-2">
                        <span className="text-gray-700 dark:text-gray-900">
                        Ancho paquete <span className="text-bold">*Opcional</span> 
                        </span>
                        <InputNumber
                          className="w-full "
                          keyfilter="hex"
                          inputId="mile"
                          suffix=" -mt"
                          placeholder="Número de Tracking"
                          name="WIDTH_PACKAGE"
                          value={WIDTH_PACKAGE}
                          onChange={handleInputChange}
                        />
                      </label>
                      <label className="block mt-4 text-sm w-full md:px-2">
                        <span className="text-gray-700 dark:text-gray-900">
                          Cantidad de paquetes <span className="text-bold">*Opcional</span> 
                        </span>
                        <InputNumber
                          className="w-full "
                          inputId="mile"
                          suffix=" -mt"
                          placeholder="Número de Tracking"
                          name="LENGTH_PACKAGE"
                          onChange={handleInputChange}
                          value={LENGTH_PACKAGE}
                        />
                      </label>
                      <label className="block mt-4 text-sm w-full md:px-2">
                        <span className="text-gray-700 dark:text-gray-900">
                          Peso de paquete <span className="text-bold">*Opcional</span> 
                        </span>
                        <InputNumber
                          className="w-full "
                          keyfilter="hex"
                          inputId="mile"
                          suffix=" -lb"
                          placeholder="Número de Tracking"
                          name="WEIGHT_PACKAGE"
                          onChange={handleInputChange}
                          value={WEIGHT_PACKAGE}
                        />
                       
                      </label>
                      <label className="block mt-4 text-sm w-full md:px-2">
                        <span className="text-gray-700 dark:text-gray-900">
                          Volumen de paquete <span className="text-bold">*Opcional</span> 
                        </span>
                        <InputNumber
                          className="w-full "
                          keyfilter="hex"
                          inputId="mile"
                          suffix=" -mt"
                          placeholder="Número de Tracking"
                          name="VOL_PACKAGE"
                          onChange={handleInputChange}
                          value={VOL_PACKAGE}
                        />
                      </label>
                      <label className="block mt-4 text-sm w-full md:px-2">
                        <span className="text-gray-700 dark:text-gray-900">
                          Precio Tracking <span className="text-bold">*Opcional</span> 
                        </span>
                        <InputNumber
                          className="w-full"
                          placeholder="Nombre de paquete"
                          disabled={true}
                          inputId="mile"
                          suffix=" -lb"
                          name="PRICE_PACKAGE"
                          keyfilter={/^[^<>*!]+$/}
                          value={PRICE_PACKAGE}
                          onChange={handleInputChange}
                        />
                      </label>
                    </form>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    >
                      {/* {startloadingLoker ? <SpinnerButton /> : "Si, Registrar"} */}
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={setIsOpen}
                    >
                      No, Gracias!
                    </button>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
}
