import { useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputText } from "primereact/inputtext";
import SpinnerButton from "../../Spinners/SpinnerButton";
import { useForms } from "../../../hooks/useForms";
import { InputTextarea } from "primereact/inputtextarea";

import Select from "react-select";
import { GetAllservices } from "../../../actions/serviceAction";
import {
  DataPostTrackingServiceCustomer,
  GetSeartTrackingService,
  statusTracking,
} from "../../../actions/trackingAction";
import { Toaster } from "react-hot-toast";
import { GetAllTypePackage } from "../../../actions/typepackageAction";
import { GetAllCategoryPackage } from "../../../actions/categorypackageAction";
export default function ModalVeryTracking({
  isOpen,
  setIsOpen,
  setmodalCreatepackage,
}) {
  /****************************************************Variables de State */
  const [selectedServices, setSelectedServices] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedType, setSelectedType] = useState();
  /********************************************************************** */
  /****************************************************Variables de Hooks */
  const [{ NUM_TRACKING, NAME_PACKAGE, DES_PACKAGE }, handleInputChange] =
    useForms({
      NUM_TRACKING: "",
      NAME_PACKAGE: "",
      DES_PACKAGE: "",
    });
  const { StarSearcTrackingServiceStatus, StatusShowCreateTracking } =
    useSelector((state) => state.tracking);
  const { services, loadingServices } = useSelector((state) => state.services);
  const { categoryPackage, loading } = useSelector(
    (state) => state.categorypackage
  );
  const { TypePackage, loadingTypePackage } = useSelector(
    (state) => state.typepackage
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllservices());
    if (StatusShowCreateTracking) {
      dispatch(GetAllTypePackage(true));
      dispatch(GetAllCategoryPackage(true));
    }
  }, [dispatch, StatusShowCreateTracking]);
  // /********************************************************************** */
  // /****************************************************Variables de funciones */
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(GetSeartTrackingService(selectedServices, NUM_TRACKING));
  };

  const handleSubmitForm = () => {
    dispatch(
      DataPostTrackingServiceCustomer(
        selectedServices,
        selectedCategory,
        selectedType,
        NUM_TRACKING,
        NAME_PACKAGE,
        DES_PACKAGE,
        setIsOpen,
        setmodalCreatepackage
      )
    );
  };
  const handleRegresar = (e) => {
    dispatch(statusTracking(false));
  };

  /********************************************************************** */
  /********************************************************************** */
  return (
    <>
      <Toaster />
      <div id="popup" className="fixed w-full flex justify-center inset-0">
        <div className="w-full h-full bg-gray-500 bg-opacity-50 z-0 absolute inset-0 " />
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 w-full z-0 overflow-y-auto "
            onClose={setIsOpen}
          >
            <div className="min-h-screen px-4  text-center">
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
                    className="text-lg font-medium leading-6 text-gray-900 pb- "
                  >
                    Tracking Paquete{" "}
                    {StatusShowCreateTracking && (
                      <button
                        type="button"
                        onClick={handleRegresar}
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      >
                        Regresar
                      </button>
                    )}
                  </Dialog.Title>
                  {StatusShowCreateTracking ? (
                    <div className="mt-2">
                      <div className="  w-full ">
                        <label className="block mt-4 text-sm w-full md:px-2  ">
                          <span className="text-gray-700 dark:text-gray-900">
                            Categoria del paquete
                          </span>
                          {loading ? (
                            <Select
                              defaultValue={selectedCategory}
                              onChange={setSelectedCategory}
                              options={categoryPackage}
                            />
                          ) : (
                            <SpinnerButton />
                          )}
                        </label>
                        <label className="block mt-4 text-sm w-full md:px-2">
                          <span className="text-gray-700 dark:text-gray-900">
                            Tipo de envio
                          </span>
                          {loadingTypePackage ? (
                            <Select
                              className="w-full"
                              defaultValue={selectedType}
                              onChange={setSelectedType}
                              options={TypePackage}
                              formatOptionLabel={(country) => (
                                <div className="flex justify-between items-center">
                                  <div className="flex justify-center items-center ">
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
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                      ></path>
                                    </svg>
                                    <span className="ml-2">
                                      {country.prece}
                                    </span>
                                  </div>
                                  <span>{country.label}</span>
                                </div>
                              )}
                            />
                          ) : (
                            <SpinnerButton />
                          )}
                        </label>
                        <label className="block mt-4 text-sm w-full md:px-2">
                          <span className="text-gray-700 dark:text-gray-900">
                            Nombre Paquete
                          </span>
                          <InputText
                            className="w-full"
                            placeholder="Nombre de paquete"
                            name="NAME_PACKAGE"
                            value={NAME_PACKAGE}
                            keyfilter={/^[^<>*!]+$/}
                            onChange={handleInputChange}
                          />
                        </label>
                        <label className="block mt-4 text-sm w-full md:px-2">
                          <span className="text-gray-700 dark:text-gray-900">
                            Descripción del paquete
                          </span>
                          <InputTextarea
                            className="w-full"
                            placeholder="Nombre de paquete"
                            name="DES_PACKAGE"
                            value={DES_PACKAGE}
                            keyfilter={/^[^<>*!]+$/}
                            onChange={handleInputChange}
                          />
                        </label>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-2">
                      <div className="  w-full ">
                        <label className="block mt-4 text-sm w-full md:px-2 pb-14">
                          <span className="text-gray-700 dark:text-gray-900">
                            Tipo de servico
                          </span>
                          {loadingServices ? (
                            <Select
                              menuPlacement="auto"
                              defaultValue={selectedServices}
                              onChange={setSelectedServices}
                              options={services}
                              formatOptionLabel={(services) => (
                                <div className="flex justify-between">
                                  <img
                                    style={{
                                      height: "30px",
                                      width: "30px",
                                      borderRadius: "15%",
                                      marginRight: "10px",
                                    }}
                                    src={services.image}
                                    alt="services-image"
                                  />
                                  <span>{services.label}</span>
                                </div>
                              )}
                            />
                          ) : (
                            <SpinnerButton />
                          )}
                        </label>
                        <label className="block mt-4 text-sm w-full md:px-2 pb-14">
                          <span className="text-gray-700 dark:text-gray-900">
                            Número de Tracking
                          </span>
                          <InputText
                            className="w-full"
                            placeholder="Número de Tracking"
                            name="NUM_TRACKING"
                            value={NUM_TRACKING}
                            keyfilter={/^[^<>*!]+$/}
                            onChange={handleInputChange}
                          />
                        </label>
                      </div>
                    </div>
                  )}
                  <div className="mt-4 flex justify-between pb-10">
                    <button
                      type="button"
                      onClick={
                        StatusShowCreateTracking
                          ? handleSubmitForm
                          : handleSubmit
                      }
                      disabled={StarSearcTrackingServiceStatus}
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    >
                      {StarSearcTrackingServiceStatus ? (
                        <SpinnerButton />
                      ) : (
                        "Si, Registrar"
                      )}
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
