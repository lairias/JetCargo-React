
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetAllCategoryPackage } from "../../../actions/categorypackageAction";
import { GetAllservices } from "../../../actions/serviceAction";
import { GetAllTypePackage } from "../../../actions/typepackageAction";
import { GetCustomerReception } from "../../../actions/receptionAction";
import { useFetchToken } from "../../../hooks/useFetch";
import SpinnerButton from "../../Spinners/SpinnerButton";
import toast from "react-hot-toast";
import { Message } from "primereact/message";
import { Checkbox } from "primereact/checkbox";
import { StartTrackingRecived } from "../../../actions/trackingAction";
export default function Received({
  COD_COUNTRY,
  COD_CUSTOMER,
  RECEIVED_TRACKING,
  NUM_TRACKING,
}) {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [sednDatos, setsednDatos] = useState(false);
  const [shoMensajevolumetrico, setshoMensajevolumetrico] = useState(false);
  const [shoMensajeDolares, setshoMensajeDolares] = useState(false);
  const { services, loadingServices } = useSelector((state) => state.services);
  const [calculoDolares, setCaluloDolares] = useState(0);
  const [calculoLempiras, setCaluloLempiras] = useState(0);
  const [caculuVolumetrico, setCalculovolumetrico] = useState(0);
  const { TypePackage, loadingTypePackage } = useSelector(
    (state) => state.typepackage
  );
  const [Dataseguridad, statusSeguridad] = useFetchToken(`seguridad/9`);
  const selectStatusTracking = [
    { value: "PENDING" },
    { value: "RECEIVED" },
    { value: "CANCELED" },
  ];
  const { categoryPackage, loading } = useSelector(
    (state) => state.categorypackage
  );

  const [task, setTask] = useState({
    HEIGHT_PACKAGE: "",
    WIDTH_PACKAGE: "",
    WEIGHT_PACKAGE: "",
    VOL_PACKAGE: "",
    SERVICE_NAME: "",
    NOM_PACKAGE: "",
    COD_CATPACKAGE: "",
    NUM_TRACKING_: "",
    COD_SERVICE: "",
    RECEIVED_TRACKING_: "",
    DES_TRACKING: "",
    COD_TYPEPACKAGE: "",
    COD_TRACKING: "",
    PRICE_PACKAGE: "",
    IND_TRACKING: "",
    COD_PACKAGE: "",
    COD_SECTION: "",
    COD_SHIPPINGCOST: "",
    ALTURA_PACKAGE: "",
    ANCHO_PACKAGE: "",
    LARGO_PACKAGE: "",
    DATOS_METRICOS: "",
  });
  const [Precio, statusServicio] = useFetchToken(
    `typepackage/${task.COD_TYPEPACKAGE}`
  );

  const [Shopping, LoaddinShopping] = useFetchToken(
    `shopping/${task.COD_SHIPPINGCOST}`
  );
  useEffect(() => {
    dispatch(
      GetCustomerReception(
        `tracking/received/${RECEIVED_TRACKING}/${COD_CUSTOMER}/${NUM_TRACKING}`,
        setTask
      )
    );
    dispatch(GetAllCategoryPackage());
    dispatch(GetAllservices());
    dispatch(GetAllTypePackage());
    if(Precio.PREC_TYPEPACKAGE && Dataseguridad.DATO_SEGURIDAD && task.WEIGHT_PACKAGE ){

        const precioLempiras = parseFloat(task.WEIGHT_PACKAGE) *  parseFloat(Precio.PREC_TYPEPACKAGE) *   parseFloat(Dataseguridad.DATO_SEGURIDAD);
        const precioDolares =
        parseFloat(task.WEIGHT_PACKAGE) * parseFloat(Precio.PREC_TYPEPACKAGE);
    setCaluloDolares(precioDolares);
    setCaluloLempiras(precioLempiras);
    const denominador =
        parseFloat(task.ALTURA_PACKAGE) *
        parseFloat(task.ANCHO_PACKAGE) *
        parseFloat(task.LARGO_PACKAGE);
      const nominador = Shopping.DATA_METRICO;
      const resultado = parseFloat(denominador / nominador);
      setCalculovolumetrico(Math.ceil(resultado));
    }
  }, [dispatch,Precio,Dataseguridad,Shopping]);

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });
  const handleCalculo = (e) => {
    const precioDolares =
      parseFloat(e.target.value) * parseFloat(Precio.PREC_TYPEPACKAGE);
    const precioLempiras =
      parseFloat(e.target.value) *
      parseFloat(Precio.PREC_TYPEPACKAGE) *
      parseFloat(Dataseguridad.DATO_SEGURIDAD);
    setCaluloDolares(precioDolares);
    setCaluloLempiras(precioLempiras);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
        task.WEIGHT_PACKAGE === " " ||
        task.WEIGHT_PACKAGE === 0 ||
        task.ALTURA_PACKAGE === " " ||
        task.ALTURA_PACKAGE === 0 ||
        task.ANCHO_PACKAGE === " " ||
        task.ANCHO_PACKAGE === 0 ||
        task.LARGO_PACKAGE === " " ||
        task.LARGO_PACKAGE === 0 ||
        task.WEIGHT_PACKAGE <= 0
    ) {
      toast.error(`Todos los datos son necesario`);
    } else if (task.RECEIVED_TRACKING_ === "PENDING") {
      toast.error(`Modifique el que no sea PENDING`);
    } else {
      dispatch(
        StartTrackingRecived(
          task,
          COD_CUSTOMER,
          setsednDatos,
          caculuVolumetrico,
          calculoDolares
        )
      );

      history(`/admin/reception/country/${COD_COUNTRY}/`);
    }
  };

  const handleSendNotification = (e)=>{
e.preventDefault();
 fetchConToken(
    "sendNotificationCustomer",
    {
        COD_CUSTOMER,
        NUM_TRACKING_:task.NUM_TRACKING_,
    },
    "POST"
  );
COD_CUSTOMER
  }

  const handleCalculoVolumentrico = (e) => {
    e.preventDefault();
    if (
      task.ALTURA_PACKAGE !== "" &&
      task.ANCHO_PACKAGE !== "" &&
      task.LARGO_PACKAGE !== ""
    ) {
      const denominador =
        parseFloat(task.ALTURA_PACKAGE) *
        parseFloat(task.ANCHO_PACKAGE) *
        parseFloat(task.LARGO_PACKAGE);
      const nominador = Shopping.DATA_METRICO;
      const resultado = parseFloat(denominador / nominador);
      setCalculovolumetrico(Math.ceil(resultado));
    }
  };
  const onChangeState = (e) => {
    e.preventDefault();
    setChecked(!checked);
  };
  const estadoArray = [
    {
      value: 1,
      date: "Activo",
    },
    {
      value: 0,
      date: "Inactivo",
    },
  ];

  useEffect(() => {
    if (caculuVolumetrico > calculoDolares) {
      setshoMensajevolumetrico(true);
      setshoMensajeDolares(false);
    } else if (calculoDolares > caculuVolumetrico) {
      setshoMensajeDolares(true);
      setshoMensajevolumetrico(false);
    }
  }, [caculuVolumetrico, , calculoDolares]);
  return (
    <>
      <div className="flex justify-between">
        <h2 className="my-6 text-2xl font-semibold text-gray-700">
          Tracking Residido
        </h2>
      </div>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-20 pb-10 py-5 shadow-xl rounded-lg ">
        <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">
              Proceso tracking
            </span>
            <select
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Peso de tracking"
              name="RECEIVED_TRACKING_"
              onChange={handleChange}
              value={task.RECEIVED_TRACKING_}
            >
              {selectStatusTracking.map((item) => (
                <option
                  key={item.value}
                  defaultValue={item.value === task.RECEIVED_TRACKING_}
                >
                  {item.value}
                </option>
              ))}
            </select>
          </label>
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">
              Tipo de envio
            </span>
            {loadingTypePackage ? (
              <select
                className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Tipo de envio  tracking"
                name="COD_TYPEPACKAGE"
                onChange={handleChange}
                value={task.COD_TYPEPACKAGE}
              >
                {TypePackage.map((item) => (
                  <option
                    key={item.COD_TYPEPACKAGE}
                    defaultValue={task.COD_TYPEPACKAGE === item.COD_TYPEPACKAGE}
                    value={item.COD_TYPEPACKAGE}
                  >
                    {" "}
                    {item.NAM_TYPEPACKAGE}{" "}
                  </option>
                ))}
              </select>
            ) : (
              <SpinnerButton />
            )}
          </label>
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">
              Servicio de envio
            </span>
            {loadingServices ? (
              <select
                className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Numero de tracking"
                name="SERVICE_NAME"
                onChange={handleChange}
                value={task.SERVICE_NAME}
              >
                {services.map((item) => (
                  <option
                    key={item.value}
                    defaultValue={task.SERVICE_NAME === item.value}
                  >
                    {item.label}{" "}
                  </option>
                ))}
              </select>
            ) : (
              <SpinnerButton />
            )}
          </label>
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">
              Número de Tracking
            </span>
            <input
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Numero de tracking"
              name="NUM_TRACKING_"
              onChange={handleChange}
              value={task.NUM_TRACKING_}
            />
          </label>
        </div>

        <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">Categoria</span>
            {loading ? (
              <select
                className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Tipo de envio  tracking"
                name="COD_CATPACKAGE"
                onChange={handleChange}
                value={task.COD_CATPACKAGE}
              >
                {categoryPackage.map((item) => (
                  <option
                    key={item.COD_CATPACKAGE}
                    defaultValue={task.COD_CATPACKAGE === item.COD_CATPACKAGE}
                    value={item.COD_CATPACKAGE}
                  >
                    {" "}
                    {item.NAM_CATPACKAGE}{" "}
                  </option>
                ))}
              </select>
            ) : (
              <SpinnerButton />
            )}
          </label>
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900 items-center">
              Descripción tracking
            </span>
            <textarea
              placeholder="Description"
              className="p-3 m-3 overflow-y-auto h-16 border rounded w-full border-gray-200 resize-none focus:outline-none"
              name="DES_TRACKING"
              onChange={handleChange}
              value={task.DES_TRACKING}
            />
          </label>
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900 items-center">
              Nombre Tracking
            </span>
            <textarea
              placeholder="Description"
              className="p-3 m-3 overflow-y-auto h-16 border rounded w-full border-gray-200  resize-none focus:outline-none"
              name="NOM_PACKAGE"
              value={task.NOM_PACKAGE}
              onChange={handleChange}
            ></textarea>
          </label>
        </div>

        <form>
          <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
            <label className="block mt-4 text-sm w-full md:px-2">
              <span className="text-gray-700 dark:text-gray-900">
                Cambio de dolar
              </span>
              {statusSeguridad ? (
                <input
                  className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Cambio dolar de tracking"
                  disabled={true}
                  defaultValue={Dataseguridad.DATO_SEGURIDAD}
                />
              ) : (
                <SpinnerButton />
              )}
            </label>
            <label className="block mt-4 text-sm w-full md:px-2">
              <span className="text-gray-700 dark:text-gray-900">
                Costo de servico
              </span>
              {statusServicio ? (
                <input
                  className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Costo de servicio de envio"
                  disabled={true}
                  value={Precio.PREC_TYPEPACKAGE}
                />
              ) : (
                <SpinnerButton />
              )}
            </label>
            <label className="block mt-4 text-sm w-full md:px-2">
              <span className="text-gray-700 dark:text-gray-900">
                Peso paquete LBS*
              </span>
              <input
                className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Pesode tracking"
                min={0}
                type="number"
                name="WEIGHT_PACKAGE"
                onChange={(e) => {
                  handleChange(e), handleCalculo(e);
                }}
                value={task.WEIGHT_PACKAGE}
              />
            </label>
          </div>
          <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
            <label className="block mt-4 text-sm w-full md:px-2">
              <span className="text-gray-700 dark:text-gray-900">
                Cálculo en USD
              </span>
              <input
                className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Costo dolares de tracking"
                disabled={true}
                value={isNaN(calculoDolares) ? 0 :  calculoDolares }
              />
              {shoMensajeDolares && (
                <Message severity="success" text="Mejor opciòn" />
              )}
            </label>
            <label className="block mt-4 text-sm w-full md:px-2">
              <span className="text-gray-700 dark:text-gray-900">
                Cálculo en LPS
              </span>
              <input
                className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Numero de tracking"
                disabled={true}
                value={isNaN(calculoLempiras) ? 0 : calculoLempiras}
              />
            </label>
            <label className="block mt-4 text-sm w-full md:px-2">
              <span className="text-gray-700 dark:text-gray-900">
                Estado Tracking
              </span>
              <select
                className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Tipo de envio  tracking"
                name="IND_TRACKING"
                onChange={handleChange}
                value={task.IND_TRACKING}
              >
                {estadoArray.map((item, index) => (
                  <option
                    key={index}
                    defaultValue={task.IND_TRACKING === item.value}
                    value={item.value}
                  >
                    {item.date}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
            <label className="block mt-4 text-sm w-full md:px-2">
              <span className="text-gray-700 dark:text-gray-900">
                Altura cm.
              </span>
              <input
                className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Costo dolares de tracking"
                type="number"
                name="ALTURA_PACKAGE"
                min={0}
                value={task.ALTURA_PACKAGE}
                onChange={(e) => {
                  handleChange(e);
                  handleCalculoVolumentrico(e);
                }}
              />
            </label>
            <label className="block mt-4 text-sm w-full md:px-2">
              <span className="text-gray-700 dark:text-gray-900">
                Anchura cm.
              </span>
              <input
                className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Numero de tracking"
                type="number"
                name="ANCHO_PACKAGE"
                min={0}
                value={task.ANCHO_PACKAGE}
                onChange={(e) => {
                  handleChange(e);
                  handleCalculoVolumentrico(e);
                }}
              />
            </label>
            <label className="block mt-4 text-sm w-full md:px-2">
              <span className="text-gray-700 dark:text-gray-900">
                Largo cm.
              </span>
              <input
                className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Numero de tracking"
                min={0}
                type="number"
                name="LARGO_PACKAGE"
                value={task.LARGO_PACKAGE}
                onChange={(e) => {
                  handleChange(e);
                  handleCalculoVolumentrico(e);
                }}
              />
            </label>
          </div>
          <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
            <label className="block mt-4 text-sm w-full md:px-2">
              {LoaddinShopping ? (
                <>
                  <span className="text-gray-700 dark:text-gray-900">
                    {Shopping.NOM_METRICO}
                  </span>
                  <input
                    className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Costo dolares de tracking"
                    min={0}
                    disabled
                    value={Shopping.DATA_METRICO}
                  />
                </>
              ) : (
                <SpinnerButton />
              )}
            </label>
            <label className="block mt-4 text-sm w-full md:px-2">
              Cálculo volumetrico
              <input
                className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Costo dolares de tracking"
                min={0}
                disabled
                value={caculuVolumetrico}
              />
              {shoMensajevolumetrico && (
                <Message severity="success" text="Mejor opciòn" />
              )}
            </label>
            <label className="block mt-4 text-sm w-full md:px-2">
                Notificar al cliente
                <button
              onClick={handleSendNotification}
              disabled={sednDatos}
              className="px-3 py-2.5  w-full bg-indigo-700  shadow rounded text-sm text-white"
            >
              {sednDatos ? <SpinnerButton /> : " Enviar correo electrónico"}
            </button>
            </label>
            
          </div>

          <div className="flex items-center justify-around mt-9">
            <button className="px-6 py-3 bg-gray-400 hover:bg-gray-500 shadow rounded text-sm text-white">
              Cancelar
            </button>
            <button
              onClick={handleSubmit}
              disabled={sednDatos}
              className="px-6 py-3 bg-indigo-700  shadow rounded text-sm text-white"
            >
              {sednDatos ? <SpinnerButton /> : " Crear Porceso de pago"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
