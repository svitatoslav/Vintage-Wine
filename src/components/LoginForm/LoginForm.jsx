import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik';

import axios from 'axios';
import {
  setTokenAC,
  setUserAC,
} from '../../redux/reducers/authorization-reducer';
import sendPostRequest from '../../helpers/api/sendPostRequest';
import Button from '../Button/Button';
import loginValidationSchema from '../../validation/loginValidationSchema';
import regValidationSchema from '../../validation/regValidationSchema';
import styles from './LoginForm.module.scss';

function LoginForm({ isLogin, formTexts, onLogin }) {
  const dispatch = useDispatch();

  const initialValues = {
    login: '',
    email: '',
    loginOrEmail: '',
    password: '',
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const { email, login, ...logValues } = values;
    const { loginOrEmail, ...regValues } = values;

    if (isLogin) {
      axios.post('http://127.0.0.1:4000/api/customers/login', logValues)
        .then((res) => {
          dispatch(setTokenAC(res.data.token));
          dispatch(setUserAC(res.data.user));
        })
        .catch((err) => console.log(err));
    } else {
      sendPostRequest('http://127.0.0.1:4000/api/customers/', regValues);
    }
    resetForm(initialValues);
    setSubmitting(false);
  };

  const validationSchema = isLogin
    ? regValidationSchema : loginValidationSchema;

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
          <Button
            type="submit"
            text={formTexts.button}
            disabled={isSubmitting}
          />
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
