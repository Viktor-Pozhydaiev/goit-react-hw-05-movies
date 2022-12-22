import { searchFilmById } from 'components/Api/apiService';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation } from 'react-router-dom';
import css from '../Movies/Movies.module.css';

export const Movies = () => {
  const location = useLocation();
  const [films, setFilms] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function searchFilm() {
      try {
        setIsLoading(true);
        const { results: films } = await searchFilmById(query);
        if (films.length > 0) {
          setFilms(
            films.map(film => ({
              id: film.id,
              title: film.original_title,
              name: film.name,
              overview: film.overview,
              release: film.release_date,
            }))
          );
          toast.success(
            `Congratulations, we have found ${films.length} pictures`
          );
        }
      } catch {
        toast.error(
          'Pleas wait a few minutes, we are repairing the website...'
        );
      }
    }
    searchFilm();
  }, [query]);
  const handelFormSubmit = query => {
    setQuery(query);
    setFilms([]);
  };

  return (
    <>
      <div className={css.movies__wrapper}>
        <SearchBar value={query} onSubmit={handelFormSubmit} />
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
              ;
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
