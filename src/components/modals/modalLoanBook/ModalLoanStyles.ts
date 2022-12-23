import styled from 'styled-components';

export const ModalData = styled.div`
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
    font-size: 1.25rem;

    @media (max-width: 600px) {
      font-size: 1.125rem;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .formData {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;

    @media (max-width: 600px) {
      display: flex;
      flex-direction: column;
    }
  }

  .formButton {
    display: flex;
    justify-content: end;
  }

  .btnEmprestarDevolver {
    max-width: 272px;
    width: 100%;
    margin-top: 16px;
    color: #000;
    font-size: 16px;
    height: 53px;
    font-weight: 600;
    letter-spacing: 0px;
    text-transform: none;
    background-color: #ffc501;
    border: 1px solid #adb5bd;
  }
`;
