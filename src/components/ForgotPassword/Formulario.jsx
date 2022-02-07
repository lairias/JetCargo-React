import { useState } from "react";
export const Formulario = ({
  email,
  newPassword,
  set_newPassword,
  handleSubmit,
}) => {
  const [viewPassword, set_viewPassword] = useState(false);

  return (
    <>
      <div className="w-full">
        <div className="flex justify-center pb-5">
          <img
            src="https://jetcargo.vip/wp-content/uploads/2021/11/cropped-JetCargo-png-file-e1637610869136.png"
            alt=""
          />
        </div>
        <h1 className="mb-4 text-xl font-semibold text-center text-gray-700 dark:text-gray-200">
          Cambiar contraseña para
        </h1>
        <span className=" font-bold text-white text-center"> {email} </span>
        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-400">Contraseña</span>
          <input
            className="block w-full mt-1 text-sm dark:bg-gray-700 focus:border-purple-400
                      focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input"
            placeholder="***************"
            type={viewPassword ? "text" : "password"}
            onChange={({ target }) => {
              set_newPassword({ ...newPassword, password: target.value });
            }}
          />
        </label>
        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-400">
            Confirmar contraseña
          </span>
          <input
            className="block w-full mt-1 text-sm dark:bg-gray-700 focus:border-purple-400
                          focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input"
            placeholder="***************"
            type={viewPassword ? "text" : "password"}
            onChange={({ target }) => {
              set_newPassword({ ...newPassword, confirpassword: target.value });
            }}
          />
        </label>
        <div className="flex mt-6 text-sm">
          <label className="flex items-center dark:text-gray-400">
            <input
              type="checkbox"
              onClick={(_) => {
                set_viewPassword(!viewPassword);
              }}
              className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
            />
            <span className="ml-2">Mostrar contraseña</span>
          </label>
        </div>
        <button
          type="submit"
          className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
          onClick={handleSubmit}
        >
          Confirmar
        </button>
      </div>
    </>
  );
};
