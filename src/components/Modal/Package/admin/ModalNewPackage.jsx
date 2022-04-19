import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetAllCategoryPackage } from "../../../../actions/categorypackageAction";
import { GetAllCustomers } from "../../../../actions/customesAction";
import { SpinerLoader } from "../../../../components/Spinners/Loader";
import { useForms } from "../../../../hooks/useForms";
import Select from "react-select";
import SpinnerButton from "../../../Spinners/SpinnerButton";
import { GetAllTypePackage } from "../../../../actions/typepackageAction";
import { GetAllservices } from "../../../../actions/serviceAction";
import { GetCasilleroUser } from "../../../../actions/lockersAction";
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import toast, { Toaster }  from "react-hot-toast";
import { PostTrackingAdminCustomer } from "../../../../actions/trackingAction";
export const ModalNewPackage = ({ handleShoModal }) => {
  const dispatch = useDispatch();
  const [{ NUM_TRACKING, NAM_PACKAGE, COD_LOCKER,DES_PACKAGE }, handleInputChange] =
    useForms({
      NUM_TRACKING: "",
      NAM_PACKAGE: "",
      COD_LOCKER: "",
      DES_PACKAGE: "",
    });
  const [selectCumstomer, setselectCumstomer] = useState(null);
  const [SendData, setSendData] = useState(false);
  const [selectedTypePackage, setSelectedTypePackage] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedServices, setSelectedServices] = useState(null);
  useEffect(() => {
    dispatch(GetAllservices());
    dispatch(GetAllCustomers());
    dispatch(GetAllTypePackage(true));
    dispatch(GetAllCategoryPackage(true));
    if (selectCumstomer !== null) {
      dispatch(GetCasilleroUser(selectCumstomer.value));
    }
  }, [dispatch, selectCumstomer]);
  const { customers, loadingCustomers } = useSelector(
    (state) => state.customers
  );
  const { lockerUser, loadingLokersUser } = useSelector(
    (state) => state.locker
  );
  const { TypePackage, loadingTypePackage } = useSelector(
    (state) => state.typepackage
  );

  const { services, loadingServices } = useSelector((state) => state.services);

  const { categoryPackage, loading } = useSelector(
    (state) => state.categorypackage
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if(selectCumstomer === null || selectedTypePackage === null || selectedType === null || selectedServices === null ||NUM_TRACKING === "" || NAM_PACKAGE === "" || COD_LOCKER === "" || DES_PACKAGE === ""){
      toast.error(`Todos los datos son necesario`);
    }else{
      setSendData(true)
      dispatch(PostTrackingAdminCustomer(selectCumstomer,selectedTypePackage,selectedType,selectedServices,NUM_TRACKING,NAM_PACKAGE,COD_LOCKER,DES_PACKAGE,setSendData,handleShoModal))
      
    }
  }

  return (
    <>
    <Toaster />
      <div id="popup" className="z-50 fixed w-full flex justify-center inset-0">
        <div className="w-full h-full bg-gray-500 bg-opacity-50 z-0 absolute inset-0" />
        <div className="mx-auto container">
          <div className="flex items-center justify-center h-full w-full">
            <div className="bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5">
              <div className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
                <p className="text-base font-semibold">Crear nuevo paquete</p>
                <button onClick={handleShoModal} className="focus:outline-none">
                  X
                </button>
              </div>
              <div className="px-4  md:px-10  md:pb-4 pb-7">
                <form className="mt-11">
                  <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
                    <label className="block mt-4 text-sm w-full md:px-2">
                      <span className="text-gray-700 dark:text-gray-900">
                        Nombre del cliente
                      </span>
                      {loadingCustomers ? (
                        <Select
                          defaultValue={selectCumstomer}
                          onChange={setselectCumstomer}
                          options={customers}
                        />
                      ) : (
                        <SpinerLoader />
                      )}
                    </label>
                    <label className="block mt-4 text-sm w-full md:px-2">
                      <span className="text-gray-700 dark:text-gray-900">
                        Número de Tracking
                      </span>
                      <InputText id="alphanum" keyfilter="alphanum" name="NUM_TRACKING"
                        value={NUM_TRACKING}
                        onChange={handleInputChange}/>
                    </label>
                  </div>
                  <hr className="w-full" />
                  <div className=" md:justify-between md:flex w-full md:px-2">
                    <label className="block mt-4 text-sm w-full md:px-2">
                      <span className="text-gray-700 dark:text-gray-900">
                        Nombre del paquete
                      </span>
                       <InputText id="alphanum" keyfilter="alphanum" name="NAM_PACKAGE"
                        value={NAM_PACKAGE}
                        onChange={handleInputChange}/>
                     
                    </label>
                    <label className="block mt-4 text-sm w-full md:px-2 pb-14">
                      <span className="text-gray-700 dark:text-gray-900">
                        Tipo de servico
                      </span>
                      {loadingServices ? (
                        <Select
                          menuPlacement="auto"
                          defaultValue={selectedServices}
                          onChange={setSelectedServices}
                          options={services}
                          formatOptionLabel={(services) => (
                             
                              <span>{services.label}</span>
                          )}
                        />
                      ) : (
                        <SpinnerButton />
                      )}
                    </label>
                  </div>

                  <div className="md:justify-between md:flex">
                    <label className="block mt-4 text-sm w-full md:px-2">
                      <span className="text-gray-700 dark:text-gray-900">
                        Casilleros del usuario
                      </span>
                      {loadingLokersUser && (
                        <select
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          name="COD_LOCKER"
                          onChange={handleInputChange}
                          value={COD_LOCKER}
                        >
                          <option selected>--Seleccione un casillero--</option>
                          {lockerUser.map((locker, index) => (
                            <option key={index} value={locker.COD_LOCKER}>
                              {locker.NUM_LOCKER}
                            </option>
                          ))}
                        </select>
                      )}
                    </label>

                    <label className="block mt-4 text-sm w-full md:px-2 pb-14">
                      <span className="text-gray-700 dark:text-gray-900">
                        Tipo de envio
                      </span>
                      {loadingTypePackage ? (
                        <Select
                          menuPlacement="auto"
                          defaultValue={selectedTypePackage}
                          onChange={setSelectedTypePackage}
                          options={TypePackage}
                          formatOptionLabel={(services) => (
                            <div className="flex justify-between">
                              <span>{services.label}</span>
                            </div>
                          )}
                        />
                      ) : (
                        <SpinnerButton />
                      )}
                    </label>
                    <label className="block mt-4 text-sm w-full md:px-2">
                      <span className="text-gray-700 dark:text-gray-900">
                        Tipo de Categoria
                      </span>
                      {loading ? (
                        <Select
                          className="w-full"
                          defaultValue={selectedType}
                          onChange={setSelectedType}
                          options={ categoryPackage}
                          formatOptionLabel={(country) => (
                            <div className="flex justify-between items-center">
                             
                                <span className="ml-2">{country.prece} - {country.label}</span>
                              </div>
                          )}
                        />
                      ) : (
                        <SpinnerButton />
                      )}
                    </label>
                  </div>

                  <div className="md:justify-between md:flex">
                    <label className="block mt-4 text-sm w-full md:px-2">
                      
                      <InputTextarea  name="DES_PACKAGE"
                      placeholder="Descripción del paquete"
                      value={DES_PACKAGE}
                      onChange={handleInputChange} rows={3} cols={60} />
                    </label>
</div>
                
                </form>
                <div className="flex items-center justify-between mt-9">
                  <button
                    onClick={handleShoModal}
                    className="px-6 py-3 bg-gray-400 hover:bg-gray-500 shadow rounded text-sm text-white"
                  >
                    Cancel
                  </button>
                  
                  <button  onClick={handleSubmit} disabled={SendData} className="px-6 py-3 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white">
                    {SendData ? (<SpinnerButton />) : (" Agregar paquete")}
                   
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
