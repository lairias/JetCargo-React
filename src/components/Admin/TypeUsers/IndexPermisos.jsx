import { SelectDisplay } from "../Reception/SelectDisplay";
import TbodyTd from "./components/TbodyTd";
import { SpinerLoader } from "../../Spinners/Loader";
import MUIDataTable from "mui-datatables";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Startgetallpermission } from "../../../actions/permissionAction";
import { useState } from "react";
import { useFetchToken } from "../../../hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import GetPermission from "./GetPermission";

export default function IndexPermisos(){
    const {COD_TYPEUSERS} = useParams();
  
const [DataPersmissionRol, LoaddinPermissionRol]=useFetchToken(`roles/${COD_TYPEUSERS}`)
const [DataPersmission, LoaddinPermission]=useFetchToken(`permission`)
  return (
    <>
    {LoaddinPermissionRol && LoaddinPermission ?( <GetPermission  DataPersmissionRol={DataPersmissionRol}
DataPersmission={DataPersmission}/>
     ): <SpinerLoader/>}
   
    </>
  );
}

