import {DialogoNewCobro} from "./DialogoNewCobro";
import { Toaster } from "react-hot-toast";
import {useFetchToken} from "../../../hooks/useFetch"
import SpinnerButton from "../../Spinners/SpinnerButton";

export default function ModalNewCobros({ handleShoModal1 }) {
  return (
    <>
      <Toaster />
      {  (<DialogoNewCobro  handleShoModal1={handleShoModal1} />)}
    </>
  );
}
