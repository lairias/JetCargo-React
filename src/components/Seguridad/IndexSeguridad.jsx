import { useState } from "react";
import { useSelector } from "react-redux";
import { useFetchToken } from "../../hooks/useFetch";
import { GetSeguridad } from "./GetSeguridad";

export default function IndexSeguridad() {
  const [shoModal, set_shoModal] = useState(false);
  const handleShoModal = () => {
    set_shoModal(!shoModal);
  };
  //importaciones de permisos
  const { permission } = useSelector((state) => state.auth);

  
  return (
    <>
      <div className="flex justify-between">
        <h2 className="my-6 text-2xl font-semibold text-gray-700">
          {" "}
          Datos de seguridad
        </h2>
        

       
      </div>
      {/* Insertar contenido de las paginas **/}
      {permission.includes("seguridad.view") ? ( <GetSeguridad  />) : "Permiso Denegado"}
     
    </>
  );
}
