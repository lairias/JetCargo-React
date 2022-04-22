import { Dialog } from "primereact/dialog";
import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import toast, { Toaster } from "react-hot-toast";
import Select from "react-select";

import { fetchConToken } from "../../util/fetch";
export const DialogoNewCiudad = ({ handleShoModal,DataState,DataCountry }) => {
    const [selectedState, setSelectedState] = useState();
    const [selectedCountry, setSelectedCountry] = useState();
 
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
    NAM_CITY:"",
    ZIP_CODE:"",
    POS_CODE:"",
    POPULATION:"",
    CURRENCY:"",
    TIMEZONE:"",
    DES_CITY:"",
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
              Nombre de ciudad
            </span>
            <input
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Nombre país"
              name="NAM_CITY"
              onChange={handleChange}
              value={task.NAM_CITY}
            />
          </label>
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">Departamento </span>
            <Select
              menuPlacement="auto"
              defaultValue={selectedState}
              onChange={setSelectedState}
              options={DataState}
              formatOptionLabel={(services) => (
                <div className="flex justify-between">
                  
                  <span>{services.NAM_STATE}</span>
                </div>
              )}
            />
          </label>
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">Codigo país </span>
            <Select
              menuPlacement="auto"
              defaultValue={selectedCountry}
              onChange={setSelectedCountry}
              options={DataCountry}
              formatOptionLabel={(services) => (
                <div className="flex justify-between">
                  
                  <span>{services.AREA_COUNTRY} - {services.NAM_COUNTRY}</span>
                </div>
              )}
            />
          </label>
          </div>
          <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">
              Codigo postal
            </span>
            <input
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Area de país"
              name="POS_CODE"
              onChange={handleChange}
              value={task.POS_CODE}
            />
          </label>
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">
              Población
            </span>
            <input
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Area de país"
              name="POPULATION"
              onChange={handleChange}
              value={task.POPULATION}
            />
          </label>
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">
              Moneda
            </span>
            <input
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Area de país"
              name="CURRENCY"
              onChange={handleChange}
              value={task.CURRENCY}
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
          name="DES_CITY"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          value={task.DES_CITY}
        >
        </textarea>
          </label>
         
        </div>
     
      </Dialog>
    </>
  );
};
