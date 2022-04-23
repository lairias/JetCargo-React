import React, { useEffect } from "react";
//Librerias
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
/**Iportaciones de Reducer */
import { useDispatch, useSelector } from "react-redux";

//Importaciones de las rutas
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import Loaddin from "../components/Spinners/Loaddin";

//Páginas principales
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ResetPassword } from "../pages/ResetPassword";
import { Admin } from "../pages/Admin";

//Componentes de las páginas
import { NotFound } from "../components/Error/NotFound";
import { Header } from "../components/Header/Header";

//Componentes de Inicio de administrativo
import { Widgets } from "../components/Admin/Widgets/Widgets";

//Componentes de Usuarios */
import { GetProfile } from "../components/Admin/users/GetProfile";
import { EditProfile } from "../components/Admin/users/EditProfile";

//Componentes de Usuario de administrativo
import EditNewTrackingPendiente from "../components/Admin/Reception/EditNewTrackingPendiente";
//Componentes params
import { ForgotPassword } from "../pages/ForgotPassword";
//Contexto
import { ShowPackages } from "../components/Package/IndePakage";
import IndexSeguridad  from "../components/Seguridad/IndexSeguridad";
import { GetPackage } from "../components/Package/GetPackage";
import { IndexReceptionCountry } from "../components/Admin/Reception/IndexReceptionCountry";
import IndexTypes from "../components/Admin/TypeUsers/IndexType";
import GetTypeUser from "../components/Admin/TypeUsers/GetTypeUser";
import { startCheckingLogin } from "../actions/authAction";
import IndexCatPackage from "../components/Admin/CategoryPakage/IndexCatPackage";
import IndexHome from "../components/Admin/Home/IndexHome";
import { PayPackage } from "../components/Package/PayPackage";
import OrdenCaptureSucces from "../components/Error/OrdenCapture";
import EmailVery from "../components/Error/EmailVery";
import UpdateInformationTrackin from "../components/Admin/Reception/UpdateInformationTrackin";
import IndexPermisos from "../components/Admin/TypeUsers/IndexPermisos";
import IndexUsers from "../components/Admin/users/IndexUsers";
import IndexCasilleros from "../components/Admin/Casilleros/IndexCasilleros";
import IndexCosto from "../components/Admin/CostoEnvio/IndexCosto";
import IndexCiudades from "../components/Direcciones/IndexCiudades";
import IndexPaises from "../components/Direcciones/IndexPaises";
import IndexDepartementos from "../components/Direcciones/IndexDepartementos";
import IndexErrores from "../components/Error/IndexErrores";
function JetCargoRoutes() {
  const { checking, id } = useSelector((state) => state.auth);
  const distance = useDispatch();
  useEffect(() => {
    distance(startCheckingLogin());
  }, [distance, id]);

  if (checking) {
    return <Loaddin />;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoute isAuthenticated={Boolean(id)} />}>
          <Route path="login" element={<Login />} />
          <Route path="very/email/" element={<EmailVery />} />
          <Route path="register" element={<Register />} />
          <Route
            path="forget-password/:token/:correo/"
            element={<ForgotPassword />}
          />
          <Route path="home" element={<Header />} />
          <Route
            path="reset-password"
            element={
              <>
                <ResetPassword />
              </>
            }
          />
        </Route>

        <Route
          path="/"
          element={<PrivateRoute isAuthenticated={Boolean(id)} />}
        >
          <Route
            path="admin/locker/:NUM_TRACKING"
            element={<OrdenCaptureSucces />}
          />
          <Route
            path="admin"
            element={
              <>
                <Admin>
                  <IndexHome />
                </Admin>
              </>
            }
          />
          <Route
            path="admin/category/package"
            element={
              <>
                <Admin>
                  <IndexCatPackage />
                </Admin>
              </>
            }
          />
          <Route
            path="admin/seguridad"
            element={
              <>
                <Admin>
                  <IndexSeguridad />
                </Admin>
              </>
            }
          />
          <Route
            path="/admin/paises/"
            element={
              <>
                <Admin>
                  <IndexPaises />
                </Admin>
              </>
            }
          />
          <Route
            path="/admin/ciudades/"
            element={
              <>
                <Admin>
                  <IndexCiudades />
                </Admin>
              </>
            }
          />
          <Route
            path="/admin/departamentos/"
            element={
              <>
                <Admin>
                  <IndexDepartementos />
                </Admin>
              </>
            }
          />
          <Route
            path="admin/costoEnvio"
            element={
              <>
                <Admin>
                  <IndexCosto />
                </Admin>
              </>
            }
          />
          <Route
            path="admin/users"
            element={
              <>
                <Admin>
                  <IndexUsers />
                </Admin>
              </>
            }
          />

          <Route
            path="admin/casilleros/"
            element={
              <>
                <Admin>
                  <IndexCasilleros />
                </Admin>
              </>
            }
          />
          <Route
            path="admin/errores/"
            element={
              <>
                <Admin>
                  <IndexErrores />
                </Admin>
              </>
            }
          />
          <Route
            path="admin/trackin_usuarios/"
            element={
              <>
                <Admin>
                  <IndexErrores />
                </Admin>
              </>
            }
          />
          <Route
            path="admin/user/profile/:COD_USER"
            element={
              <>
                <Admin>
                  <GetProfile />
                </Admin>
              </>
            }
          />
          <Route
            path="admin/user/profile/:COD_USER/edit"
            element={
              <>
                <Admin>
                  <EditProfile />
                </Admin>
              </>
            }
          />

          <Route
            path="/admin/locker/:NUM_LOCKER/:COD_LOCKER/packages/"
            element={
              <>
                <Admin>
                  <ShowPackages />
                </Admin>
              </>
            }
          />
          <Route
            path="/admin/locker/:NUM_LOCKER/:COD_LOCKER/packages/:COD_PACKAGE/:COD_TRACKING"
            element={
              <>
                <Admin>
                  <GetPackage />
                </Admin>
              </>
            }
          />
          <Route
            path="/admin/locker/:NUM_LOCKER/:COD_LOCKER/packages/pay/:COD_PACKAGE/:COD_TRACKING"
            element={
              <>
                <Admin>
                  <PayPackage />
                </Admin>
              </>
            }
          />
          <Route
            path="/admin/reception/country/:COD_COUNTRY"
            element={
              <>
                <Admin>
                  <IndexReceptionCountry />
                </Admin>
              </>
            }
          />
          <Route
            path="/admin/reception/country/:COD_COUNTRY/edit/:COD_CUSTOMER/:RECEIVED_TRACKING/:NUM_TRACKING"
            element={
              <>
                <Admin>
                  <EditNewTrackingPendiente />
                </Admin>
              </>
            }
          />
          <Route
            path="/admin/reception/country/:COD_COUNTRY/edit/information/ubication/:COD_ORDEN/:COD_ORIGEN/:COD_DESTINO"
            element={
              <>
                <Admin>
                  <UpdateInformationTrackin/>
                </Admin>
              </>
            }
          />
          <Route
            path="/admin/roles"
            element={
              <>
                <Admin>
                  <IndexTypes />
                </Admin>
              </>
            }
          />
          <Route
            path="/admin/roles/edit/:COD_TYPEUSERS"
            element={
              <>
                <Admin>
                  <IndexPermisos />
                </Admin>
              </>
            }
          />
          <Route
            path="/admin/roles/:COD_TYPEUSERS/view"
            element={
              <>
                <Admin>
                  <GetTypeUser />
                </Admin>
              </>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default React.memo(JetCargoRoutes);
