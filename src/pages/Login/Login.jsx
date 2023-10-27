import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import Container from '../../components/Container/Container';

const Login = () => (

  <div className={styles.LoginContainer}>
    <div className={styles.Login} data-testid="Login">

      <h3>Sign up</h3>

      <LoginForm />
    </div>
  </div>

);

Login.propTypes = {};

export default Login;
