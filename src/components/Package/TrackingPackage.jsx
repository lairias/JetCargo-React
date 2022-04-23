import ListPackageUser from "./List/ListPackageUser";
import ModalInvoicePackage from "../Modal/Package/invoice/ModalInvoicePackage";
import { useState } from "react";
import { useFetchToken } from "../../hooks/useFetch";
import SpinnerButton from "../Spinners/SpinnerButton";
import { useSelector } from "react-redux";
export default function TrackingPackage ({DataOrden,DataTracking,NUM_LOCKER,COD_LOCKER,COD_PACKAGE,COD_TRACKING}){
    const [showInvoice, setshoInvoice] = useState(false);
    const [DataOrigen, loadding_Origen] = useFetchToken(
        `trackingInformation/origenDestinoAll/${DataOrden.COD_ORDEN}`
      );
      const { customer } = useSelector((state) => state.auth);
      const [DataTrackinNotOrden, NotOrdenLoading] = useFetchToken(
        `tracking/${COD_TRACKING}/${COD_PACKAGE}/${NUM_LOCKER}/${customer.COD_CUSTOMER}`
      );
      

      const handleShowInvoice= ()=>{
        setshoInvoice(!showInvoice);
      }
    return (
        <>
          {showInvoice ? (
          <ModalInvoicePackage
          DataOrden={DataOrden}
          DataTrackinNotOrden={DataTrackinNotOrden}
          DataTracking={DataTracking}
            showInvoice={showInvoice}
            setshoInvoice={setshoInvoice}
          />
        ) : (
          ""
        )}
        {loadding_Origen ?
         (<>
         { DataOrigen.length >=1 ? (<ListPackageUser
        COD_ORDEN={DataOrden.COD_ORDEN}
        COD_TRACKING={DataOrden.COD_TRACKING}
          showInvoice={showInvoice}
          setshoInvoice={setshoInvoice}
        />):(<div className="w-full">
        <div className="border rounded-xl bg-white pb-6 mb-6">
          <div className=" flex flex-col md:flex-row lg:flex-row xl:flex-row items-center border-b border-gray-200 justify-center md:justify-between xl:justify-between lg:justify-between px-6 py-3">
          {NotOrdenLoading ?(<div className="my-6 basis-1/1">
              <button
                onClick={handleShowInvoice}
                className="flex items-center justify-between w-full  px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
              >
                {" "}
                Factura <span className="ml-2"></span>
              </button>
            </div>): (<SpinnerButton />)}
            
           
          </div>
          <div className="px-3 pt-6 ">
           <h1 className="text-center">El paquete no tiene información</h1>
          </div>
        </div>
      </div>)}
         </>)
         
         :(
            <SpinnerButton />
            )}
        </>
    )
}