import { useEffect, useState } from "react";
import { AiFillSetting } from "react-icons/Ai";
import ModalEditNewTrackingPendiente from "../../Modal/Reception/ModalEditNewTrackingPendiente";
import MUIDataTable from "mui-datatables";
import { useDispatch, useSelector } from "react-redux";
import { GetTrackingAll } from "../../../actions/trackingAction";
import { Fab } from "@mui/material";
import moment from "moment";
import SpinnerButton from "../../Spinners/SpinnerButton";
import { GetCustomerReception } from "../../../actions/receptionAction";

export const GetReceptionCountryAll = ({COD_TYPEPACKAGE,  RECEIVED_TRACKING }) => {
  const dispatch = useDispatch();
  
  let [isOpen, setIsOpen] = useState(false);
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

  const ShowModalPendiente = (data) => {
    dispatch(GetCustomerReception(
     dataTracking[data]));
    setIsOpen(!isOpen);
  };
  const ShowModalProgreso = (data) => {
    // set_dataNewModal(dataTracking[data.rowIndex]);
    // setIsOpen(!isOpen);
    alert("En proceso");
  };
  const ShowModalRecibido = (data) => {
    // set_dataNewModal(dataTracking[data.rowIndex]);
    // setIsOpen(!isOpen);
    alert("Recibido");
  };
  const ShowModalEntregado = (data) => {
    // set_dataNewModal(dataTracking[data.rowIndex]);
    // setIsOpen(!isOpen);
    alert("Entregado");
  };
  const ShowModalCancelado = (data) => {
    // set_dataNewModal(dataTracking[data.rowIndex]);
    // setIsOpen(!isOpen);
    alert("Cancelado");
  };

  const columns = [
    {
      name: "NUM_TRACKING",
      label: "Números de Tracking",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "SERVICE_CODE",
      label: "Compania servicio",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "DAT_ADD_TRACKING",
      label: "Fecha de registro",
      options: {
        filter: true,
        sort: true,
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
      },
    },
    {
      name: "Acciones",
      label: "Acciones",
      options: {
        filter: true,
        sort: false,

        customBodyRender: (data, dataIndex, rowIndex) => {
          return (
            <div>
              <Fab
                onClick={(_) => {
                  ShowModalPendiente(dataIndex.rowIndex);
                }}
                color="primary"
                size="small"
              >
                <AiFillSetting />
              </Fab>
            </div>
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
        title={"Lista de Trackings"}
        data={dataTracking}
        columns={columns}
        options={options}
        
      />
      {isOpen && (
        <ModalEditNewTrackingPendiente
          setIsOpen={ShowModalPendiente}
          COD_TYPEPACKAGE_data={COD_TYPEPACKAGE}
          RECEIVED_TRACKING_data={RECEIVED_TRACKING}
          setLoading={setLoading}
          set_dataTracking={set_dataTracking}
        />
      )}
    </>
  );
};
