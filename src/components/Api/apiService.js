import axios from 'axios';
import { toast } from 'react-hot-toast';

const KEY = '67eb25e753339c339c2207d6264e77e1';

axios.defaults.baseURL = `
https://api.themoviedb.org/3/trending`;

export const searchTrendFilms = async () => {
  try {
    const response = await axios.get(`/all/day?api_key=${KEY}`);
    return response.data;
  } catch (error) {
    toast.error('Please wait, we are repair problem');
    return [];
  }
};
const ID_URL = 'https://api.themoviedb.org/3/search';

export const searchFilmById = async query => {
  try {
    const response = await axios.get(
      `${ID_URL}/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    return response.data;
  } catch (error) {
    toast.error('Please wait, we are repair problem');
    return [];
  }
};
