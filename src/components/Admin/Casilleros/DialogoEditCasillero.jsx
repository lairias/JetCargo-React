import { Dialog } from "primereact/dialog";
import {useState } from "react";
import { Button } from "primereact/button";
import toast, { Toaster } from "react-hot-toast";
import { fetchConToken } from "../../../util/fetch";
import { SelectArea } from "../../Register/Select/SelectArea";
import { SelectCountry } from "../../Register/Select/SelectCountry";
import { SelectState } from "../../Register/Select/SelectState";
import { SelectCity } from "../../Register/Select/SelectCity";
export const DialogoEditCasillero = ({ handleShoModal, dataCategory, id }) => {

  ///*********************UseEfect***********************/
  const estadoArray = [
    {
      value: 1,
      date: "Activo",
    },
    {
      value: 0,
      date: "Inactivo",
    },
  ];

 
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
      task.NUM_LOCKER === "" ||
      task.NUM_LOCKER === " " ||
      task.ADDRES_LOCKER === "" ||
      task.ADDRES_LOCKER === " " ||
      task.TYP_LOCKER === "" ||
      task.TYP_LOCKER === " " 
    ) {
      toast.error("Todos los datos son necesarios");
    } else {
      fetchConToken(
        `locker/admin/${id}`,
        {
            NUM_LOCKER:task.NUM_LOCKER,
            IND_LOCKER: dataCategory.IND_LOCKER,
            ADDRES_LOCKER:task.ADDRES_LOCKER,
            TEL_LOCKER:task.TEL_LOCKER,
            TYP_LOCKER:task.TYP_LOCKER
        },
        "PUT"
      );
      handleShoModal(e);
    }
  };
  const [task, setTask] = useState({
    ADDRES_LOCKER:dataCategory.ADDRES_LOCKER,
    IND_LOCKER: dataCategory.IND_LOCKER,
    NUM_LOCKER: dataCategory.NUM_LOCKER,
    TEL_LOCKER: dataCategory.TEL_LOCKER,
    TYP_LOCKER: dataCategory.TYP_LOCKER
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
              Primer Nombre
            </span>
            <input
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Primer nombre"
              name="NUM_LOCKER"
              onChange={handleChange}
              value={task.NUM_LOCKER}
            />
          </label>
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">Dirección</span>
            <textarea
              cols="3"
              rows="3"
              onChange={handleChange}
              name="ADDRES_LOCKER"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              value={task.ADDRES_LOCKER}
            ></textarea>
          </label>
        </div>
          <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">
              Telefono casillero{" "}
            </span>
            <input
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Segundo Nombre"
              name="TEL_LOCKER"
              onChange={handleChange}
              value={task.TEL_LOCKER}
            />
          </label>
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
            <span className="text-gray-700 dark:text-gray-900">Estado</span>
            <select
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Tipo de envio  tracking"
              name="IND_LOCKER"
              onChange={handleChange}
              value={task.IND_LOCKER}
            >
              {estadoArray.map((item, index) => (
                <option
                  key={index}
                  defaultValue={task.IND_LOCKER === item.value}
                  value={item.value}
                >
                  {item.date}
                </option>
              ))}
            </select>
          </label>
        </div>

       
      </Dialog>
    </>
  );
};
