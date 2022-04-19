import axios from "axios";

import env from "react-dotenv";





export const CountryService = async (_) => {
  return await axios.get(`http://159.223.229.68:4000/api/country`);
};
export const StateService = async (Pais) => {
  return await axios.get(`http://159.223.229.68:4000/api/states/country/${Pais}`);
};
export const CityService = async (State) => {
  return await axios.get(`http://159.223.229.68:4000/api/cities/state/${State}`);
};
