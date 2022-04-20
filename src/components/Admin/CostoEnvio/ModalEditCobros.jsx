import {DialogoEditCosto} from "./DialogoEditCosto";
import {useFetchToken} from "../../../hooks/useFetch"
import SpinnerButton from "../../Spinners/SpinnerButton";

export default function ModalEditCobros({ handleShoModal, IdShoModal,IdShoModalCustomer}) {
  /********************************Variables de State */
  const [dataCategory, loaddindata]= useFetchToken(`typepackage/${IdShoModal}`);
  const [dataCategorySho, loaddindataSho]= useFetchToken(`shopping/${IdShoModalCustomer}`)
  const [dataShippin, loaddinHippin] = useFetchToken(`shopping`)


  /************************************************** */
  return (
    <>
      {loaddindata && loaddindataSho && loaddinHippin  ? (<DialogoEditCosto  handleShoModal={handleShoModal} dataCategorySho={dataCategorySho} dataShippin={dataShippin}  dataCategory={dataCategory} />): (<SpinnerButton />) }
    </>
  );
}