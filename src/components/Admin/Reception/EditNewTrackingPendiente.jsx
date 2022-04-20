import { Toaster } from "react-hot-toast";
import {  useParams } from "react-router-dom";
import Pendiente from "./Pendiente";
import Progreso from "./Progreso";
import Delivered from "./Delivered";
import Received from "./Received";
import Cancelar from "./Cancelar";
import SpinnerButton from "../../Spinners/SpinnerButton";
import { useFetchToken } from "../../../hooks/useFetch";
export default function EditNewTrackingPendiente() {
  const { COD_COUNTRY, COD_CUSTOMER, RECEIVED_TRACKING, NUM_TRACKING}=useParams();
  const [DataTracking, loaddin_dataTracking] = useFetchToken(`tracking/${NUM_TRACKING}`);
  const [DataOrden, loaddin_dataOrden] = useFetchToken(`orden/tracking_number/${NUM_TRACKING}`);
  return (
    <>
    <Toaster/>
    {loaddin_dataTracking && loaddin_dataOrden ? (RECEIVED_TRACKING === "PENDING" ? (
    <Pendiente COD_COUNTRY={COD_COUNTRY} COD_CUSTOMER={COD_CUSTOMER} RECEIVED_TRACKING={RECEIVED_TRACKING} NUM_TRACKING={NUM_TRACKING} COD_TRACKING={DataTracking.Number_tracking.COD_TRACKING}  />
    ) : (RECEIVED_TRACKING === "RECEIVED" ? ( <Received COD_COUNTRY={COD_COUNTRY} COD_CUSTOMER={COD_CUSTOMER} RECEIVED_TRACKING={RECEIVED_TRACKING} NUM_TRACKING={NUM_TRACKING} COD_TRACKING={DataTracking.Number_tracking.COD_TRACKING}  />)
    :( RECEIVED_TRACKING === "DELIVERED" ? ( <Delivered COD_COUNTRY={COD_COUNTRY} COD_CUSTOMER={COD_CUSTOMER} RECEIVED_TRACKING={RECEIVED_TRACKING} NUM_TRACKING={NUM_TRACKING} COD_TRACKING={DataTracking.Number_tracking.COD_TRACKING} COD_ORDEN={DataOrden[0].COD_ORDEN}  />) 
    : (RECEIVED_TRACKING === "CANCELED" ? ( <Cancelar COD_COUNTRY={COD_COUNTRY} COD_CUSTOMER={COD_CUSTOMER} RECEIVED_TRACKING={RECEIVED_TRACKING} NUM_TRACKING={NUM_TRACKING} COD_TRACKING={DataTracking.Number_tracking.COD_TRACKING} COD_ORDEN={DataOrden[0].COD_ORDEN}  />)
    :(RECEIVED_TRACKING === "IN_PROGRESS" && ( <Progreso COD_COUNTRY={COD_COUNTRY} COD_CUSTOMER={COD_CUSTOMER} RECEIVED_TRACKING={RECEIVED_TRACKING} NUM_TRACKING={NUM_TRACKING} COD_TRACKING={DataTracking.Number_tracking.COD_TRACKING} COD_ORDEN={DataOrden[0].COD_ORDEN}  />))) ))):( <SpinnerButton />)}
    </>
  );
}
