import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch, useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import theMovieAPI from '../services/theMovieDB-api';

export default function MoviesPage() {
  const [findFilms, setFindFilms] = useState(null);
  const [emptyArray, setEmptyArray] = useState(false);
  const { url } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (findFilms) {
      return;
    }

    if (location.search) {
      findForMovies(new URLSearchParams(location.search).get('query'));
    }
  }, [location.search]);

  const handleBtnClick = e => {
    e.preventDefault();

    // findForMovies(e.target.form.findInput.value);

    history.push({
      ...location,
      search: `query=${e.target.form.findInput.value}`,
    });
  };

  const findForMovies = query => {
    theMovieAPI.serchMovies(query).then(({ results }) => {
      setFindFilms(results);
      setEmptyArray(false);

      if (results.length === 0) {
        setEmptyArray(true);
      }
    });
  };

  return (
    <main>
      <form action="">
        <label htmlFor="">
          <input type="text" name="findInput" id="" />
          <button type="submit" onClick={handleBtnClick}>
            Search
          </button>
        </label>
      </form>

      {findFilms && (
        <ul>
          {findFilms.map(film => {
            return (
              <li key={film.id}>
                <Link to={`${url}/${film.id}`}>{film.title}</Link>
              </li>
            );
          })}
        </ul>
      )}
      {emptyArray && <p>We can't find films by your request</p>}
    </main>
  );
}

// ImageGallery.propTypes = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number,
//       webformatURL: PropTypes.string,
//       largeImageURL: PropTypes.string,
//     }),
//   ).isRequired,
//   onClick: PropTypes.func,
// };
