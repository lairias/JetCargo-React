import { useForms } from "../../../hooks/useForms";
import {DialogoEditSeguridad} from "./DialogoEditSeguridad";
import { Toaster } from "react-hot-toast";
import {useFetchToken} from "../../../hooks/useFetch"
import SpinnerButton from "../../Spinners/SpinnerButton";

export default function ModalEditSeguridad({ handleShoModal, IdShoModal }) {
  const [dataCategory,  loaddinCategory] = useFetchToken(`seguridad/${IdShoModal}`);

  /********************************Variables de State */
  


  /************************************************** */
  return (
    <>
      <Toaster />
      {loaddinCategory ? (<DialogoEditSeguridad  handleShoModal={handleShoModal} dataCategory={dataCategory} id={IdShoModal} />): (<SpinnerButton />) }
     
    </>
  );
}
