import {BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from "./pages/Login";
import { NotFound } from "./components/Error/NotFound";
import { Register } from './pages/Register';
import { ResetPassword } from './pages/ResetPassword';
import { Fooder } from './components/Fooder/Fooder';
import {Header} from "./components/Header/Header"


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<> <Login />  <Fooder /></> } />
          <Route path="/register" element={<>  <Register /> <Fooder /> </>} />
          <Route path="/reset-password" element={<> <ResetPassword /> <Fooder /></>} />
          <Route path="/" element={<> <Header /> <Fooder /></>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
