
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpinnerButton from "../Spinners/SpinnerButton";
import { Button } from 'primereact/button';
// import ModalEditSeguridad from "./ModalEditUsers"
import moment from "moment";

import MUIDataTable from "mui-datatables";
import { useFetchToken } from "../../hooks/useFetch";
import { ModalEditPais } from "./ModalEditPais";

export const GetCiudades = () => {
    const [DataSeguridad, loaadinSeguridad]= useFetchToken("cities/admin")
    console.log(DataSeguridad)
    const { permission } = useSelector((state) => state.auth);
  const [ShoModal,setShoModal] = useState(false)
  const [IdShoModal,setIdShoModal] = useState(false)
  /****************************************Variables State */
  /******************************************* */

  /****************************************Variables Hooks*/
  const dispatch = useDispatch();
  useEffect(() => {
  }, [dispatch]);
  /******************************************* */

  const columns = [
    
    {
      name: "COD_STATE",
      label: "Codígo pais",
      options: {
        filter: true,
        sort: true,
        display: false,
        empty: true,
      },
    },
    {
      name: "COD_CITY",
      label: "Codígo pais",
      options: {
        filter: true,
        sort: true,
        display: false,
        empty: true,
      },
    },
    {
      name: "COD_COUNTRY",
      label: "Codígo pais",
      options: {
        filter: true,
        sort: true,
        display: false,
        empty: true,
      },
    },
    {
      name: "NAM_CITY",
      label: "Nombre pais",
      options: {
        filter: true,
        sort: true,
        display: true,
        empty: true,
      },
    },
    {
      name: "ZIP_CODE",
      label: "Descripción pais",
      options: {
        filter: true,
        sort: true,
        empty: true,
      },
    },
    {
      name: "POS_CODE",
      label: "Area pais",
      options: {
        filter: true,
        sort: true,
        empty: true,
      },
    },
    {
      name: "POPULATION",
      label: "Area pais",
      options: {
        filter: true,
        sort: true,
        empty: true,
      },
    },
    {
      name: "CURRENCY",
      label: "Area pais",
      options: {
        filter: true,
        sort: true,
        empty: true,
      },
    },
    {
      name: "TIMEZONE",
      label: "Area pais",
      options: {
        filter: true,
        sort: true,
        empty: true,
      },
    },
  
    {
      name: "IND_CITY",
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
      name: "Acciones",
      label: "Acciones",
      options: {
        filter: true,
        sort: false,
        empty: true,
        customBodyRender: (data, tableMeta, rowIndex) => {

          return (
            permission.includes("locker.update") && (<Button   onClick={e=>{handleShoModal(e,tableMeta.rowData[0]); }} />)
            
           
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

      {ShoModal && <ModalEditPais handleShoModal={handleShoModal} IdShoModal={IdShoModal} />}
    </>
  );
};

