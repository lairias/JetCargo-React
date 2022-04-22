import React from "react";
import { useFetchToken } from "../../../hooks/useFetch";
import SpinnerButton from "../../Spinners/SpinnerButton";
export const CardListVoince = ({ DataTrackinNotOrden }) => {
  //-----------------------------------------------------------
  const [DataService, ServiceLoading] = useFetchToken(
    `typepackage/${DataTrackinNotOrden[0].COD_TYPEPACKAGE}`
  );
  const [DataSeguridad, SeguridadLoading] = useFetchToken(`seguridad/9`);
  const mensaje = `Tracking-N°:${DataTrackinNotOrden[0].NUM_TRACKING} Loker-N°:${DataTrackinNotOrden[0].NUM_LOCKER} Paquete-N°:${DataTrackinNotOrden[0].NUM_PACKAGE} 
  Descripción:${DataTrackinNotOrden[0].NOM_PACKAGE} - ${DataTrackinNotOrden[0].DES_TRACKING}`;
  const [{data}, CreateOrdenLoading] = useFetchToken(
    `payment/create-orden`,
    { mensaje, DataTrackinNotOrden },
    "POST"
  );
  //-----------------------------------------------------------
  return (
    <>
      <div className="w-full  mb-4 my-6 h-full shadow sm:px-10 px-4 py-6 bg-white  rounded-md">
        <p className="text-normal text-gray-800 font-semibold mb-4">
          {DataTrackinNotOrden[0].NUM_TRACKING}
        </p>
        <div className="flex justify-between my-2">
          <p className="text-normal text-bold text-gray-800 font-semibold mb-2">
            Tracking
          </p>
          {CreateOrdenLoading ? (
            <a
              href={data.links[1].href}
              className="flex items-center justify-between   px-4 py-2 text-normal font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
            >
              <>
                Pagar
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
              </>
            </a>
          ) : (
            <SpinnerButton />
          )}
        </div>
        <p className="text-normal  font-semibold leading-tight text-gray-800 pb-3"></p>
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <tbody>
              <tr className="text-normal leading-3 text-gray-800 text-left border-b border-gray-200">
                <td className="py-4">Libras</td>
                <td className="py-4"></td>
                <td className="py-4 text-right">
                  {DataTrackinNotOrden[0].WEIGHT_PACKAGE}
                </td>
              </tr>
              <tr className="text-normal leading-3 text-gray-800 text-left">
                <td className="py-4 border-b border-gray-200">
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
              <tr className="text-normal leading-3 text-gray-800 text-left border-b border-gray-200">
                <td className="py-4">
                  {" "}
                  {SeguridadLoading ? (
                    DataSeguridad.DES_SEGURIDAD
                  ) : (
                    <SpinnerButton />
                  )}{" "}
                </td>
                <td className="py-4"></td>
                <td className="py-4 text-right">
                  L.{" "}
                  {SeguridadLoading ? (
                    DataSeguridad.DATO_SEGURIDAD
                  ) : (
                    <SpinnerButton />
                  )}
                </td>
              </tr>
              <tr className="text-normal leading-3 text-gray-800 text-left border-b border-gray-200">
                <td className="py-4">Altura cmt*</td>
                <td className="py-4"></td>
                <td className="py-4 text-right">
                  {DataTrackinNotOrden[0].ALTURA_PACKAGE}
                </td>
              </tr>
              <tr className="text-normal leading-3 text-gray-800 text-left border-b border-gray-200">
                <td className="py-4">Anchura cmt*</td>
                <td className="py-4"></td>
                <td className="py-4 text-right">
                  {DataTrackinNotOrden[0].ANCHO_PACKAGE}
                </td>
              </tr>
              <tr className="text-normal leading-3 text-gray-800 text-left border-b border-gray-200">
                <td className="py-4">Largo cmt*</td>
                <td className="py-4"></td>
                <td className="py-4 text-right">
                  {DataTrackinNotOrden[0].LARGO_PACKAGE}
                </td>
              </tr>
              <tr className="text-normal leading-3 text-gray-800 text-left border-b border-gray-200">
                <td className="py-4">Facturado a lempiras</td>
                <td className="py-4"></td>
                <td className="py-4 text-right">
                  L.
                  {parseFloat(DataSeguridad.DATO_SEGURIDAD) *
                    parseFloat(DataTrackinNotOrden[0].PRICE_PACKAGE)}
                </td>
              </tr>

              <tr className="text-normal leading-3 text-gray-800 text-left">
                <td className="py-4 font-bold">
                  Facturado total en dolares:
                </td>
                <td className="py-4" />
                <td className="text-indigo-400 text-xl py-4 text-right">
                  $.{DataTrackinNotOrden[0].PRICE_PACKAGE}
                  {" USD"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
