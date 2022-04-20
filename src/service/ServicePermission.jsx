import axios from "axios";
import env from "react-dotenv";
export const UserPermissionService = async (id) => {
  return await axios.get(`http://localhost:4000/api/permission/user/${id}`);
};
