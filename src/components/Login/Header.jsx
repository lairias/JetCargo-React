
import Logo from "../../img/login-office-dark.jpeg";
import {Formulario} from './Formulario'
import {  useNavigate } from "react-router-dom";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { inputEmail,inputPassword } from "../validations/Login";
import axios from "axios"
export const Header = () => {
  
  const [email, set_email] = useState("");
  const [password, set_password] = useState("");
  const [classemail, set_classemail] = useState(true);
  const [classpassword, set_classpassword] = useState(true);
  const history = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    let DataEmail = {email: email}
    let DataPass = {password: password}
    if(! await inputEmail.isValid(DataEmail) && !await inputPassword.isValid(DataPass)) return [
      toast.error("Contraseña o correo electrónico invalidos ", {
        duration: 6000,
      }),      set_classemail(false),
      set_classpassword(false)];
    try{
        
        const Data = async( )=>{
        return   await axios.post("http://localhost:4000/api/auth/signin", {
            EMAIL: email,
            PAS_USER: password,
          });
        } 
      const resultado =  await Data();
        if (!resultado.data.token) {
          toast.error(`${resultado.data.message}`, { duration: 3000 });
        } else {
          toast.promise(Data(), {
            loading: "Loading",
            success: "Usuario permitido",
          }).then(_=>{setTimeout(()=>{history("/admin");},2000)})
      
        }

    }catch(error){
      console.log(error)
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
  };
