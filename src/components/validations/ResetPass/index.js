import * as yup from "yup";

yup.setLocale({
  mixed: {
    default: "Dato no valido",
  },
});

export const ResetChema = yup.object().shape({
  email: yup.string().email().required()
});
