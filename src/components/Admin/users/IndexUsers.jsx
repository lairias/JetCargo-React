import { useState } from "react";
import { useSelector } from "react-redux";
import ModalNewCatPackage from "../../Modal/CategoryPackage/ModelNewCatPackage";
import { GetUsers } from "./GetUsers";
import ModalNewUser from "./ModalNewUser";

export default function IndexUsers() {
  const [shoModal, set_shoModal] = useState(false);
  const handleShoModal = () => {
    set_shoModal(!shoModal);
  };
  //importaciones de permisos
  const { permission } = useSelector((state) => state.auth);
  return (
    <>
      <div className="flex justify-between">
        <h2 className="my-6 text-2xl font-semibold text-gray-700">
          {" "}
          Usuarios registrado{" "}
        </h2>
          <div className=" my-6">
            {permission.includes("user.crear") && ( <button
              onClick={handleShoModal}
              className="flex items-center justify-between  px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
            >
              Nueva Usuario <span className="ml-2">+</span>
            </button>)}
           
          </div>

        {shoModal && (
          <ModalNewUser
            handleShoModal={handleShoModal}
          />
        ) }
      </div>
      {permission.includes("user.view") && (<GetUsers />)}
    </>
  );
}
