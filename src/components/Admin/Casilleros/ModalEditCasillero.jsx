import { useForms } from "../../../hooks/useForms";
import {DialogoEditCasillero} from "./DialogoEditCasillero";
import { Toaster } from "react-hot-toast";
import {useFetchToken} from "../../../hooks/useFetch"
import SpinnerButton from "../../Spinners/SpinnerButton";

export default function ModalEditCasillero({ handleShoModal, IdShoModal }) {
  const [dataCategory,  loaddinCategory] = useFetchToken(`locker/${IdShoModal}`);

  /********************************Variables de State */
  


  /************************************************** */
  return (
    <>
      <Toaster />
      {loaddinCategory ? (<DialogoEditCasillero  handleShoModal={handleShoModal} dataCategory={dataCategory} id={IdShoModal} />): (<SpinnerButton />) }
     
    </>
  );
}
