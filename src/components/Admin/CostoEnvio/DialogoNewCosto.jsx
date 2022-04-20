import { Dialog } from "primereact/dialog";
import {  useState } from "react";
import 'primeicons/primeicons.css';
import Select from "react-select";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import toast, { Toaster } from "react-hot-toast";
import { fetchConToken } from "../../../util/fetch";
export const DialogoNewCosto = ({ handleShoModalIndex,dataShippin}) => {
  const [selectedServices, setSelectedServices] = useState();
const renderFooter = (name) => {
    
    return (
      <div>
        <Button
          label="No"
          icon="pi pi-times"
          onClick={handleShoModalIndex}
          className="p-button-text"
        />
        <Button
          label="Yes"
          icon="pi pi-check"
          onClick={(e) => {
            handleSubmit(e);
          }}
          autoFocus
        />
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      task.NAM_TYPEPACKAGE === "" || task.NAM_TYPEPACKAGE === " " ||
      task.ABBRE_TYPEPACKAGE === "" || task.ABBRE_TYPEPACKAGE === " " || 
      task.DES_TYPEPACKAGE === "" || task.DES_TYPEPACKAGE === " " || 
      task.PREC_TYPEPACKAGE === "" || task.PREC_TYPEPACKAGE === " "
      ) {
      toast.error("Todos los datos son necesarios");
    } else {
      fetchConToken(
        `typepackage/`,
        {
          COD_SHIPPINGCOST: selectedServices.COD_SHIPPINGCOST,
          NAM_TYPEPACKAGE: task.NAM_TYPEPACKAGE,
          ABBRE_TYPEPACKAGE: task.ABBRE_TYPEPACKAGE,
          DES_TYPEPACKAGE: task.DES_TYPEPACKAGE,
        PREC_TYPEPACKAGE: task.PREC_TYPEPACKAGE,
        },
        "POST"
      );
      handleShoModalIndex(e);
    }
  };

  const [task, setTask] = useState({
    NAM_TYPEPACKAGE:"",
    ABBRE_TYPEPACKAGE:"",
    DES_TYPEPACKAGE:"",
    PREC_TYPEPACKAGE:"",
  });


  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });
    return (
        <>
        <Toaster/>
       

      <Dialog
        header="Editar Categoria de paquetes"
        visible={handleShoModalIndex}
        style={{ width: "50vw" }}
        footer={renderFooter("displayBasic2")}
        onHide={handleShoModalIndex}
      >
    <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
    <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">
            Nombre tipo de paquete
            </span>
            <input
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Nombre tipo de paquete"
              name="NAM_TYPEPACKAGE"
              onChange={handleChange}
              value={task.NAM_TYPEPACKAGE}
            />
          </label>

          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">
            Abreviatura tipo de paquete
            </span>
            <input
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Abreviatura tipo de paquete"
              name="ABBRE_TYPEPACKAGE"
              onChange={handleChange}
              value={task.ABBRE_TYPEPACKAGE}
            />
          </label>
            
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">
            Precio tipo de paquete
            </span>
            <input
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Abreviatura tipo de paquete"
              name="PREC_TYPEPACKAGE"
              onChange={handleChange}
              value={task.PREC_TYPEPACKAGE}
            />
          </label>
    <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">Tipo de costo </span>
            <Select
              menuPlacement="auto"
              defaultValue={selectedServices}
              onChange={setSelectedServices}
              options={dataShippin}
              formatOptionLabel={(services) => (
                <div className="flex justify-between">
                  
                  <span>{services.NOM_METRICO}</span>
                </div>
              )}
            />
          </label>
      </div>
    <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
              <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">Descripción</span>
            <textarea
          cols="3"
          rows="3"
          onChange={handleChange}
          name="DES_TYPEPACKAGE"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          value={task.DES_TYPEPACKAGE}
        >
        </textarea>
          </label>
              
            </div>
   
      </Dialog>
        </>
        
    );
};
