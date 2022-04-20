import { Dialog } from "primereact/dialog";
import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import toast, { Toaster } from "react-hot-toast";
import { fetchConToken } from "../../../util/fetch";
import Select from "react-select";
import { SelectArea } from "../../Register/Select/SelectArea";
import { CityService, CountryService, StateService } from "../../../service/ServiceDireciont";
import { SelectCountry } from "../../Register/Select/SelectCountry";
import { SelectState } from "../../Register/Select/SelectState";
import { SelectCity } from "../../Register/Select/SelectCity";
export const DialogoNewCasillero = ({ handleShoModal,  }) => {


  
 
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
      task.NUM_LOCKER === "" || task.NUM_LOCKER === " " ||
      task.ADDRES_LOCKER === "" || task.ADDRES_LOCKER === " " ||
      task.TEL_LOCKER === "" || task.TEL_LOCKER === " " ||
      task.TYP_LOCKER === "" || task.TYP_LOCKER === " " 
      ) {
      toast.error("Todos los datos son necesarios");
    } else {
      fetchConToken(
        `locker/admin`,
        {
    NUM_LOCKER: task.NUM_LOCKER,
    ADDRES_LOCKER: task.ADDRES_LOCKER,
    TEL_LOCKER: task.TEL_LOCKER,
    TYP_LOCKER: task.TYP_LOCKER,
 
        },
        "POST"
      );
      handleShoModal(e);
    }
  };
  const [task, setTask] = useState({
    NUM_LOCKER:"",
    ADDRES_LOCKER:"",
    TEL_LOCKER:"",
    TYP_LOCKER:""
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
              Número de casillero
            </span>
            <input
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Número de casillero"
              name="NUM_LOCKER"
              onChange={handleChange}
              value={task.NUM_LOCKER}
            />
          </label>
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">Dirección casillero</span>
            <textarea
          cols="3"
          rows="3"
          onChange={handleChange}
          name="ADDRES_LOCKER"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          value={task.ADDRES_LOCKER}
        >
        </textarea>
          </label>
</div>
        <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">
              Avenido casillero{" "}
            </span>
            <input
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Avenido casillero"
              name="TYP_LOCKER"
              onChange={handleChange}
              value={task.TYP_LOCKER}
            />
          </label>
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">
              Telefono casillero{" "}
            </span>
            <input
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Telefono casillero"
              name="TEL_LOCKER"
              onChange={handleChange}
              value={task.TEL_LOCKER}
            />
          </label>
         
         
        </div>
     
      </Dialog>
    </>
  );
};
