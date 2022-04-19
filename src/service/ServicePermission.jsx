import axios from "axios";
import env from "react-dotenv";
export const UserPermissionService = async (id) => {
  return await axios.get(`http://159.223.229.68:4000/api/permission/user/${id}`);
};
