import React, { useState } from 'react';
import styles from './Login.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import PageTitle from '../../components/Title/PageTitle';

function Login() {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => setIsLogin(!isLogin);

  const formTexts = isLogin
    ? {
      title: 'Login authorization',
      option: 'Create account - ',
      button: 'Sign in',
      otherButton: 'Sign up',
    }
    : {
      title: 'User registration form',
      option: 'Have account?',
      button: 'Sign up',
      otherButton: 'Sign in',
    };

  return (
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
  );
}

export default Login;
