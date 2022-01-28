import axios from "axios"
import { useState, useEffect} from "react";
import {SelectCity} from "./Select/SelectCity"
import {SelectCountry} from "./Select/SelectCountry"
import {SelectState} from "./Select/SelectState"


export const DirectionInformation = ({title}) => {
  const [ApiCities, set_ApiCities] = useState([])
  const [ApiCountry, set_ApiCountry] = useState([])
  const [ApiState, set_ApiState] = useState([])
  const [Pais,set_pais] = useState();
  const [State,set_state] = useState();
  const [City,set_city] = useState();

  const GetCities = async (url)=>{
      const respustaCity = await axios.get(url);
      set_ApiCities(respustaCity.data);
    }
  const GetCountry = async (url)=>{
      const respustaCountry = await axios.get(url);
      set_ApiCountry(respustaCountry.data);
    }
  const GetState = async (url)=>{
      const respustaState = await axios.get(url);
      set_ApiState(respustaState.data);
    }
   
      useEffect(() => {
        GetState(`http://localhost:4000/api/states/country/${Pais}`);
        GetCountry("http://localhost:4000/api/country");
        GetCities(`http://localhost:4000/api/cities/state/${State}`);
      }, [Pais, State]);
 
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
              className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input"
              placeholder="---- ----"
              type="password"
            />
          </label>
          <label className="block mt-4 text-sm">
            <span className="text-gray-700 dark:text-gray-400">Área</span>
            <select className=" w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input">
              <option value="">-- Seleccione --</option>
            </select>
          </label>
        </div>
        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-400">Dirección</span>
          <textarea
            cols="3"
            rows="3"
            className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input"
          ></textarea>
        </label>
        <div className=" md:justify-between md:flex  ">
          <label className="block mt-4 text-sm mx-1">
            <span className="text-gray-700 dark:text-gray-400">País</span>
            <select
              onChange={(e) => set_pais(e.target.value)}
              className=" w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input"
            >
              <option value="">-- Seleccione --</option>
              <SelectCountry ApiCountry={ApiCountry} />
            </select>
          </label>

          <label className="block mt-4 text-sm">
            <span className="text-gray-700 dark:text-gray-400">
              Departamento
            </span>

            <select
              disabled={Pais > 0 ? false : true}
              onChange={(e) => set_state(e.target.value)}
              className=" w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input"
            >
              <option value="">-- Seleccione --</option>
              <SelectState ApiState={ApiState} />
            </select>
          </label>
        </div>
        <label className="block mt-4 text-sm">
          <span className="text-gray-700 dark:text-gray-400">Ciudad</span>
          <select
            disabled={State > 0 ? false : true}
            onChange={(e) => set_city(e.target.value)}
            className=" w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-blackdark:focus:shadow-outline-gray form-input"
          >
            <option value="">-- Seleccione --</option>
            <SelectCity ApiCities={ApiCities} />
          </select>
        </label>
      </>
    );
}
