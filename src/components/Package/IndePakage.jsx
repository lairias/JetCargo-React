import { useEffect, useState } from "react";
import { GetPackages } from "./GetPackages";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { StartGetAllPackageLocker } from "../../actions/packageLockersAction";
import { SpinerLoader } from "../Spinners/Loader";
import {showModal} from "../../actions/modal_Locker_Customer"
import ModalVeryTracking from "../Modal/Package/ModalVeryTracking";
import ModalNewPackage from "../Modal/Package/ModalNewPackage";
export const ShowPackages = () => {
  //*******************************************Variables de state */
  const {NUM_LOCKER,COD_LOCKER} = useParams();
  const {customer} = useSelector((state) => state.auth)
  const {loadingPackagesLocker,packagesLocker} = useSelector((state) => state.packageLockers)
  const { shoModalLockerCustomer } = useSelector((state) => state.modal_Locker_Customer);
  //************************************************************* */
  //*******************************************Variables de Hooks */
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(StartGetAllPackageLocker(customer.COD_CUSTOMER,COD_LOCKER))
  },[dispatch,])
  //************************************************************* */
  //*******************************************Variables de funciones */
  const handleShoModal = () => {
    dispatch(showModal(!shoModalLockerCustomer))
  };
  //************************************************************* */
  //*******************************************Variables de consola */
  console.log(packagesLocker);
  //************************************************************* */


  return (
    <>
      <div className="container  mx-auto grid">
        <div className="flex justify-between">
          <h2 className="my-6 text-2xl font-semibold text-gray-700">
            {" "}
            Seguimiento de paquetes{" "} {NUM_LOCKER}
          </h2>
          <div className="px-6 my-6">
            <button
              onClick={handleShoModal}
              className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
>
              {" "}
              Nuevo paquete <span className="ml-2">+</span>
            </button>
          </div>
          {shoModalLockerCustomer && (
        <ModalNewPackage
          isOpen={shoModalLockerCustomer}
          setIsOpen={handleShoModal}
        />
      )}
        </div>
        {/* Insertar contenido de las paginas **/}
        {loadingPackagesLocker ? (loadingPackagesLocker && (
          packagesLocker ? (packagesLocker.map((packageLockers) => (
            packageLockers.IND_LOCKER && packageLockers.IND_PACKAGE && (<GetPackages key={packageLockers.COD_PACKAGE} items={packageLockers} />)
            
          ))): (<h2 className="my-6 text-2xl text-center font-semibold text-gray-700">
          No cuenta con paquetes
        </h2>)
          
        )   ):(<SpinerLoader />)}
        
      </div>
    </>
  );
};
