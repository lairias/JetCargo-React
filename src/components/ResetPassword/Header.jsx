import toast, { Toaster } from "react-hot-toast";
import { Formulario } from "./Formulario";
import Logo from "../../img/forgot-password-office-dark.jpeg";
import { useState } from "react";
import { Tooltip } from "./Tooltip";
import { ResetChema } from "../validations/ResetPass";
import { useNavigate } from "react-router-dom";
import { SendEmailPasswordService } from "../../service/ServicePassword";
export const Header = () => {
  const [resetpass, set_resetpass] = useState("");
  const [classreset, set_classreset] = useState(true);
  const [tooltipStatus, setTooltipStatus] = useState(0);
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = { email: resetpass };
    const isValid = await ResetChema.isValid(formData);
    if (!isValid)
      return [
        toast.error("Ingrese un correo valido", { duration: 6000 }),
        set_classreset(false),
      ];
    try {
      const FetchData = async () => {
        return await SendEmailPasswordService(resetpass);
      };
      const callback = FetchData();
      toast
        .promise(callback, {
          loading: "Enviando",
          success: "Email enviado",
          error: "Correo electrónico no valido",
        })
        .then((_) =>
          setTimeout((_) => {
            history("/login");
          }, 2000)
        );
      set_classreset(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Toaster />
      <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
        <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-200">
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
              <Tooltip
                tooltipStatus={tooltipStatus}
                setTooltipStatus={setTooltipStatus}
              />
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
