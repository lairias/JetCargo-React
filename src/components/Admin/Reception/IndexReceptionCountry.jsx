import { useState } from "react";
import { ModalNewPackage } from "../../Modal/Package/admin/ModalNewPackage";
import { GetReceptionCountry } from "./GetReceptionCountry";
import { TabView, TabPanel } from 'primereact/tabview';
import { GetAllCategoryPackage } from "../../../actions/categorypackageAction";
import { useDispatch } from "react-redux";
import { Accordion, AccordionTab } from 'primereact/accordion';

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

      <TabView>
                    <TabPanel header=" Express">
                    <Accordion className="accordion-custom" activeIndex={0}>
                    <AccordionTab header={<><i className="pi pi-calendar"></i><span>Pendiente</span></>}>
                    <GetReceptionCountry COD_TYPEPACKAGE={3} RECEIVED_TRACKING="PENDING" />
                    </AccordionTab>
                    <AccordionTab header={<><i className="pi pi-calendar"></i><span>Proceso</span></>}>
                    <GetReceptionCountry COD_TYPEPACKAGE={3} RECEIVED_TRACKING="IN_PROGRESS" />
                    </AccordionTab>
                    <AccordionTab header={<><i className="pi pi-user"></i><span>Residido</span></>}>
                    <GetReceptionCountry COD_TYPEPACKAGE={3} RECEIVED_TRACKING="RECEIVED"/>
                    </AccordionTab>
                    <AccordionTab header={<><i className="pi pi-search"></i><span>Entregados</span><i className="pi pi-cog"></i></>}>
                    <GetReceptionCountry COD_TYPEPACKAGE={3} RECEIVED_TRACKING="DELIVERED"/>
                    </AccordionTab>
                    <AccordionTab header={<><i className="pi pi-search"></i><span>Cancelados</span><i className="pi pi-cog"></i></>}>
                    <GetReceptionCountry COD_TYPEPACKAGE={3} RECEIVED_TRACKING="CANCELED"/>
                    </AccordionTab>
                </Accordion>
                   
                    </TabPanel>
                    <TabPanel header=" Aéreo">
                    <Accordion className="accordion-custom" activeIndex={0}>
                    <AccordionTab header={<><i className="pi pi-calendar"></i><span>Pendiente</span></>}>
                    <GetReceptionCountry COD_TYPEPACKAGE={2} RECEIVED_TRACKING="PENDING" />
                    </AccordionTab>
                    <AccordionTab header={<><i className="pi pi-calendar"></i><span>Proceso</span></>}>
                    <GetReceptionCountry COD_TYPEPACKAGE={2} RECEIVED_TRACKING="IN_PROGRESS"/>
                    </AccordionTab>
                    <AccordionTab header={<><i className="pi pi-user"></i><span>Residido</span></>}>
                    <GetReceptionCountry COD_TYPEPACKAGE={2} RECEIVED_TRACKING="RECEIVED"/>
                    </AccordionTab>
                    <AccordionTab header={<><i className="pi pi-search"></i><span>Entregados</span><i className="pi pi-cog"></i></>}>
                    <GetReceptionCountry COD_TYPEPACKAGE={2} RECEIVED_TRACKING="DELIVERED"/>
                    </AccordionTab>
                    <AccordionTab header={<><i className="pi pi-search"></i><span>Cancelados</span><i className="pi pi-cog"></i></>}>
                    <GetReceptionCountry COD_TYPEPACKAGE={2} RECEIVED_TRACKING="CANCELED"/>
                    </AccordionTab>
                </Accordion>
                    </TabPanel>
                    <TabPanel header=" Marítimo">
                    <Accordion className="accordion-custom" activeIndex={0}>
                    <AccordionTab header={<><i className="pi pi-calendar"></i><span>Pendiente</span></>}>
                    <GetReceptionCountry COD_TYPEPACKAGE={1} RECEIVED_TRACKING="PENDING" />
                    </AccordionTab>
                    <AccordionTab header={<><i className="pi pi-calendar"></i><span>Proceso</span></>}>
                    <GetReceptionCountry COD_TYPEPACKAGE={1} RECEIVED_TRACKING="IN_PROGRESS" />
                    </AccordionTab>
                    <AccordionTab header={<><i className="pi pi-user"></i><span>Residido</span></>}>
                    <GetReceptionCountry COD_TYPEPACKAGE={1} RECEIVED_TRACKING="RECEIVED"/>
                    </AccordionTab>
                    <AccordionTab header={<><i className="pi pi-search"></i><span>Entregados</span><i className="pi pi-cog"></i></>}>
                    <GetReceptionCountry COD_TYPEPACKAGE={1} RECEIVED_TRACKING="DELIVERED"/>
                    </AccordionTab>
                    <AccordionTab header={<><i className="pi pi-search"></i><span>Cancelados</span><i className="pi pi-cog"></i></>}>
                    <GetReceptionCountry COD_TYPEPACKAGE={1} RECEIVED_TRACKING="CANCELED"/>
                    </AccordionTab>
                </Accordion>
                    </TabPanel>
                </TabView>
      
      
    </>
  );
};
