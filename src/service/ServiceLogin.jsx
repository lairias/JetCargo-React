import axios from "axios";
import env from "react-dotenv";
export const LoginService = async ({ EMAIL, PAS_USER }) => {
  return await axios.post(`http://localhost:4000/api/auth/signin`, {
    EMAIL,
    PAS_USER,
  });
};

export const RegisterVeryEmail = async (EMAIL) => {
  return await axios.get(`http://localhost:4000/api/email/${EMAIL}`);
};

export const RegisterService = async (
  DatosPersonales,
  DatosCuente,
  Datoslocalizacion
) => {
  return axios.post(`http://localhost:4000/api/auth/signup`, {
    ID: DatosPersonales.identificacion,
    TIP_DOCUMENT: DatosPersonales.tipodocumento,
    FRISTNAME: DatosPersonales.nombre,
    MIDDLENAME: DatosPersonales.segundoNombre,
    LASTNAME: DatosPersonales.apellido,
    AGE: DatosPersonales.añoNacimiento,
    EMAIL: DatosCuente.email,
    PAS_USER: DatosCuente.password,
    ROL: 1,
    DAT_BIRTH: DatosPersonales.fechaNacimiento,
    COD_COUNTRY: Datoslocalizacion.pais,
    COD_STATE: Datoslocalizacion.departamento,
    COD_CITY: Datoslocalizacion.ciudad,
    DES_ADDRESS: Datoslocalizacion.direccion,
    NUM_AREA: Datoslocalizacion.area,
    NUM_PHONE: Datoslocalizacion.telefono,
    USR_ADD: "Registro",
  });
};
