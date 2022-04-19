import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpinnerButton from "../../Spinners/SpinnerButton";
import Select from "react-select";
import { PostTrackingServiceCustomer } from "../../../actions/trackingAction";
import toast,{ Toaster } from "react-hot-toast";
import { useFetchToken } from "../../../hooks/useFetch";
export default function ModalVeryTracking({
  isOpen,
  setIsOpen,
  handleShoModal,
  handleShoModalNewPackage,
  COD_LOCKER,
  COD_CUSTOMER,
}) {
  /****************************************************Variables de State */

  /********************************************************************** */
  /****************************************************Variables de Hooks */
  const dispatch = useDispatch();
  const {
    COD_SERVICE,
    COD_CATEGORY,
    COD_TYPE,
    NUM_TRACKING,
    NAME_PACKAGE,
    DES_PACKAGE,
  } = useSelector((state) => state.tracking);
  const [statusSend, setStatusSend] = useState(false);
  // /********************************************************************** */
  // /****************************************************Variables de funciones */
  const handleSubmit = (e) => {
    e.preventDefault();
      dispatch(
        PostTrackingServiceCustomer(
          COD_SERVICE,
          COD_CATEGORY,
          COD_TYPE,
          NUM_TRACKING,
          NAME_PACKAGE,
          DES_PACKAGE,
          COD_LOCKER,
          COD_CUSTOMER,
          setIsOpen,
          setStatusSend,
        )
      );
  };
  
  const handleRegresar = (e) => {
    handleShoModal(true);
    handleShoModalNewPackage(false);
  };


  /********************************************************************** */
  /********************************************************************** */
  return (
    <>
      <Toaster />
      <div id="popup" className="z-10 fixed w-full flex justify-center inset-0">
        <div className="w-full h-full bg-gray-500 bg-opacity-50 z-0 absolute inset-0 overflow-visible " />
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 w-full h-full z-10 overflow-y-auto overflow-visible overscroll-contain"
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
                    Datos de paquetes
                    <button
                      type="button"
                      onClick={handleRegresar}
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    >
                      Regresar
                    </button>
                  </Dialog.Title>
                  <h1>Su producto se agregara dentro de la lista de pendientes.</h1>
                  <div className="mt-4 flex justify-between">
                    <button
                      type="button"
                      disabled={statusSend}
                      onClick={handleSubmit}
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    >
                      
                      {statusSend ? <SpinnerButton /> : "Si, Registrar"}
                    </button>
                    <button
                      type="button"
                      disabled={statusSend}
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
