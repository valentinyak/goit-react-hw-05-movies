import PropTypes from 'prop-types';
import CastItem from './CastItem';

export default function CastList({ casts }) {
  return (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100vw',
        padding: '0px',
      }}
    >
      {casts.map(cast => {
        return <CastItem cast={cast} key={cast.id} />;
      })}
    </ul>
  );
}

CastList.propTypes = {
  casts: PropTypes.arrayOf(PropTypes.object),
};
