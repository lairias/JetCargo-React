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


//Contexto

import {UserContextProvider}from "./context/UserContext"


function App() {
  
  return (
    <UserContextProvider >
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<> <Login />  <Fooder /></> } />
          <Route path="/Admin" element={<> <Admin />  <Fooder /></> } />
          <Route path="/login" element={<> <Login />  <Fooder /></> } />
          <Route path="/register" element={<>  <Register /> <Fooder /> </>} />
          <Route path="/reset-password" element={<> <ResetPassword /> <Fooder /></>} />
          <Route path="/" element={<> <Header /> <Fooder /></>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
