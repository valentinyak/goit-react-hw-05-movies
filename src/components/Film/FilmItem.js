import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function FilmItem({ film }) {
  const location = useLocation();
  const { url } = useRouteMatch();
  let pathName = `${url}/${film.id}`;
  let from = `${location.pathname}${location.search}`;

  if (url === '/') {
    pathName = `movies/${film.id}`;
    from = location.pathname;
  }

  return (
    <li>
      <Link
        to={{
          pathname: pathName,
          state: { from: from },
        }}
      >
        <h3 className="filt-title">{film.title}</h3>

        <img
          src={
            film.poster_path
              ? `http://image.tmdb.org/t/p/w300_and_h450_bestv2${film.poster_path}`
              : 'https://www.ruprom.ru/templates/images/newdesign/noimage2.png'
          }
          alt={`${film.title}`}
        />
      </Link>
    </li>
  );
}

FilmItem.propTypes = {
  film: PropTypes.object,
};
