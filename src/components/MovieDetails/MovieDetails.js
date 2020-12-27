import { NavLink, useLocation, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MovieDetails({ film }) {
  const location = useLocation();
  const { url } = useRouteMatch();

  return (
    <>
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
            <NavLink
              to={{
                pathname: `${url}/cast`,
                state: { from: location.state.from },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `${url}/reviews`,
                state: { from: location.state.from },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

MovieDetails.propTypes = {
  film: PropTypes.object,
};
