import axios from "axios";
export const LoginService = async  ( EMAIL, PAS_USER ) => {
return await axios.post("http://localhost:4000/api/auth/signin", {
  EMAIL,  PAS_USER
});
};