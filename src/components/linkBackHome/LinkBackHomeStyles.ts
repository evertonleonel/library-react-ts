import styled from 'styled-components';

export const NavegationContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.25rem;
  color: #00000080;

  @media (max-width: 400px) {
    flex-direction: column;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    @media (max-width: 400px) {
    }

    :hover {
      color: #ffc501;
    }
  }

  p {
    color: #000000;
    font-weight: 700;
    margin-left: 5px;
  }
`;
