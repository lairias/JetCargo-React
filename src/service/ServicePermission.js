import axios from "axios";

export const UserPermissionService = async (id) => {
  return await axios.get(`http://localhost:4000/api/permission/user/${id}`);
};
