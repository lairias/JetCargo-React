import toast, { Toaster } from "react-hot-toast";
import {Formulario} from "./Formulario"
import Logo from "../../img/forgot-password-office-dark.jpeg";
import { useState } from "react";

export const Header = () => {
  const [resetpass,set_resetpass] = useState("");
  const [classreset,set_classreset] = useState(true);

  const handleSubmit = e=>{
    e.preventDefault();
    if([resetpass].includes("")){
      set_classreset(false)
      toast.error("El campo email es necesario", {
        duration: 6000,
      });return
    } set_classreset(true)
  }
  return (
    <>
    <Toaster />
      <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
          <div className="flex flex-col overflow-y-auto md:flex-row">
            <div className="h-32 md:h-auto md:w-1/2">
              <img
                aria-hidden="true"
                className="object-cover w-full h-full dark:hidden"
                src={Logo}
                alt="Office"
              />
              <img
                aria-hidden="true"
                className="hidden object-cover w-full h-full dark:block"
                src={Logo}
                alt="Office"
              />
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex items-center justify-center p-6 sm:p-12 md:w-1/2"
            >
              <Formulario
                classreset={classreset}
                set_resetpass={set_resetpass}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
