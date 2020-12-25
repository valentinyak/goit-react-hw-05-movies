import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import theMovieAPI from '../services/theMovieDB-api';

export default function HomePage() {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    if (trendingFilms.length === 0) {
      theMovieAPI.getTrending().then(parsedResponse => {
        setTrendingFilms([...trendingFilms, ...parsedResponse.results]);
      });
    }
  });

  return (
    <main>
      <h1 style={{ fontSize: '20px', marginLeft: '20px' }}>Trending today</h1>
      <ul>
        {trendingFilms.map(film => {
          return (
            <li key={film.id}>
              <Link to={`movies/${film.id}`}>{film.title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

// Button.propTypes = {
//   onClick: PropTypes.func,
// };
