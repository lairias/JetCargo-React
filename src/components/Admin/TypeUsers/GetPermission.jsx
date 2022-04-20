import { SpinerLoader } from "../../Spinners/Loader";
import 'primeicons/primeicons.css';
import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { PickList } from 'primereact/picklist';
import { InputText } from 'primereact/inputtext';
import toast,{ Toaster} from "react-hot-toast";
import { fetchConToken } from "../../../util/fetch";

export default function GetPermission({DataPersmissionRol,DataPersmission,DataRol,COD_TYPEUSERS}){
const{permisos}=DataPersmission;//Todos
const [sednDatos, setsednDatos] = useState(false);

const{permisosDis}=DataPersmissionRol; //permisos rol


const [source, setSource] = useState([permisos]);
const [target, setTarget] = useState([]);
useEffect(() => {
  setSource(permisos)
  setTarget( permisosDis)

},[permisos,permisosDis])
const onChange = (event) => {
  setSource(event.source);
  setTarget(event.target);
}

const handleSubmit =(e)=>{
  e.preventDefault();
  if(source.length === 0 ){
    toast.error("El rol tiene que contener más de un permiso")
  }else if(task.NOM_TYPE === "" || task.NOM_TYPE === " " ||  
    task.DES_TYPE === "" ||  task.DES_TYPE === " " ){
      toast.error("Todos los datos son necesario")
  }else{
    const NewPermisos = new Array();
    source.forEach(item=>{
NewPermisos.push(item.COD_PERMISO);
    })

    fetchConToken(
      `roles/${COD_TYPEUSERS}`,
      {
        NOM_TYPE : task.NOM_TYPE
        , DES_TYPE : task.DES_TYPE
        
        , PERMISSION : NewPermisos, 
        TODO : false
         
      },
      "PUT"
    );
  }

}
  const itemTemplate = (item) => {
    return (
        <div className="product-item">
            
            <div className="product-list-detail">
                <i className="pi pi-ticket product-category-icon"></i>
                <span className="product-category">{item.DES_PERMISOS} - {item.NAM_PERMISOS}</span>
            </div>
            
        </div>
    );
}
const [task, setTask] = useState({
  COD_TYPEUSERS: DataRol.COD_TYPEUSERS,
DAT_ADD:DataRol.DAT_ADD,
DAT_UPD: DataRol.DAT_UPD,
DES_TYPE:DataRol.DES_TYPE,
NOM_TYPE: DataRol.NOM_TYPE,
USR_ADD: DataRol.USR_ADD,
USR_UPD: DataRol.USR_UPD,
});
const handleChange = (e) =>
setTask({ ...task, [e.target.name]: e.target.value });



  return (
    <>
    <Toaster/>
    <div className="flex justify-between">
    <h2 className="my-6 text-2xl font-semibold text-gray-700">
      Tracking Residido
    </h2>
  </div>
  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-20 pb-10 py-5 shadow-xl rounded-lg ">
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
    <div className="flex items-center justify-around mt-9">
            <button className="px-6 py-3 bg-gray-400 hover:bg-gray-500 shadow rounded text-sm text-white">
              Cancelar
            </button>
            <button
              onClick={handleSubmit}
              disabled={sednDatos}
              className="px-6 py-3 bg-indigo-700  shadow rounded text-sm text-white"
            >
              {sednDatos ? <SpinnerButton /> : " Guardar"}
            </button>
          </div>
    </div>
    </>
    
);
}

