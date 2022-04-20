import {DialogoEditCosto} from "./DialogoEditCosto";
import { Toaster } from "react-hot-toast";
import {useFetchToken} from "../../../hooks/useFetch"
import SpinnerButton from "../../Spinners/SpinnerButton";

export default function ModalEditCosto({ handleShoModal2, IdShoModal2}) {
  /********************************Variables de State */
  const [dataCategory, loaddindata]= useFetchToken(`shopping/${IdShoModal2}`)
  /************************************************** */
  console.log(dataCategory)
  return (
    <>
      <Toaster />
      {loaddindata ? (<DialogoEditCosto  handleShoModal2={handleShoModal2}  dataCategory={dataCategory} IdShoModal2={IdShoModal2} />): (<SpinnerButton />) }
    </>
  );
}
