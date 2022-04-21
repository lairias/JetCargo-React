import { LoginService } from "../service/ServiceLogin";
import toast from "react-hot-toast";
import { types } from "../types/types";
import { Login_email, Login_password } from "../components/validations";
import { RenewTokenService } from "../service/ServiceToken";

//Acciones para el login
export function StarLogin(correo, password) {
  return async function (dispatch) {
    //-----------Validaciones del input de formulario
    const DataEmail = await Login_email.validate({ email: correo }).catch(
      function (err) {
        toast.error(`${err.errors}`, { duration: 3000 });
      }
    );

    const DataPass = await Login_password.validate({
      password: password,
    }).catch(function (err) {
      toast.error(`${err.errors}`, { duration: 3000 });
    });
    //-----------Validaciones del input de formulario
    if (DataEmail && DataPass) {
      //-----------Peticion al la base de datos verificando el usuario
      const { data } = await LoginService({
        EMAIL: correo,
        PAS_USER: password,
      });
      if (data.token) {
        console.log(data);
        const PermisosAray = new Array();
        data.PermissionUser.forEach((element) => {
          PermisosAray.push(element.NAM_PERMISOS);
        });
        localStorage.setItem("Jet-Cargo_jwt_login", data.token);
        localStorage.setItem(
          "Jet-Cargo_jwt_login_expiration_time",
          new Date().getTime()
        );
        dispatch(
          login({
            id: data.COD_USER,
            name: data.NAME,
            lastname: data.LASTNAME,
            email: data.EMAIL,
            IND_INS: data.IND_INS,
            img_perfil: data.IMG_FHOTO,
            permission: PermisosAray,
            customer: data.CustomerUser,
          })
        );
      } else {
        return [
          toast.error(`${data.message}`, { duration: 3000 }),
          window.sessionStorage.removeItem("Jet-Cargo_jwt_login"),
        ];
      }
    }
  };
}

//Acciones para serrar sesion
export function Logout() {
  return async function (dispatch) {
    localStorage.clear();
    dispatch(logout());
  };
}

//acciones para renovar token
export function startCheckingLogin() {
  return async function (dispatch) {
    const data = await RenewTokenService();
    if (data.ok) {
      console.log(data)
      const PermisosAray = new Array();
      data.PermissionUser.forEach((element) => {
        PermisosAray.push(element.NAM_PERMISOS);
      });

      localStorage.setItem("Jet-Cargo_jwt_login", data.token);
      localStorage.setItem(
        "Jet-Cargo_jwt_login_expiration_time",
        new Date().getTime()
      );
      dispatch(
        login({
          id: data.COD_USER,
          name: data.NAME,
          lastname: data.LASTNAME,
          email: data.EMAIL,
          IND_INS: data.IND_INS,
          img_perfil: data.IMG_FHOTO,
          permission: PermisosAray,
          customer: data.CustomerUser,
        })
      );
    } else {
      dispatch(checkingFinish());
    }
  };
}

const checkingFinish = () => ({
  type: types.authCheckingFinish,
});

const login = (user) => ({
  type: types.authLogin,
  payload: user,
});
const logout = () => ({
  type: types.logout,
});
