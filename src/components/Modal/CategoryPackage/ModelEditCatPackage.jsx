import { useForms } from "../../../hooks/useForms";
import {DialogoEditCarpackage} from "./DialogoEditCarpackage";
import { Toaster } from "react-hot-toast";
import {useFetchToken} from "../../../hooks/useFetch"
import SpinnerButton from "../../Spinners/SpinnerButton";

export default function ModalNewCatPackage({ handleShoModal, IdShoModal }) {
  const [dataCategory,  loaddinCategory] = useFetchToken(`catpackage/${IdShoModal}`);

  /********************************Variables de State */
  


  /************************************************** */
  return (
    <>
      <Toaster />
      {loaddinCategory ? (<DialogoEditCarpackage  handleShoModal={handleShoModal} dataCategory={dataCategory} id={IdShoModal} />): (<SpinnerButton />) }
     
    </>
  );
}
