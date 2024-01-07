import React from 'react';
import styles from './SideBar.module.scss';

import Logo from '../../assets/logo.svg?react';
import DashboardNav from '../Navigation/DashboardNav/DashboardNav';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOutAC } from '../../redux/reducers/authorization-reducer';

const SideBar = () => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOutAC());
  };

  return (
    <aside className={styles.SideBar}>
      <div>
        <Logo className={styles.SideBarLogo} />
      </div>
      <div className={styles.SideBarOptions}>
        <DashboardNav />
        <div className={styles.SideBarBtns}>
          <Link to='/'><Button text="Back to shop" variant='xSmall' /></Link>
          <Link to='/'><Button text="Log out" variant='xSmall' onClick={handleSignOut}/></Link>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
