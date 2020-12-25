import { useState, useEffect } from 'react';
import { useParams, Link, useLocation, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import theMovieAPI from '../services/theMovieDB-api';
import Button from '../components/Button/Button';

export default function MovieDetailsPage() {
  const [film, setFilm] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (!film) {
      theMovieAPI.getMovieDetails(movieId).then(setFilm);
    }
  });

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
            <div>
              <p>Genres: </p>
              <ul>
                {film.genres.map(({ id, name }) => {
                  return <li key={id}>{name}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <p>Additional information</p>
          <ul>
            <li>
              <Link to={`${location.pathname}/cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`${location.pathname}/reviews`}>Reviews</Link>
            </li>
          </ul>
        </div>
      </main>
    )
  );
}

// Modal.propTypes = {
//   largeImg: PropTypes.string,
//   onClick: PropTypes.func,
// };
