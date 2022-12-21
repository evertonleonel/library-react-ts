import React from 'react';
import { IBook } from '../../interfaces/book';
import { getBooks } from '../../services/GetBooks';
import { LivroCard, Livros, LivrosContainer } from './BibliotecaStyles';

const BibliotecaLivros: React.FC = () => {
  const [books, setBooks] = React.useState<IBook[]>();

  React.useEffect(() => {
    getBooks().then((data) => setBooks(data));
  }, []);

  return (
    <LivrosContainer>
      <Livros>
        {books &&
          books.map((livro, index) => {
            return (
              <LivroCard
                key={index}
                id={livro.id}
                onClick={() => {
                  console.log(livro.id);
                }}
              >
                <img src={livro.image} />
                <h2>{livro.tittle}</h2>
              </LivroCard>
            );
          })}
      </Livros>
    </LivrosContainer>
  );
};

export default BibliotecaLivros;
