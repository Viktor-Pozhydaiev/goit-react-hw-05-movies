import axios from 'axios';

const KEY = '67eb25e753339c339c2207d6264e77e1';
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

axios.defaults.baseURL = `
https://api.themoviedb.org/3/`;

export const searchTrendFilms = async () => {
  try {
    const response = await axios.get(`trending/all/day?api_key=${KEY}`);
    return response.data.results;
  } catch (error) {
    console.error('Please wait, we are repair problem');
    return [];
  }
};

export const searchFilmByName = async query => {
  try {
    const response = await axios.get(
      `search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    return response.data.results;
  } catch {
    console.error('Please wait, we are repair problem');
    return [];
  }
};

export const getFilmInformation = async movieId => {
  try {
    const response = await axios.get(
      `movie/${movieId}?api_key=${KEY}&language=en-US`
    );
    return response.data;
  } catch {
    console.error('Please wait, we are repair problem');
    return [];
  }
};
export function getPosterFilm(posterPath) {
  if (posterPath) return `${BASE_IMG_URL}/${posterPath}`;
  return 'https://www.jsconsulting.kz/assets/img/noImg.jpg';
}

export const getActors = async movieId => {
  try {
    const response = await axios.get(
      `movie/${movieId}/credits?api_key=${KEY}&language=en-US`
    );
    return response.data.cast;
  } catch {
    console.error('Please wait, we are repair problem');
  }
};
export const getReviews = async movieId => {
  try {
    const response = await axios.get(
      `movie/${movieId}/reviews?api_key=${KEY}&language=en-US`
    );

    return response.data.results;
  } catch {
    console.error('Please wait, we are repair problem');
  }
};
export function getDate(date) {
  if (date) {
    const year = date.split('-')[0];
    return year;
  }
}
