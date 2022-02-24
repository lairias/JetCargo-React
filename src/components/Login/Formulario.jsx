import { NavLink } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useForms } from "../../hooks/useForms";
import { useDispatch } from "react-redux";
import { StarLogin } from "../../actions/authAction";
export const Formulario = () => {
  //Importacion de la funcion de dispatch de Redux
  const dispatch = useDispatch();

  //Importacion de la funcion de Hooks para formularios
  const [{ correo, password }, handleInputChange] = useForms({
    correo: "lairias@unah.hn",
    password: "Honduchat3",
  });

  //Creacion de funcion para enviar los datos del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    //llamdo de la funcion de dispatch
    dispatch(StarLogin(correo, password));
  };

  return (
    <>
      <Toaster />
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="w-full">
          <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-900">
            Iniciar sesión
          </h1>
          <label className="block mt-4 text-sm">
            <span className="text-gray-700 dark:text-gray-900">
              Correo electrónico
            </span>
            <input
              className={`block w-full mt-1 text-sm  dark:bg-white focus:border-sky-300   focus:outline-none focus:shadow-outline-purple dark:text-black dark:focus:shadow-outline-sky form-input`}
              placeholder="text"
              name="correo"
              value={correo}
              onChange={handleInputChange}
            />
          </label>
          <label className="block mt-4 text-sm">
            <span className="text-gray-700 dark:text-gray-400">
              Introduce tu contraseña
            </span>
            <input
              className={`block w-full mt-1 text-sm dark:bg-gray-700 focus:border-sky-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input`}
              placeholder="***************"
              name="password"
              type="password"
              value={password}
              onChange={handleInputChange}
            />
          </label>
          <button className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-sky-600 border border-transparent rounded-lg active:bg-sky-600 hover:bg-sky-700 focus:outline-none focus:shadow-outline-purple">
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
      </form>
    </>
  );
};
