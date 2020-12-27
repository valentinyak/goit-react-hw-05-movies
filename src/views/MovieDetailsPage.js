import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, useHistory, useLocation, Route } from 'react-router-dom';

import theMovieAPI from '../services/theMovieDB-api';
import MovieDetails from '../components/MovieDetails/MovieDetails';

import GoBackBtn from '../components/GoBackBtn/GoBackBtn';
import Error from '../components/Error/Error';
import Spiner from '../components/Spiner/Spiner';

const Cast = lazy(() =>
  import('../views/Cast.js' /* webpackChunkName: "cast-view" */),
);
const Reviews = lazy(() =>
  import('../views/Reviews.js' /* webpackChunkName: "reviews-view" */),
);

export default function MovieDetailsPage() {
  const [film, setFilm] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    setStatus('pending');

    if (!film) {
      theMovieAPI
        .getMovieDetails(movieId)
        .then(setFilm)
        .catch(error => {
          setError(error);
          setStatus('rejected');
        });
    }

    if (film) {
      setStatus('resolved');
    }
  }, [film, movieId]);

  return (
    film && (
      <main className="movie-details">
        {status === 'pending' && <Spiner />}

        {status === 'resolved' && (
          <>
            <GoBackBtn history={history} path={location.state.from} />

            <MovieDetails film={film} />

            <Suspense fallback={<Spiner />}>
              <Route path="/movies/:movieId/cast">
                <Cast movieId={movieId} />
              </Route>
              <Route path="/movies/:movieId/reviews">
                <Reviews movieId={movieId} />
              </Route>
            </Suspense>
          </>
        )}

        {status === 'rejected' && <Error error={error} />}
      </main>
    )
  );
}
