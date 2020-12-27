import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import theMovieAPI from '../services/theMovieDB-api';
import ReviewList from '../components/Review/ReviewList';
import Error from '../components/Error/Error';
import Spiner from '../components/Spiner/Spiner';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus('pending');

    if (!reviews) {
      theMovieAPI
        .getMovieReviews(movieId)
        .then(({ results }) => {
          setReviews(results);
        })
        .catch(error => {
          setError(error);
          setStatus('rejected');
        });
    }

    if (reviews) {
      setStatus('resolved');
    }
  }, [reviews, movieId]);

  return (
    <>
      {status === 'pending' && <Spiner />}

      {status === 'resolved' && reviews.length > 0 && (
        <ReviewList reviews={reviews} />
      )}

      {status === 'resolved' && reviews.length === 0 && <h2>No reviews yet</h2>}

      {status === 'rejected' && <Error error={error} />}
    </>
  );
}

Reviews.propTypes = {
  movieId: PropTypes.string,
};
