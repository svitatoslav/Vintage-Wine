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
import { toggleMergeCartAC } from '../../redux/reducers/mergeCarts-reducer';
import styles from './LoginForm.module.scss';
import { hideLoadingAC, showLoadingAC } from '../../redux/reducers/loading-reducer';
import Loader from '../Loader/Loader';

function LoginForm({ isLogin, formTexts, onLogin }) {
  const isLogged = useSelector((state) => state.user.user);
  const isSigned = useSelector((state) => state.user.isSigned);
  const currentCart = useSelector((state) => state.carts.carts);
  const isLoading = useSelector(state => state.loader.isLoading);
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
    dispatch(showLoadingAC());
    const { email, login, ...logValues } = values;
    const { loginOrEmail, ...regValues } = values;

    if (isLogin) {
      axios.post('http://127.0.0.1:4000/api/customers/login', logValues)
        .then((res) => {
          dispatch(setTokenAC(res.data.token));
          dispatch(setUserAC(res.data.user));

          const newCart = {
            customerId: res.data.id,
            products: [],
          }

          dispatch(hideLoadingAC());
          axios.post('http://127.0.0.1:4000/api/cart/', newCart, {
            headers: {
              "Authorization": res.data.token,
            }
          })
            .then((res) => console.log(res.statusText))
            .catch((err) => console.log(err))
            .finally(() => {
              axios.get('http://127.0.0.1:4000/api/cart/', {
                headers: {
                  "Authorization": res.data.token,
                }
              })
                .then((result) => {
                  if (result.data.products.length) {
                    dispatch(toggleMergeCartAC());
                    // dispatch(switchModalAC('cart'));
                    // dispatch(toggleModalAC());
                    return;
                  }

                  if (currentCart.length) {
                    axios.put('http://127.0.0.1:4000/api/cart/', { products: currentCart }, {
                      headers: {
                        "Authorization": res.data.token,
                      }
                    })
                      .then((res) => console.log(res.statusText))
                      .catch((err) => console.log(err))
                  }
                })
                .catch((err) => console.log(err))
            });
        })
        .catch((err) => {
          setError(...Object.values(err.response.data));
          setTimeout(() => {
            setError('');
          }, 4000);
        });
    } else {
      axios.post('http://127.0.0.1:4000/api/customers/', regValues)
        .then(() => {
          dispatch(hideLoadingAC());
          dispatch(signInAC());
        })
        .catch((err) => console.log(err));
    }

    resetForm(initialValues);
    setSubmitting(false);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={styles.LoginForm}>
            {
              isLoading ? (
                <Loader />
              ) : (
                <>
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
                </>
              )
            }
          </Form>
        )}
      </Formik>
    </>
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
