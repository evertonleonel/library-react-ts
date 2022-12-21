import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6rem;
  padding: 24px 34px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 250px) {
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 20px;
    gap: 20px;
    justify-content: center;
  }
`;

export const HeaderLogo = styled.div`
  max-width: 7.5rem;
  height: 3rem;
  width: 100%;
  cursor: pointer;
`;

export const HeaderUsuario = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }

  img:nth-child(3) {
    margin-left: 4px;
    width: 16px;
  }

  p {
    font-size: 18px;
    color: #495057;
    margin-left: 4px;

    @media (max-width: 600px) {
      display: none;
    }
  }
`;
