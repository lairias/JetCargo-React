import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { GettrackingByInformation } from "../../../actions/TrackingInformationAction";
import SpinnerButton from "../../Spinners/SpinnerButton";

import FormularioUpdateInformationTracking from "./FormularioUpdateInformationTracking"
export default function UpdateInformationTrackin() {
  const { COD_COUNTRY, COD_ORDEN, COD_ORIGEN, COD_DESTINO } = useParams();
  const [DataCargada, setDataCargada] = useState({});
  const [Loaddin, setLoaddin] = useState(false);
  const dispatch = useDispatch();
useEffect(() => {
  dispatch(GettrackingByInformation(COD_DESTINO, COD_ORIGEN, setDataCargada,setLoaddin));

},[dispatch])
  return (
    <>
    {Loaddin ? (<FormularioUpdateInformationTracking DataCargada={DataCargada} setDataCargada ={setDataCargada }COD_COUNTRY={COD_COUNTRY} COD_ORDEN={COD_ORDEN} COD_ORIGEN={COD_ORIGEN} COD_DESTINO={COD_DESTINO}  />   ) : (
    <SpinnerButton />
    )}
    
    </>
  );
}
