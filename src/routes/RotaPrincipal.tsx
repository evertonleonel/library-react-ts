import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Login from '../pages/login/Login';

function RotaPrincipal() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RotaPrincipal;
