import {DialogoNewCasillero} from "./DialogoNewCasillero";
import { Toaster } from "react-hot-toast";
import {useFetchToken} from "../../../hooks/useFetch"
import SpinnerButton from "../../Spinners/SpinnerButton";

export default function ModalNewCasillero({ handleShoModal }) {
  /********************************Variables de State */
  


  /************************************************** */
  return (
    <>
      <Toaster />
      {  <DialogoNewCasillero  handleShoModal={handleShoModal}  /> }
      
     
    </>
  );
}
