import styled from 'styled-components';

export const MainContainer = styled.main`
  background-color: #f4f4f4;
  height: calc(100vh - 96px);
  padding: 24px;

  @media (max-width: 1050px) {
    height: 100%;
  }
`;

export const CadastroContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 117px;
  background-color: #fff;
  padding: 24px;
  border-radius: 5px;

  @media (max-width: 360px) {
    flex-direction: column;
    gap: 40px;
    padding: 14px;
    height: 100%;
  }
`;

export const CadastroDados = styled.div`
  width: 100%;
  margin: 0 auto;

  form {
    max-width: 59rem;
    display: grid;
    margin: 0 auto;
    gap: 30px;

    grid-template-areas:
      'image tittle author'
      'image synopsis genre'
      'image synopsis date'
      '. btnCancel btnSave';

    @media (max-width: 1050px) {
      place-items: center;
      grid-template-areas:
        'image image'
        'tittle author '
        'synopsis genre'
        'synopsis date'
        'btnCancel btnSave';
    }

    @media (max-width: 850px) {
      display: flex;
      flex-direction: column;
    }
  }

  .formImage {
    grid-area: image;
    width: 10.75rem;
    height: 12.875rem;
    margin-right: 24px;
    color: #ffc501;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: cover;
    border: 2px dashed currentColor;
    position: relative;

    input {
      position: absolute;
      width: 100%;
      height: 100%;
      color: transparent;
      cursor: pointer;
    }

    input::file-selector-button {
      display: none;
    }

    span {
      display: flex;
      gap: 8px;
    }

    @media (max-width: 450px) {
      margin: 0 auto;
    }

    @media (max-width: 270px) {
      width: 100%;
    }
  }

  .formTittle {
    grid-area: tittle;
    max-width: 21.875rem;
    height: 3.313rem;
    width: 100%;
  }
  .formAuthor {
    grid-area: author;
    max-width: 21.875rem;
    height: 3.313rem;
    width: 100%;
  }
  .formGenre {
    grid-area: genre;
    max-width: 21.875rem;
    width: 100%;
    height: 3.313rem;

    select {
      padding: 6px;
      font-size: 16px;
      width: 100%;
      height: 100%;
      background-color: #ffffff;
      border-color: #133052;
      border: 1px solid #133052;
      border-radius: 5px;
      padding: 14px;
      font-family: Roboto, sans-serif;

      option {
        font-size: 16px;
        margin-top: 10px;
      }
    }
  }
  .formSynopsis {
    grid-area: synopsis;
    width: 21.875rem;
    height: 129px;
  }
  .formDate {
    grid-area: date;
    max-width: 21.875rem;
    height: 3.313rem;
    width: 100%;
  }

  .formTittle,
  .formSynopsis {
    @media (max-width: 450px) {
      width: 100%;
    }
  }

  .formButtons {
    grid-area: btnSave;
    max-width: 353px;
    width: 100%;
    height: 53px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 400px) {
      gap: 10px;
      justify-content: center;
    }
  }

  .btnCancel,
  .btnSave {
    width: 143px;
    height: 53px;
    font-weight: 600;
    font-size: 16px;
    color: #000000;
    letter-spacing: 0px;
    border-radius: 5px;
  }

  .btnCancel {
    grid-area: btnCancel;
    background-color: '#fff';
    border: 1px solid #133052;
    text-overflow: ellipsis;
    overflow: hidden;

    :hover {
      color: #ed5e5e;
      border: 1px solid currentColor;
      transition: 0.3s ease-in-out;
    }
  }

  .btnSave {
    grid-area: btnSave;
    background-color: #ffc501;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    :hover {
      color: #ffc501;
      border: 1px solid currentColor;
      transition: 0.3s ease-in-out;
    }
  }

  .MuiInputBase-input {
    font-size: 16px;
    color: #3e4756;
    letter-spacing: 0px;
    font-family: 'Roboto', sans-serif;
  }

  label {
    font-size: 16px;
  }

  .MuiButtonBase-root {
    color: #3e4756;
    font-size: 16px;
  }

  /* 
  HELPERTEXT 
  */
  .MuiFormHelperText-root {
    color: #ffc501;
  }
`;
