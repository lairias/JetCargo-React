import {DialogoEditPermiso} from "./DialogoEditPermiso";
import { Toaster } from "react-hot-toast";
import {useFetchToken} from "../../../hooks/useFetch"
import SpinnerButton from "../../Spinners/SpinnerButton";

export default function ModalEditPermiso({ handleShoModal1, IdPermiso }) {
  /********************************Variables de State */
  const [Datapermisos, loaddindata]= useFetchToken(`permission/${IdPermiso}`)



  /************************************************** */
  return (
    <>
      <Toaster />
      { loaddindata ? (<DialogoEditPermiso  handleShoModal={handleShoModal1} Datapermisos={Datapermisos} IdPermiso={IdPermiso}  />) : ("")}
      
     
    </>
  );
}
