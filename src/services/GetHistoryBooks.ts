import { api } from './Api';
import { IBook } from '../interfaces/book';

export const getHistorys = async () => {
  const { data } = await api.get<IBook[]>('/books');
  return data.filter((history) => {
    return history.rentHistory.length > 0;
  });
};
