import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpinnerButton from "../../Spinners/SpinnerButton";
import { Button } from "primereact/button";
import moment from "moment";

import MUIDataTable from "mui-datatables";
import ModalEditCosto from "./ModalEditCosto";
import ModalNewCobros from "./ModalNewCobros";
import ModalEditCobros from "./ModalEditCobros";
import { fetchConToken } from "../../../util/fetch";

export const GetCostos = ({shoModalIndex}) => {
  const [DataType, settypePackage]= useState();
  const [loaadinSeguridad, setloaadinSeguridad]= useState(false);
  const [DataShipin, setshipin]= useState();
  const [loaadinShipin, setloaadinShipin]= useState(false);
  const { permission } = useSelector((state) => state.auth);

  const [ShoModal, setShoModal] = useState(false);
  const [ShoModal1, setShoModal1] = useState(false);
  const [ShoModal2, setShoModal2] = useState(false);
  const [IdShoModal, setIdShoModal] = useState(false);
  const [IdShoModal2, setIdShoModal2] = useState(false);
  const [IdShoModalCustomer, setIdShoModalCustomer] = useState(false);


    useEffect(() => {
      (async () => {
        
        const data1 = await fetchConToken("typepackage");
        const json1 = await data1.json();
        settypePackage(json1);
        setloaadinSeguridad(true);
        const data2 = await fetchConToken("shippingcost");
        const json2 = await data2.json();
        setshipin(json2);
        setloaadinShipin(true);

      })();
    }, [ShoModal,ShoModal1,ShoModal2,IdShoModal2,IdShoModalCustomer,shoModalIndex]);
  /****************************************Variables State */
  /******************************************* */
  /****************************************Variables Hooks*/
  const dispatch = useDispatch();
  useEffect(() => {}, [dispatch]);
  /******************************************* */
  const columns1 = [
    {
      name: "COD_SHIPPINGCOST",
      label: "Codígo tipo de cobro",
      options: {
        filter: true,
        sort: true,
        display: false,
        empty: true,
      },
    },
    {
      name: "NOM_METRICO",
      label: "Nombre",
      options: {
        filter: true,
        sort: true,
        display: true,
        empty: true,
      },
    },
    {
      name: "DATA_METRICO",
      label: "Nombre",
      options: {
        filter: true,
        sort: true,
        display: true,
        empty: true,
      },
    },
    {
      name: "DES_METRICO",
      label: "Abreviatura",
      options: {
        filter: true,
        sort: true,
        empty: true,
      },
    },
    {
      name: "SPAN_METRICO",
      label: "Descripción",
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
            permission.includes("shipping.update") && (
              <Button
                onClick={(e) => {
                  handleShoModal2(tableMeta.rowData[0]);
                }}
              />
            )
          );
        },
      },
    },
  ];

  const options2 = {
    filterType: "checkbox",
    fixedHeader: false,
    textLabels: {
      body: {
        noMatch: "Datos no encontrados",
      },
    },
  };

  const columns = [
    {
      name: "COD_TYPEPACKAGE",
      label: "Codígo tipo de cobro",
      options: {
        filter: true,
        sort: true,
        display: false,
        empty: true,
      },
    },
    {
      name: "COD_SHIPPINGCOST",
      label: "Codígo cobro",
      options: {
        filter: true,
        sort: true,
        display: false,
        empty: true,
      },
    },
    {
      name: "NAM_TYPEPACKAGE",
      label: "Nombre",
      options: {
        filter: true,
        sort: true,
        display: true,
        empty: true,
      },
    },
    {
      name: "ABBRE_TYPEPACKAGE",
      label: "Abreviatura",
      options: {
        filter: true,
        sort: true,
        empty: true,
      },
    },
    {
      name: "DES_TYPEPACKAGE",
      label: "Descripción",
      options: {
        filter: true,
        sort: true,
        empty: true,
      },
    },
    {
      name: "PREC_TYPEPACKAGE",
      label: "Precio",
      options: {
        filter: true,
        sort: true,
        empty: true,
      },
    },
    {
      name: "IND_TYPEPACKAGE",
      label: "Estado",
      options: {
        filter: true,
        sort: true,
        empty: true,
        customBodyRender: (data, tableMeta, rowIndex) => {
          return data ? (
            <div className="bg-green-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
              <div className="flex items-center">
                <div className="h-1 w-1 rounded-full bg-green-500 mr-1" />
                <span className="text-xs text-green-500 font-normal">
                  Activo
                </span>
              </div>
            </div>
          ) : (
            <div className="bg-red-200 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
              <div className="flex items-center">
                <div className="h-1 w-1 rounded-full bg-red-500 mr-1" />
                <span className="text-xs text-red-500 font-normal">
                  Inactivo
                </span>
              </div>
            </div>
          );
        },
      },
    },
    {
      name: "DAT_ADD",
      label: "Fecha de registro",
      options: {
        filter: true,
        sort: true,
        empty: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return moment(value).format("L");
        },
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
            permission.includes("shipping.update") && (
              <Button
                onClick={(e) => {
                  handleShoModal( tableMeta.rowData[0], tableMeta.rowData[1]);
                }}
              />
            )
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
        noMatch: "Datos no encontrados",
      },
    },
  };

  const handleShoModal = ( _id, customers) => {
    setIdShoModal(_id);
    console.log(customers, "customers");
    setIdShoModalCustomer(customers);
    setShoModal(!ShoModal);
  };
  const handleShoModal1 = (e) => {
    e.preventDefault();
    setShoModal1(!ShoModal1);
  };
  const handleShoModal2 = (id) => {
    setShoModal2(!ShoModal2);
    setIdShoModal2(id);
  };

  return (
    <>
      <div>
        <div className="sm:px-6 ">
          <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
            {loaadinSeguridad ? (
              <MUIDataTable
                title={"Tipos de paquetes"}
                data={DataType.typePackage}
                columns={columns}
                options={options}
              />
            ) : (
              <SpinnerButton />
            )}
          </div>
          <div className="flex justify-between">
            <h2 className="my-6 text-2xl font-semibold text-gray-700">
              {" "}
              Tipos de Cobros de paquetes{" "}
            </h2>
            <div className=" my-6">
              {permission.includes("shipping.crear") && (
                <button
                  onClick={handleShoModal1}
                  className="flex items-center justify-between  px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                >
                  Nuevo costo de envio <span className="ml-2">+</span>
                </button>
              )}
            </div>
            {ShoModal1 && <ModalNewCobros handleShoModal1={handleShoModal1} />}
          </div>
          <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
            {loaadinShipin ? (
              <MUIDataTable
                title={"Tipos de paquetes"}
                data={DataShipin.shipin}
                columns={columns1}
                options={options2}
              />
            ) : (
              <SpinnerButton />
            )}
          </div>
        </div>
      </div>
      {ShoModal && (<ModalEditCobros
          handleShoModal={handleShoModal}
          IdShoModal={IdShoModal}
          IdShoModalCustomer={IdShoModalCustomer}
        />)}
      {ShoModal2 && (
        <ModalEditCosto
          handleShoModal2={handleShoModal2}
          IdShoModal2={IdShoModal2}
        />
      )}
    </>
  );
};
