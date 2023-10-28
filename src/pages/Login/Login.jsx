import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import Container from '../../components/Container/Container';

const Login = () => (
  <div className={styles.LoginWrapper}>
    <h3 className={styles.LoginTitle}>Sign up</h3>
    <div className={styles.LoginContainer}>
      <div className={styles.Login} data-testid="Login">
        <LoginForm />
      </div>
    </div>
  </div>


);

Login.propTypes = {};

export default Login;
