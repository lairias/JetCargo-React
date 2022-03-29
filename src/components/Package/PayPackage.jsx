import React, { useState } from "react";
import ModalInvoicePackage from "../Modal/Package/invoice/ModalInvoicePackage";
import { useParams } from "react-router-dom";
import { CardListVoince } from "./List/CardListVoince";
import ModalNewCard from "../Modal/Payment/ModalNewCard";
import { useFetchToken } from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import { MapsPackage } from "./Maps/MapsPackage";
import { SpinerLoader } from "../Spinners/Loader";
export const PayPackage = () => {
  //*********************************Variables de State */
  const [showInvoice, setshoInvoice] = useState(false);
  const [showNewCard, setshoNewCard] = useState(false);
  //*************************************************** */
  //*********************************Variables de Hooks*/
  const { NUM_LOCKER, COD_TRACKING, COD_PACKAGE } = useParams();
  const { customer } = useSelector((state) => state.auth);
  const [DataTrackinNotOrden, NotOrdenLoading] = useFetchToken(
    `tracking/${COD_TRACKING}/${COD_PACKAGE}/${NUM_LOCKER}/${customer.COD_CUSTOMER}`
  );

  //*************************************************** */
  //*********************************Variables de Funciones */
  const handleShoModal = () => {
    setshoNewCard((data) => !data);
  };

  //*************************************************** */
  //*********************************Variables de consola */
  //*************************************************** */
  return (
    <>
      <div className="container mx-auto grid">
        <div className="flex justify-between">
          <h2 className="my-6 text-2xl font-semibold text-gray-700">
            Pago del paquete{" "}
          </h2>
        </div>
        {showInvoice ? (
          <ModalInvoicePackage
            showInvoice={showInvoice}
            setshoInvoice={setshoInvoice}
          />
        ) : (
          ""
        )}
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8">
          {NotOrdenLoading ? (
            <CardListVoince DataTrackinNotOrden={DataTrackinNotOrden} />
          ) : (
            <SpinerLoader />
          )}
          <MapsPackage />

          {/* <CardList handleShoModal={handleShoModal} /> */}
        </div>
      </div>
      {showNewCard && <ModalNewCard handleShoModal={handleShoModal} />}
    </>
  );
};
