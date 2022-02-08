import { NavLink } from "react-router-dom";
export const Formulario = ({ classerror, user, set_user }) => {
  return (
    <>
      <div className="w-full">
        <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-900">
          Iniciar sesión
        </h1>
        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-900">
            Correo electrónico
          </span>
          <input
            className={`block w-full mt-1 text-sm  ${
              classerror.correo
                ? "dark:bg-white focus:border-sky-300"
                : "dark:bg-red-200  border-red-600 "
            }  focus:outline-none focus:shadow-outline-purple dark:text-black dark:focus:shadow-outline-sky form-input`}
            placeholder="Email"
            type="text"
            onChange={(e) => {
              set_user({ ...user, correo: e.target.value });
            }}
          />
        </label>
        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-400">
            Introduce tu contraseña
          </span>
          <input
            className={`block w-full mt-1 text-sm  ${
              classerror.password
                ? "dark:bg-gray-700 focus:border-sky-400"
                : "dark:bg-red-300 focus:border-red-600 border-red-600"
            }  focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input`}
            placeholder="***************"
            type="password"
            onChange={(e) => {
              set_user({ ...user, password: e.target.value });
            }}
          />
        </label>
        <button
          type="submit"
          className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-sky-600 border border-transparent rounded-lg active:bg-sky-600 hover:bg-sky-700 focus:outline-none focus:shadow-outline-purple"
        >
          Siguiente
        </button>
        <p className="mt-4">
          <NavLink
            className="text-sm font-medium text-sky-400 dark:text-sky-400 hover:underline"
            to="/reset-password"
          >
            ¿Has olvidado tu correo electrónico?
          </NavLink>
        </p>
        <p className="mt-1">
          <NavLink
            className="text-sm font-medium text-sky-400 dark:text-sky-400 hover:underline"
            to="/register"
          >
            Crear cuenta
          </NavLink>
        </p>
      </div>
    </>
  );
};
