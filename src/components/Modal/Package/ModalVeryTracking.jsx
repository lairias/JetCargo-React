import { useEffect, useCallback } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StarCodLockerRandom,
  AddLokersCustomers,
} from "../../../actions/lockersAction";
import SpinnerButton from "../../Spinners/SpinnerButton";
export default function ModalVeryTracking({ isOpen, setIsOpen }) {
  /****************************************************Variables de State */
  /********************************************************************** */
  /****************************************************Variables de Hooks */
  // const dispatch = useDispatch();
  // const { startloadingLoker, getloadingLoker, LockerCodRandom } = useSelector(
  //   (state) => state.locker
  // );
  // const { name, lastname, customer } = useSelector((state) => state.auth);
  // /********************************************************************** */
  // /****************************************************Variables de funciones */
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(StarCodLockerRandom());
  // };

  // useEffect(() => {
  //   if (getloadingLoker) {
  //     dispatch(AddLokersCustomers(customer.COD_CUSTOMER, LockerCodRandom));
  //   }
  // }, [getloadingLoker, customer, dispatch]);
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
                  </Dialog.Title>
                  <div className="mt-2">
                  <form className="mt-11">
                  <div className=" md:justify-between md:flex w-full md:px-2">
                    <label className="block mt-4 text-sm w-full md:px-2">
                      <span className="text-gray-700 dark:text-gray-900">
                        Nombre del paquete
                      </span>
                      <input
                        className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Nombre del paquete"
                        name="text"
                      />
                    </label>
                    <label className="block mt-4 text-sm w-full md:px-2">
                      <span className="text-gray-700 dark:text-gray-900">
                        Número de tranking
                      </span>
                      <input
                        className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Numero de tracking"
                        name="text"
                      />
                    </label>
                  </div>
                  <div className="md:justify-between md:flex">
                    <label className="block mt-4 text-sm w-full md:px-2">
                      <span className="text-gray-700 dark:text-gray-900">
                        Correo electrónico
                      </span>
                      <select className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                        <option selected disabled value>
                          Número de Casillero
                        </option>
                        <option>#61801</option>
                        <option>#62804</option>
                      </select>
                    </label>
                    <label className="block mt-4 text-sm w-full md:px-2">
                      <span className="text-gray-700 dark:text-gray-900">
                        Tipo de paquete
                      </span>
                     
                    </label>
                    <label className="block mt-4 text-sm w-full md:px-2">
                      <span className="text-gray-700 dark:text-gray-900">
                        Tipo de envio
                      </span>
                      <select className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                        <option selected disabled value>
                          Category
                        </option>
                        <option>Aéreo</option>
                        <option>Maritimo</option>
                        <option>Expres</option>
                      </select>
                    </label>
                  </div>
                  <div className="mt-8">
                    <textarea
                      placeholder="Description"
                      className="py-3 pl-3 overflow-y-auto h-24 border rounded border-gray-200 w-full resize-none focus:outline-none"
                      defaultValue={""}
                    />
                  </div>
                </form>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={startloadingLoker}
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    >
                      {startloadingLoker ? <SpinnerButton /> : "Si, Registrar"}
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
