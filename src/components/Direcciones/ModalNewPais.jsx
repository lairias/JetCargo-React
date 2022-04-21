import { Dialog } from "primereact/dialog";
import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import toast, { Toaster } from "react-hot-toast";
import { fetchConToken } from "../../util/fetch";
export const ModalNewPais = ({ handleShoModal }) => {
  
 
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
      task.NAM_COUNTRY === "" || task.NAM_COUNTRY === " " ||
      task.DES_COUNTRY === "" || task.DES_COUNTRY === " " ||
      task.AREA_COUNTRY === "" || task.AREA_COUNTRY === " " 
      ) {
      toast.error("Todos los datos son necesarios");
    } else {
      fetchConToken(
        `country`,
        {
    NAM_COUNTRY: task.NAM_COUNTRY,
    DES_COUNTRY: task.DES_COUNTRY,
    AREA_COUNTRY: task.AREA_COUNTRY,
    USR_ADD: "sistema",
        },
        "POST"
      );
      handleShoModal(e);
    }
  };
  const [task, setTask] = useState({
    NAM_COUNTRY:"",
    DES_COUNTRY:"",
    AREA_COUNTRY:"",
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
              Nombre país
            </span>
            <input
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Nombre país"
              name="NAM_COUNTRY"
              onChange={handleChange}
              value={task.NAM_COUNTRY}
            />
          </label>
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">
              Area de país{" "}
            </span>
            <input
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Area de país"
              name="AREA_COUNTRY"
              onChange={handleChange}
              value={task.AREA_COUNTRY}
            />
          </label>
         
</div>
        <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
        <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">Dirección país</span>
            <textarea
          cols="3"
          rows="3"
          onChange={handleChange}
          name="DES_COUNTRY"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          value={task.DES_COUNTRY}
        >
        </textarea>
          </label>
         
        </div>
     
      </Dialog>
    </>
  );
};
