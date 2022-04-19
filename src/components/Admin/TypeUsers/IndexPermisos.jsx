import { SelectDisplay } from "../Reception/SelectDisplay";
import TbodyTd from "./components/TbodyTd";
import { SpinerLoader } from "../../Spinners/Loader";
import MUIDataTable from "mui-datatables";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPermissoRol, Startgetallpermission } from "../../../actions/permissionAction";
import { useState } from "react";
import { useFetchToken } from "../../../hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import GetPermission from "./GetPermission";

export default function IndexPermisos(){
    const {COD_TYPEUSERS} = useParams();
  
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(GetPermissoRol(COD_TYPEUSERS));
    }, [dispatch]);
const [DataPersmissionRol, LoaddinPermissionRol]=useFetchToken(`roles/disting/${COD_TYPEUSERS}`)
const [DataRol, LoaddinRol]=useFetchToken(`typeuser/${COD_TYPEUSERS}`)
const [DataPersmission, LoaddinPermission]=useFetchToken(`roles/${COD_TYPEUSERS}`)
  return (
    <>
    {LoaddinPermissionRol && LoaddinPermission && LoaddinRol ?( <GetPermission  DataPersmissionRol={DataPersmissionRol}
DataPersmission={DataPersmission} DataRol={DataRol} COD_TYPEUSERS={COD_TYPEUSERS}/>
     ): <SpinerLoader/>}
   
    </>
  );
}

