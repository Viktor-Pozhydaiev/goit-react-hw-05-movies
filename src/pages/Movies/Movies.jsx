import { searchFilmByName } from 'components/Api/apiService';
import { Loader } from 'components/Loader/Loader';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import css from '../Movies/Movies.module.css';

const Movies = () => {
  const location = useLocation();
  const [films, setFilms] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const movie = searchParams.get('query') ?? '';

  const changeQuery = query => {
    const searchMovie = query !== '' ? { query } : {};
    setSearchParams(searchMovie);
  };

  useEffect(() => {
    if (movie === '') {
      return;
    }
    async function searchFilm() {
      try {
        setIsLoading(true);
        const films = await searchFilmByName(movie);
        if (films.length > 0) {
          setFilms(
            films.map(film => ({
              id: film.id,
              title: film.original_title,
              name: film.title,
              overview: film.overview,
              release: film.release_date,
            }))
          );
          setIsLoading(false);
        }
      } catch {
        toast.error(
          'Pleas wait a few minutes, we are repairing the website...'
        );
        setIsLoading(false);
      }
    }
    searchFilm();
  }, [movie]);

  return (
    <>
      <div className={css.movies__wrapper}>
        <SearchBar onSubmit={changeQuery} />
        <Toaster position="top-right" />
        {films.length > 0 && (
          <ul className={css.movies__list}>
            {films?.map(film => (
              <li key={film.id}>
                <Link
                  to={`/movies/${film.id}`}
                  state={{ from: location }}
                  className={css.movies__item}
                >
                  {film.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      {isLoading && <Loader />}
    </>
  );
};
export default Movies;
