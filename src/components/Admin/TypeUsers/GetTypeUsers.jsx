import MUIDataTable from "mui-datatables";
import { Link } from "react-router-dom";
import SpinnerButton from "../../Spinners/SpinnerButton";
import ModalEditPermiso from "./ModalEditPermiso";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchConToken } from "../../../util/fetch";
export default function GetTypeUsers({shoModalIndex}) {
  const [shoModal1, set_shoModal1] = useState(false);

  const [Datarole, set_role] = useState();
  const [DataPermissionUser, set_PermissionUser] = useState();
  const [loaddinRoles, set_loaddinRoles] = useState(false);
  const [loaddindata, set_loaddindata] = useState(false);

  const handleShoModal1 = (e, id) => {
    e.preventDefault();
    set_idPermiso(id);
    set_shoModal1(!shoModal1);
  };
  const { permission } = useSelector((state) => state.auth);

  useEffect(() => {
    (async () => {
      const data = await fetchConToken("roles");
      const json = await data.json();
      set_role(json);
      set_loaddinRoles(true);
      const data1 = await fetchConToken("permission");
      const json1 = await data1.json();
      set_PermissionUser(json1);
      set_loaddindata(true);
    })();
  }, [shoModal1,shoModalIndex]);

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
            permission.includes("typeuser.update") && (
            <Link to={`edit/${tableMeta.rowData[0]}`}>
            
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </Link>)
          );
        },
      },
    },
  ];
  const columns2 = [
    
    {
      name: "COD_PERMISO",
      label: "Números de cliente",
      options: {
        filter: true,
        sort: true,
        display: false,
        empty: true,
      },
    },
    {
      name: "DES_PERMISOS",
      label: "Descripcion Permiso",
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
            permission.includes("permisos.update") && (
            <button onClick={e=>{handleShoModal1(e,tableMeta.rowData[0])}}>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </button>)
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
  const options2 = {
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
    { permission.includes("typeuser.view")  && (loaddinRoles  ? (<MUIDataTable
        title={"Lista de Roles"}
        data={Datarole.role}
        columns={columns}
        options={options}
        
      />) : (<SpinnerButton />)) }
      
      <div className="flex justify-between">
        <h2 className="my-6 text-2xl font-semibold text-gray-700">
          {" "}
          Permisos{" "}
        </h2>
       

     
      </div>

        { permission.includes("permisos.view") && (loaddindata ? (<MUIDataTable
        title={"Permisos descripción"}
        data={DataPermissionUser.PermissionUser}
        columns={columns2}
        options={options2}
        
      />): (<SpinnerButton />))}
      
      {shoModal1 ? <ModalEditPermiso handleShoModal1={handleShoModal1} IdPermiso={IdPermiso} /> : ""}
    </>
  );
}
