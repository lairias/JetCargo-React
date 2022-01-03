import { PeopleInformation } from "./PeopleInformation";
import { DirectionInformation } from "./DirectionInformation";
import { NavLink } from "react-router-dom";

import  {useState} from "react"

export const Formulario = () => {
  const [ParteOne, set_ParteOne] = useState(0)


  return (
    <div className="container mx-auto ">
      <div className="mt-12 ">
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg w-full space-y-10">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              {ParteOne === 0 ? "Crea tu cuenta de Jetcargo" : ""}
              {ParteOne === 1 ? "Apertura de Casillero": ""}
            </h2>

            <form
              className="bg-white shadow-xl rounded-lg py-10 px-5 mb-10  "
              action="#"
              method="POST"
            >
              {ParteOne === 0 ? <PeopleInformation /> : ""}
              {ParteOne === 1 ? <DirectionInformation /> : ""}

              <div className="flex  justify-between">
                {ParteOne === 0 ? (
                  <NavLink
                    to="/login"
                    className="group relative  flex  py-2 px-4"
                  >
                    <span className="absolute left-0 inset-y-0 block  pl-3 font-medium text-sky-600 hover:text-sky-500  ">
                      Iniciar sesión
                    </span>
                  </NavLink>
                ) : (
                  <button
                    type="submit"
                    className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:translate-y-1 hover:shadow-2xl   hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                    onClick={(e) => {
                      e.preventDefault();
                      set_ParteOne(ParteOne - 1);
                    }}
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                    Anterior
                  </button>
                )}

                <button
                  type="submit"
                  className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:translate-y-1 hover:shadow-2xl   hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                  onClick={(e) => {
                    e.preventDefault();
                    set_ParteOne(ParteOne + 1);
                  }}
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                  Siguiente
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}



       