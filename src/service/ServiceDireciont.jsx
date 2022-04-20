import axios from "axios";





export const CountryService = async (_) => {
  return await axios.get(`http://localhost:4000/api/country`);
};
export const StateService = async (Pais) => {
  return await axios.get(`http://localhost:4000/api/states/country/${Pais}`);
};
export const CityService = async (State) => {
  return await axios.get(`http://localhost:4000/api/cities/state/${State}`);
};
