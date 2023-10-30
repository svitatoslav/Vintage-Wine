import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navigation.module.scss';
import pages from '../../assets/pages';

function Navigation({ mobile }) {
  const { pathname } = useLocation();

  const links = pages?.map(({ id, text, url }) => (
    <li key={id}>
      <Link
        to={url}
        className={
          cn(styles.PageLink, {
            [styles.PageLinkActive]: mobile
                && (pathname === url
                || (pathname === '/' && url === '/home')),
          })
        }
      >
        {text}
      </Link>
    </li>
  ));

  return (
    <nav>
      <ul
        className={cn(
          styles.NavigationList,
          { [styles.NavigationBurger]: mobile },
        )}
        data-testid="Navigation"
      >
        {links}
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  mobile: PropTypes.bool,
};

Navigation.defaultProps = {
  mobile: false,
};

export default Navigation;
