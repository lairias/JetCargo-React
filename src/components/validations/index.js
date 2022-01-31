import * as yup  from "yup"




export const Login_email = yup.object().shape({
  email: 
  yup
  .string()
  .email("Ingreser un Correo electrónico valido").required("El dato Email es necesario"),
});
export const Login_password = yup.object().shape({
  password: yup
    .string()
    .required("El dato Password es necesario")
    .max(18, "Maxímo de caracteres permitidos 18")
    .min(5, "Minínimo de caracteres permitidos 5")
});

export const Register_email = yup.object().shape({
  password: yup
    .string()
    .required("El dato Password es necesario")
    .max(18, "Maxímo de caracteres permitidos 18")
    .min(5, "Minínimo de caracteres permitidos 5")
});
export const Register_password = yup.object().shape({
  password: yup
    .string()
    .required("El dato Password es necesario")
    .max(18, "Maxímo de caracteres permitidos 18")
    .min(5, "Minínimo de caracteres permitidos 5")
});
export const Register_Identificacion = yup.object().shape({
  password: yup
    .string()
    .required("El dato Password es necesario")
    .max(18, "Maxímo de caracteres permitidos 18")
    .min(5, "Minínimo de caracteres permitidos 5")
});
export const Register_typeDocumentacion = yup.object().shape({
  password: yup
    .string()
    .required("El dato Password es necesario")
    .max(18, "Maxímo de caracteres permitidos 18")
    .min(5, "Minínimo de caracteres permitidos 5")
});
export const Register_nombre = yup.object().shape({
  password: yup
    .string()
    .required("El dato Password es necesario")
    .max(18, "Maxímo de caracteres permitidos 18")
    .min(5, "Minínimo de caracteres permitidos 5")
});
export const Register_segundoNombre = yup.object().shape({
  password: yup
    .string()
    .required("El dato Password es necesario")
    .max(18, "Maxímo de caracteres permitidos 18")
    .min(5, "Minínimo de caracteres permitidos 5")
});
export const Register_Apellido = yup.object().shape({
  password: yup
    .string()
    .required("El dato Password es necesario")
    .max(18, "Maxímo de caracteres permitidos 18")
    .min(5, "Minínimo de caracteres permitidos 5")
});
export const Register_fechaNacimiento = yup.object().shape({
  password: yup
    .string()
    .required("El dato Password es necesario")
    .max(18, "Maxímo de caracteres permitidos 18")
    .min(5, "Minínimo de caracteres permitidos 5")
});
export const Register_telefono = yup.object().shape({
  password: yup
    .string()
    .required("El dato Password es necesario")
    .max(18, "Maxímo de caracteres permitidos 18")
    .min(5, "Minínimo de caracteres permitidos 5")
});
export const Register_Area = yup.object().shape({
  password: yup
    .string()
    .required("El dato Password es necesario")
    .max(18, "Maxímo de caracteres permitidos 18")
    .min(5, "Minínimo de caracteres permitidos 5")
});
export const Register_Area = yup.object().shape({
  password: yup
    .string()
    .required("El dato Password es necesario")
    .max(18, "Maxímo de caracteres permitidos 18")
    .min(5, "Minínimo de caracteres permitidos 5")
});

