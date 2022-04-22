import { useFetchToken } from "../../hooks/useFetch";
import { DialogoEditDepartamento } from "../../components/Direcciones/DialogoEditDepartamento";
import SpinnerButton from "../Spinners/SpinnerButton";
export const ModalEditDepartemento = ({ handleShoModal,IdShoModal }) => {
    const [dataPais, loaddinPais] = useFetchToken(`states/${IdShoModal}`);
    const [dataDepartamneto, loaddinDepartamento] = useFetchToken(`country`);
  return (
    <>
      {loaddinPais  && loaddinDepartamento ? (<DialogoEditDepartamento dataPais={dataPais} dataDepartamneto={dataDepartamneto} handleShoModal={handleShoModal} />):(<SpinnerButton />)}
    </>
  );
};
