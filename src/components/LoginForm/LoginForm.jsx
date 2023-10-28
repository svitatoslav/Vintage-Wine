import React from 'react';
import PropTypes from 'prop-types';
import styles from './LoginForm.module.scss';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import sendPostRequest from '../../helpers/api/sendPostRequest';

const LoginForm = () => {
  const initialValues = {
    login: '',
    email: '',
    brad: '',
    password: ''
  }

  const handleSubmit = (values, { setSubmitting }) => {
    sendPostRequest('http://127.0.0.1:4000/api/customers/', values)
    
    setSubmitting(false)
    
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
         <Form className={styles.LoginForm}>
          {/* <h4 className={styles.LoginTitle}>Login authorization</h4> */}
          <h4 className={styles.LoginTitle}>User registration form</h4>
           <Field className={styles.LoginInput} type="text" name="login" placeholder="Login"/>
           <ErrorMessage name="text" component="div" />
           <Field className={styles.LoginInput} type="email" name="email" placeholder="E-mail"/>
           <ErrorMessage name="email" component="div" />
           <Field className={styles.LoginInput} type="password" name="password" placeholder="Password"/>
           <ErrorMessage name="password" component="div" />
           <button type="submit" disabled={isSubmitting} style={{width: "218px", backgroundColor: "#BE0615"}}>
             Sign up
           </button>
         </Form>
       )}
    </Formik>
  );
}

LoginForm.propTypes = {};

export default LoginForm;
