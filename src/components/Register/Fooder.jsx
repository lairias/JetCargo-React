import { NavLink } from "react-router-dom";

export const Fooder = () => {
  return (
    <>
      <hr />

      <NavLink
        to="/login"
        className="block w-full px-4  py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-sky-600 border border-transparent rounded-lg active:bg-sky-400 hover:bg-sky-700 focus:outline-none focus:shadow-outline-purple"
      >
        <i className="fas fa-sign-in-alt px-2"></i>
        Iniciar sesión
      </NavLink>
    </>
  );
};
