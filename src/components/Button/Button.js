export default function Button({ history }) {
  return (
    <button
      type="button"
      onClick={() => {
        history.goBack();
      }}
    >
      {String.fromCharCode(8592)} Go back
    </button>
  );
}
