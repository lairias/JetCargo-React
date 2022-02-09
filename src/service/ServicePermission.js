import axios from "axios";

export const UserPermissionService = async (id, headers) => {
  return await axios.get(`http://localhost:4000/api/perrmision/user/${id}`, headers);
};
