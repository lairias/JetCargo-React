import { NavLink } from "react-router-dom";

export const Formulario = () => {
  return (
    <form
      className="bg-white shadow-xl rounded-lg py-10 px-5 mb-10 "
      action="#"
      method="POST"
    >
      <div className="py-5">
        <label className="block text-sm font-medium text-gray-700">
          Número de Casillero
        </label>
        <input className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-300"></input>
      </div>
      <div className="py-2">
        <label className="block text-sm font-medium text-gray-700">
          Contraseña
        </label>
        <input
          type="password"
          className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm  focus:border-sky-500 focus:ring-1 focus:ring-sky-300"
        ></input>
      </div>

      <div className="flex items-center justify-between py-3">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded"
          />
          <label
            htmlFor="remember-me"
            className="ml-2 block text-sm text-gray-900"
          >
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <NavLink
            className="font-medium text-sky-600 hover:text-sky-500"
            to="/reset-password"
          >
            Forgot your password?
          </NavLink>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:translate-y-1 hover:shadow-2xl   hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <i class="fas fa-sign-in-alt"></i>
          </span>
          Iniciar sesión
        </button>
      </div>
      <div className="flex  justify-end">
        <span className="">
          {" "}
          <NavLink
            to="/register"
            className="font-medium text-sky-600 hover:text-sky-500 "
          >
            {" "}
            Register
          </NavLink>{" "}
        </span>
      </div>
    </form>
  );
};
