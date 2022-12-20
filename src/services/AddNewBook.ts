import axios from 'axios';
import { IBook } from '../pages/cadastro/interfaces';
import { GET_BOOKS } from './Api';

export const addNewBook = async (values: IBook) => {
  try {
    const response = axios.post(GET_BOOKS, values);
    return Promise.resolve((await response).data);
  } catch (err) {
    return Promise.reject(err);
  }
};
