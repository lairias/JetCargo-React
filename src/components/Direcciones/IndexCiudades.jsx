import { useState } from "react";
import { useSelector } from "react-redux";
import { GetCiudades } from "./GetCiudades";
import ModalNewCiudad from "./ModalNewCiudad";
export default function IndexCiudades() {
  const [shoModal, set_shoModal] = useState(false);
  const handleShoModal = () => {
    set_shoModal(!shoModal);
  };
  const { permission } = useSelector((state) => state.auth);
  return (
    <>
      <div className="flex justify-between">
        <h2 className="my-6 text-2xl font-semibold text-gray-700">
          Casilleros
        </h2>
          <div className=" my-6">
            {permission.includes("locker.crear") && (
            <button
              onClick={handleShoModal}
              className="flex items-center justify-between  px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">Nuevo País <span className="ml-2">+</span>
            </button>
            )}
          </div>
        {shoModal && permission.includes("locker.crear") && (
          <ModalNewCiudad
            handleShoModal={handleShoModal}
          />
        ) }
      </div>
      <GetCiudades />
    </>
  );
}
