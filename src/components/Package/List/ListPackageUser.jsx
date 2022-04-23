import { useFetchToken } from "../../../hooks/useFetch";
import SpinnerButton from "../../Spinners/SpinnerButton";
import TableOrigenDestino from "./TableOrigenDestino";

export default function ListPackageUser({ showInvoice, setshoInvoice,COD_ORDEN,
  COD_TRACKING}) {
    const [DataOrigenDestino, loadding_OrigenDestino] =useFetchToken(`trackingInformation/origenDestino/${COD_ORDEN}`);
    const [DataTrackin, LoadingTracking] = useFetchToken(`tracking/admin/${COD_TRACKING}`);
  return (
    <>
    {LoadingTracking && loadding_OrigenDestino ? (   <TableOrigenDestino  showInvoice={showInvoice} setshoInvoice={setshoInvoice} DataTrackin={DataTrackin} COD_ORDEN={DataOrigenDestino.OrriginDestino.COD_ORDEN}/> )   :(<SpinnerButton />)  }
      
    </>
  );
}
