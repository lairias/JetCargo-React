import { useState } from "react";
import { ModalNewPackage } from "../../Modal/Package/admin/ModalNewPackage";
import { GetReceptionCountry } from "./GetReceptionCountry";
import { useParams } from "react-router-dom";
import { GetAllCategoryPackage } from "../../../actions/categorypackageAction";
import { useDispatch } from "react-redux";
export const IndexReceptionCountry = () => {
  //****************************Variables state */
  const [shoModal, set_shoModal] = useState(false);
  //**********************************************
  //****************************Variables Hooks */
  const dispatch = useDispatch();
  //**********************************************
  //****************************Variables funciones */
    const handleShoModal = () => {
      dispatch(GetAllCategoryPackage());
      set_shoModal(!shoModal);
    };
  //**********************************************
  return (
    <>
      <div className="flex justify-between">
        <h2 className="my-6 text-2xl font-semibold text-gray-700">
          {" "}
          Seguimiento de paquetes{" "}
        </h2>
        <div className=" my-6">
          <button
            onClick={handleShoModal}
            className="flex items-center justify-between  px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
          >
            {" "}
            Nuevo paquete <span className="ml-2">+</span>
          </button>
        </div>
        {shoModal ? <ModalNewPackage handleShoModal={handleShoModal} /> : ""}
      </div>
      {/* Insertar contenido de las paginas **/}
      <GetReceptionCountry />
    </>
  );
};
