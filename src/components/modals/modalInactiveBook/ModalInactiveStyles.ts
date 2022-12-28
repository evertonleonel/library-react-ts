import styled from 'styled-components';

export const ModalInactiveContainer = styled.div`
  max-width: 804px;
  width: 100%;
  padding: 40px;
  margin-top: 55px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  background-color: #fff;
  border: 1px solid #707070;

  position: relative;

  .MuiFormHelperText-root {
    color: #ffc501;
    font-size: 15px;
  }

  .buttonCloseModal {
    position: absolute;
    right: 0;
    top: 0;
    padding: 24px;
  }

  @media (max-width: 900px) {
    margin: 24px;
  }

  h2 {
    color: #3e4756;
    font-size: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .formButton {
    display: flex;
    justify-content: flex-end;
  }

  .btnSubmit {
    font-size: 16px;
    text-transform: none;
    height: 53px;
  }
`;
