import PropTypes from 'prop-types';
import FilmItem from './FilmItem';

export default function FilmList({ films }) {
  return (
    <ul>
      {films.map(film => {
        return <FilmItem film={film} key={film.id} />;
      })}
    </ul>
  );
}

FilmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object),
};
