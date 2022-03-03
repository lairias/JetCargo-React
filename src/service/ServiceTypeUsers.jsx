import axios from "axios";

export const TypeUserService = async (token, id) => {
  const headers = {
    "Content-Type": "application/json",
    "x-access-token": token,
  };

  return await axios.get(`http://localhost:4000/api/roles/${id}/`, headers);
};
