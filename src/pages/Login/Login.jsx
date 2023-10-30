import React, { useState } from 'react';
import styles from './Login.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import PageTitle from '../../components/Title/PageTitle';
import Container from '../../components/Container/Container';

function Login() {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => setIsLogin(!isLogin);

  const formTexts = isLogin
    ? {
      title: 'Login authorization',
      option: 'Create an account ',
      button: 'Sign in',
      otherButton: 'Sign up',
    }
    : {
      title: 'User registration form',
      option: 'I have an account ',
      button: 'Sign up',
      otherButton: 'Sign in',
    };

  return (
    <Container>
      <div className={styles.LoginWrapper}>
        <PageTitle>
          {formTexts.button}
        </PageTitle>
        <div className={styles.LoginContainer}>
          <div className={styles.LiginImg} />
          <div className={styles.Login} data-testid="Login">
            <LoginForm
              isLogin={isLogin}
              formTexts={formTexts}
              onLogin={handleLogin}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Login;
