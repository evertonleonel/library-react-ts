import styled from 'styled-components';

export const BibliotecaContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;

  border-radius: 5px;
  gap: 48px;
  padding: 24px;
  margin: 24px;
`;

export const PesquisaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 32px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 28px;
  background-color: #fff;

  @media (max-width: 650px) {
    flex-direction: column;
  }

  .buscar {
    display: flex;
    align-items: center;

    max-width: 41.625rem;
    width: 100%;
    height: 53px;
    gap: 16px;
    padding: 16px;
    border-radius: 5px;
    border: solid 1px #adb5bd;
    background-color: #fff;
    :hover {
      border-color: #167ce2;
    }

    input {
      border: none;
      outline: none;
      width: 100%;
      height: 26px;
      font-size: 16px;
      color: #adb5bd;
    }
  }

  .filtrar {
    max-width: 16.25rem;
    width: 100%;
    background-color: white;
  }
`;

export const LivrosContainer = styled.div`
  max-width: 1140px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const Livros = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(196px, 1fr));
  gap: 2.5rem;
  place-items: center;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 40px auto 40px auto;
  }
`;

export const LivroCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-height: 261px;
  max-width: 196px;
  width: 100%;
  height: 100%;

  gap: 16px;
  padding: 24px;
  border-radius: 5px;
  border-radius: 5px;
  background-color: #f4f4f4;

  cursor: pointer;
  transition: 0.3s;

  img {
    width: 108px;
    height: 155px;
    display: block;
  }
  h2 {
    text-align: center;
    font-size: 16px;
    color: #3e4756;
  }

  @media (max-width: 280px) {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;
