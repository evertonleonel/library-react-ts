import React, { createContext, useState } from 'react';

interface IProps {
  children: React.ReactNode;
}

export type TObjModal = {
  modalBook: boolean;
  modalLend: boolean;
  modalInactive: boolean;
  modalHistory: boolean;
};

interface IModalContext {
  render: boolean;
  bookStatusLend: boolean;
  inactivedBook: () => void;
  activedBook: () => void;
  openModal: () => void;
  closeModal: () => void;
  borrowBook: () => void;
  returnBook: () => void;
  objModal: TObjModal;
  handleModal: (
    closeModal: 'modalBook' | 'modalLend' | 'modalInactive' | 'modalHistory',
    openModal?: 'modalBook' | 'modalLend' | 'modalInactive' | 'modalHistory'
  ) => void;
}

export const ModalContext = createContext({} as IModalContext);

export const ModalProvider: React.FC<IProps> = ({ children }) => {
  const [modalBook, setModalBook] = useState(false);

  const [objModal, setObjModal] = useState({
    modalBook: false,
    modalLend: false,
    modalInactive: false,
    modalHistory: false,
  });
  const [render, setRender] = useState(false);
  const [bookStatusLend, setStatusBookLend] = React.useState<boolean>(false);

  const openModal = () => setModalBook(true);
  const closeModal = () => setModalBook(false);

  const borrowBook = () => setStatusBookLend(true);
  const returnBook = () => setStatusBookLend(false);

  const inactivedBook = () => setRender(false);
  const activedBook = () => setRender(true);

  const handleModal = (
    closeModal: keyof typeof objModal,
    openModal?: keyof typeof objModal
  ) => {
    if (openModal) {
      setObjModal({ ...objModal, [closeModal]: false, [openModal]: true });
    } else {
      setObjModal({ ...objModal, [closeModal]: false });
    }
  };

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
        render,
        inactivedBook,
        activedBook,
        bookStatusLend,
        borrowBook,
        returnBook,
        objModal,
        handleModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
