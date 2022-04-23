
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpinnerButton from "../../components/Spinners/SpinnerButton";
import { Button } from 'primereact/button';
import ModalEditSeguridad from "../Modal/Seguridad/ModalEditSeguridad"
import moment from "moment";

import MUIDataTable from "mui-datatables";
import { useFetchToken } from "../../hooks/useFetch";

export const GetErrores = () => {
    const [DataSeguridad, loaadinSeguridad]= useFetchToken("errores")
  const [ShoModal,setShoModal] = useState(false)
  const [IdShoModal,setIdShoModal] = useState(false)
  /****************************************Variables State */
  /******************************************* */
console.log(DataSeguridad)
  /****************************************Variables Hooks*/
 
  const dispatch = useDispatch();
  useEffect(() => {
  }, [dispatch]);
  /******************************************* */
  const { permission } = useSelector((state) => state.auth);


  const columns = [
    
    {
      name: "COD_ERROR",
      label: "Codígo error",
      options: {
        filter: true,
        sort: true,
        display: false,
        empty: true,
      },
    },
    {
      name: "STATUS_ERROR",
      label: "Estado error",
      options: {
        filter: true,
        sort: true,
        empty: true,
      },
    },
    {
      name: "DES_ERROR",
      label: "Descripción error",
      options: {
        filter: true,
        sort: true,
        empty: true,
      },
    },
    {
      name: "HTTP_ERROR",
      label: "HTTP error",
      options: {
        filter: true,
        sort: true,
        empty: true,
      },
    },
  
    
    {
      name: "DAT_ADD_ERROR",
      label: "Fecha de registro",
      options: {
        filter: true,
        sort: true,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
            return (
                    moment(value).format('L') 
            );
        }
      },
    },
   
 
  ];

  const options = {
    filterType: "checkbox",
    fixedHeader: false,
    textLabels: {
      body: {
        noMatch:  'Datos no encontrados'
      }
    }
  };

     
  const handleShoModal = (e,_id) => {
    e.preventDefault();
    setIdShoModal(_id)
    setShoModal(!ShoModal)
}

  /****************************************Variables Funciones*/
  /******************************************* */
  return (
    <>
      <div>
        <div className="sm:px-6 ">
          <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
            {loaadinSeguridad ? (<MUIDataTable
        title={"Tabla de datos"}
        data={DataSeguridad}
        columns={columns}
        options={options}
        
      />) : ( <SpinnerButton />)}
          
          </div>
        </div>
      </div>

    </>
  );
};

