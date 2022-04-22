import {DialogoNewCiudad} from "./DialogoNewCiudad";
import { Toaster } from "react-hot-toast";
import {useFetchToken} from "../../hooks/useFetch"
import SpinnerButton from "../Spinners/SpinnerButton";

export default function ModalNewCiudad({ handleShoModal }) {
  const [DataCountry,loaddinCountry] = useFetchToken("country")
  const [DataState,loaddinState] = useFetchToken("states")
  /********************************Variables de State */
  


  /************************************************** */
  return (
    <>
      <Toaster />
      { loaddinCountry && loaddinState ?  <DialogoNewCiudad  handleShoModal={handleShoModal} DataState={DataState}  DataCountry={DataCountry} /> : "" }
      
     
    </>
  );
}
