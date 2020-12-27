import PropTypes from 'prop-types';

export default function Error({ error }) {
  return (
    <h1 style={{ color: 'red' }}>
      You have an error! We are working on it. Please, open this page later.
      {error}
    </h1>
  );
}

Error.propTypes = {
  error: PropTypes.object,
};
