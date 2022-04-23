import { useState } from "react";
import { useSelector } from "react-redux";
import { useFetchToken } from "../../hooks/useFetch";
import { GetErrores } from "./GetErrores";

export default function IndexErrores() {
  const { permission } = useSelector((state) => state.auth);

  
  return (
    <>
      <div className="flex justify-between">
        <h2 className="my-6 text-2xl font-semibold text-gray-700">
          {" "}
          Errores registrados
        </h2>
        

       
      </div>
      {/* Insertar contenido de las paginas **/}
      {permission.includes("seguridad.view") ? ( <GetErrores  />) : "Permiso Denegado"}
     
    </>
  );
}
