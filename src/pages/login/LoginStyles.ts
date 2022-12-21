import styled from 'styled-components';
import Biblioteca from '../../assets/biblioteca.png';
import Retangulo from '../../assets/retangulo.svg';

export const LoginBackground = styled.div`
  height: 100vh;
  background-image: url(${Biblioteca});
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 81.5%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    background-image: url(${Retangulo});
    background-size: cover;
    position: absolute;
  }
`;

export const LoginContainer = styled.div`
  max-width: 27.063rem;
  width: 100%;
  margin: 5%;
  background-color: #ffffff;
  border: 1px solid #70707040;
  border-radius: 8px;
  padding: 56px 40px;
  z-index: 10;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 18.75rem) {
    padding: 56px 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 22.063rem;
    width: 100%;
    gap: 16px;
    margin: 0 auto;

    #email-helper-text,
    #password-helper-text,
    .MuiAlert-message {
      font-size: 12px;
    }

    input {
      font-size: 14px;
      background-color: #f1f3f5;
      border-radius: 4px;
    }
    label {
      font-size: 14px;
    }
  }

  .EsqueciSenha {
    max-width: 22.063rem;
    width: 100%;
    margin: 0 auto 1rem auto;
    color: #000000;
    font-weight: bold;
    font-size: 0.875rem;
    text-align: left;
    text-decoration: underline;
    cursor: pointer;

    :hover {
      color: #ffc501;
      transition: 0.3s;
    }
  }

  .LoginButton {
    max-width: 22.063rem;
    max-height: 2.813rem;
    width: 100%;
    height: 100%;

    .buttonSubmit {
      margin: 0 auto;
      letter-spacing: 0px;
      font-size: 16px;
      font-weight: 800;
      color: #000000;
      text-transform: uppercase;
      background-color: #ffc501;

      :hover {
        outline: 1px solid currentColor;
        transition: 0.6s;
      }
    }

    .buttonDisabled {
      background-color: #ccc;
      color: #495057;
    }
  }
`;

export const LoginLogo = styled.img`
  max-width: 7.5rem;
  max-height: 3rem;
  height: 100%;
  width: 100%;
  margin: 0 auto 3.5rem auto;
`;
