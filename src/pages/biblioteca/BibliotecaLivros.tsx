import React from 'react';
import { IBook } from '../../interfaces/book';
import { LivroCard, Livros, LivrosContainer } from './BibliotecaStyles';

interface IBooksEvent {
  books: IBook[];
  getIDLivro: (e: React.MouseEvent<HTMLLIElement>) => void;
}

const BibliotecaLivros: React.FC<IBooksEvent> = ({ books, getIDLivro }) => {
  return (
    <LivrosContainer>
      <Livros>
        {books &&
          books.map((book, index) => {
            return (
              <LivroCard key={index} id={book.id} onClick={getIDLivro}>
                <img src={book.image} />
                <h2>{book.tittle}</h2>
              </LivroCard>
            );
          })}
      </Livros>
    </LivrosContainer>
  );
};

export default BibliotecaLivros;
