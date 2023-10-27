import React from 'react';
import PropTypes from 'prop-types';
import styles from './LoginForm.module.scss';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const LoginForm = () => {
  const initialValues = {
    login: '',
    password: ''
  }

  const handleSubmit = (values) => {
    console.log(values);
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
         <Form className={styles.LoginForm}>
          <h4 className={styles.LoginTitle}>Login authorization</h4>
           <Field className={styles.LoginInput} type="email" name="login" />
           <ErrorMessage name="login" component="div" />
           <Field className={styles.LoginInput} type="password" name="password" />
           <ErrorMessage name="password" component="div" />
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
    </Formik>
  );
}

LoginForm.propTypes = {};

export default LoginForm;
