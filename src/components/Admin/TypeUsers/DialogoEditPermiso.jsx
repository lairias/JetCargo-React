import { Dialog } from "primereact/dialog";
import { useEffect, useState } from "react";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";
import { PickList } from "primereact/picklist";
import { InputText } from "primereact/inputtext";
import toast, { Toaster } from "react-hot-toast";
import { fetchConToken } from "../../../util/fetch";
export const DialogoEditPermiso = ({
  handleShoModal,
  Datapermisos,
  IdPermiso,
}) => {
  const { PermissionUser } = Datapermisos;

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
      task.DES_PERMISOS === "" ||
      task.DES_PERMISOS === " " ||
      task.NAM_PERMISOS === "" ||
      task.NAM_PERMISOS === " " 
    ) {
      toast.error("Todos los datos son necesarios");
    } else {
      fetchConToken(
        `permission/${IdPermiso}`,
        {
          DES_PERMISOS: task.DES_PERMISOS,
        },
        "PUT"
      );
        handleShoModal(e);
    }
  };

  const [task, setTask] = useState({
    DES_PERMISOS: PermissionUser.DES_PERMISOS,
    NAM_PERMISOS: PermissionUser.NAM_PERMISOS,
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
            <span className="text-gray-700 dark:text-gray-900">Nombre rol</span>
            <InputText
              value={task.NAM_PERMISOS}
            />
          </label>
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">
              Descripción rol
            </span>
            <InputText
              name="DES_PERMISOS"
              onChange={handleChange}
              value={task.DES_PERMISOS}
            />
          </label>
        </div>
      </Dialog>
    </>
  );
};
