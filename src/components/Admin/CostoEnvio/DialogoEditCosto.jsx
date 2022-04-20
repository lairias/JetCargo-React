import { Dialog } from "primereact/dialog";
import {  useState } from "react";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import toast, { Toaster } from "react-hot-toast";
import { fetchConToken } from "../../../util/fetch";
export const DialogoEditCosto = ({dataCategory,handleShoModal2}) => {


  const renderFooter = (name) => {
    return (
      <div>
        <Button
          label="No"
          icon="pi pi-times"
          onClick={handleShoModal2}
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
      task.DES_PERMISOS === "" ||
      task.DES_PERMISOS === " " ||
      task.NAM_PERMISOS === "" ||
      task.NAM_PERMISOS === " " 
    ) {
      toast.error("Todos los datos son necesarios");
    } else {
      fetchConToken(
        `shopping/${dataCategory.COD_SHIPPINGCOST}`,
        {
          DATA_METRICO: task.DATA_METRICO,
          DES_METRICO: task.DES_METRICO,
          MIN_SHIPPINGCOST: task.MIN_SHIPPINGCOST,
          NOM_METRICO: task.NOM_METRICO,
          SPAN_METRICO: task.SPAN_METRICO,
        },
        "PUT"
      );
        handleShoModal2(e);
    }
  };

  const [task, setTask] = useState({
    COD_SHIPPINGCOST: dataCategory.COD_SHIPPINGCOST,
    DATA_METRICO: dataCategory.DATA_METRICO,
    DES_METRICO: dataCategory.DES_METRICO,
    MIN_SHIPPINGCOST: dataCategory.MIN_SHIPPINGCOST,
    NOM_METRICO: dataCategory.NOM_METRICO,
    SPAN_METRICO: dataCategory.SPAN_METRICO,
  });
  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });
  return (
    <>
      <Toaster />

      <Dialog
        header="Editar Categoria de paquetes"
        visible={handleShoModal2}
        style={{ width: "50vw" }}
        footer={renderFooter("displayBasic2")}
        onHide={handleShoModal2}
      >
        <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
    <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">
            Nombre de costo metrico
            </span>
            <input
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder=" Nombre de costo metrico "
              name="NOM_METRICO"
              onChange={handleChange}
              value={task.NOM_METRICO}
            />
          </label>
    <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">
            Dato de  costo metrico
            </span>
            <input
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder=" Dato de  costo metrico "
              name="DATA_METRICO"
              onChange={handleChange}
              value={task.DATA_METRICO}
            />
          </label>

          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">
            Minínimo de costo de envío
            </span>
            <input
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder=" Dato de  costo metrico "
              name="MIN_SHIPPINGCOST"
              onChange={handleChange}
              value={task.MIN_SHIPPINGCOST}
            />
          </label>
              </div>
              <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
              <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">Dirección</span>
            <textarea
          cols="3"
          rows="3"
          onChange={handleChange}
          name="DES_METRICO"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          value={task.DES_METRICO}
        >
        </textarea>
          </label>
              <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">Descripción extra</span>
            <textarea
          cols="3"
          rows="3"
          onChange={handleChange}
          name="SPAN_METRICO"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          value={task.SPAN_METRICO}
        >
        </textarea>
          </label>
              </div>
      </Dialog>
    </>
  );
};
