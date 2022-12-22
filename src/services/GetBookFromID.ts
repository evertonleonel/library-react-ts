import { api } from './Api';
import { IBook } from '../interfaces/book';

export const getBookFromID = async (id: string) => {
  const { data } = await api.get<IBook>(`/books/${id}`);
  return data;
};
