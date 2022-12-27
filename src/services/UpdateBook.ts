import { IBook } from '../interfaces/book';
import { api } from './Api';

export const updateBook = async (book: IBook) => {
  const { data } = await api.put(`/books/${book.id}`, book);
  return data;
};
