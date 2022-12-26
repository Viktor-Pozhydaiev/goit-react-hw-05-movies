import { searchTrendFilms } from 'components/Api/apiService';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import css from '../Home/Home.module.css';

const Home = () => {
  const [films, setTrendFilms] = useState([]);

  useEffect(() => {
    async function getFilms() {
      try {
        const films = await searchTrendFilms();
        if (films.length > 0) {
          setTrendFilms(
            films.map(film => ({
              id: film.id,
              title: film.original_title,
              name: film.name,
            }))
          );
        }
      } catch {
        toast.error(
          'Pleas wait a few minutes, we are repairing the website...'
        );
      }
    }
    getFilms();
  }, []);
  return (
    <>
      <ul className={css.home__list}>
        <h1>Trend Films</h1>
        {films?.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`} className={css.home__item}>
              {film.title || film.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Home;
