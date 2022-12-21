import { api } from './Api';
import { IBook } from '../interfaces/book';

export const postBook = async (book: IBook) => {
  await api.post('/books', book);
  return true;
};
