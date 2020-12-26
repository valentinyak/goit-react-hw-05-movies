export default function Button({ history }) {
  return (
    <button
      type="button"
      onClick={() => {
        history.push('/');
      }}
    >
      {String.fromCharCode(8592)} Go back
    </button>
  );
}
