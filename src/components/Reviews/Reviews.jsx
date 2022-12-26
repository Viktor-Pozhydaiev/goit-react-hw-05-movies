import { getReviews } from 'components/Api/apiService';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import css from '../Reviews/Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function givReviews() {
      try {
        setIsLoading(true);
        const reviews = await getReviews(movieId);
        if (reviews.length > 0) {
          setReviews(reviews);
          setIsLoading(false);
        }
      } catch {
        toast.error(
          'Pleas wait a few minutes, we are repairing the website...'
        );
        setIsLoading(false);
      }
    }
    givReviews();
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <>
      {reviews.length === 0 ? (
        "Unfortunately we didn't find anything..."
      ) : (
        <div className={css.reviews__wrapper}>
          {reviews.map(({ author, content, id }) => (
            <div key={id}>
              <h3 className={css.reviews__title}>Author: {author}</h3>
              <p className={css.reviews__content}>Content: {content}</p>
            </div>
          ))}
        </div>
      )}
      <Toaster />
      {isLoading && <Loader />}
    </>
  );
};
export default Reviews;
