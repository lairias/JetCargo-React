import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { VeryTokenCorreoPasswordService } from "../service/ServicePassword";
import { Header } from "../components/ForgotPassword/Header";
import { useDispatch } from "react-redux";
import { TokenNotValid } from "../components/Error/TokenNotValid";
export const ForgotPassword = () => {
  const [veryToken, set_veryToekn] = useState(false);
  const [SpinnerLoader, set_SpinnerLoader] = useState(true);
  const { token, correo } = useParams();
  const dispatch = useDispatch();
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
  }, [correo, dispatch, token]);
  return (
    <>
      {veryToken ? (
        <Header
          email={correo}
          veryToken={veryToken}
          SpinnerLoader={SpinnerLoader}
          token={token}
        />
      ):(
        <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
          <div className="flex-1 h-full max-w-sm mx-auto overflow-hidden border-white border-2 bg-white rounded-lg shadow-xl dark:bg-gray-200">
            <form className="flex items-center justify-center p-6    ">
              <TokenNotValid />
            </form>
          </div>
        </div>
      )}
    </>
  );
};
