import Axios from 'axios';

const api = Axios.create({
  baseURL: 'https://be-the-hero-api-backend.herokuapp.com/',
});

export default api;
