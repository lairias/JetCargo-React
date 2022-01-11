import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

export const PeopleInformation = ({ title }) => {
const [edad,set_edad] = useState("")

  const FechaNacimiento = (e) => {
    var hoy = new Date();
    var cumpleanos = new Date(e.target.value);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
    }
    if (edad < 18) return toast.error("No puede ingresar una persona menor de edad");
     set_edad(edad)
  };
  
  return (
    <>
    <Toaster />
      <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
        {title}
      </h1>
      <div className=" md:justify-between md:flex  ">
        <label className="block mt-4 text-sm mx-1">
          <span className="text-gray-700 dark:text-gray-400">
            Identificación
          </span>
          <input
            className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input"
            placeholder="---- ----"
            type="password"
          />
        </label>
        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-400">
            Tipo documento
          </span>
          <select className=" w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input">
            <option value="">-- Seleccione --</option>
            <option value="">ID</option>
            <option value="">PASSPORT</option>
            <option value="">LICENSE</option>
          </select>
        </label>
      </div>
      <label className="block mt-4 text-sm">
        <span className="text-gray-700 dark:text-gray-400">Nombre</span>
        <input
          className=" w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input"
          type="text"
        />
      </label>
      <label className="block mt-4 text-sm">
        <span className="text-gray-700 dark:text-gray-400">Segundo Nombre</span>
        <input
          className=" w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input"
          type="text"
        />
      </label>
      <label className="block mt-4 text-sm">
        <span className="text-gray-700 dark:text-gray-400">Apellido</span>
        <input
          className=" w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input"
          type="text"
        />
      </label>
      <div className=" md:justify-between md:flex  ">
        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-400">
            Fecha Nacimiento
          </span>
          <input
            className=" w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input"
            type="date"
            onChange={FechaNacimiento}
          />
        </label>
        <label className="block mt-4 text-sm mx-1">
          <span className="text-gray-700 dark:text-gray-400">Edad</span>
          <input
            className=" w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input"
            type="text"
            value={edad}
            readOnly
          />
        </label>
      </div>
    </>
  );
};
