
import Logo from "../../img/login-office-dark.jpeg";
import {Formulario} from './Formulario'
import {  useNavigate } from "react-router-dom";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Login_email, Login_password } from "../validations";
import axios from "axios"
export const Header = () => {
  const [user, set_user] = useState({correo:"", password:""})
  const [classerror, set_classerror] = useState({correo:true, password:true})
  const history = useNavigate()

  ///**************************************funciones de eventos programados
//Evento on
  const handleSubmit = async (e) =>
  {
    e.preventDefault();

    const DataEmail = await Login_email.validate({ email: user.correo }).catch(function (err) { toast.error(`${err.errors}`, { duration: 3000 }); });
    const DataPass = await Login_password.validate({ password: user.password }).catch(function (err) { toast.error(`${err.errors}`, { duration: 3000 }); });
    if (
      !DataEmail &&
        !DataPass
    )
    {

      set_classerror({ ...classerror, correo: false, password: false });
      return;
    }
    set_classerror({ ...classerror, correo: true, password: true });
    try
    {
      const Data = async () =>
      {
        return await axios.post("http://localhost:4000/api/auth/signin", {
          EMAIL: user.correo,
          PAS_USER: user.password,
        });
      };
      const resultado = await Data();
      if (!resultado.data.token)
      {
        toast.error(`${resultado.data.message}`, { duration: 3000 });
      } else
      {
        toast
          .promise(Data(), {
            loading: "Loading",
            success: "Usuario permitido",
          })
          .then((_) =>
          {
            setTimeout(() =>
            {
              history("/admin");
            }, 2000);
          });
      }
    } catch (error)
    {
      console.log(error);
    }
  };

    return (
      <>
        <Toaster />
        <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
          <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
            <div className="flex flex-col overflow-y-auto md:flex-row">
              <div className="h-32 md:h-auto md:w-1/2">
                <img aria-hidden="true" className="object-cover w-full h-full dark:hidden" src={Logo} alt="Office"/>
                <img aria-hidden="true" className="hidden object-cover w-full h-full dark:block" src={Logo} alt="Office" /></div>
              <form onSubmit={handleSubmit} className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                <Formulario user={user} set_user={set_user}classerror={classerror} />
              </form>
            </div>
          </div>
        </div>
      </>
    );
  };
