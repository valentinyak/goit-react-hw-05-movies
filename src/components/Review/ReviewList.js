import PropTypes from 'prop-types';
import ReviewItem from './ReviewItem';

export default function ReviewList({ reviews }) {
  return (
    <ul>
      {reviews.map(review => {
        return <ReviewItem review={review} key={review.id} />;
      })}
    </ul>
  );
}

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
};
