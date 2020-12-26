import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import theMovieAPI from '../services/theMovieDB-api';

export default function Cast({ movieId }) {
  //   if (serchQuery.trim() === '') {
  //     toast.error('Вы не ввели поисковой запрос');
  //     return;

  // };
  const [casts, setCasts] = useState(null);

  useEffect(() => {
    if (!casts) {
      theMovieAPI.getMovieCredits(movieId).then(credits => {
        setCasts(credits.cast);
      });
    }
  });

  return (
    casts && (
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100vw',
          padding: '0px',
        }}
      >
        {casts.map(cast => {
          return (
            <li
              key={cast.id}
              style={{ marginRight: '5px', padding: '0px', width: '130px' }}
            >
              <p>{cast.name}</p>
              <img
                src={
                  cast.profile_path
                    ? `http://image.tmdb.org/t/p/w300_and_h450_bestv2${cast.profile_path}`
                    : 'https://www.ruprom.ru/templates/images/newdesign/noimage2.png'
                }
                alt="Cast pfoto"
              />
            </li>
          );
        })}
      </ul>
    )
  );
}

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func,
// };
