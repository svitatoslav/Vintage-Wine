import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import PageTitle from '../../components/Title/PageTitle';

const Login = () => (
  <div className={styles.LoginWrapper}>
    <PageTitle text='Sign up' />
    <div className={styles.LoginContainer}>
      <div className={styles.LiginImg}></div>
      <div className={styles.Login} data-testid="Login">
        <LoginForm />
      </div>
    </div>
  </div>
);

Login.propTypes = {};

export default Login;
