import { useForms } from "../../../hooks/useForms";
import {DialogoEditUsers} from "./DialogoEditUsers";
import { Toaster } from "react-hot-toast";
import {useFetchToken} from "../../../hooks/useFetch"
import SpinnerButton from "../../Spinners/SpinnerButton";

export default function ModalEditUsers({ handleShoModal, IdShoModal,IdShoModalCustomer}) {
  const [dataCategory,  loaddinCategory] = useFetchToken(`users/admin/${IdShoModal}`);
  const [dataLockers,  loaddinLockers] = useFetchToken(`locker`);
  const [{ok,role},loaddinRoles] = useFetchToken("roles")
  const [DataLockerUser,  loaddinDataLockerUser] = useFetchToken(`locker/customer/${IdShoModalCustomer}`);


  /********************************Variables de State */
  /************************************************** */
  return (
    <>
      <Toaster />
      {loaddinCategory && loaddinRoles && loaddinLockers && loaddinDataLockerUser ? (<DialogoEditUsers  handleShoModal={handleShoModal} role={role} dataLockers={dataLockers} dataCategory={dataCategory} id={IdShoModal} DataLockerUser={DataLockerUser} />): (<SpinnerButton />) }
     
    </>
  );
}
