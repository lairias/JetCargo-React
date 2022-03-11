import * as yup from "yup";

yup.setLocale({
  confirpassword: {
    min: "Número minímo de 5 carácteres",
    max: "Número maxímo de 10 carácteres",
    required: "Campo contraseña  necesario ",
  },
  password: {
    min: "Número minímo de 5 carácteres",
    max: "Número maxímo de 10 carácteres",
    required: "Campo contraseña  necesario ",
  },
  email: {
    required: "Campo correo necesario",
    email: "Ingrese un formato de correo electrónico valido",
  },
});
export const UserPeople = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(5).max(10),
  confirpassword: yup.string().required().min(5).max(10),
});
