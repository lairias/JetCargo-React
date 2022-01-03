import {BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from "./pages/Login";
import { NotFound } from "./components/Error/NotFound";
import { Register } from './pages/Register';
import { ResetPassword } from './pages/ResetPassword';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
