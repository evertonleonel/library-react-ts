import { Skeleton } from '@mui/material';
import React from 'react';
import { IBook } from '../../interfaces/book';
import { LivroCard, Livros, LivrosContainer } from './BibliotecaStyles';

interface IBooksEvent {
  books: IBook[];
  getBookSelected: (e: React.MouseEvent<HTMLLIElement>) => void;
}

const BibliotecaLivros: React.FC<IBooksEvent> = ({
  books,
  getBookSelected,
}) => {
  return (
    <LivrosContainer>
      <Livros>
        {books &&
          books.map((book, index) => {
            return (
              <LivroCard key={index} id={book.id} onClick={getBookSelected}>
                {book.image ? (
                  <img src={book.image} />
                ) : (
                  <Skeleton width={88} height={150} />
                )}

                <h2>{book.tittle}</h2>
              </LivroCard>
            );
          })}
      </Livros>
    </LivrosContainer>
  );
};

export default BibliotecaLivros;
