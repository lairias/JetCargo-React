import { useState } from "react";
import { useFetchToken } from "../../../hooks/useFetch";
import SpinnerButton from "../../Spinners/SpinnerButton";
import Origen from "./../../../img/mapa.png"
import Destino from "../../../img/destino.png"
import { LisOrigenDesino } from "./LisOrigenDesino";

export default function TableOrigenDestino({ COD_ORDEN,showInvoice, setshoInvoice }) {
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
                  {" "}
                  Factura <span className="ml-2"></span>
                </button>
              </div>
              <p className="text-sm lg:text-xl font-semibold leading-tight text-gray-800">
                Product Sales
              </p>
              <div className="flex cursor-pointer items-center justify-center px-3 py-2.5 border rounded border-gray-100">
                <p className="text-xs md:text-sm leading-none text-gray-600">
                  Filter by: Latest
                </p>
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

