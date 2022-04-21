import { useState } from "react";
import { useSelector } from "react-redux";
import ModalNewRol from "./ModalNewRol";
import GetTypeUsers from "./GetTypeUsers";

export default function IndexTypes() {
  const [shoModalIndex, set_shoModalIndex] = useState(false);
  const handleShoModal = () => {
    set_shoModalIndex(!shoModalIndex);
  };

  //importaciones de permisos
  const { permission } = useSelector((state) => state.auth);
  return (
    <>
      <div className="flex justify-between">
        <h2 className="my-6 text-2xl font-semibold text-gray-700">
          {" "}
          Perfiles administrativos{" "}
        </h2>
        {permission.includes("typeuser.crear") && (
          <div className=" my-6">
            <button
              onClick={handleShoModal}
              className="flex items-center justify-between  px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
            >
              Nuevo Rol <span className="ml-2">+</span>
            </button>
          </div>)}

        {shoModalIndex ? <ModalNewRol handleShoModal={handleShoModal} /> : ""}
      </div>
      {/* Insertar contenido de las paginas **/}
      {permission.includes("typeuser.view") && (
      <GetTypeUsers shoModalIndex={shoModalIndex} />
      )}
    </>
  );
}
