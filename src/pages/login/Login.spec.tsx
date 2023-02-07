import '@testing-library/jest-dom';
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import LoginForm from './Login';
import UserContext, { UserStorage } from '../../context/UserContext';

// vi.spyOn.on(arquivo, metodo/objeto)

// const mockNavigate = jest.fn();

// jest.mock('react-router', () => {
//   ...jest.requireActual('react-router'),
//   useNavigate: () => mockNavigate
// });

// const userStorageSpy = vi.spyOn(UserStorage, 'UserStorage');

// const TestingUserLogin = () => {
//   const { userLogin } = React.useContext(UserContext);
//   return (
//     <>

//     </>
//   )
// };

const formSubmit = vi.fn();
console.log(formSubmit);

const loginForm = () => render(<LoginForm />);

describe('<LoginForm />', () => {
  it('Deve renderizar o form', async () => {
    loginForm();

    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('Deve renderizar o input de email ', async () => {
    const { getByTestId } = loginForm();

    const inputEmail = getByTestId('email');

    expect(inputEmail).toBeInTheDocument();
  });

  it('Deve renderizar o input de password ', async () => {
    const { getByTestId } = loginForm();

    const inputPassword = getByTestId('password');

    expect(inputPassword).toBeInTheDocument();
  });

  it('Deve renderizar o button ', async () => {
    loginForm();

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  // it('Deve verificar o usario digitando nos inputs ', async () => {
  //   const { getByRole, getByTestId } = render(<LoginForm />);

  //   const inputEmail = getByTestId('email');
  //   const inputPassword = getByTestId('password');
  //   const button = getByRole('button');
  //   const form = screen.getByRole('form');

  //   expect(inputEmail).toBeInTheDocument();
  //   expect(inputPassword).toBeInTheDocument();
  //   expect(button).toBeInTheDocument();

  //   await userEvent.type(inputEmail, 'admin@email.com.br');
  //   await userEvent.type(inputPassword, 'admin123');
  //   userEvent.click(button);
  //   // fireEvent.change(inputEmail, 'admin@email.com.br');
  //   // fireEvent.change(inputPassword, 'admin123');
  //   // userStorageSpy.mockReturnValue({userLogin:'admin@email.com.br','admin123' })
  //   // expect(formSubmit).toBeCalledTimes(1);

  //   // await waitFor(() => {
  //   //   fireEvent.click(form);
  //   // });
  // });

  it('Context', () => {
    const value = {
      email: 'admin@admin.com.br',
      password: 'admin123',
    };

    render(
      <UserStorage>
        <LoginForm />
      </UserStorage>
    );

    expect(screen.getByTestId(/^login/).textContent).toBe('true');
  });
});
