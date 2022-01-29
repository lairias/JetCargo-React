import * as yup from "yup";

yup.setLocale({

  verificar_contraseña: {
    min: "Número minímo de 5 carácteres",
    max: "Número maxímo de 10 carácteres",
    required: "Campo contraseña  necesario ",
  },
  contaseña: {
    min: "Número minímo de 5 carácteres",
    max: "Número maxímo de 10 carácteres",
    required: "Campo contraseña  necesario ",
  },
  correo: {
    required: "Campo correo necesario",
    email: "Ingrese un formato de correo electrónico valido",
  },
});
export const UserPeople = yup.object().shape({
  correo: yup.string().email().required(),
  contaseña: yup.string().required().min(5).max(10),
  verificar_contraseña: yup.string().required().min(5).max(10),
  });
