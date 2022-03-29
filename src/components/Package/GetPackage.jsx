import React, { useState } from "react";
import ListPackageUser from "./List/ListPackageUser";
import ModalInvoicePackage from "../Modal/Package/invoice/ModalInvoicePackage";
import { useParams } from "react-router-dom";
export const GetPackage = () => {
  //*********************************Variables de State */
  const [showInvoice, setshoInvoice] = useState(false);
  //*************************************************** */
  //*********************************Variables de Hooks*/
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
        <ListPackageUser
          showInvoice={showInvoice}
          setshoInvoice={setshoInvoice}
        />
      </div>
    </>
  );
};
