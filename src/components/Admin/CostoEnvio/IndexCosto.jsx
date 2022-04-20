import { useState } from "react";
import { useSelector } from "react-redux";
import { GetCostos } from "./GetCostos";
import ModalNewCosto from "./ModalNewCosto";

export default function IndexCosto() {
  const [shoModalIndex, set_shoModalIndex] = useState(false);
  const handleShoModalIndex = () => {
    set_shoModalIndex(!shoModalIndex);
  };
  //importaciones de permisos
  const { permission } = useSelector((state) => state.auth);
  return (
    <>
      <div className="flex justify-between">
        <h2 className="my-6 text-2xl font-semibold text-gray-700">
          Tipos de paquete
        </h2>
        <div className=" my-6">
          {permission.includes("user.crear") && (
            <button
              onClick={handleShoModalIndex}
              className="flex items-center justify-between  px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
            >
              Nuevo tipo de paquete <span className="ml-2">+</span>
            </button>
          )}
        </div>
        {shoModalIndex && <ModalNewCosto handleShoModalIndex={handleShoModalIndex} />}
      </div>
      {permission.includes("user.view") && <GetCostos shoModalIndex={shoModalIndex} />}
    </>
  );
}
