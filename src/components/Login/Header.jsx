
import Logo from "../../img/login-office-dark.jpeg";
import {Formulario} from './Formulario'
import { NavLink } from "react-router-dom";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";


export const Header = () => {
  const [email, set_email] = useState("");
  const [password, set_password] = useState("");
  const [classemail, set_classemail] = useState(true);
  const [classpassword, set_classpassword] = useState(true);


  const handleSubmit = (e)=>{
    e.preventDefault();
if([email].includes("")){
  set_classemail(false)
  toast.error("El campo email es necesario", {
    duration: 6000,
  });
}else{
  
  set_classemail(true)
}
if([password].includes("")){
  set_classpassword(false)
  toast.error("El campo password es requerido", {
    duration: 6000,
  });
}else{
  set_classpassword(true);
}
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
              <h1> </h1>
              <form
                onSubmit={handleSubmit}
                className="flex items-center justify-center p-6 sm:p-12 md:w-1/2"
              >
                <Formulario
                  email={email}
                  set_email={set_email}
                  set_password={set_password}
                  classemail={classemail}
                  classpassword={classpassword}
                />
              </form>
            </div>
          </div>
        </div>
      </>
    );
}
