import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import Navigation from '../Navigation/Navigation';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import Search from './icons/search.svg?react';
import Cart from './icons/cart.svg?react';
import Logo from '../../assets/logo.svg?react';
import Login from './icons/login.svg?react';
import Burger from './icons/burger.svg?react';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';

const BURGER_BREAKPOINT = 1000;

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const handleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  }

  useEffect(() => {
    // only for development
    setViewportWidth(window.innerWidth);

    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // only for development
  }, []);

  return (
    <div className={styles.Header} data-testid="Header">
      <Container>
        <div className={styles.HeaderBody}>
          <Link to='/'>
            <Logo className={styles.HeaderLogo} />
          </Link>
          {
            viewportWidth <= BURGER_BREAKPOINT ?
              (isOpenMenu && <DropdownMenu mobile onClose={handleMenu} />) :
              <Navigation />
          }
          <div className={styles.HeaderWidgets}>
            <div className={styles.HeaderWidgetsGroup}>
              <div className={styles.HeaderCart}>
                <Link to='/cart'>
                  <Cart />
                </Link>
                <span className={styles.Counter}>0</span>
              </div>
              <Search />
            </div>
            <div className={styles.HeaderWidgetsGroup}>
              <Login />
              {
                viewportWidth <= BURGER_BREAKPOINT &&
                <Burger onClick={handleMenu} />
              }
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
};

Header.propTypes = {};

export default Header;