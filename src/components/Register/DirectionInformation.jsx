import { useState, useEffect } from "react";
import { CountryService,StateService,CityService } from "../../service/Direciont";
import { SelectCity} from "./Select/SelectCity";
import { SelectCountry } from "./Select/SelectCountry";
import { SelectState } from "./Select/SelectState";
import { SelectArea } from "./Select/SelectArea";

export const DirectionInformation = ({
  title,
  Datoslocalizacion,
  set_Datoslocalizacion,
}) => {
  ///*********************Instancia de los States********************** */
  const [ApiCities, set_ApiCities] = useState([]);
  const [ApiCountry, set_ApiCountry] = useState([]);
  const [ApiState, set_ApiState] = useState([]);
  const [Pais, set_pais] = useState();
  const [State, set_state] = useState();
  const [City, set_city] = useState();
  ///*********************UseEfect********************** */
  
  useEffect(() => {
       CountryService().then(element =>{set_ApiCountry(element.data)})
       StateService(Pais ).then(element =>{set_ApiState(element.data)})
       CityService(State).then(element =>{set_ApiCities(element.data)})
     
    
  }, [Pais, State]);
  ///*********************Funciones de peticiones Http********************** */
  return (
    <>
      <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
        {title}
      </h1>
      <div className=" md:justify-between md:flex  ">
        <label className="block mt-4 text-sm mx-1">
          <span className="text-gray-700 dark:text-gray-400">
            Número teléfonico
          </span>
          <input
            onChange={(e) =>
              set_Datoslocalizacion({
                ...Datoslocalizacion,
                telefono: e.target.value,
              })
            }
            className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input"
            placeholder="---- ----"
            type="text"
            value={Datoslocalizacion.telefono}
          />
        </label>
        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-400">Área</span>
          <select
            onChange={(e) =>
              set_Datoslocalizacion({
                ...Datoslocalizacion,
                area: e.target.value,
              })
            }
            className=" w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input"
            value={Datoslocalizacion.area}
          >
            <option value="">-- Seleccione --</option>
            <SelectArea ApiCountry={ApiCountry} />
          </select>
        </label>
      </div>
      <label className="block mt-4 text-sm">
        <span className="text-gray-700 dark:text-gray-400">Dirección</span>
        <textarea
          cols="3"
          rows="3"
          onChange={(e) =>
            set_Datoslocalizacion({
              ...Datoslocalizacion,
              direccion: e.target.value,
            })
          }
          className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input"
          value={Datoslocalizacion.direccion}
        >
          {" "}
        </textarea>
      </label>
      <div className=" md:justify-between md:flex  ">
        <label className="block mt-4 text-sm mx-1">
          <span className="text-gray-700 dark:text-gray-400">País</span>
          <select
            onChange={(e) => {
              set_pais(e.target.value);
              set_Datoslocalizacion({
                ...Datoslocalizacion,
                pais: e.target.value,
              });
            }}
            className=" w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input"
            value={Datoslocalizacion.pais}
          >
            <option value="">-- Seleccione --</option>
            <SelectCountry ApiCountry={ApiCountry} />
          </select>
        </label>

        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-400">Departamento</span>

          <select
            disabled={Datoslocalizacion.pais ? false : true}
            onChange={(e) => {
              set_state(e.target.value);
              set_Datoslocalizacion({
                ...Datoslocalizacion,
                departamento: e.target.value,
              });
            }}
            className=" w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input"
            value={Datoslocalizacion.departamento}
          >
            <option value="">-- Seleccione --</option>
            <SelectState ApiState={ApiState} />
          </select>
        </label>
      </div>
      <label className="block mt-4 text-sm">
        <span className="text-gray-700 dark:text-gray-400">Ciudad</span>
        <select
          disabled={Datoslocalizacion.departamento ? false : true}
          onChange={(e) => {
            set_city(e.target.value);
            set_Datoslocalizacion({
              ...Datoslocalizacion,
              ciudad: e.target.value,
            });
          }}
          className=" w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input"
          value={Datoslocalizacion.ciudad}
        >
          <option value="">-- Seleccione --</option>
          <SelectCity ApiCities={ApiCities} />
        </select>
      </label>
    </>
  );
};
