//Librerias
import {BrowserRouter, Route, Routes } from 'react-router-dom'

//Páginas principales
import { Login } from "./pages/Login";
import { Register } from './pages/Register';
import { ResetPassword } from './pages/ResetPassword';
import { Admin } from './pages/Admin';

//Componentes de las páginas
import { NotFound } from "./components/Error/NotFound";
import { Fooder } from './components/Fooder/Fooder';
import {Header} from "./components/Header/Header"

//Componentes de Inicio de administrativo
import { Widgets } from './components/Admin/Widgets/Widgets';

//Componentes de Usuario de administrativo

//Componentes params
import {ForgotPassword} from "./pages/ForgotPassword"
//Contexto
import { UserContextProvider } from "./context/users/UserContext.js";
import {PermissionContextProvider} from "./context/users/Permission/PermissionContex";
function App() {
  return (
    <PermissionContextProvider >
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<> <Login /></> } />
          <Route path="/admin" element={<> <Admin> <Widgets/> </Admin> </> } />
          <Route path="/admin/user/profile/:COD_USER" element={<> < Admin> Hola </Admin>  </> } />
          <Route path="/register" element={<>  <Register />  </>} />
          <Route path="/forget-password/:token/:correo" element={<> <ForgotPassword /> </>} />
           <Route path="/reset-password" element={<> <ResetPassword /> <Fooder /></>} />
          <Route path="/" element={<> <Header /> <Fooder /></>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
    </PermissionContextProvider>
  );
}

export default App;
