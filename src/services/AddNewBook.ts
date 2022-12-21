import { api } from './Api';
import { IBook } from '../interfaces/book';

export const addNewBook = async (books: IBook) => {
  const { data } = await api.post('books', books);
  return data;
};
