import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import LoginForm from '../../components/LoginForm/LoginForm';
import PageTitle from '../../components/Title/PageTitle';
import Container from '../../components/Container/Container';
import styles from './Login.module.scss';

function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const isSigned = useSelector((state) => state.user.isSigned);

  const handleLogin = () => setIsLogin(!isLogin);

  const formTexts = isSigned || isLogin
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
      <section className={styles.LoginWrapper}>
        <PageTitle text={formTexts.button} />
        <div className={styles.LoginContainer}>
          <div className={styles.LiginImg} />
          <div className={styles.Login} data-testid="Login">
            <LoginForm
              isLogin={isLogin || isSigned}
              formTexts={formTexts}
              onLogin={handleLogin}
            />
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Login;
