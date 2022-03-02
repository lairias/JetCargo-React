import { useState } from "react";
import { useSelector } from "react-redux";
import { useVeryPermisso } from "../../../hooks/useVeryPermission";
import ModalNewCatPackage from "../../Modal/CategoryPackage/ModelNewCatPackage";
import { GetCategoryPackage } from "./GetCatPackage";

export default function IndexCatPackage() {
  const [shoModal, set_shoModal] = useState(false);
  const handleShoModal = () => {
    set_shoModal(!shoModal);
  };
  //importaciones de permisos
  const { permission } = useSelector((state) => state.auth);
  const [Crear_ad] = useVeryPermisso(permission, "categoripaquete.crear");
  return (
    <>
      <div className="flex justify-between">
        <h2 className="my-6 text-2xl font-semibold text-gray-700">
          {" "}
          Categoria de Paquetes{" "}
        </h2>
        {Crear_ad ? (
          <div className=" my-6">
            <button
              onClick={handleShoModal}
              className="flex items-center justify-between  px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
            >
              Nueva Categoria de Paquetes <span className="ml-2">+</span>
            </button>
          </div>
        ) : (
          ""
        )}

        {shoModal ? <ModalNewCatPackage handleShoModal={handleShoModal} isOpen={shoModal} /> : ""}
      </div>
      {/* Insertar contenido de las paginas **/}
<GetCategoryPackage />
      
    </>
  );
}
