import { useState, useEffect } from 'react';

import theMovieAPI from '../services/theMovieDB-api';
import FilmList from '../components/Film/FilmList';
import Error from '../components/Error/Error';
import Spiner from '../components/Spiner/Spiner';

export default function HomePage() {
  const [trendingFilms, setTrendingFilms] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus('pending');

    if (!trendingFilms) {
      theMovieAPI
        .getTrending()
        .then(parsedResponse => {
          setTrendingFilms(parsedResponse.results);
        })
        .catch(error => {
          setError(error);
          setStatus('rejected');
        });
    }

    if (trendingFilms) {
      setStatus('resolved');
    }
  }, [trendingFilms]);

  return (
    <main>
      {status === 'pending' && <Spiner />}

      {status === 'resolved' && (
        <>
          <h1 style={{ fontSize: '20px', marginLeft: '20px' }}>
            Trending today
          </h1>
          <FilmList films={trendingFilms} />
        </>
      )}

      {status === 'rejected' && <Error error={error} />}
    </main>
  );
}
