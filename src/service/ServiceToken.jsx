import env from "react-dotenv";

export const RenewTokenService = async () => {
  const token = localStorage.getItem("Jet-Cargo_jwt_login") || "";
  const data = await fetch(`http://localhost:4000/api/auth/renew`, {
    method: "GET",
    headers: {
      "x-access-token": token,
    },
  });
  const body = await data.json();
  return body;
};
