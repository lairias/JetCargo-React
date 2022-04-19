import axios from "axios";
import env from "react-dotenv";
export const TypeUserService = async (token, id) => {
  const headers = {
    "Content-Type": "application/json",
    "x-access-token": token,
  };

  return await axios.get(`http://159.223.229.68:4000/api/roles/${id}/`, headers);
};
