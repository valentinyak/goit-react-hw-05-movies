import PropTypes from 'prop-types';

export default function GoBackBtn({ history, path }) {
  return (
    <button
      type="button"
      onClick={() => {
        history.push(path);
      }}
    >
      {String.fromCharCode(8592)} Go back
    </button>
  );
}

GoBackBtn.propTypes = {
  history: PropTypes.object,
  path: PropTypes.string,
};
