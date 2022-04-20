
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpinnerButton from "../../components/Spinners/SpinnerButton";
import { Button } from 'primereact/button';
import ModalEditSeguridad from "../Modal/Seguridad/ModalEditSeguridad"
import moment from "moment";

import MUIDataTable from "mui-datatables";
import { useFetchToken } from "../../hooks/useFetch";

export const GetSeguridad = () => {
    const [DataSeguridad, loaadinSeguridad]= useFetchToken("seguridad")
  const [ShoModal,setShoModal] = useState(false)
  const [IdShoModal,setIdShoModal] = useState(false)
  /****************************************Variables State */
  /******************************************* */

  /****************************************Variables Hooks*/
 
  const dispatch = useDispatch();
  useEffect(() => {
  }, [dispatch]);
  /******************************************* */
  const { permission } = useSelector((state) => state.auth);


  const columns = [
    
    {
      name: "COD_SEGURIDAD",
      label: "Codígo seguridad",
      options: {
        filter: true,
        sort: true,
        display: false,
        empty: true,
      },
    },
    {
      name: "NAM_SEGURIDAD",
      label: "Nombre seguridad",
      options: {
        filter: true,
        sort: true,
        empty: true,
      },
    },
    {
      name: "DATO_SEGURIDAD",
      label: "Dato seguridad",
      options: {
        filter: true,
        sort: true,
        empty: true,
      },
    },
    {
      name: "DES_SEGURIDAD",
      label: "Descripción seguridad",
      options: {
        filter: true,
        sort: true,
        empty: true,
      },
    },
  
    
    {
      name: "DAT_ADD_CATPACKAGE",
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
            permission.includes("seguridad.update")  &&(<Button   onClick={e=>{handleShoModal(e,tableMeta.rowData[0]); }} />)
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

      {ShoModal && <ModalEditSeguridad handleShoModal={handleShoModal} IdShoModal={IdShoModal}/>}
    </>
  );
};

