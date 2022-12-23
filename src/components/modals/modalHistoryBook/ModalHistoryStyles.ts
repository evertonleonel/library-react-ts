import styled from 'styled-components';

export const ModalHistoryContainer = styled.div`
  max-width: 1058px;
  width: 100%;
  padding: 40px;
  margin-top: 55px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  background-color: #fff;
  border: 1px solid #707070;
  position: relative;

  .buttonCloseModal {
    position: absolute;
    right: 0;
    top: 0;
    padding: 24px;
  }

  @media (max-width: 1100px) {
    margin: 50px 20px 20px 20px;
  }

  @media (max-width: 600px) {
    margin: 40px 15px 20px 15px;
    padding: 30px;
  }

  @media (max-width: 360px) {
    margin: 30px 10px 20px 10px;
    padding: 20px;
  }

  h2 {
    color: #3e4756;
    font-size: 20px;
  }

  .search {
    border-bottom: 1px solid #000;
    max-width: 105px;
    width: 100%;
    max-height: 21px;
    display: flex;
    gap: 4px;

    img {
      width: 18px;
      height: 12px;
    }

    input {
      font-size: 16px;
    }
  }

  .MuiTableCell-root {
    padding-left: 42px;
    font-size: 16px;
    color: #000000;
  }

  .MuiTableCell-head {
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #ffc501;

    font-weight: 600;
  }
`;
