import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import theMovieAPI from '../services/theMovieDB-api';
import CastList from '../components/Cast/CastList';
import Error from '../components/Error/Error';
import Spiner from '../components/Spiner/Spiner';

export default function Cast({ movieId }) {
  const [casts, setCasts] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus('pending');

    if (!casts) {
      theMovieAPI
        .getMovieCredits(movieId)
        .then(credits => {
          setCasts(credits.cast);
        })
        .catch(error => {
          setError(error);
          setStatus('rejected');
        });
    }

    if (casts) {
      setStatus('resolved');
    }
  }, [casts, movieId]);

  return (
    <>
      {status === 'pending' && <Spiner />}

      {status === 'resolved' && <CastList casts={casts} />}

      {status === 'rejected' && <Error error={error} />}
    </>
  );
}

Cast.propTypes = {
  movieId: PropTypes.string,
};
