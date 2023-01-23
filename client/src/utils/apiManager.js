import axios from 'axios';
import BaseURL from './Constants';

const ApiManager = axios.create({
  baseURL: BaseURL,
  responseType: 'json',
  withCredentials: true,
});

export default ApiManager;
