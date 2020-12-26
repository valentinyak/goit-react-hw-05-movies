import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import theMovieAPI from '../services/theMovieDB-api';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    if (!reviews) {
      theMovieAPI.getMovieReviews(movieId).then(({ results }) => {
        if (results.length > 0) {
          setReviews(results);
        }
      });
    }
  });

  return reviews ? (
    <ul>
      {reviews.map(review => {
        return (
          <li
            key={review.id}
            style={{ listStyle: 'initial', marginBottom: '10px' }}
          >
            <p>{review.author}</p>
            <span>{review.content}</span>
          </li>
        );
      })}
    </ul>
  ) : (
    <h2>No reviews yet</h2>
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
