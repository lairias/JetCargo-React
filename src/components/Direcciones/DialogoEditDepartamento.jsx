import { Dialog } from "primereact/dialog";
import { useState } from "react";
import { Button } from "primereact/button";
import toast, { Toaster } from "react-hot-toast";
import { fetchConToken } from "../../util/fetch";
export const DialogoEditDepartamento = ({
  handleShoModal,
  dataPais,
  dataDepartamneto,
}) => {
  const estadoArray = [
    {
      value: true,
      date: "Activo",
    },
    {
      value: false,
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
      task.COD_COUNTRY === "" ||
      task.COD_COUNTRY === " " ||
      task.NAM_STATE === "" ||
      task.NAM_STATE === " " ||
      task.DES_STATE === "" ||
      task.DES_STATE === " " ||
      task.IND_STATE === "" ||
      task.IND_STATE === " "
    ) {
      toast.error("Todos los datos son necesarios");
    } else {
      fetchConToken(
        `states/${task.COD_STATE}`,
        {
          COD_COUNTRY: task.COD_COUNTRY,
          NAM_STATE: task.NAM_STATE,
          DES_STATE: task.DES_STATE,
          IND_STATE: task.IND_STATE,
          USR_UPD: "sistema",
        },
        "PUT"
      );
      handleShoModal(e);
    }
  };
  const [task, setTask] = useState({
    COD_STATE: dataPais.COD_STATE,
    COD_COUNTRY: dataPais.COD_COUNTRY,
    NAM_STATE: dataPais.NAM_STATE,
    DES_STATE: dataPais.DES_STATE,
    IND_STATE: dataPais.IND_STATE,
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
              name="NAM_STATE"
              onChange={handleChange}
              value={task.NAM_STATE}
            />
          </label>

          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">Estado</span>
            <select
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Tipo de envio  tracking"
              name="IND_STATE"
              onChange={handleChange}
              value={task.IND_STATE}
            >
              {estadoArray.map((item, index) => (
                <option
                  key={index}
                  defaultValue={task.IND_STATE === item.value}
                  value={item.value}
                >
                  {item.date}
                </option>
              ))}
            </select>
          </label>
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">Estado</span>
            <select
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Tipo de envio  tracking"
              name="COD_COUNTRY"
              onChange={handleChange}
              value={task.COD_COUNTRY}
            >
              {dataDepartamneto.map((item, index) => (
                <option
                  key={index}
                  defaultValue={task.COD_COUNTRY === item.COD_COUNTRY}
                  value={item.COD_COUNTRY}
                >
                  {item.NAM_COUNTRY}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">
              Dirección país
            </span>
            <textarea
              cols="3"
              rows="3"
              onChange={handleChange}
              name="DES_STATE"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              value={task.DES_STATE}
            ></textarea>
          </label>
        </div>
      </Dialog>
    </>
  );
};
