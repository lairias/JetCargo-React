import { useEffect, useState } from "react";
import { AiFillSetting } from "react-icons/ai";
import MUIDataTable from "mui-datatables";
import { useDispatch, useSelector } from "react-redux";
import { GetTrackingAll } from "../../../actions/trackingAction";
import { Fab } from "@mui/material";
import moment from "moment";
import SpinnerButton from "../../Spinners/SpinnerButton";
import { GetCustomerReception } from "../../../actions/receptionAction";
import { NavLink } from "react-router-dom";
import {useParams} from "react-router-dom";

export const GetReceptionCountryAll = ({  RECEIVED_TRACKING }) => {
  const dispatch = useDispatch();
  const [dataTracking, set_dataTracking] = useState([]);
  const [Loading, setLoading] = useState(false);
  const { permission } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(
      GetTrackingAll(
        set_dataTracking,
        setLoading,
        `tracking/received/${RECEIVED_TRACKING}`
      )
    );
  }, [dispatch]);

  

  const columns = [
    
    {
      name: "COD_CUSTOMER",
      label: "Números de cliente",
      options: {
        filter: true,
        sort: true,
        display: false,
        empty: true,
      },
    },
    {
      name: "NUM_TRACKING",
      label: "Números de Tracking",
      options: {
        filter: true,
        sort: true,
        empty: true,
      },
    },
    {
      name: "SERVICE_CODE",
      label: "Compania servicio",
      options: {
        filter: true,
        sort: true,
        empty: true,
      },
    },
    {
      name: "DAT_ADD_TRACKING",
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
      name: "NAM_TYPEPACKAGE",
      label: "Entrega",
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
            <NavLink to={`edit/${tableMeta.rowData[0]}/${RECEIVED_TRACKING}/${tableMeta.rowData[1]}`}>
              <Fab
                
                color="primary"
                size="small"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </Fab>
            </NavLink>
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
        noMatch: Loading ?(<SpinnerButton />): 'Datos no encontrados',
      }
    }
  };

  return (
    <>
      <MUIDataTable
        title={"Tabla de datos"}
        data={dataTracking}
        columns={columns}
        options={options}
        
      />
     
    </>
  );
};
