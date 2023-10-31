import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../Container/Container';
import Navigation from '../Navigation/Navigation';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import SearchWidget from './icons/search.svg?react';
import CartWidget from './icons/cart.svg?react';
import Logo from '../../assets/logo.svg?react';
import LoginWidget from './icons/login.svg?react';
import PersonWidget from './icons/person.svg?react';
import BurgerBtn from './icons/burger.svg?react';
import styles from './Header.module.scss';
import { openMenuAC } from '../../redux/reducers/mobMenu-reducer';

const BURGER_BREAKPOINT = 1000;

function Header() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const user = useSelector((state) => state.user.user);
  const isMenuOpen = useSelector((state) => state.mobileMenu.isMenuOpen);
  const dispatch = useDispatch();

  const handleMenu = () => {
    dispatch(openMenuAC());
  };

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
    <header className={styles.Header} data-testid="Header">
      <Container>
        <div className={styles.HeaderBody}>
          <Link to="/">
            <Logo className={styles.HeaderLogo} />
          </Link>
          {
            viewportWidth <= BURGER_BREAKPOINT
              ? (isMenuOpen && createPortal(
                <DropdownMenu mobile onClose={handleMenu} />,
                document.body,
              ))
              : <Navigation />
          }
          <div className={styles.HeaderWidgets}>
            <div className={styles.HeaderWidgetsGroup}>
              <div className={styles.HeaderCart}>
                <Link to="/cart">
                  <CartWidget />
                </Link>
                <span className={styles.Counter}>0</span>
              </div>
              <SearchWidget />
            </div>
            <div className={styles.HeaderWidgetsGroup}>
              {user ? (
                <span title={user}>
                  <PersonWidget />
                </span>
              )
                : (
                  <Link to="/login">
                    <LoginWidget />
                  </Link>
                )}
              {
                viewportWidth <= BURGER_BREAKPOINT
                  && <BurgerBtn onClick={handleMenu} />
              }
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
