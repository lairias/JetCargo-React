import { useState } from "react";
import { useFetchToken } from "../../../hooks/useFetch";
import SpinnerButton from "../../Spinners/SpinnerButton";
import Origen from "./../../../img/mapa.png"
import Destino from "../../../img/destino.png"
import { LisOrigenDesino } from "./LisOrigenDesino";

export default function TableOrigenDestino({ COD_ORDEN,showInvoice, setshoInvoice,DataTrackin }) {
  const [DataOrigen, loadding_Origen] = useFetchToken(
    `trackingInformation/origenDestinoAll/${COD_ORDEN}`
  );

  const handleShowInvoice = () => {
    setshoInvoice(!showInvoice);
  };

  

  return (
    <>
        <div className="w-full">
          <div className="border rounded-xl bg-white pb-6 mb-6">
            <div className=" flex flex-col md:flex-row lg:flex-row xl:flex-row items-center border-b border-gray-200 justify-center md:justify-between xl:justify-between lg:justify-between px-6 py-3">
              <div className="my-6 basis-1/1">
                <button
                  onClick={handleShowInvoice}
                  className="flex items-center justify-between w-full  px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                >
                  Factura <span className="ml-2"></span>
                </button>
              </div>
              <p className="text-sm lg:text-xl font-semibold leading-tight text-gray-800">
              Datos de Origen y Destino
              </p>
              <div className="flex  items-center justify-center px-3 py-2.5 border rounded border-gray-100">
                Estado actual del tracking
                
                <div className="flex justify-center">
          {DataTrackin.tracking.RECEIVED_TRACKING === "PENDING" ? (
            <div className="py-2.5 px-5 my-2 bg-red-100 rounded-full w-full text-xs leading-3 text-red-800  sm:w-auto text-center">
              Pendiente
            </div>
          ) : DataTrackin.tracking.RECEIVED_TRACKING === "RECEIVED" ? (
            <div className="py-2.5 px-5 bg-yellow-100 rounded-full w-full text-xs leading-3 text-yellow-800  sm:w-auto text-center">
              Recibido
            </div>
          ) : DataTrackin.tracking.RECEIVED_TRACKING === "IN_PROGRESS" ? (
            <div className="py-2.5 px-5 bg-sky-100 rounded-full w-full text-xs leading-3 text-sky-800  sm:w-auto text-center">
              En progreso
            </div>
          ) : (
            DataTrackin.tracking.RECEIVED_TRACKING === "DELIVERED" && (
              <div className="py-2.5 px-5 bg-green-100 rounded-full full text-xs leading-3 text-green-800  sm:w-auto text-center">
                Entregado
              </div>
            )
          )}
        </div>
                
              </div>
            </div>
            <div className="px-3 pt-6 ">
              <table className="w-full overflow-x-auto ">
                <tbody>
                  {loadding_Origen  ? (DataOrigen.map((item, index) => (
                    <LisOrigenDesino key={index} item={item} Origen={Origen} />
                  ))
                    ) : (
                      <SpinnerButton />
                    )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </>
  );
}

