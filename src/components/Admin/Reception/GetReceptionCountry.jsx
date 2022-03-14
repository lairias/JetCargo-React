import { useEffect, useState } from "react";
import { SelectDisplay } from "./SelectDisplay";
import PaginationTable from "./PaginationTable";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetTrackingAll } from "../../../actions/trackingAction";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";


export const GetReceptionCountry = () => {
///**************************Variables de State */
    const [totalRecords, setTotalRecords] = useState(0);
    const [selectAll, setSelectAll] = useState(false);
    const [selectedCustomers, setSelectedCustomers] = useState(null);
///**********************************************/
///**************************Variables de Hoosk */
const dispatch = useDispatch();

useEffect(() => {
  dispatch(GetTrackingAll())
} , [dispatch]);
const {AllTracking,StarSearcTrackingServiceStatus} = useSelector(state => state.tracking); 
///**********************************************/
///***********************Variables de Funciones*/
///**********************************************/
///*************************************Consola */
///**********************************************/

const onPage = (event) => {
  setLazyParams(event);
}

const onSort = (event) => {
  setLazyParams(event);
}

const onFilter = (event) => {
  event['first'] = 0;
  setLazyParams(event);
}

const onSelectionChange = (event) => {
  const value = event.value;
  setSelectedCustomers(value);
  setSelectAll(value.length === totalRecords);
}

const onSelectAllChange = (event) => {
  const selectAll = event.checked;

  if (selectAll) {
      customerService.getCustomers().then(data => {
          setSelectAll(true);
          setSelectedCustomers(data.customers);
      });
  }
  else {
      setSelectAll(false);
      setSelectedCustomers([]);
  }
}

const representativeBodyTemplate = (rowData) => {
  return (
      <React.Fragment>
          <img alt={rowData.representative.name} src={`images/avatar/${rowData.representative.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} width={32} style={{ verticalAlign: 'middle' }} />
          <span className="image-text">{rowData.representative.name}</span>
      </React.Fragment>
  );
}

const countryBodyTemplate = (rowData) => {
  return (
      <React.Fragment>
          <img alt="flag" src="/images/flag/flag_placeholder.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} className={`flag flag-${rowData.country.code}`} width={30} />
          <span className="image-text">{rowData.country.name}</span>
      </React.Fragment>
  );
}

  return (
    <>
    <div>
            <div className="card">
                <DataTable value={AllTracking}  dataKey="COD_TRACKING"
                     responsiveLayout="scroll"
                     paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                     paginator
                     emptyMessage="No data found."
                     className="datatable-responsive"
                     currentPageReportTemplate="Showing {first} to {last} of {totalRecords} posts"
                     rows={10}>
                    <Column selectionMode="multiple" headerStyle={{ width: '3em' }}></Column>
                    <Column field="COD_TRACKING" header="Name"   filterPlaceholder="Search by name" />
                </DataTable>
            </div>
        </div>
    </>
  );
};
