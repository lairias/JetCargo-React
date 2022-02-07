import * as yup from "yup";

export const ResetChema = yup.object().shape({
  email: yup.string().email().required(),
});
