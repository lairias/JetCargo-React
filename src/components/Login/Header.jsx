import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Formulario } from "./Formulario";
import { useUser } from "../../hooks/useUser";
export const Header = () => {
  ///**************************************Instancias de los States
  const { isLogged } = useUser();
  const history = useNavigate();

  useEffect(() => {
    if (isLogged) return history("/admin");
  }, [isLogged, history]);

  return (
    <>
      <Toaster />
      <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div className="flex-1 h-full max-w-sm mx-auto overflow-hidden border-white border-2 bg-white rounded-lg shadow-xl dark:bg-gray-200">
          <div className="flex justify-center pt-5">
            <img
              src="https://jetcargo.vip/wp-content/uploads/2021/11/cropped-JetCargo-png-file-e1637610869136.png"
              alt=""
            />
          </div>

          <Formulario />
        </div>
      </div>
    </>
  );
};
