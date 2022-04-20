import axios from "axios";
import env from "react-dotenv";
export const SendEmailPasswordService = async (EMAIL) => {
  return await axios.post(`http://localhost:4000/api/passreset`, {
    EMAIL,
  });
};
export const VeryTokenCorreoPasswordService = async (email) => {
  return await axios.get(`http://localhost:4000/api/passreset/${email}`);
};

export const ForgotPasswordService = async (
  id,
  email,
  token,
  newPassword,
  headers
) => {
  return await axios.post(
    `http://localhost:4000/api/passreset/reset-password/${id}/${email}/${token}`,
    {
      PASS: newPassword.password,
    },
    headers
  );
};
