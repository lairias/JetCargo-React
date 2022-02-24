import React, { useEffect } from "react";
//Librerias
import { BrowserRouter, Route, Routes } from "react-router-dom";

/**Iportaciones de Reducer */
import { useDispatch, useSelector } from "react-redux";

//Importaciones de las rutas
import { PublicRoute } from "../routes/PublicRoute";
import { PrivateRoute } from "../routes/PrivateRoute";
import Loaddin from "../components/Spinners/Loaddin";

//Páginas principales
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ResetPassword } from "../pages/ResetPassword";
import { Admin } from "../pages/Admin";

//Componentes de las páginas
import { NotFound } from "../components/Error/NotFound";
import { Fooder } from "../components/Admin/Fooder/Fooder";
import { Header } from "../components/Header/Header";

//Componentes de Inicio de administrativo
import { Widgets } from "../components/Admin/Widgets/Widgets";

//Componentes de Usuarios */
import { GetProfile } from "../components/Admin/users/GetProfile";
import { EditProfile } from "../components/Admin/users/EditProfile";

//Componentes de Usuario de administrativo

//Componentes params
import { ForgotPassword } from "../pages/ForgotPassword";
//Contexto
import { ShowPackages } from "../components/Package/IndePakage";
import { GetPackage } from "../components/Package/GetPackage";
import { IndexReceptionCountry } from "../components/Admin/Reception/IndexReceptionCountry";
import IndexTypes from "../components/Admin/TypeUsers/IndexType";
import GetTypeUser from "../components/Admin/TypeUsers/GetTypeUser";
import { startCheckingLogin } from "../actions/authAction";
function JetCargoRoutes() {
  const { checking, id  } = useSelector((state) => state.auth);
  const distance = useDispatch();
  useEffect(() => {
    distance(startCheckingLogin());
  }, [distance]);

  if (checking) {
    return <Loaddin />;
  }
  return (
    <BrowserRouter>
      <Routes>
        {/******************************** LOGIN*/}
        <Route path="/" element={<PublicRoute isAuthenticated={!!id} />}>
          <Route path="login" element={<Login />} />
        </Route>

        {/******************************** REGISTER*/}
        <Route path="/" element={<PublicRoute isAuthenticated={!!id} />}>
          <Route path="register" element={<Register />} />
        </Route>

        {/******************************** Forgot Password */}
        <Route
          path="/forget-password/:token/:correo"
          element={<ForgotPassword />}
        />

        {/******************************** INICIO*/}
        <Route path="/" element={<PublicRoute isAuthenticated={!!id} />}>
          <Route path="home" element={<Header />} />
        </Route>
        {/******************************** ADMIN-INICIO*/}
        <Route path="/" element={<PrivateRoute isAuthenticated={!!id} />}>
          <Route
            path="admin"
            element={
              <>
                <Admin>
                  <Widgets />
                </Admin>
              </>
            }
          />
        </Route>
        {/******************************** ADMIN-USER*/}
        {/************ GET-USER*/}
        <Route
          path="/admin/user/profile/:COD_USER"
          element={
            <>
              {" "}
              <Admin>
                {" "}
                <GetProfile /> <Fooder />{" "}
              </Admin>{" "}
            </>
          }
        />
        {/************ EDIT-USER*/}
        <Route
          path="/admin/user/profile/:COD_USER/edit"
          element={
            <>
              <Admin>
                {" "}
                <EditProfile />
                <Fooder />
              </Admin>
            </>
          }
        />
        {/******************************** ADMIN-USER*/}
        {/************ NEW-PACKAGE*/}
        <Route
          path="/admin/packages/new"
          element={
            <>
              <Admin>
                {" "}
                <Fooder />{" "}
              </Admin>{" "}
            </>
          }
        />

        {/************ GET-PACKAGE*/}
        <Route
          path="/admin/packages/"
          element={
            <>
              <Admin>
                {" "}
                <ShowPackages /> <Fooder />{" "}
              </Admin>{" "}
            </>
          }
        />
        <Route
          path="/admin/packages/:COD_PACKAGE"
          element={
            <>
              <Admin>
                {" "}
                <GetPackage /> <Fooder />{" "}
              </Admin>{" "}
            </>
          }
        />

        {/******************************** ADMIN-recepcion*/}
        {/************ GET-PACKAGE-FOR-COUNTRY-ADMIN*/}
        <Route
          path="/admin/reception/country/:COD_COUNTRY"
          element={
            <>
              <Admin>
                {" "}
                <IndexReceptionCountry />{" "}
              </Admin>{" "}
            </>
          }
        />

        <Route
          path="/reset-password"
          element={
            <>
              {" "}
              <ResetPassword /> <Fooder />
            </>
          }
        />
        {/************ CREATE-USER*/}

        {/******************************** ADMIN-TYPE-USERS*/}
        <Route
          path="/admin/roles"
          element={
            <>
              <Admin>
                {" "}
                <IndexTypes />
              </Admin>{" "}
            </>
          }
        />
        <Route
          path="/admin/roles/:COD_TYPEUSERS/view"
          element={
            <>
              <Admin>
                {" "}
                <GetTypeUser />
              </Admin>{" "}
            </>
          }
        />

        {/******************************** NOFOUND*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default React.memo(JetCargoRoutes);
