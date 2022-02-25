import { NavLink } from "react-router-dom";
export const TokenNotValid = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center pb-5">
        <img
          src="https://jetcargo.vip/wp-content/uploads/2021/11/cropped-JetCargo-png-file-e1637610869136.png"
          alt=""
        />
      </div>
      <h1 className="mb-4 text-xl font-semibold text-center text-gray-700 dark:text-gray-800">
        Link de recuperación de contraseña invalido
      </h1>
      <NavLink
        className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-sky-600 border border-transparent rounded-lg active:bg-sky-600 hover:bg-sky-700 focus:outline-none focus:shadow-outline-purple"
        to="/login"
      >
        Regresar
      </NavLink>
    </div>
  );
};
