import { useState, useEffect } from 'react';
import {
  useParams,
  NavLink,
  useHistory,
  useRouteMatch,
  Route,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import theMovieAPI from '../services/theMovieDB-api';

import Button from '../components/Button/Button';
import Cast from '../views/Cast';
import Reviews from '../views/Reviews';

export default function MovieDetailsPage() {
  const [film, setFilm] = useState(null);
  const { movieId } = useParams();
  const history = useHistory();
  const { url } = useRouteMatch();

  useEffect(() => {
    if (!film) {
      theMovieAPI.getMovieDetails(movieId).then(setFilm);
    }
  }, [film, movieId]);

  return (
    film && (
      <main className="movie-details">
        <Button history={history} />

        <div className="details-container">
          <img
            src={`http://image.tmdb.org/t/p/w300_and_h450_bestv2${film.poster_path}`}
            alt="Film poster"
          />
          <div className="movie-info">
            <h1>{film.title}</h1>
            <p>User score: {film.vote_average * 10}%</p>
            <p>
              Overview: <span className="overview">{film.overview}</span>
            </p>
            <div className="genres-container">
              <p className="genres-title">Genres: </p>
              <ul className="genres-list">
                {film.genres.map(({ id, name }) => {
                  return <li key={id}>{name}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="add-info-container">
          <p>Additional information</p>
          <ul>
            <li>
              <NavLink to={`${url}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${url}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
        </div>

        <Route path="/movies/:movieId/cast">
          <Cast movieId={movieId} />
        </Route>

        <Route path="/movies/:movieId/reviews">
          <Reviews movieId={movieId} />
        </Route>
      </main>
    )
  );
}

// Modal.propTypes = {
//   largeImg: PropTypes.string,
//   onClick: PropTypes.func,
// };
