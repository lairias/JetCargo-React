import {DialogoNewRol} from "./DialogoNewRol";
import { Toaster } from "react-hot-toast";
import {useFetchToken} from "../../../hooks/useFetch"
import SpinnerButton from "../../Spinners/SpinnerButton";

export default function ModalNewRol({ handleShoModal }) {
  /********************************Variables de State */
  const [Datapermisos, loaddindata]= useFetchToken("permission")



  /************************************************** */
  return (
    <>
      <Toaster />
      { loaddindata ? (<DialogoNewRol  handleShoModal={handleShoModal} Datapermisos={Datapermisos}  />) : ("")}
      
     
    </>
  );
}
