import env from "react-dotenv";
// const baseUrl = "http://localhost:4000/api";

export const fetchSinToken = (endpoint, data, method = "GET") => {
  const url = `http://159.223.229.68:4000/${endpoint}`;

  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};

export const fetchConToken = (endpoint, data, method = "GET") => {
  const url = `http://159.223.229.68:4000/${endpoint}`;
  const token = localStorage.getItem("Jet-Cargo_jwt_login") || "";
  console.log(token);
  if (method === "GET") {

    return fetch(url, {
      method,
      headers: {
        "x-access-token": token,
      },
    });
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
        "x-access-token": token,
      },
      body: JSON.stringify(data),
    });
  }
};
