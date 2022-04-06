import { useFetchToken } from "../../../hooks/useFetch";
import SpinnerButton from "../../Spinners/SpinnerButton";
import TableOrigenDestino from "./TableOrigenDestino";

export default function ListPackageUser({ showInvoice, setshoInvoice,COD_ORDEN,
  COD_TRACKING}) {
    const [DataOrigenDestino, loadding_OrigenDestino] =useFetchToken(`trackingInformation/origenDestino/${COD_ORDEN}`);
  return (
    <>
    {loadding_OrigenDestino ? (   <TableOrigenDestino  showInvoice={showInvoice} setshoInvoice={setshoInvoice} COD_ORDEN={DataOrigenDestino.OrriginDestino.COD_ORDEN}/> )   :(<SpinnerButton />)  }
      
    </>
  );
}
