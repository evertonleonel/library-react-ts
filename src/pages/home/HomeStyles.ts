import styled from 'styled-components';

export const MainContainer = styled.main`
  background-color: #f4f4f4;
  width: 100%;
  height: calc(100vh - 96px);
  padding: 24px;
  display: flex;
  justify-content: center;
`;

export const CardsContainer = styled.nav`
  max-width: 1318px;
  max-height: 624px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  background-color: #fff;
  padding: 1.25rem;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Card = styled.div`
  background-color: #f4f4f4;
  max-width: 15.625rem;
  max-height: 14rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 2px;
  cursor: pointer;

  &:hover,
  &:focus {
    transition: 300ms ease-in-out;
    background-color: #ffc501;
  }

  span,
  p {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
  }

  span {
    max-height: 150px;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
    color: #343a40;
    text-align: center;
    letter-spacing: 0px;
    background-color: white;
    height: 74px;

    @media (max-width: 250px) {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;
