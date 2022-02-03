import { Formulario } from "./Formulario";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { Register_password } from "../validations";
import { TokenNotValid } from "../Error/TokenNotValid";

export const Header = ({ email, token, id, veryToken }) => {
  const [newPassword, set_newPassword] = useState({
    password: "",
    confirpassword: "",
  });
  const history = useNavigate();
  const ocultarEmail = (correo) => {
    const parte = correo.split("@");
    const final = correo.split(".");
    return [parte[0] + "@" + parte[1].substring(0, -4) + "****" + final[1]];
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const DataPassword = await Register_password.validate({
      password: newPassword.password,
    }).catch(function (err) {
      toast.error(`${err.errors}`, { duration: 2000 });
    });
    if (DataPassword) {
      if (newPassword.password !== newPassword.confirpassword)
        return toast.error("Contraeñas no coinciden", { duration: 2000 });
      //**Ralizamos el post  */
      const headers = {
        "Content-Type": "application/json",
        "x-pass-reset-token": token,
      };
      const sendCorreo = await axios.post(
        `http://localhost:4000/api/passreset/reset-password/${id}/${email}/${token}`,
        {
          PASS: newPassword.password,
        },
        headers
      );
      console.log(sendCorreo);
      if (sendCorreo.status === 202)
        return toast(
          (_) => (
            <span>
              {sendCorreo.data.message}
              <button
                className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                onClick={() => history("/reset-password")}
              >
                Reset
              </button>
            </span>
          ),
          { duration: 10000 }
        );
    }
  };
  return (
    <>
      <Toaster />
      <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div className="flex-1 h-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
          <form className="flex items-center justify-center p-6    ">
            {veryToken ? (
              <Formulario
                email={ocultarEmail(email)}
                newPassword={newPassword}
                set_newPassword={set_newPassword}
                handleSubmit={handleSubmit}
              />
            ) : (
              <TokenNotValid />
            )}
          </form>
        </div>
      </div>
    </>
  );
};
