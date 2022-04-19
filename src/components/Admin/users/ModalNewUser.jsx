import {DialogoNewUsers} from "./DialogoNewUsers";
import { Toaster } from "react-hot-toast";
import {useFetchToken} from "../../../hooks/useFetch"
import SpinnerButton from "../../Spinners/SpinnerButton";

export default function ModalNewUser({ handleShoModal }) {
  const [{ok,role},loaddinRoles] = useFetchToken("roles")
  /********************************Variables de State */
  


  /************************************************** */
  return (
    <>
      <Toaster />
      {loaddinRoles &&  <DialogoNewUsers  handleShoModal={handleShoModal} role={role} /> }
      
     
    </>
  );
}
