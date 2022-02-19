import { useState } from "react";
import ModalNewTypeUsers from "../../Modal/Package/TypeUsers/ModalNewTypeUsers";
import GetTypeUsers from "./GetTypeUsers";

export default function IndexTypes (){
    const [shoModal, set_shoModal] = useState(false);
    const handleShoModal = () => {
      set_shoModal(!shoModal);
    };

    return (
        <>
        <div className="flex justify-between">
          <h2 className="my-6 text-2xl font-semibold text-gray-700">
            {" "}
            Perfiles administrativos{" "}
          </h2>
          <div className=" my-6">
            <button
              onClick={handleShoModal} className="flex items-center justify-between  px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
              Nuevo Rol  <span className="ml-2">+</span>
            </button>
          </div>
          {shoModal ? <ModalNewTypeUsers handleShoModal={handleShoModal} /> : ""}
        </div>
        {/* Insertar contenido de las paginas **/}
        
        <GetTypeUsers />
      </>
    )
};