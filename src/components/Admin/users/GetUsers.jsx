
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpinnerButton from "../../Spinners/SpinnerButton";
import { Button } from 'primereact/button';
// import ModalEditSeguridad from "./ModalEditUsers"
import moment from "moment";

import MUIDataTable from "mui-datatables";
import { useFetchToken } from "../../../hooks/useFetch";
import ModalEditUsers from "./ModalEditUsers";

export const GetUsers = () => {
    const [DataSeguridad, loaadinSeguridad]= useFetchToken("users")
    const { permission } = useSelector((state) => state.auth);

  const [ShoModal,setShoModal] = useState(false)
  const [IdShoModal,setIdShoModal] = useState(false)
  const [IdShoModalCustomer,setIdShoModalCustomer] = useState(false)
  /****************************************Variables State */
  /******************************************* */

  /****************************************Variables Hooks*/
 
  const dispatch = useDispatch();
  useEffect(() => {
  }, [dispatch]);
  /******************************************* */


  const columns = [
    
    {
      name: "COD_USER",
      label: "Codígo usuarios",
      options: {
        filter: true,
        sort: true,
        display: false,
        empty: true,
      },
    },
    {
      name: "COD_CUSTOMER",
      label: "Codígo cliente",
      options: {
        filter: true,
        sort: true,
        display: false,
        empty: true,
      },
    },
    {
      name: "COD_PEOPLE",
      label: "Codígo persona",
      options: {
        filter: true,
        sort: true,
        display: false,
        empty: true,
      },
    },
    {
      name: "MIDDLENAME",
      label: "Primer nombre",
      options: {
        filter: true,
        sort: true,
        empty: true,
      },
    },
    {
      name: "FRISTNAME",
      label: "Segundo nombre",
      options: {
        filter: true,
        sort: true,
        empty: true,
      },
    },
    {
      name: "LASTNAME",
      label: "Apellido",
      options: {
        filter: true,
        sort: true,
        empty: true,
      },
    },
    {
      name: "EMAIL",
      label: "Correo electrónico",
      options: {
        filter: true,
        sort: true,
        empty: true,
      },
    },
    {
      name: "NOM_TYPE",
      label: "Perfil Rol",
      options: {
        filter: true,
        sort: true,
        empty: true,
      },
    },
    {
      name: "IND_USR",
      label: "Estado",
      options: {
        filter: true,
        sort: true,
        empty: true,
        customBodyRender: (data, tableMeta, rowIndex) => {
          return data  ? (
            <div className="bg-green-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
              <div className="flex items-center">
                <div className="h-1 w-1 rounded-full bg-green-500 mr-1" />
                <span className="text-xs text-green-500 font-normal">
                  Activo
                </span>
              </div>
            </div>
          ) : (
            <div className="bg-red-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
              <div className="flex items-center">
                <div className="h-1 w-1 rounded-full bg-red-500 mr-1" />
                <span className="text-xs text-red-500 font-normal">
                  Inactivo
                </span>
              </div>
            </div>
          ) 
        },
      },
    },
  
    
    {
      name: "DAT_ADD",
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
   
    {
      name: "Acciones",
      label: "Acciones",
      options: {
        filter: true,
        sort: false,
        empty: true,
        customBodyRender: (data, tableMeta, rowIndex) => {

          return (
            permission.includes("user.update") &&(
            <Button   onClick={e=>{handleShoModal(e,tableMeta.rowData[0],tableMeta.rowData[1] ); }} />)
           
          );
        },
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

     
  const handleShoModal = (e,_id,customers) => {
    e.preventDefault();
    setIdShoModal(_id)
    setIdShoModalCustomer(customers)
    setShoModal(!ShoModal)
}

const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
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

      {ShoModal && <ModalEditUsers handleShoModal={handleShoModal} IdShoModal={IdShoModal} IdShoModalCustomer={IdShoModalCustomer}/>}
    </>
  );
};

