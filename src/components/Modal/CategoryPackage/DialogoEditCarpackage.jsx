import { Dialog } from 'primereact/dialog';
import { useState } from 'react';
import { Button } from "primereact/button";
import toast,{ Toaster} from 'react-hot-toast';
import { fetchConToken } from '../../../util/fetch';

export const DialogoEditCarpackage = ({ handleShoModal,dataCategory,id}) => {
    
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
                <Button label="No" icon="pi pi-times" onClick={handleShoModal} className="p-button-text" />
                <Button label="Yes" icon="pi pi-check" onClick={(e) => {handleSubmit(e); } } autoFocus />
            </div>
        );
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(task.DESCRIPCION === "" || task.DESCRIPCION === " "){
            toast.error("Todos los datos son necesarios")
        }else{
            fetchConToken(
                `catpackage/${id}`,
                {
                  DES_CATPACKAGE:task.DESCRIPCION,
                  IND_CATPACKAGE:task.IND_CATPACKAGE
                },
                "PUT"
              );
            handleShoModal(e);
        }
    }
    const [task, setTask] = useState({
       DESCRIPCION:dataCategory.NAM_CATPACKAGE,
       IND_CATPACKAGE:dataCategory.IND_CATPACKAGE
      });
      const handleChange = (e) =>
      setTask({ ...task, [e.target.name]: e.target.value });
      return(<>
      <Toaster/>
      
    <Dialog header="Editar Categoria de paquetes" visible={handleShoModal} style={{ width: '50vw' }} footer={renderFooter('displayBasic2')} onHide={handleShoModal}>
    <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
     
        <label className="block mt-4 text-sm w-full md:px-2">
          <span className="text-gray-700 dark:text-gray-900">
            Nombre Categoria de Paquetes
          </span>
          <input
            className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Categoria de Paquetes"
            name="DESCRIPCION"
            onChange={handleChange}
            value={task.DESCRIPCION}
          />
        </label>
        <label className="block mt-4 text-sm w-full md:px-2">
              <span className="text-gray-700 dark:text-gray-900">
                Estado Caegoria
              </span>
              <select
                className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Tipo de envio  tracking"
                name="IND_CATPACKAGE"
                onChange={handleChange}
                value={task.IND_CATPACKAGE}
              >
                {estadoArray.map((item, index) => (
                  <option
                    key={index}
                    defaultValue={task.IND_CATPACKAGE === item.value}
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

      )
}
