import { SelectDisplay } from "../Reception/SelectDisplay";
import TbodyTd from "./components/TbodyTd";
import { SpinerLoader } from "../../Spinners/Loader";
import MUIDataTable from "mui-datatables";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Startgetallpermission } from "../../../actions/permissionAction";
import { useState } from "react";
import { useFetchToken } from "../../../hooks/useFetch";
import { Link, NavLink } from "react-router-dom";

export default function GetTypeUsers() {
  


 const [{ok,role},loaddinRoles] = useFetchToken("roles")
  

  //
  const columns = [
    
    {
      name: "COD_TYPEUSERS",
      label: "Números de cliente",
      options: {
        filter: true,
        sort: true,
        display: false,
        empty: true,
      },
    },
    {
      name: "NOM_TYPE",
      label: "Nombre rol",
      options: {
        filter: true,
        sort: true,
        empty: true,
      },
    },
    {
      name: "TODO",
      label: "Cantidad Permisos",
      options: {
        filter: true,
        sort: true,
        empty: true,
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
            <Link to={`edit/${tableMeta.rowData[0]}`}>
            
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </Link>
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
        noMatch:'Datos no encontrados',
      }
    }
  };

  return (
    <>
      <MUIDataTable
        title={"Lista de Roles"}
        data={role}
        columns={columns}
        options={options}
        
      />
     
    </>
  );
}
