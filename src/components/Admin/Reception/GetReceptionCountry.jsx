import { useEffect, useState } from "react";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { AiFillSetting } from "react-icons/Ai";
import ModalEditNewTrackingPendiente from "../../Modal/Reception/ModalEditNewTrackingPendiente";
import { useFetchToken } from "../../../hooks/useFetch";
import MUIDataTable from "mui-datatables";
import { useDispatch } from "react-redux";
import { GetTrackingAll } from "../../../actions/trackingAction";
import { Fab, Typography } from "@mui/material";

export const GetReceptionCountry = ({ COD_TYPEPACKAGE, RECEIVED_TRACKING }) => {
  const dispatch = useDispatch();
  let [isOpen, setIsOpen] = useState(false);
  const [dataNewModal, set_dataNewModal] = useState();
  const [selectedCustomers, setSelectedCustomers] = useState(null);
  const [dataTracking, set_dataTracking] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(
      GetTrackingAll(
        set_dataTracking,
        setLoading,
        `tracking/${COD_TYPEPACKAGE}/${RECEIVED_TRACKING}`
      )
    );
  }, [dispatch]);

  const ShowModal = (data) => {
    set_dataNewModal(dataTracking[data.rowIndex]);
    setIsOpen(!isOpen);
  };
  const columns = [
    {
      name: "NUM_TRACKING",
      label: "Name",

      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "SERVICE_CODE",
      label: "Company",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "DAT_ADD_TRACKING",
      label: "Acciones",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "RECEIVED_TRACKING",
      label: "State",
      options: {
        filter: true,
        sort: false,
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
                  ShowModal(dataIndex);
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
  };

  return (
    <>
      <MUIDataTable
        title={"Employee List"}
        data={dataTracking}
        columns={columns}
        options={options}

      />
      {isOpen && (
        <ModalEditNewTrackingPendiente
          setIsOpen={ShowModal}
          dataNewModal={dataNewModal}
          COD_TYPEPACKAGE_data={COD_TYPEPACKAGE}
          RECEIVED_TRACKING_data={RECEIVED_TRACKING}
          setLoading={setLoading}
          set_dataTracking={set_dataTracking}
        />
      )}
    </>
  );

  
};
