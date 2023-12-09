import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Button from '../Button/Button';
import loginValidationSchema from '../../validation/loginValidationSchema';
import regValidationSchema from '../../validation/regValidationSchema';
import styles from './AddProductForm.module.scss';

const AddProductForm = ({ isLogin, formTexts, onLogin }) => {
  const isSigned = useSelector((state) => state.user.isSigned);
  const isLoading = useSelector(state => state.loader.isLoading);
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const initialValues = {
    name: "",
    price: "",
    categories: "",
    productImg: "",
    cartDescription: "",
    collection: "",
  };

  // const validationSchema = isLogin
  //   ? regValidationSchema
  //   : loginValidationSchema;

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.LoginForm}>
          {/* <h4 className={styles.LoginTitle}>{formTexts.title}</h4> */}
          <div className={styles.LoginFields}>
            <Field
              className={styles.LoginInput}
              type="text"
              name="name"
              placeholder="Product name"
            />
            <ErrorMessage
              className={styles.LoginError}
              name="name"
              component="div"
            />
            <Field
              className={styles.LoginInput}
              type="text"
              name="price"
              placeholder="Product price"
            />
            <ErrorMessage
              className={styles.LoginError}
              name="price"
              component="div"
            />
            <Field
              className={styles.LoginInput}
              type="text"
              name="categories"
              placeholder="Product category"
            />
            <ErrorMessage
              className={styles.LoginError}
              name="category"
              component="div"
            />
            <Field
              className={styles.LoginInput}
              type="text"
              name="productImg"
              placeholder="Product image"
            />
            <ErrorMessage
              className={styles.LoginError}
              name="productImg"
              component="div"
            />
            <Field
              className={styles.LoginInput}
              type="text"
              name="cartDescription"
              placeholder="Product description"
            />
            <ErrorMessage
              className={styles.LoginError}
              name="cartDescription"
              component="div"
            />
            <Field
              className={styles.LoginInput}
              type="text"
              name="collection"
              placeholder="Product Collection"
            />
            <ErrorMessage
              className={styles.LoginError}
              name="collection"
              component="div"
            />
          </div>
          {/* {(error && isLogin) && (
            <div className={styles.FormError}>
              {error}
            </div>
          )} */}
          <Button
            type="submit"
            text="Save"
            disabled={isSubmitting}
          />
        </Form>
      )}
    </Formik>
  );
}

export default AddProductForm;
