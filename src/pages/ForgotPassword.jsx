import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import jwt from "jwt-decode";
import { VeryTokenCorreoPasswordService } from "../service/ServicePassword";
import { Header } from "../components/ForgotPassword/Header";
export const ForgotPassword = () => {
  const [veryToken, set_veryToekn] = useState(false);
  const [SpinnerLoader, set_SpinnerLoader] = useState(true);
  const { token, correo } = useParams();
  const { email, id } = jwt(token);
  useEffect(() => {
    VeryTokenCorreoPasswordService(email).then((element) => {
      if (correo === element.data.EMAIL) {
        set_SpinnerLoader(false);
        set_veryToekn(true);
      } else {
        set_SpinnerLoader(false);
        set_veryToekn(false);
      }
    });
  }, [correo, email]);
  return (
    <>
      <Header
        email={email}
        veryToken={veryToken}
        SpinnerLoader={SpinnerLoader}
        token={token}
        id={id}
      />
    </>
  );
};
