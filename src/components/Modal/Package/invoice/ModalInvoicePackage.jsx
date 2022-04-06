import { useSelector } from "react-redux";
import { useFetchToken } from "../../../../hooks/useFetch";
import moment from "moment";

import LogoJetcargo from "./../../../../img/JetCargo-Logo.jpg";
import SpinnerButton from "../../../Spinners/SpinnerButton";
export default function ModalInvoicePackage({ showInvoice, setshoInvoice,DataOrden,DataTracking,DataTrackinNotOrden }) {
  const {  id } = useSelector((state) => state.auth);
  const [{Phone,User,people,direccion}, setDataInvoice] = useFetchToken(`invoice/${id}`);
  const [DataService, ServiceLoading] = useFetchToken(
    `typepackage/${DataTrackinNotOrden[0].COD_TYPEPACKAGE}`
  );
  const [DataSeguridad, SeguridadLoading] = useFetchToken(`seguridad/9`);
  return (
    <>
      <div id="popup" className="z-50 fixed w-full flex justify-center inset-0">
        <div className="w-full h-full bg-gray-500 bg-opacity-50 z-0 absolute inset-0" />
        <div className="mx-auto container">
          <div className="flex items-center justify-center h-full w-full">
            <div className="bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5">
              <div className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
                <p className="text-base font-semibold">Factura del trackin - {DataTracking.tracking.NUM_TRACKING}</p>
                <button
                  onClick={(_) => {
                    setshoInvoice(!showInvoice);
                  }}
                  className="focus:outline-none"
                >
                  <svg
                    width={28}
                    height={28}
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 7L7 21"
                      stroke="#A1A1AA"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7 7L21 21"
                      stroke="#A1A1AA"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* BODY*/}
              {setDataInvoice ? (<div className="bg-white rounded-md relative">
                <div className="bg-gray-100 rounded-tl-md rounded-tr-md md:px-10 px-5 pt-9 pb-2.5">
                  <div className="sm:flex justify-between">
                    <div>
                      <img className="h-12 w-25 rounded-full" src={LogoJetcargo} alt="Logo" />

                      <p className="text-lg font-bold text-gray-500 mt-2">
                        Jetcargo
                      </p>
                      <div className="mt-2">
                        <p className="text-xs font-semibold leading-3 text-gray-800 uppercase">
                        DESTINATARIO
                        </p>
                        <p className="text-xs leading-4 text-gray-500 uppercase mt-1">
                        {people.FRISTNAME} {" "} {people.MIDDLENAME} {" "} {people.LASTNAME}
                          <br />
                          {direccion[0].NAM_CITY} - {direccion[0].DES_ADDRESS}
                          <br />
                          {direccion[0].NAM_COUNTRY} - {direccion[0].NAM_STATE}
                          
                        </p>
                      </div>
                      <div className="mt-3">
                        <div className="flex space-x-1 items-center text-xs leading-3">
                          <p className="text-blue-500">@</p>
                          <p className="text-gray-500">
                            {User.EMAIL}
                          </p>
                        </div>
                        <div className="flex space-x-1 items-center text-xs leading-3 mt-2">
                          <p className="text-blue-500">m</p>
                          <p className="text-gray-500">+{Phone.NUM_AREA} {Phone.NUM_PHONE}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:flex flex-col sm:items-end sm:text-right">
                      {DataOrden.CHECKPOINT_STATUS === "IN_PROGRESS" ? (<div className="py-2.5 px-5 place-items-center  bg-sky-200 rounded-full text-xs leading-3 text-sky-800 w-24 sm:w-auto">Progreso
                      </div>):(DataOrden.CHECKPOINT_STATUS === "PENDING" ? (<div className="py-2.5 px-5 place-items-center  bg-yellow-200 rounded-full text-xs leading-3 text-yellow-700 w-24 sm:w-auto">Pendiente
                      </div>):(DataOrden.CHECKPOINT_STATUS === "COMPLETED" && (<div className="py-2.5 px-5 place-items-center  bg-green-200 rounded-full text-xs leading-3 text-green-800 w-24 sm:w-auto">Completado
                      </div>)) )}
                  
                     
                      <div className="mt-6 text-xs leading-3 sm:text-right">
                        <p className="text-gray-800 uppercase">invoice no.</p>
                        <p className="text-gray-500 mt-1">#{DataOrden.NUM_ORDEN}</p>
                        <div className="mt-3">
                          <p className="text-gray-800 uppercase">
                            Invoice date
                          </p>
                          <p className="text-gray-500 mt-1">  {moment(DataOrden.DAT_ADD_ORDEN).calendar()}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-3.5 pb-9 px-10">
                  <div className="w-full overflow-x-auto">
                    

                    <table className="w-full">
            <tbody>
              <tr className="text-xs leading-3 text-gray-800 text-left border-b border-gray-200">
                <td className="py-4">Libras</td>
                <td className="py-4"></td>
                <td className="py-4 text-right">
                  {DataTrackinNotOrden[0].WEIGHT_PACKAGE}
                </td>
              </tr>
              <tr className="text-xs leading-3 text-gray-800 text-left border-b border-gray-200">
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
              <tr className="text-xs leading-3 text-gray-800 text-left border-b border-gray-200">
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
              <tr className="text-xs leading-3 text-gray-800 text-left border-b border-gray-200">
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
              </div>):(<SpinnerButton />)}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
