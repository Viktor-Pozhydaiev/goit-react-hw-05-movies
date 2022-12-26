import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import { getActors, getPosterFilm } from 'components/Api/apiService';
import css from '../Cast/Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    async function getActorsById() {
      try {
        const actors = await getActors(movieId);
        if (actors.length > 0) {
          setActors(actors);
        }
      } catch {
        toast.error(
          'Pleas wait a few minutes, we are repairing the website...'
        );
      }
    }
    getActorsById();
  }, [movieId]);

  return (
    <>
      {actors.length > 0 ? (
        <ul>
          {actors.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              <img
                src={getPosterFilm(profile_path)}
                alt={name}
                className={css.actor__img__wrapper}
              />
              <p>Name: {name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      ) : (
        "Unfortunately we didn't find anything..."
      )}
      <Toaster />
    </>
  );
};

export default Cast;
