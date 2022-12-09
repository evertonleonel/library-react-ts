import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 9.6rem;
  padding: 24px 34px;
  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 360px) {
    padding: 24px;
  }
`;

export const HeaderLogo = styled.div`
  max-width: 12rem;
  height: 4.8rem;
  width: 100%;
`;

export const HeaderUsuario = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }

  img:nth-child(3) {
    width: 23px;
  }

  p {
    font-size: 18px;
    color: #495057;
    margin-left: 4px;

    @media (max-width: 360px) {
      display: none;
    }
  }
`;
