import {DialogoNewCiudad} from "./DialogoNewCiudad";
import { Toaster } from "react-hot-toast";
import {useFetchToken} from "../../hooks/useFetch"
import SpinnerButton from "../Spinners/SpinnerButton";

export default function ModalNewCiudad({ handleShoModal }) {
  const [DataState,loaddinState] = useFetchToken("states")
  const [DataCountry,loaddinCountry] = useFetchToken("country")
  /********************************Variables de State */
  


  /************************************************** */
  return (
    <>
      <Toaster />
      { loaddinCountry && loaddinState ?  <DialogoNewCiudad  handleShoModal={handleShoModal} DataState={DataState} DataCountry={DataCountry}  /> : "" }
      
     
    </>
  );
}
