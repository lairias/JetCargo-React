import { Dialog } from "primereact/dialog";
import { useState } from "react";
import { Button } from "primereact/button";
import Select from "react-select";
import toast, { Toaster } from "react-hot-toast";
import { fetchConToken } from "../../util/fetch";
import { useFetchToken } from "../../hooks/useFetch";
import SpinnerButton from "../Spinners/SpinnerButton";
export const ModalNewDepartemento = ({ handleShoModal }) => {
const [DataSeguridad, loaadinSeguridad]= useFetchToken("country/admin")
const [selectedServices, setSelectedServices] = useState();
  const renderFooter = (name) => {
    return (
      <div>
        <Button
          label="No"
          icon="pi pi-times"
          onClick={handleShoModal}
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
      selectedServices.COD_COUNTRY === "" || selectedServices.COD_COUNTRY === " " ||
      task.NAM_STATE === "" || task.NAM_STATE === " " ||
      task.DES_STATE === "" || task.DES_STATE === " " 
      ) {
      toast.error("Todos los datos son necesarios");
    } else {
      fetchConToken(
        `states`,
        {
    COD_COUNTRY: selectedServices.COD_COUNTRY,
    NAM_STATE: task.NAM_STATE,
    DES_STATE: task.DES_STATE,
    USR_ADD: "sistema",
        },
        "POST"
      );
      handleShoModal(e);
    }
  };
  const [task, setTask] = useState({
    NAM_STATE:"",
    DES_STATE:"",
  });
  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });
  return (
    <>
      <Toaster />
      <Dialog
        header="Editar Categoria de paquetes"
        visible={handleShoModal}
        style={{ width: "50vw" }}
        footer={renderFooter("displayBasic2")}
        onHide={handleShoModal}
      >
        <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">
              Nombre departamento
            </span>
            <input
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Nombre país"
              name="NAM_STATE"
              onChange={handleChange}
              value={task.NAM_STATE}
            />
          </label>
         
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">País</span>
            {loaadinSeguridad ? ( <Select
              menuPlacement="auto"
              defaultValue={selectedServices}
              onChange={setSelectedServices}
              options={DataSeguridad}
              formatOptionLabel={(services) => (
                <div className="flex justify-between">
                  
                  <span>{services.NAM_COUNTRY}</span>
                </div>
              )}
            />):(<SpinnerButton />)}
           
          </label>
         
</div>
        <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
        <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">Dirección país</span>
            <textarea
          cols="3"
          rows="3"
          onChange={handleChange}
          name="DES_STATE"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          value={task.DES_STATE}
        >
        </textarea>
          </label>
         
        </div>
     
       
      </Dialog>
    </>
  );
};
