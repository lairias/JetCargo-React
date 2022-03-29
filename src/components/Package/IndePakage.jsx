import { useEffect, useState } from "react";
import { GetPackages } from "./GetPackages";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { StartGetAllPackageLocker } from "../../actions/packageLockersAction";
import { SpinerLoader } from "../Spinners/Loader";
import { showModal } from "../../actions/modal_Locker_Customer";
import ModalVeryTracking from "../Modal/Package/ModalVeryTracking";
import ModalNewPackage from "../Modal/Package/ModalNewPackage";
import { useFetchToken } from "../../hooks/useFetch";

export const ShowPackages = () => {
  //*******************************************Variables de state */
  const [modalCreatepackage, setmodalCreatepackage] = useState(false);
  const { NUM_LOCKER, COD_LOCKER } = useParams();
  //************************************************************* */
  //*******************************************Variables de Hooks */
  const { permission,customer } = useSelector((state) => state.auth);
  const { loadingPackagesLocker, packagesLocker } = useSelector(
    (state) => state.packageLockers
  );
  const { shoModalLockerCustomer } = useSelector(
    (state) => state.modal_Locker_Customer
  );

  const [DataLocker] = useFetchToken(`locker/${COD_LOCKER}`);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(StartGetAllPackageLocker(customer.COD_CUSTOMER, COD_LOCKER));
  }, [dispatch]);
  //************************************************************* */
  //*******************************************Variables de funciones */
  const handleShoModal = () => {
    dispatch(showModal(!shoModalLockerCustomer));
  };
  const handleShoModalNewPackage = () => {
    setmodalCreatepackage(!modalCreatepackage);
  };
  //************************************************************* */
  //*******************************************Variables de consola */
  //************************************************************* */
  return (
    <>
      <div className="container  mx-auto grid  ">
        <div className="flex justify-between">
          <h2 className="my-6 text-2xl font-semibold text-gray-700">
            Seguimiento de paquetes {NUM_LOCKER}
          </h2>
          <div className="px-6 my-6">
            { permission.includes("package.crear") && DataLocker.IND_LOCKER && (
              <button
                onClick={handleShoModal}
                className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
              >
                Nuevo paquete <span className="ml-2">+</span>
              </button>
            )}
          </div>
          { permission.includes("package.crear") && shoModalLockerCustomer && (
            <ModalVeryTracking
              setmodalCreatepackage={setmodalCreatepackage}
              isOpen={shoModalLockerCustomer}
              setIsOpen={handleShoModal}
            />
          )}
          { permission.includes("package.crear") && modalCreatepackage && (
            <ModalNewPackage
              COD_LOCKER={COD_LOCKER}
              COD_CUSTOMER={customer.COD_CUSTOMER}
              isOpen={modalCreatepackage}
              setIsOpen={handleShoModalNewPackage}
              handleShoModal={handleShoModal}
              handleShoModalNewPackage={handleShoModalNewPackage}
            />
          )}
        </div>
        {/* Insertar contenido de las paginas **/}
        <div className=" grid sm:grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8  pb-20">
          {loadingPackagesLocker ? (
            loadingPackagesLocker &&
            (packagesLocker ? (
              packagesLocker.map(
                (packageLockers) =>
                  packageLockers.IND_LOCKER &&
                  packageLockers.IND_PACKAGE && (
                    <GetPackages
                      key={packageLockers.COD_PACKAGE}
                      items={packageLockers}
                    />
                  )
              )
            ) : (
              <h2 className="my-6 text-2xl text-center font-semibold text-gray-700">
                No cuenta con paquetes
              </h2>
            ))
          ) : (
            <SpinerLoader />
          )}
        </div>
      </div>
    </>
  );
};
