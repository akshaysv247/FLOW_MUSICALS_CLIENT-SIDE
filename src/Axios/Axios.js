import axios from 'axios';
import baseURL from '../Api/Api';

const instance = axios.create({
  // eslint-disable-next-line object-shorthand
  baseURL: baseURL,
});

export default instance;
