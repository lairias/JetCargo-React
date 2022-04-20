import {DialogoNewCosto} from "./DialogoNewCosto";
import { Toaster } from "react-hot-toast";
import {useFetchToken} from "../../../hooks/useFetch"
import SpinnerButton from "../../Spinners/SpinnerButton";

export default function ModalNewCosto({ handleShoModalIndex }) {
  /********************************Variables de State */
  const [dataShippin, loaddinHippin] = useFetchToken(`shopping`)
  /************************************************** */
  return (
    <>
      <Toaster />
      {  ( loaddinHippin && <DialogoNewCosto  handleShoModalIndex={handleShoModalIndex} dataShippin={dataShippin}   />) }
      
     
    </>
  );
}
