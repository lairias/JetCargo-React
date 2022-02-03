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

//Componentes params
import {ForgotPassword} from "./pages/ForgotPassword"
//Contexto
import {AuthProvider} from "./context/auth/index"
import { TokenPassProvider } from "./context/token/index";
import { UserContextProvider } from "./context/users/UserContext.js";
function App() {
  return (
    <UserContextProvider>
          <TokenPassProvider >
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<> <Login /></> } />
          <Route path="/Admin" element={<> <Admin />  <Fooder /></> } />
          <Route path="/register" element={<>  <Register />  </>} />
          <Route path="/forget-password/:token/:correo" element={<> <ForgotPassword /> </>} />
           <Route path="/reset-password" element={<> <ResetPassword /> <Fooder /></>} />
          <Route path="/" element={<> <Header /> <Fooder /></>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
          </TokenPassProvider>
    </UserContextProvider>
  );
}

export default App;
