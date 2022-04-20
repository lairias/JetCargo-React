import { Dialog } from "primereact/dialog";
import { useEffect, useState } from "react";
import 'primeicons/primeicons.css';
import { Button } from "primereact/button";
import { PickList } from 'primereact/picklist';
import { InputText } from 'primereact/inputtext';
import toast, { Toaster } from "react-hot-toast";
import { fetchConToken } from "../../../util/fetch";
export const DialogoNewRol = ({ handleShoModal,Datapermisos}) => {
const {PermissionUser} = Datapermisos;
const [source, setSource] = useState([]);
const [target, setTarget] = useState([]);
useEffect(() => {
    setSource(PermissionUser);
  },[PermissionUser])
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
  const onChange = (event) => {
    setSource(event.source);
    setTarget(event.target);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      task.NOM_TYPE === "" || task.NOM_TYPE === " " ||
      task.DES_TYPE === "" || task.DES_TYPE === " " || target.length === 0 
      ) {
      toast.error("Todos los datos son necesarios");
    } else {
         const NewPermisos = new Array();
         target.forEach(item=>{
NewPermisos.push(item.COD_PERMISO);
    })
      fetchConToken(
        `roles/admin`,
        {
        NOM_TYPE: task.NOM_TYPE,
        DES_TYPE: task.DES_TYPE,
        PERMISSION:NewPermisos
        },
        "POST"
      );
      handleShoModal(e);

    }
  };

  const [task, setTask] = useState({
    NOM_TYPE:"",
    DES_TYPE:"",
  });
  const itemTemplate = (item) => {
    return (
        <div className="product-item">
            
            <div className="product-list-detail">
                <i className="pi pi-ticket product-category-icon"></i>
                <span className="product-category"> {item.DES_PERMISOS}</span>
            </div>
            
        </div>
    );
}


  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });
    return (
        <>
        <Toaster/>
       

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
                  Nombre rol
                </span>
                <InputText id="alphanum" keyfilter="alphanum" name="NOM_TYPE"
                  onChange={handleChange}
                  value={task.NOM_TYPE} />
               
              </label>
              <label className="block mt-4 text-sm w-full md:px-2">
                <span className="text-gray-700 dark:text-gray-900">
                  Descripción rol
                </span>
                <InputText id="alphanum" keyfilter="alphanum" name="DES_TYPE"
                  onChange={handleChange}
                  value={task.DES_TYPE} />
               
              </label>
              
            </div>
        <div className="picklist-demo">
            <div className="card">
                <PickList source={source} target={target} itemTemplate={itemTemplate}
                    sourceHeader="Permisos actuales" targetHeader="Permisos disponibles"
                    sourceStyle={{ height: '342px' }} targetStyle={{ height: '342px' }}
                    onChange={onChange}></PickList>
            </div>
        </div>
      </Dialog>
        </>
        
    );
};
