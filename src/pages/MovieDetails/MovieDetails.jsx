import {
  getDate,
  getFilmInformation,
  getPosterFilm,
} from 'components/Api/apiService';
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from '../MovieDetails/MovieDetails.module.css';

const MovieDetails = () => {
  const [filmInfo, setFilmInfo] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    async function filmDetails() {
      try {
        const filmInfo = await getFilmInformation(movieId);
        setFilmInfo(filmInfo);
      } catch {
        toast.error(
          'Pleas wait a few minutes, we are repairing the website...'
        );
      }
    }
    filmDetails();
  }, [movieId]);

  const {
    poster_path,
    original_title,
    vote_average,
    release_date,
    overview,
    genres,
  } = filmInfo;
  return (
    <div className={css.movies__detail__section}>
      <Link to={backLink} className={css.back__link}>
        Go back
      </Link>

      <div className={css.movies__description__wrapper}>
        <p>
          Title: {original_title}
          <span>({getDate(release_date)})</span>
        </p>
        <img
          src={getPosterFilm(poster_path)}
          alt={original_title}
          className={css.movies__img}
        />
        <div className={css.movies__title__wrapper}>
          <p>Overview: {overview}</p>
          <p>Use Score: {Math.round(vote_average * 10)}%</p>
          {overview ? (
            <p>Genre: {genres.map(genre => genre.name).join(', ')}</p>
          ) : (
            <p>Sorry we are cant found genres info</p>
          )}
        </div>
      </div>

      <div className={css.movies_link_wrapper}>
        <Link to={'cast'} state={{ from: backLink }} className={css.cast__link}>
          <p className={css.cast__text}>Cast</p>
        </Link>
        <Link
          to={'reviews'}
          state={{ from: backLink }}
          className={css.reviews__link}
        >
          <p className={css.reviews__text}>Reviews</p>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
export default MovieDetails;
