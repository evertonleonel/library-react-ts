import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { UserStorage } from '../context/UserContext';
import Login from '../pages/login/Login';
import Header from '../components/header/Header';
import Home from '../pages/home/Home';
import Cadastro from '../pages/cadastro/Cadastro';
import Biblioteca from '../pages/biblioteca/Biblioteca';
import Emprestimo from '../pages/emprestimo/Emprestimo';

function RotaPrincipal() {
  const userLogged = !!localStorage.getItem('user');

  return (
    <BrowserRouter>
      <UserStorage>
        <Routes>
          <Route path="/login" element={<Login />} />
          {userLogged && (
            <Route path="/" element={<Header />}>
              <Route path="home" element={<Home />} />
              <Route path="cadastro" element={<Cadastro />} />
              <Route path="biblioteca" element={<Biblioteca />} />
              <Route path="emprestimo" element={<Emprestimo />} />
            </Route>
          )}
        </Routes>
      </UserStorage>
    </BrowserRouter>
  );
}

export default RotaPrincipal;
