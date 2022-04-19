import { useState, useEffect } from "react";
import {
  CountryService,
  StateService,
  CityService,
} from "../../service/ServiceDireciont";
import { SelectCity } from "./Select/SelectCity";
import { SelectCountry } from "./Select/SelectCountry";
import { SelectState } from "./Select/SelectState";
import { SelectArea } from "./Select/SelectArea";
import { InputMask } from "primereact/inputmask";

export const DirectionInformation = ({
  title,
  Datoslocalizacion,
  set_Datoslocalizacion,
}) => {
  ///*********************Instancia de los States********************** */
  const [ApiCities, set_ApiCities] = useState([]);
  const [ApiCountry, set_ApiCountry] = useState([]);
  const [ApiState, set_ApiState] = useState([]);
  const [Pais, set_pais] = useState(null);
  const [State, set_state] = useState(null);
  const [City, set_city] = useState();
  ///*********************UseEfect***********************/
  useEffect(() => {
    CountryService().then((element) => {
      set_ApiCountry(element.data);
    });
    if(Pais){
      StateService(Pais).then((element) => {
        set_ApiState(element.data);
      });
      if(State){
        CityService(State).then((element) => {
          set_ApiCities(element.data);
        });
      }
    }
    
  }, [Pais, State]);
  ///*********************Funciones de peticiones Http********************** */
  return (
    <>
      <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-800">
        {title}
      </h1>
      <div className=" md:justify-between md:flex  ">
        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-800">Área</span>
          <select
          
            onChange={(e) =>
              set_Datoslocalizacion({
                ...Datoslocalizacion,
                area: e.target.value,
              })
            }
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            value={Datoslocalizacion.area}
          >
            <option value="">-- Seleccione --</option>
            <SelectArea ApiCountry={ApiCountry} />
          </select>
        </label>
        <label className="block mt-4 text-sm mx-1">
          <span className="text-gray-700 dark:text-gray-800">
            Número teléfonico
          </span>
          <InputMask id="phone" mask={`(${Datoslocalizacion?.area}) 9999-9999`}
            onChange={(e) =>
              set_Datoslocalizacion({
                ...Datoslocalizacion,
                telefono: e.target.value,
              })
            }
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            type="text"
            value={Datoslocalizacion.telefono}
          />
        </label>
      </div>
      <label className="block mt-4 text-sm">
        <span className="text-gray-700 dark:text-gray-800">Dirección</span>
        <textarea
          cols="3"
          rows="3"
          onChange={(e) =>
            set_Datoslocalizacion({
              ...Datoslocalizacion,
              direccion: e.target.value,
            })
          }
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          value={Datoslocalizacion.direccion}
        >
        </textarea>
      </label>
      <div className=" md:justify-between md:flex  ">
        <label className="block mt-4 text-sm mx-1">
          <span className="text-gray-700 dark:text-gray-800">País</span>
          <select
          disabled={Datoslocalizacion.area ? false : true}
            onChange={(e) => {
              set_pais(e.target.value);
              set_Datoslocalizacion({
                ...Datoslocalizacion,
                pais: e.target.value,
              });
            }}
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            value={Datoslocalizacion.pais}
          >
            <option value="">-- Seleccione --</option>
            <SelectCountry ApiCountry={ApiCountry} />
          </select>
        </label>

        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-800">Departamento</span>

          <select
            disabled={Datoslocalizacion.pais ? false : true}
            onChange={(e) => {
              set_state(e.target.value);
              set_Datoslocalizacion({
                ...Datoslocalizacion,
                departamento: e.target.value,
              });
            }}
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            value={Datoslocalizacion.departamento}
          >
            <option value="">-- Seleccione --</option>
            <SelectState ApiState={ApiState} />
          </select>
        </label>
      </div>
      <label className="block mt-4 text-sm">
        <span className="text-gray-700 dark:text-gray-800">Ciudad</span>
        <select
          disabled={Datoslocalizacion.departamento ? false : true}
          onChange={(e) => {
            set_city(e.target.value);
            set_Datoslocalizacion({
              ...Datoslocalizacion,
              ciudad: e.target.value,
            });
          }}
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          value={Datoslocalizacion.ciudad}
        >
          <option value="">-- Seleccione --</option>
          <SelectCity ApiCities={ApiCities} />
        </select>
      </label>
    </>
  );
};
