import { useEffect, useCallback } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StarCodLockerRandom,
  AddLokersCustomers,
} from "../../../actions/lockersAction";
import SpinnerButton from "../../Spinners/SpinnerButton";
import { useFetchToken } from "../../../hooks/useFetch";
export default function ModalInfoLocker({ isOpen, setIsOpen, item }) {
  /****************************************************Variables de State */
  /********************************************************************** */
  /****************************************************Variables de Hooks */
  const [DataLocker, loaddinLocker] = useFetchToken(
    `phone/locker/${item.COD_LOCKER}`
  );

  /********************************************************************** */
  /****************************************************Variables de funciones */
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

              {/* This element is to trick the browser into centering the modal contents. */}
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
                    Datos del Locker - {item.NUM_LOCKER}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      <table className="w-full whitespace-nowrap">
                        <tbody>
                          {loaddinLocker ? (
                            DataLocker.map((item) => (
                              <tr>
                                <td>
                                  <div className="flex items-center">
                                    <div className="bg-gray-100 rounded-sm p-2.5">
                                      <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        ></path>
                                      </svg>
                                    </div>
                                    <div className="pl-3">
                                      <div className="flex items-center text-sm leading-none">
                                        <p className="text-blue-500 ml-3">
                                          +({item.NUM_AREA})-
                                        </p>
                                        <p className="font-semibold text-gray-800">
                                          {item.NUM_PHONE}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <SpinnerButton />
                          )}
                        </tbody>
                      </table>
                    </p>
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
