import { NavLink } from "react-router-dom";

export const Fooder = () => {
    return (
      <>
        <hr  />

        
        <NavLink to="/login" className="flex items-center justify-center w-full px-4 py-2 mt-4 text-sm font-medium leading-5  text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray">
          <i className="fas fa-sign-in-alt px-2"></i>
          Iniciar sesión
        </NavLink>
      </>
    );
}
