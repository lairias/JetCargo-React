import * as yup from "yup";
//******************Validaciones de Login */

export const Login_email = yup.object().shape({
  email: yup
    .string()
    .email("Ingreser un correo electrónico valido")
    .required("El dato Email es necesario"),
});
export const Login_password = yup.object().shape({
  password: yup.string().required("El dato Password es necesario"),
});

//******************Validaciones de Registro */
export const Register_email = yup.object().shape({
  email: yup
    .string()
    .required("El dato email es necesario")
    .email("Ingrese un correo electrónico valido")
    .min(5, "El dato email minínimo de caracteres permitidos 5")
    .max(30, "El dato email minínimo de caracteres permitidos 5"),
});
export const Register_password = yup.object().shape({
  password: yup
    .string()
    .trim("La contraseña no puede contener espacios")
    .strict(true)
    .required("El dato Password es necesario")
    .min(5, "La contraseña minínimo de caracteres permitidos 5")
    .max(18, "La contraseña maxímo de caracteres permitidos 18"),
});
export const Register_Identificacion = yup.object().shape({
  identificacion: yup
    .string("La identificación no permite letras")
    .required("El dato identificación es necesario")
    .trim("El dato identificación  no puede contener espacios")
    .strict(true),
});
export const Register_typeDocumentacion = yup.object().shape({
  tipodocumento: yup
    .string()
    .required("El dato tipodocumento es necesario")
    .matches(/(ID|PASSPORT|LICENSE)/),
});
export const Register_nombre = yup.object().shape({
  nombre: yup
    .string()
    .trim("El dato  nombre  no puede contener espacios")
    .strict(true)
    .max(15, "El dato  nombre maxímo de caracteres permitidos 15")
    .min(2, "El dato  nombre minínimo de caracteres permitidos 3")
    .required("El dato nombre es necesario"),
});
export const Register_segundoNombre = yup.object().shape({
  segundoNombre: yup
    .string()
    .trim("El segundo nombre  no puede contener espacios")
    .strict(true)
    .max(20, "El dato segundo  nombre maxímo de caracteres permitidos 15")
    .min(2, "El dato segundo  nombre minínimo de caracteres permitidos 3")
    .required("El dato segundo Nombre es necesario"),
});
export const Register_Apellido = yup.object().shape({
  apellido: yup
    .string()
    .trim("El apellido  no puede contener espacios")
    .strict(true)
    .required("El dato apellido es necesario")
    .max(15, "El dato apellido maxímo de caracteres permitidos 12")
    .min(2, " El dato apellido minímo de caracteres permitidos 7"),
});
export const Register_fechaNacimiento = yup.object().shape({
  fechaNacimiento: yup
    .string("El dato fecha de nacimiento  es invalido")
    .nullable("El dato fecha de nacimiento  es invalido")
    .min(new Date(1900, 0, 1), "El dato Fecha de nacimiento  es invalido")
    .required("El dato fecha nacimiento es necesario"),
});
export const Register_Nacimiento = yup.object().shape({
  añoNacimiento: yup
    .number("El dato año de nacimiento  es invalido")
    .required("El dato año de nacimiento  es necesario")
    .integer("El dato año de nacimiento  es invalido")
    .positive("El dato año de nacimiento  es invalido"),
});
export const Register_telefono = yup.object().shape({
  telefono: yup
  .string("El dato teléfono es necesario")
    .required("El dato teléfono es necesario")
    .max(17, "El dato teléfono maxímo de caracteres permitidos 12")
    .min(7, " El dato teléfono minímo de caracteres permitidos 7 "),
});
export const Register_Area = yup.object().shape({
  area: yup.string().required("El dato aréa es necesario"),
});
export const Register_Descripcion = yup.object().shape({
  desDireccion: yup
    .string()
    .required("El dato Dirección es necesario")
    .max(100, "El dato Dirección maxímo de caracteres permitidos 100")
    .min(5, " El dato Dirección minímo de caracteres permitidos 5"),
});
export const Register_Pais = yup.object().shape({
  pais: yup.string().nullable().required("El dato país es necesario"),
});
export const Register_departamento = yup.object().shape({
  departamento: yup
    .string()
    .nullable()
    .required("El dato departamento es necesario"),
});
export const Register_ciudad = yup.object().shape({
  ciudad: yup.string().nullable().required("El dato ciudad es necesario"),
});

//Validacioens de nueva categoria de paquetes
export const nombre_CategoriPaquete = yup.object().shape({
  nombre: yup.string().nullable().required("El dato es nombre es necesario"),
});
export const descripcion_CategoriPaquete = yup.object().shape({
  descripcion: yup
    .string()
    .nullable()
    .required("El dato es descripción es necesario"),
});

//Validaciones de tracking-normal leading-4">
export const tracking_normal = yup.object().shape({
  tracking: yup
    .string()
    .nullable()
    .required("El dato es tracking es necesario")
    .max(20, "El dato tracking maxímo de caracteres permitidos 20")
    .min(4, " El dato tracking minímo de caracteres permitidos 4 "),
});
export const service_normal = yup.object().shape({
  service: yup.number().nullable().required("El dato es servicio es necesario"),
});
export const nombrePackage = yup.object().shape({
  NAME_PACKAGE: yup
    .string()
    .nullable()
    .required("El dato es nombre de paquete  es necesario"),
});
export const desPackage = yup.object().shape({
  DES_PACKAGE: yup
    .string()
    .nullable()
    .required("El dato es descripción paquete es necesario"),
});
