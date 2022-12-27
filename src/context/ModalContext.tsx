import React, { createContext, useState } from 'react';

interface IProps {
  children: React.ReactNode;
}

interface IModalContext {
  modalBook: boolean;
  render: boolean;
  modalLend: boolean;
  modalInactive: boolean;
  modalHistory: boolean;
  openModal: () => void;
  closeModal: () => void;
  toggleModal: (modal: string) => void;
  bookStatusLend: boolean;
  borrowBook: () => void;
  returnBook: () => void;
}

export const ModalContext = createContext({} as IModalContext);

export type TObjModal = {
  modalBook: boolean;
  modalLend: boolean;
  modalInactive: boolean;
  modalHistory: boolean;
};

export const ModalProvider: React.FC<IProps> = ({ children }) => {
  const [modalBook, setModalBook] = useState(false);
  const [modalLend, setModalLend] = useState(false);
  const [modalInactive, setModalInactive] = useState(false);
  const [modalHistory, setModalHistory] = useState(false);

  const [objModal, setObjModal] = useState({
    modalBook: true,
    modalLend: true,
    modalInactive: true,
    modalHistory: true,
  });
  const [render, setRender] = useState(false);
  const [bookStatusLend, setStatusBookLend] = React.useState<boolean>(false);

  const openModal = () => setModalBook(true);
  const closeModal = () => setModalBook(false);

  const borrowBook = () => setStatusBookLend(true);
  const returnBook = () => setStatusBookLend(false);

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

  const toggleModal = (modal: string) => {
    if (modal === 'Lend') {
      setModalLend(true);
      closeModal();
      return;
    }
    if (modal === 'LendClose') {
      setModalLend(false);
      openModal();
      setRender(!render);
      return;
    }

    if (modal === 'Inactive') {
      setModalInactive(true);
      closeModal();
      return;
    }
    if (modal === 'InactiveClose') {
      setModalInactive(false);
      closeModal();
      return;
    }

    if (modal === 'History') {
      setModalHistory(true);
      closeModal();
      setRender(!render);
      return;
    }
    if (modal === 'HistoryClose') {
      setModalHistory(false);
      openModal();
      setRender(!render);
      return;
    }

    if (modal === 'render') {
      setRender(!render);
    }
  };

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
        modalBook,
        modalLend,
        modalInactive,
        modalHistory,
        toggleModal,
        render,
        bookStatusLend,
        borrowBook,
        returnBook,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
