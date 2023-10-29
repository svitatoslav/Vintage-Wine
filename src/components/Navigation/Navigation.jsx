import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navigation.module.scss';
import { pages } from '../../assets/pages';
import cn from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';



const Navigation = ({ mobile, isFootNav }) => {
  const { pathname } = useLocation();
  const links = pages?.map(({text, url}, i) => {
    return (
      <li key={i}>
        <Link 
          to={url}
          className={
            cn(styles.PageLink, {
              [styles.PageLinkActive]: mobile &&
                pathname === url ||
                pathname === '/' && url === '/home'
            })
          }
        >
          {text}
        </Link>
      </li>
    );
  });

  return (
    <nav>
      <ul className={cn(styles.NavigationList,  {[styles.FooterNav]:isFootNav}, { [styles.NavigationBurger]: mobile})} data-testid="Navigation">
        {links}
      </ul>
    </nav>
  );
  
}

Navigation.propTypes = {
  mobile: PropTypes.bool
};

export default Navigation;
