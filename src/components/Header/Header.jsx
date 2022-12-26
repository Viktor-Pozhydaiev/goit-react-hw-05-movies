import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import css from '../Header/Header.module.css';

const Header = () => {
  return (
    <div>
      <nav className={css.nav__wrapper}>
        <Link className={css.nav__style} to="/">
          <p className={css.nav__text}> Home</p>
        </Link>
        <Link to="movies" className={css.nav__style}>
          <p className={css.nav__text}> Movies</p>
        </Link>
      </nav>
      <Suspense fallback={<div>LOADING COMPONENTS...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Header;
