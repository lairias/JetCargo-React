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
        <h1 className="mb-4 text-xl font-semibold text-center text-gray-700 dark:text-gray-800">
          Cambiar contraseña para
        </h1>
        <div className="flex justify-center">
          <span className=" font-bold text-gray-800 text-center">
            {" "}
            {email}{" "}
          </span>
        </div>
        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-800">Contraseña</span>
          <input
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="***************"
            type={viewPassword ? "text" : "password"}
            onChange={({ target }) => {
              set_newPassword({ ...newPassword, password: target.value });
            }}
          />
        </label>
        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-800">
            Confirmar contraseña
          </span>
          <input
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="***************"
            type={viewPassword ? "text" : "password"}
            onChange={({ target }) => {
              set_newPassword({ ...newPassword, confirpassword: target.value });
            }}
          />
        </label>
        <div className="flex mt-6 text-sm">
          <label className="flex items-center dark:text-gray-800">
            <input
              type="checkbox"
              onClick={(_) => {
                set_viewPassword(!viewPassword);
              }}
              className="text-sky-400 form-checkbox focus:border-sky-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
            />
            <span className="ml-2">Mostrar contraseña</span>
          </label>
        </div>
        <button
          type="submit"
          className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-sky-600 border border-transparent rounded-lg active:bg-sky-600 hover:bg-sky-700 focus:outline-none focus:shadow-outline-purple"
          onClick={handleSubmit}
        >
          Confirmar
        </button>
      </div>
    </>
  );
};
