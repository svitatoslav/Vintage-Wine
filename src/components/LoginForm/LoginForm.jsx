import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';
import axios from 'axios';
import {
  setTokenAC,
  setUserAC,
  signInAC,
} from '../../redux/reducers/authorization-reducer';
import Button from '../Button/Button';
import loginValidationSchema from '../../validation/loginValidationSchema';
import regValidationSchema from '../../validation/regValidationSchema';
import styles from './LoginForm.module.scss';

function LoginForm({ isLogin, formTexts, onLogin }) {
  const isLogged = useSelector((state) => state.user.user);
  const isSigned = useSelector((state) => state.user.isSigned);
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  if (isLogged) {
    return <Navigate to="/" />;
  }

  const initialValues = {
    login: '',
    email: '',
    loginOrEmail: '',
    password: '',
  };

  const validationSchema = isLogin
    ? regValidationSchema : loginValidationSchema;

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const { email, login, ...logValues } = values;
    const { loginOrEmail, ...regValues } = values;

    if (isLogin) {
      axios.post('http://127.0.0.1:4000/api/customers/login', logValues)
        .then((res) => {
          dispatch(setTokenAC(res.data.token));
          dispatch(setUserAC(res.data.user));
        })
        .catch((err) => {
          setError(...Object.values(err.response.data));
          setTimeout(() => {
            setError('');
          }, 4000);
        });
    } else {
      axios.post('http://127.0.0.1:4000/api/customers/', regValues)
        .then(() => dispatch(signInAC()))
        .catch((err) => console.log(err));
    }
    resetForm(initialValues);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.LoginForm}>
          <h4 className={styles.LoginTitle}>{formTexts.title}</h4>
          <div className={styles.LoginFields}>
            {isLogin ? (
              <>
                <Field
                  className={styles.LoginInput}
                  type="text"
                  name="loginOrEmail"
                  placeholder="Login or e-mail"
                />
                <ErrorMessage
                  className={styles.LoginError}
                  name="loginOrEmail"
                  component="div"
                />
              </>
            ) : (
              <>
                <Field
                  className={styles.LoginInput}
                  type="text"
                  name="login"
                  placeholder="Login"
                />
                <ErrorMessage
                  className={styles.LoginError}
                  name="login"
                  component="div"
                />
                <Field
                  className={styles.LoginInput}
                  type="email"
                  name="email"
                  placeholder="E-mail"
                />
                <ErrorMessage
                  className={styles.LoginError}
                  name="email"
                  component="div"
                />
              </>
            )}
            <Field
              className={styles.LoginInput}
              type="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage
              className={styles.LoginError}
              name="password"
              component="div"
            />
          </div>
          {(error && isLogin) && (
            <div className={styles.FormError}>
              {error}
            </div>
          )}
          <Button
            type="submit"
            text={formTexts.button}
            disabled={isSubmitting}
          />
          {!isSigned && (
            <div>
              <span className={styles.LoginOptionText}>
                {`${formTexts.option} `}
              </span>
              <button
                type="button"
                className={styles.LoginOption}
                onClick={onLogin}
              >
                {formTexts.otherButton}
              </button>
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
}

LoginForm.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  formTexts: PropTypes.shape({
    title: PropTypes.string,
    button: PropTypes.string,
    option: PropTypes.string,
    otherButton: PropTypes.string,
  }).isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
