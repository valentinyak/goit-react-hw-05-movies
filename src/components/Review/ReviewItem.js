import PropTypes from 'prop-types';

export default function ReviewItem({ review }) {
  return (
    <li key={review.id} style={{ listStyle: 'initial', marginBottom: '10px' }}>
      <p>{review.author}</p>
      <span>{review.content}</span>
    </li>
  );
}

ReviewItem.proppTypes = {
  review: PropTypes.object,
};
