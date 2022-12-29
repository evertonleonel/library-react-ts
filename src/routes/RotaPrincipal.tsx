import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { UserStorage } from '../context/UserContext';
import Login from '../pages/login/Login';
import Header from '../components/header/Header';
import Home from '../pages/home/Home';
import Cadastro from '../pages/cadastro/Cadastro';
import Biblioteca from '../pages/biblioteca/Biblioteca';
import Emprestimo from '../pages/emprestimo/Emprestimo';
import { ModalProvider } from '../context/ModalContext';
import PaginaNaoEncontrada from '../pages/paginaNaoEncontrada/PaginaNaoEncontrada';

function RotaPrincipal() {
  const userLogged = !!localStorage.getItem('user');

  return (
    <BrowserRouter>
      <UserStorage>
        <ModalProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            {userLogged && (
              <Route element={<Header />}>
                <Route path="/home" element={<Home />} />
                <Route path="cadastro" element={<Cadastro />} />
                <Route path="biblioteca" element={<Biblioteca />} />
                <Route path="emprestimo" element={<Emprestimo />} />
              </Route>
            )}
            <Route path="*" element={<PaginaNaoEncontrada />} />
          </Routes>
        </ModalProvider>
      </UserStorage>
    </BrowserRouter>
  );
}

export default RotaPrincipal;
