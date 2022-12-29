import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  z-index: 10;
  overflow: auto;
`;

export const ModalBookContainer = styled.div`
  margin-top: 55px;
  max-width: 816px;
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #707070;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 60px;
  padding: 40px;
  overflow: auto;
  position: relative;

  .buttonCloseModal {
    position: absolute;
    right: 0;
    top: 0;
    padding: 24px;
  }

  @media (max-width: 900px) {
    margin: 55px 24px 24px 24px;
  }

  .dataBookContent {
    display: flex;
    gap: 40px;
    margin-top: 30px;
    width: 100%;

    @media (max-width: 700px) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }

  .dataStudent {
    width: 100%;
    h2,
    h3,
    p {
      color: #3e4756;
    }

    h2 {
      font-size: 20px;
      margin-bottom: 16px;
    }

    h3 {
      font-size: 16px;
      margin-bottom: 8px;
    }
  }
  .dataReason {
    overflow: auto;

    text-overflow: ellipsis;
    background-color: #f4f4f4;
    padding: 16px;
  }
  .dataExtraReason {
    @media (max-width: 800px) {
      overflow: auto;
    }

    table {
      max-width: 736px;
      width: 100%;

      thead {
        th {
          font-weight: 600;
        }
      }

      th {
        padding-right: 72px;
        text-align: left;
        font-size: 16px;
        color: #3e4756;
        font-weight: 300;
      }
    }
  }
`;

export const ContainerLeft = styled.div`
  max-width: 272px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;

  img {
    max-height: 390px;
    height: 100%;
  }

  @media (max-width: 500px) {
    width: 70%;
    gap: 20px;
  }

  .btnEmprestarDevolver {
    color: #000000;
    font-size: 16px;
    letter-spacing: 0px;
    text-transform: none;
    max-height: 53px;
    height: 53px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media (max-width: 360px) {
      height: 100%;
    }
  }
`;

export const ContainerRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 490px) {
    gap: 2.5rem;
  }

  h2,
  h3,
  h4,
  p {
    color: #3e4756;
  }

  h2 {
    font-size: 20px;
    font-weight: 500;
  }
  h3 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 8px;
    margin-top: 24px;
  }
  p {
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 24px;
  }

  .dataBookInfo {
    max-height: 390px;
    height: 100%;
    h2 {
      text-align: center;
    }
  }

  .dataButtons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    font-size: 16px;

    @media (max-width: 390px) {
      gap: 10px;
      flex-wrap: wrap;
    }

    .btnEdit {
      font-size: 16px;
      text-transform: none;
      height: 53px;
    }
  }
`;
