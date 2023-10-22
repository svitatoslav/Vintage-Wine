import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navigation.module.scss';
import { pages } from '../../assets/pages';
import cn from 'classnames';
import { Link } from 'react-router-dom';


const Navigation = ({ mobile }) => {
  return (
    <ul className={cn(styles.Navigation, { [styles.NavigationBurger]: mobile })} data-testid="Navigation">
      {
        pages.map((page, i) => {
          const path = page.toLowerCase();
          return (
            <Link key={i}
              to={`/${path}`}
              className={styles.PageLink}
            >
              {page}
            </Link>)
        })
      }
    </ul>
  );
}

Navigation.propTypes = {
  mobile: PropTypes.bool
};

export default Navigation;
