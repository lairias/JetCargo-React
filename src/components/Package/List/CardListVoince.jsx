import React from "react";
import { useFetchToken } from "../../../hooks/useFetch";
import SpinnerButton from "../../Spinners/SpinnerButton";

export const CardListVoince = ({ DataTrackinNotOrden }) => {
  //-----------------------------------------------------------
  const [DataService, ServiceLoading] = useFetchToken(
    `typepackage/${DataTrackinNotOrden[0].COD_TYPEPACKAGE}`
  );
  //-----------------------------------------------------------
  return (
    <>
      <div className="w-full  mb-4 my-6 h-96 shadow sm:px-10 px-4 py-6 bg-white  rounded-md">
        <p className="text-xl text-gray-800 font-semibold mb-4">
          {DataTrackinNotOrden[0].NUM_TRACKING}
        </p>
        <div className="flex justify-between my-2">
          <p className="text-sm text-bold text-gray-800 font-semibold mb-2">
            Tracking
          </p>
          <button className="flex items-center justify-between   px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
              Pagar
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </button>
        </div>
        <p className="text-sm  font-semibold leading-tight text-gray-800 pb-3"></p>
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <tbody>
              <tr className="text-xl leading-3 text-gray-800 text-left border-b border-gray-200">
                <td className="py-4">Libras</td>
                <td className="py-4"></td>
                <td className="py-4 text-right">
                  {DataTrackinNotOrden[0].WEIGHT_PACKAGE}
                </td>
              </tr>
              <tr className="text-xl leading-3 text-gray-800 text-left">
                <td className="py-4 border-b border-gray-200">
                  Envio{" "}
                  {ServiceLoading ? (
                    DataService.NAM_TYPEPACKAGE
                  ) : (
                    <SpinnerButton />
                  )}{" "}
                </td>
                <td className="border-b border-gray-200 py-4" />
                <td className="border-b border-gray-200 py-4 text-right">
                  $
                  {ServiceLoading ? (
                    DataService.PREC_TYPEPACKAGE
                  ) : (
                    <SpinnerButton />
                  )}
                </td>
              </tr>

              <tr className="text-xl leading-3 text-gray-800 text-left">
                <td className="py-4 font-bold">
                  Deuda Total: L {DataTrackinNotOrden[0].PRICE_PACKAGE}{" "}
                </td>
                <td className="py-4" />
                <td className="text-indigo-400 py-4 text-right">
                  $ {DataTrackinNotOrden[0].PRICE_PACKAGE}{" "}
                </td>
              </tr>
            </tbody>
          </table>
          
        </div>
      </div>
    </>
  );
};
