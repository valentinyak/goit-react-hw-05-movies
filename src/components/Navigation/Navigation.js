import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <header>
      <nav>
        <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
          Trending
        </NavLink>

        <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}>
          Find movies
        </NavLink>
      </nav>
    </header>
  );
}
