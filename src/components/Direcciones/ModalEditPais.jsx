import { useFetchToken } from "../../hooks/useFetch";
import { DialogoEditPais } from "../../components/Direcciones/DialogoEditPais";
import SpinnerButton from "../Spinners/SpinnerButton";
export const ModalEditPais = ({ handleShoModal,IdShoModal }) => {
    const [dataPais, loaddinPais] = useFetchToken(`country/${IdShoModal}`);
  return (
    <>
      {loaddinPais ? (<DialogoEditPais dataPais={dataPais} handleShoModal={handleShoModal} />):(<SpinnerButton />)}
    </>
  );
};
