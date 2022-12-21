import { api } from './Api';
import { IBook } from '../interfaces/book';

export const getBooks = async () => {
  const { data } = await api.get<IBook[]>('/books');
  return data;
};
