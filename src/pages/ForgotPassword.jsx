import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import jwt from "jwt-decode";
import { VeryTokenCorreoPasswordService } from "../service/ServicePassword";
import { Header } from "../components/ForgotPassword/Header";
import { useDispatch } from "react-redux";
export const ForgotPassword = () => {
  const [veryToken, set_veryToekn] = useState(false);
  const [SpinnerLoader, set_SpinnerLoader] = useState(true);
  const { token, correo } = useParams();

  const dispatch = useDispatch();

  const { id } = jwt(token);
 


  useEffect(() => {
    
    VeryTokenCorreoPasswordService(correo).then((element) => {
      if (correo === element.data.EMAIL && token === element.data.API_TOKEN) {
        set_SpinnerLoader(false);
        set_veryToekn(true);
      } else {
        set_SpinnerLoader(false);
        set_veryToekn(false);
      }
    });
  }, [correo,dispatch,token]);
  return (
    <>
      <Header
        email={correo}
        veryToken={veryToken}
        SpinnerLoader={SpinnerLoader}
        token={token}
        id={id}
      />
    </>
  );
};
