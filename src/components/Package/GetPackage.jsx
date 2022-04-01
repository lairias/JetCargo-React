import React, { useState } from "react";
import ListPackageUser from "./List/ListPackageUser";
import ModalInvoicePackage from "../Modal/Package/invoice/ModalInvoicePackage";
import { useParams } from "react-router-dom";
import {useFetchToken} from "../../hooks/useFetch";
import SpinnerButton from "../Spinners/SpinnerButton";
export const GetPackage = () => {
  const {NUM_LOCKER,COD_LOCKER,COD_PACKAGE,COD_TRACKING}=useParams();
  //*********************************Variables de State */
  const [showInvoice, setshoInvoice] = useState(false);
  //*************************************************** */
  //*********************************Variables de Hooks*/
  const [DataOrden,loaddin_DataOrden] =  useFetchToken(`orden/tracking_cod/${COD_TRACKING}`);
  //*************************************************** */
  //*********************************Variables de Funciones */
  //*************************************************** */
  //*********************************Variables de consola */
  //*************************************************** */
  return (
    <>
      <div className="container mx-auto grid">
        <div className="flex justify-between">
          <h2 className="my-6 text-2xl font-semibold text-gray-700">
            {" "}
            Últimos movimientos del paquete{" "}
          </h2>
        </div>
        {/* Insertar contenido de las paginas **/}
        {showInvoice ? (
          <ModalInvoicePackage
            showInvoice={showInvoice}
            setshoInvoice={setshoInvoice}
          />
        ) : (
          ""
        )}
        {loaddin_DataOrden ? (<ListPackageUser
        COD_ORDEN={DataOrden.COD_ORDEN}
        COD_TRACKING={DataOrden.COD_TRACKING}
          showInvoice={showInvoice}
          setshoInvoice={setshoInvoice}
        />):(<SpinnerButton />)}
        
      </div>
    </>
  );
};
