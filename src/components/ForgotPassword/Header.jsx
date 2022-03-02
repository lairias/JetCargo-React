import { Formulario } from "./Formulario";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SpinerLoader } from "../../components/Spinners/Loader";
import toast, { Toaster } from "react-hot-toast";
import { Register_password } from "../validations";
import { ForgotPasswordService } from "../../service/ServicePassword";
import { TokenNotValid } from "../Error/TokenNotValid";
import { ocultarEmail } from "../../util/OcultarEmail";
import jwt from "jwt-decode";

export const Header = ({ email, token, veryToken, SpinnerLoader }) => {
  const [newPassword, set_newPassword] = useState({
    password: "",
    confirpassword: "",
  });
  const { id } = jwt(token);

  const history = useNavigate();
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
      const sendCorreo = async () => {
        return await ForgotPasswordService(
          id,
          email,
          token,
          newPassword,
          headers
        );
      };
      const Data = await sendCorreo();
      if (Data.status === 202 || Data.status === 203)
        return toast(
          (_) => (
            <span>
              {Data.data.message}
              <button
                className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-sky-600 border border-transparent rounded-lg active:bg-sky-600 hover:bg-sky-700 focus:outline-none focus:shadow-outline-purple"
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
        <div className="flex-1 h-full max-w-sm mx-auto overflow-hidden border-white border-2 bg-white rounded-lg shadow-xl dark:bg-gray-200">
          <form className="flex items-center justify-center p-6    ">
            {SpinnerLoader ? (
              <SpinerLoader />
            ) : veryToken ? (
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
