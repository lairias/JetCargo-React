import { Dialog } from "primereact/dialog";
import { useEffect, useState } from "react";
import { Button } from "primereact/button";
import toast, { Toaster } from "react-hot-toast";
import { fetchConToken } from "../../../util/fetch";
import Select from "react-select";
import { SelectArea } from "../../Register/Select/SelectArea";
import { CityService, CountryService, StateService } from "../../../service/ServiceDireciont";
import { SelectCountry } from "../../Register/Select/SelectCountry";
import { SelectState } from "../../Register/Select/SelectState";
import { SelectCity } from "../../Register/Select/SelectCity";
export const DialogoNewUsers = ({ handleShoModal, role }) => {

  const [ApiCities, set_ApiCities] = useState([]);
  const [ApiCountry, set_ApiCountry] = useState([]);
  const [ApiState, set_ApiState] = useState([]);
  const [Pais, set_pais] = useState(null);
  const [State, set_state] = useState(null);
  const [City, set_city] = useState();
  ///*********************UseEfect***********************/
  useEffect(() => {
    CountryService().then((element) => {
      set_ApiCountry(element.data);
    });
    if(Pais){
      StateService(Pais).then((element) => {
        set_ApiState(element.data);
      });
      if(State){
        CityService(State).then((element) => {
          set_ApiCities(element.data);
        });
      }
    }
    
  }, [Pais, State]);

  const [selectedServices, setSelectedServices] = useState();
  const FechaNacimiento = (e) => {
    var hoy = new Date();
    var cumpleanos = new Date(e.target.value);
    var age = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
      age--;
    }
    if (age < 18) {
      toast.error("No puede ingresar una persona menor de edad");
      return "";
    }
    return age;
  };
  const renderFooter = (name) => {
    return (
      <div>
        <Button
          label="No"
          icon="pi pi-times"
          onClick={handleShoModal}
          className="p-button-text"
        />
        <Button
          label="Yes"
          icon="pi pi-check"
          onClick={(e) => {
            handleSubmit(e);
          }}
          autoFocus
        />
      </div>
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      task.ID === "" || task.ID === " " ||
      task.TIP_DOCUMENT === "" || task.TIP_DOCUMENT === " " ||
      task.FRISTNAME === "" || task.FRISTNAME === " " ||
      task.MIDDLENAME === "" || task.MIDDLENAME === " " ||
      task.LASTNAME === "" || task.LASTNAME === " " ||
      task.AGE === "" || task.AGE === " " ||
      task.EMAIL === "" || task.EMAIL === " " ||
      selectedServices === "" || selectedServices === " " ||
      task.DAT_BIRTH === "" || task.DAT_BIRTH === " " ||
      task.COD_COUNTRY === "" || task.COD_COUNTRY === " " ||
      task.COD_STATE === "" || task.COD_STATE === " " ||
      task.COD_CITY === "" || task.COD_CITY === " " ||
      task.DES_ADDRESS === "" || task.DES_ADDRESS === " " ||
      task.NUM_AREA === "" || task.NUM_AREA === " " ||
      task.NUM_PHONE === "" || task.NUM_PHONE === " " 
      ) {
      toast.error("Todos los datos son necesarios");
    } else {
      fetchConToken(
        `auth/signupAdmin`,
        {
    ID: task.ID,
    TIP_DOCUMENT: task.TIP_DOCUMENT,
    FRISTNAME: task.FRISTNAME,
    MIDDLENAME: task.MIDDLENAME,
    LASTNAME: task.LASTNAME,
    AGE: task.AGE,
    EMAIL: task.EMAIL,
    ROL: selectedServices.COD_TYPEUSERS,
    DAT_BIRTH: task.DAT_BIRTH,
    COD_COUNTRY: task.COD_COUNTRY,
    COD_STATE: task.COD_STATE,
    COD_CITY: task.COD_CITY,
    DES_ADDRESS: task.DES_ADDRESS,
    NUM_AREA: task.NUM_AREA,
    NUM_PHONE: task.NUM_PHONE,
    USR_ADD: "Sistema",
          
        },
        "POST"
      );
      // handleShoModal(e);
    }
  };
  const [task, setTask] = useState({
    ID: "",
    TIP_DOCUMENT: "",
    FRISTNAME: "",
    MIDDLENAME: "",
    LASTNAME: "",
    AGE: "",
    EMAIL: "",
    ROL: "",
    DAT_BIRTH: "",
    COD_COUNTRY: "",
    COD_STATE: "",
    COD_CITY: "",
    DES_ADDRESS: "",
    NUM_AREA: "",
    NUM_PHONE: "",
    USR_ADD: "",
  });



  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });
  return (
    <>
      <Toaster />

      <Dialog
        header="Editar Categoria de paquetes"
        visible={handleShoModal}
        style={{ width: "50vw" }}
        footer={renderFooter("displayBasic2")}
        onHide={handleShoModal}
      >
        <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">
              Primer Nombre
            </span>
            <input
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Primer nombre"
              name="FRISTNAME"
              onChange={handleChange}
              value={task.FRISTNAME}
            />
          </label>

          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">
              Segundo Nombre{" "}
            </span>
            <input
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Segundo Nombre"
              name="LASTNAME"
              onChange={handleChange}
              value={task.LASTNAME}
            />
          </label>
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">
              Primer Apellido{" "}
            </span>
            <input
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Segundo Nombre"
              name="MIDDLENAME"
              onChange={handleChange}
              value={task.MIDDLENAME}
            />
          </label>
         
         
        </div>
                <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
                <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">
              Fecha Nacimiento{" "}
            </span>
            <input
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="date"
              name="DAT_BIRTH"
              onChange={(e) => {
                setTask({...task, DAT_BIRTH: e.target.value, AGE:FechaNacimiento(e) })
                
              }}
              value={task.DAT_BIRTH}
            />
          </label>
                <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">
              Edad{" "}
            </span>
            <input
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              disabled
              name="AGE"
              
              value={task.AGE}
            />
          </label>
                <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">
              Identificación{" "}
            </span>
            <input
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              name="ID"
              onChange={handleChange}
              value={task.ID}
              />
          </label>
                <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">
              Tipo de documento{" "}
            </span>
             <select
              name="TIP_DOCUMENT"
              onChange={handleChange}
            className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            value={task.TIP_DOCUMENT}
          >
            <option value="">-- Seleccione --</option>
            <option value="ID">ID</option>
            <option value="PASSPORT">PASSPORT</option>
            <option value="LICENSE">LICENSE</option>
          </select>
          </label>

                </div>

        <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">
              Correo electrónico
            </span>
            <input
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Correo electrónico "
              name="EMAIL"
              onChange={handleChange}
              value={task.EMAIL}
            />
          </label>

          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">Rol </span>
            <Select
              menuPlacement="auto"
              defaultValue={selectedServices}
              onChange={setSelectedServices}
              options={role}
              formatOptionLabel={(services) => (
                <div className="flex justify-between">
                  
                  <span>{services.NOM_TYPE}</span>
                </div>
              )}
            />
          </label>
          
        </div>



        <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">
              Número Area
            </span>
          <select
          
          name="NUM_AREA"
          onChange={handleChange}
          value={task.NUM_AREA}
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          >
            <option value="">-- Seleccione --</option>
            <SelectArea ApiCountry={ApiCountry} />
          </select>
          </label>

          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">
              Número de tefono
            </span>
            <input
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Contraseña "
              name="NUM_PHONE"
              onChange={handleChange}
              value={task.NUM_PHONE}
            />
          </label>
          <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">Dirección</span>
            <textarea
          cols="3"
          rows="3"
          onChange={handleChange}
          name="DES_ADDRESS"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          value={task.DES_ADDRESS}
        >
        </textarea>
          </label>
         
        </div>
        <div className=" md:justify-between mb-4 md:flex w-full md:px-2">
        <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">
              País
            </span>
          <select
          
          name="COD_COUNTRY"
          onChange={(e)=>{handleChange(e); set_pais(e.target.value);} }
          value={task.COD_COUNTRY}
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          >
            <option value="">-- Seleccione --</option>
            <SelectCountry ApiCountry={ApiCountry} />
          </select>
          </label>
        <label className="block mt-4 text-sm w-full md:px-2">
            <span className="text-gray-700 dark:text-gray-900">
              Departamento
            </span>
          <select
           disabled={task.COD_COUNTRY ? false : true}
          name="COD_STATE"
          onChange={(e)=>{handleChange(e); set_state(e.target.value);} }
          value={task.COD_STATE}
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          >
            <option value="">-- Seleccione --</option>
            <SelectState ApiState={ApiState} />
          </select>
          </label>

          <label className="block mt-4 text-sm w-full md:px-2">
        <span className="text-gray-700 dark:text-gray-800">Ciudad</span>
        <select
          name="COD_CITY"
          value={task.COD_CITY}
          disabled={task.COD_STATE ? false : true}
          onChange={(e)=>{handleChange(e); set_city(e.target.value);} }
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        >
          <option value="">-- Seleccione --</option>
          <SelectCity ApiCities={ApiCities} />
        </select>
      </label>


        </div>
      </Dialog>
    </>
  );
};
