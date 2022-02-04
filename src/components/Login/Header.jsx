
import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Login_email, Login_password } from "../validations";
import {LoginService} from "../../service/Login"
import {Formulario} from './Formulario'
import {useUser} from "../../hooks/useUser";
export const Header = () => {
  ///**************************************Instancias de los States
  const [user, set_user] = useState({correo:"", password:""});
  const [classerror, set_classerror] = useState({correo:true, password:true});
  const { login, isLogged,  } = useUser();
  ///**************************************Instancias de las Variables
  const history = useNavigate();
  ///**************************************Instancias de useEffect
  useEffect(() => {
    if (isLogged) return history("/admin");
  }, [isLogged, history]);

  ///**************************************funciones de eventos programados
  const handleSubmit = async (e) =>
  { e.preventDefault();
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
    
      const resultado = await LoginService(user.correo, user.password);

      if (!resultado.data.token)
      {
        toast.error(`${resultado.data.message}`, { duration: 3000 });
      } else
      {
        toast
          .promise(  LoginService(user.correo, user.password), {
            loading: "Loading",
            success: "Usuario permitido",
          })
          .then((_) => {
            setTimeout(() => {
              login(resultado.data.token);
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
          
          <div className="flex-1 h-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
            <div className="flex justify-center pt-5">
              <img src="https://jetcargo.vip/wp-content/uploads/2021/11/cropped-JetCargo-png-file-e1637610869136.png" alt="" />
            </div>
              <form onSubmit={handleSubmit} className="flex items-center justify-center p-6 sm:p-12">
                <Formulario user={user} set_user={set_user}classerror={classerror} />
              </form>
            </div>
          </div>
      </>
    );
  };
