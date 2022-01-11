import * as yup  from "yup"

export const inputEmail = yup.object().shape({
    email:yup.string().email().required() ,
})
export const inputPassword = yup.object().shape({
    password:yup.string().required().max(12).min(4)
})