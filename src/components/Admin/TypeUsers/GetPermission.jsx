import { SelectDisplay } from "../Reception/SelectDisplay";
import TbodyTd from "./components/TbodyTd";
import { SpinerLoader } from "../../Spinners/Loader";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Startgetallpermission } from "../../../actions/permissionAction";
import { useState } from "react";
import { useFetchToken } from "../../../hooks/useFetch";
import { Link, NavLink } from "react-router-dom";
import MUIDataTable from "mui-datatables";

import CardLtEdit from "./components/CardLtEdit";
export default function GetPermission({DataPersmissionRol,DataPersmission}){
const [selecChecked, setselectChecked] = useState([])
const{PermissionUser}=DataPersmission;

const{permisos}=DataPersmissionRol;

  const columns = [
    
    {
      name: "COD_PERMISO",
      label: "Codigó Permiso",
      options: {
        filter: true,
        sort: true,
        display: false,
        empty: true,
      },
    },
    {
      name: "DES_PERMISOS",
      label: "Descripcion permiso",
      options: {
        filter: true,
        sort: true,
        empty: true,
      },
    },
    {
      name: "NAM_PERMISOS",
      label: "Permiso",
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
             
                <input
                className="form-check-input appearance-none h-4 w-4 border border-sky-500 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
               
              />
            );
          },
        },
      },

  ];

 

  return (
    <>
                <MUIDataTable
      title={"Lista de Roles"}
      data={PermissionUser}
      columns={columns}
      
    />
                    {/* {PermissionUser.map((element) => (
                        <CardLtEdit
                          key={element.COD_PERMISO}
                          permisos={permisos}
                          element={element}
                          selecChecked={selecChecked}
                          setselectChecked={setselectChecked}
                        />
                      ))
                    } */}
             <div className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
              <button className="flex items-center justify-between  px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                Guardar cambios <span className="ml-2">+</span>
              </button>
              <button className="flex items-center justify-between  px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                Cancelar <span className="ml-2">+</span>
              </button>
            </div>
    </>
  );
}

