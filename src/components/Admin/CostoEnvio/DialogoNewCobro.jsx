import { Dialog } from "primereact/dialog";
import {  useState } from "react";
import 'primeicons/primeicons.css';
import { Button } from "primereact/button";
import toast, { Toaster } from "react-hot-toast";
import { fetchConToken } from "../../../util/fetch";
export const DialogoNewCobro = ({ handleShoModal1}) => {
const renderFooter = (name) => {
    return (
      <div>
        <Button
          label="No"
          icon="pi pi-times"
          onClick={handleShoModal1}
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
      task.NOM_METRICO === "" || task.NOM_METRICO === " " ||
      task.DATA_METRICO === "" || task.DATA_METRICO === " " ||
      task.SPAN_METRICO === "" || task.SPAN_METRICO === " " ||
      task.DES_METRICO === "" || task.DES_METRICO === " " ||
      task.MIN_SHIPPINGCOST === "" || task.MIN_SHIPPINGCOST === " " 
      ) {
      toast.error("Todos los datos son necesarios");
    } else {
      fetchConToken(
        `shopping`,
        {
        NOM_METRICO: task.NOM_METRICO,
        DATA_METRICO: task.DATA_METRICO,
        DES_METRICO: task.DES_METRICO,
        SPAN_METRICO: task.SPAN_METRICO,
        MIN_SHIPPINGCOST: task.MIN_SHIPPINGCOST,
        },
        "POST"
      );
      handleShoModal1(e);
    }
  };
  const [task, setTask] = useState({
    NOM_METRICO:"",
    DATA_METRICO:"",
    DES_METRICO:"",
    SPAN_METRICO:"",
    MIN_SHIPPINGCOST:"",
  });


  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });
    return (
        <>
        <Toaster/>
      <Dialog
        header="Nuevo costos metricos"
        visible={handleShoModal1}
        style={{ width: "50vw" }}
        footer={renderFooter("displayBasic2")}
        onHide={handleShoModal1}
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
            Min??nimo de costo de env??o
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
            <span className="text-gray-700 dark:text-gray-900">Direcci??n</span>
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
            <span className="text-gray-700 dark:text-gray-900">Descripci??n extra</span>
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
