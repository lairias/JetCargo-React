import React, { useState } from "react";

import { useParams } from "react-router-dom";
import {useFetchToken} from "../../hooks/useFetch";
import SpinnerButton from "../Spinners/SpinnerButton";
import TrackingPackage from "./TrackingPackage";
export const GetPackage = () => {
  const {NUM_LOCKER,COD_LOCKER,COD_PACKAGE,COD_TRACKING}=useParams();
  //*********************************Variables de State */
  
  //*************************************************** */
  //*********************************Variables de Hooks*/
  const [DataOrden,loaddin_DataOrden] =  useFetchToken(`orden/tracking_cod/${COD_TRACKING}`);
  const [DataTracking,loaddin_DataTrackin] =  useFetchToken(`tracking/GetBytracking/${COD_TRACKING}`);
  
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
            Últimos movimientos del paquete
          </h2>
        </div>
        {loaddin_DataTrackin && loaddin_DataOrden ? ( <TrackingPackage DataOrden={DataOrden} DataTracking={DataTracking} NUM_LOCKER={NUM_LOCKER} COD_LOCKER={COD_LOCKER}COD_PACKAGE={COD_PACKAGE} COD_TRACKING={COD_TRACKING} />):(<SpinnerButton />)}
       
      
        
      </div>
    </>
  );
};
