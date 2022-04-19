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
    correo: "",
    password: "",
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
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Correo electrónico"
              name="correo"
              value={correo}
              onChange={handleInputChange}
            />
          </label>
          <label className="block mt-4 text-sm">
            <span className="text-gray-700 dark:text-gray-900">
              Introduce tu contraseña
            </span>
            <input
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
            <NavLink
              className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-sky-600 border border-transparent rounded-lg active:bg-sky-600 hover:bg-sky-700 focus:outline-none focus:shadow-outline-purple"
              to="/register"
            >
              Crear cuenta
            </NavLink>
          <p className="mt-4">
            <NavLink
              className="text-sm font-medium text-sky-400 dark:text-sky-400 hover:underline"
              to="/reset-password"
            >
              ¿Has olvidado tu correo electrónico?
            </NavLink>
          </p>
          
        </div>
      </form>
    </>
  );
};
