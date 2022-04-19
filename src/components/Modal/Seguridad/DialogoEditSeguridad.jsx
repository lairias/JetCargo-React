import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import { Button } from "primereact/button";
import toast,{ Toaster} from 'react-hot-toast';
import { fetchConToken } from '../../../util/fetch';

export const DialogoEditSeguridad = ({ handleShoModal,dataCategory,id}) => {
    
   
    const renderFooter = (name) => {
        return (
            <div>
                <Button label="No" icon="pi pi-times" onClick={handleShoModal} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" onClick={(e) => {handleSubmit(e); } } autoFocus />
            </div>
        );
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(task.DES_SEGURIDAD === "" || task.NAM_SEGURIDAD === " "){
            toast.error("Todos los datos son necesarios")
        }else{
            fetchConToken(
                `seguridad/${id}`,
                {
                    DES_SEGURIDAD: task.DES_SEGURIDAD,
                    NAM_SEGURIDAD: task.NAM_SEGURIDAD,
                    DATO_SEGURIDAD: task.DATO_SEGURIDAD
                },
                "PUT"
              );
            handleShoModal(e);
        }
    }
    const [task, setTask] = useState({
DES_SEGURIDAD: dataCategory.DES_SEGURIDAD,
NAM_SEGURIDAD: dataCategory.NAM_SEGURIDAD,
DATO_SEGURIDAD: dataCategory.DATO_SEGURIDAD,
      });
      const handleChange = (e) =>
      setTask({ ...task, [e.target.name]: e.target.value });
      return(<>
      <Toaster/>
      
    <Dialog header="Editar Categoria de paquetes" visible={handleShoModal} style={{ width: '50vw' }} footer={renderFooter('displayBasic2')} onHide={handleShoModal}>
    <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
     
       
        <label className="block mt-4 text-sm w-full md:px-2">
          <span className="text-gray-700 dark:text-gray-900">
            Nombre seguridad
          </span>
          <input
            className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Descripción seguridad"
            name="NAM_SEGURIDAD"
            onChange={handleChange}
            value={task.NAM_SEGURIDAD}
          />
        </label>
        <label className="block mt-4 text-sm w-full md:px-2">
          <span className="text-gray-700 dark:text-gray-900">
              Descripción seguridad          </span>
          <input
            className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Descripción seguridad"
            name="DES_SEGURIDAD"
            onChange={handleChange}
            value={task.DES_SEGURIDAD}
          />
        </label>
        <label className="block mt-4 text-sm w-full md:px-2">
          <span className="text-gray-700 dark:text-gray-900">
            Dato seguridad
          </span>
          <input
            className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Dato seguridad"
            name="DATO_SEGURIDAD"
            onChange={handleChange}
            value={task.DATO_SEGURIDAD}
          />
        </label>
        
      </div>

              </Dialog>
      </>

      )
}
