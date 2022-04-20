import { useState } from "react";
import { ModalNewPackage } from "../../Modal/Package/admin/ModalNewPackage";
import { GetReceptionCountryAll } from "./GetReceptionCountryAll";
import { TabView, TabPanel } from "primereact/tabview";
import { GetAllCategoryPackage } from "../../../actions/categorypackageAction";
import { useDispatch, useSelector } from "react-redux";

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
  const { permission } = useSelector((state) => state.auth);
  //**********************************************
  return (
    <>
      <div className="flex justify-between">
        <h2 className="my-6 text-2xl font-semibold text-gray-700">
          Seguimiento de Trackings
        </h2>
        <div className=" my-6">
          {permission.includes('seguimiento.crear') && (
          <button
            onClick={handleShoModal}
            className="flex items-center justify-between  px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
          >
            {" "}
            Nuevo paquete <span className="ml-2">+</span>
          </button>
          )}
        </div>
        {shoModal ? <ModalNewPackage handleShoModal={handleShoModal} /> : ""}
      </div>

{permission.includes('seguimiento.view') && (
  <TabView>
        <TabPanel header="Pendiente">
              <GetReceptionCountryAll
                RECEIVED_TRACKING="PENDING"
              />
        </TabPanel>
        <TabPanel header="Recibido">
              <GetReceptionCountryAll
                RECEIVED_TRACKING="RECEIVED"
              />
        </TabPanel>
        <TabPanel header="Progreso">
              <GetReceptionCountryAll
                RECEIVED_TRACKING="IN_PROGRESS"
              />
        </TabPanel>
        <TabPanel header=" Entregado">
              <GetReceptionCountryAll
                RECEIVED_TRACKING="DELIVERED"
              />
        </TabPanel>
        <TabPanel header="Cancelado">
              <GetReceptionCountryAll
                RECEIVED_TRACKING="CANCELED"
              />
        </TabPanel>
      </TabView>

)}
     
    </>
  );
};
