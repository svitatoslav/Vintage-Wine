import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navigation.module.scss';
import { pages } from '../../assets/pages';
import cn from 'classnames';
import { Link, useLocation } from 'react-router-dom';


const Navigation = ({ mobile }) => {
  const { pathname } = useLocation();

  const links = pages?.map((page, i) => {
    const path = `/${page.toLowerCase()}`;

    return (
      <Link key={i}
        to={path}
        className={cn(styles.PageLink, {[styles.PageLinkActive]: mobile && pathname === path})}
      >
        {page}
      </Link>
    );
  });

  return (
    <ul className={cn(styles.Navigation, { [styles.NavigationBurger]: mobile })} data-testid="Navigation">
      {links}
    </ul>
  );
}

Navigation.propTypes = {
  mobile: PropTypes.bool
};

export default Navigation;
