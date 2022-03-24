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
    dispatch(GetTrackingAll(set_dataTracking,setLoading,`tracking/${COD_TYPEPACKAGE}/${RECEIVED_TRACKING}`))
  }, [dispatch]);

  
  const ShowModal = (data ) => {
    // set_dataNewModal(data.tracking);
    // setIsOpen(!isOpen);
    console.log(data);
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
     }
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
     }
    },
    {
     name: "Acciones",
     label: "Acciones",
     options : {
      filter: true,
      sort: false,
      customBodyRender : (data) => {
        return (
<svg  onClick={(_) => {
          ShowModal(data);
        }} class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
        )

      },
      customBodyRenderLiteral : (data) => {
        return (
          <div>
            <Fab
              onClick={(_) => {
                ShowModal(data.columnIndex);
              }}
              color="primary"
              size="small"
            >
              <AiFillSetting />
            </Fab>
          </div>
        )
      }
    }
     
    },
   ];
   
   
   
   const options = {
     filterType: 'checkbox',
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
          COD_TYPEPACKAGE_data ={COD_TYPEPACKAGE}
           RECEIVED_TRACKING_data ={RECEIVED_TRACKING}
           setLoading={setLoading}
           set_dataTracking={set_dataTracking}
        />
      )}
    </>
  )

  // const onGlobalFilterChange = (e) => {
  //   const value = e.target.value;
  //   let _filters = { ...filters };
  //   _filters["global"].value = value;
  //   setFilters(_filters);
  //   setGlobalFilterValue(value);
  // };

  // const renderHeader = () => {
  //   return (
  //     <div className="flex justify-end items-center">
  //       <h5 className="m-0 px-2">Search</h5>
  //       <span className="p-input-icon-left">
  //         <i className="pi pi-search" />
  //         <InputText
  //           value={globalFilterValue}
  //           onChange={onGlobalFilterChange}
  //           placeholder="Keyword Search"
  //         />
  //       </span>
  //     </div>
  //   );
  // };

  // const ServiceBodyTemplate = (rowData) => {
  //   return (
  //     <>
  //       <img
  //         alt="flag"
  //         src={rowData.SERVICE_LOGO}
  //         onError={(e) =>
  //           (e.target.src =
  //             "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
  //         }
  //         width={30}
  //       />
  //       <span className="image-text">{rowData.SERVICE_CODE}</span>
  //     </>
  //   );
  // };

  // const actionBodyTemplate = (data) => {
  //   return (
  //     <Button
  //       onClick={(_) => {
  //         ShowModal(data);
  //       }}
  //       type="button"
  //     >
  //       <AiFillSetting />
  //     </Button>
  //   );
  // };
  // const header = renderHeader();
  
  // const statusItemTemplate = (rowData) => {
  //   return <span className={`customer-badge status-new`}>{rowData.RECEIVED_TRACKING} </span>;
  // };

  // return (
  //   <>
  //     <div className="datatable-doc-demo">
  //       <div className="card">
  //         <DataTable
  //           value={dataTracking}
  //           paginator
  //           className="p-datatable-customers"
  //           header={header}
  //           rows={10}
  //           paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
  //           rowsPerPageOptions={[10, 25, 50]}
  //           dataKey="COD_TRACKING"
  //           rowHover
  //           selection={selectedCustomers}
  //           onSelectionChange={(e) => setSelectedCustomers(e.value)}
  //           filters={filters}
  //           filterDisplay="menu"
  //           loading={Loading}
  //           responsiveLayout="scroll"
  //           globalFilterFields={["COD_TRACKING", "SERVICE_CODE"]}
  //           emptyMessage="No customers found."
  //           currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
  //         >
  //           <Column
  //             selectionMode="multiple"
  //             headerStyle={{ width: "3em" }}
  //           ></Column>
  //           <Column
  //             field="NUM_TRACKING"
  //             header="Número de Tracking"
  //             sortable filter filterPlaceholder="Search by name" 
  //           />
  //           <Column
  //             field="SERVICE_CODE"
  //             header="Servicio"
  //             sortable
  //             filter
  //             style={{ minWidth: "14rem" }}
  //             body={ServiceBodyTemplate}
  //           />
  //           <Column
  //             field="DAT_ADD_TRACKING"
  //             header="Servicio"
  //             sortable
  //             filter
  //             style={{ minWidth: "14rem" }}
  //           />
  //           <Column
  //             field="Estado"
  //             header="Status"
  //             sortable
  //             filterMenuStyle={{ width: "14rem" }}
  //             style={{ minWidth: "10rem" }}
  //             body={statusItemTemplate}
  //             filter
  //           />

  //           <Column
  //             headerStyle={{ width: "4rem", textAlign: "center" }}
  //             bodyStyle={{ textAlign: "center", overflow: "visible" }}
  //             body={actionBodyTemplate}
  //           />
  //         </DataTable>
  //       </div>
  //     </div>
  //     
  //   </>
  // );
};
