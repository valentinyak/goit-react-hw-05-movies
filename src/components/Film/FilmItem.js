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
        {film.title}
      </Link>
    </li>
  );
}

FilmItem.propTypes = {
  film: PropTypes.object,
};
