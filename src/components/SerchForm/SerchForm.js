import { useHistory, useLocation } from 'react-router-dom';

export default function SerchForm() {
  const location = useLocation();
  const history = useHistory();

  const handleBtnClick = e => {
    e.preventDefault();

    history.push({
      ...location,
      search: `query=${e.target.form.findInput.value}`,
    });
  };

  return (
    <form>
      <input type="text" name="findInput" id="" />
      <button type="submit" onClick={handleBtnClick}>
        Search
      </button>
    </form>
  );
}
