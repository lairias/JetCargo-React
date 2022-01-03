import { NavLink } from "react-router-dom"
export const Formulario = () =>
{
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

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:translate-y-1 hover:shadow-2xl   hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <i class="fas fa-sign-in-alt"></i>
            </span>
            SEND
          </button>
        </div>
        <div className="flex  justify-end">
          <span className="">
            {" "}
            <NavLink
              to="/login"
              className="font-medium text-sky-600 hover:text-sky-500"
            >
              {" "}
              Regresar
            </NavLink>{" "}
          </span>
        </div>
      </form>
    );
}
