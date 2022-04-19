
import { InputText } from 'primereact/inputtext';
import toast from "react-hot-toast";
import { InputMask } from 'primereact/inputmask';
export const PeopleInformation = ({
  title,
  DatosPersonales,
  set_DatosPersonales,
}) => {
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

  return (
    <>
      <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-800">
        {title}
      </h1>
      <div className=" md:justify-between md:flex  ">
        <label className="block mt-4 text-sm mx-1">
          <span className="text-gray-700 dark:text-gray-800">
            Identificación
          </span>
          <InputMask
          className="w-full"           
          id="basic" mask="9999-9999-99999"
          value={DatosPersonales.identificacion} onChange={(e) => 
            set_DatosPersonales({
              ...DatosPersonales,
              identificacion: e.target.value,
            })
            }></InputMask>
        </label>
        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-800">
            Tipo documento
          </span>
          <select
            onChange={(e) => {
              set_DatosPersonales({
                ...DatosPersonales,
                tipodocumento: e.target.value,
              });
            }}
            className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            value={DatosPersonales.tipodocumento}
          >
            <option value="">-- Seleccione --</option>
            <option value="ID">ID</option>
            <option value="PASSPORT">PASSPORT</option>
            <option value="LICENSE">LICENSE</option>
          </select>
        </label>
      </div>
      <label className="block mt-4 text-sm">
        <span className="text-gray-700 dark:text-gray-800">Primer Nombre</span>
        <InputText  id="alphanum" keyfilter="alphanum"   className="w-full" 
        onChange={(e) => {
            set_DatosPersonales({ ...DatosPersonales, nombre: e.target.value });
          }} value={DatosPersonales.nombre} />
      </label>
      <label className="block mt-4 text-sm">
        <span className="text-gray-700 dark:text-gray-800">Segundo Nombre</span>
        <InputText id="alphanum" keyfilter="alphanum"  
          className="w-full"           
          onChange={(e) => {
            set_DatosPersonales({
              ...DatosPersonales,
              segundoNombre: e.target.value,
            });
          }} value={DatosPersonales.segundoNombre} />

      </label>
      <label className="block mt-4 text-sm">
        <span className="text-gray-700 dark:text-gray-800">Apellidos</span>
        <InputText id="alphanum" keyfilter="alphanum" className="w-full"           
          
          onChange={(e) => {
            set_DatosPersonales({
              ...DatosPersonales,
              apellido: e.target.value,
            });
          }} value={DatosPersonales.apellido}  />
        
      </label>
      <div className=" md:justify-between md:flex  ">
        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-800">
            Fecha Nacimiento
          </span>
          <input
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="date"
            onChange={(e) => {
              set_DatosPersonales({
                ...DatosPersonales,
                fechaNacimiento: e.target.value,
                añoNacimiento: FechaNacimiento(e),
              });
            }}
            value={DatosPersonales.fechaNacimiento}
          />
        </label>
        <label className="block mt-4 text-sm mx-1">
          <span className="text-gray-700 dark:text-gray-800">Edad</span>
          <input
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="text"
            value={DatosPersonales.añoNacimiento}
            readOnly
          />
        </label>
      </div>
    </>
  );
};
