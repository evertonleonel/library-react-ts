import React from 'react';
import { render } from '@testing-library/react';
import UserContext, { UserStorage } from '../context/UserContext';

const TestingUserLogin = () => {
  const { userLogin } = React.useContext(UserContext);
  return <></>;
};

describe('UserContext', () => {
  it('userLogin é incorreto', () => {
    const { getByText } = render(
      <UserStorage>
        <></>
      </UserStorage>
    );
  });

  describe('.login', () => {
    it.todo('login autorizado');
  });

  describe('.logout', () => {
    it.todo('login não autorizado');
  });

  describe('.getUser', () => {
    it.todo('User encontrado');
  });
});
