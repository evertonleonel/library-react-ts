import styled from 'styled-components';

export const EmprestimoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;

  border-radius: 5px;
  padding: 24px;
  margin: 24px;
  gap: 40px;
`;

export const TabelaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 auto;

  background-color: #fff;

  position: relative;

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
