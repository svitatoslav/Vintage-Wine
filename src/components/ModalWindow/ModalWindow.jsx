import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ModalWindow.module.scss';
import PageTitle from '../Title/PageTitle';
import CustomSelect from '../CustomSelect/CustomSelect';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import axios from 'axios';
import Button from '../Button/Button';
import Datepicker from '../Datepicker/Datepicker';
import { useDispatch } from 'react-redux';
import { switchModalAC } from '../../redux/reducers/modalWindow-reducer';

const ModalWindow = () => {
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://127.0.0.1:4000/api/excursions/')
      .then(excursions => {
        const options = excursions.data?.map(excursion => (
          {
            value: excursion.title,
            label: excursion.title,
          }
        ));
        setOptions(options);
      })
      .catch(err => console.log(err));
  }, []);

  const initialValues = {
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
  }

  const handleSubmit = (values, { resetForm }) => {
    axios.put(`http://127.0.0.1:4000/api/excursions/${values.title}`, values)
      .then(response => {
        if (response.status == 200) {
          dispatch(switchModalAC());
        }
      })
      .catch(err => console.log(err))
      .finally(() => resetForm());
  };

  return (
    <div className={styles.ModalWindow} data-testid="ModalWindow">
      {/* close */}
      <div className={styles.ModalWindoWContent}>
        <PageTitle extraClass={styles.ModalWindowTitle}>Book an excursion</PageTitle>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={styles.ModalWindowForm}>
              <div className={styles.FormBody}>
                <CustomSelect placeHolder='Choose an excursion' style={{ width: "100%" }} name="title" options={options} />
                <Field
                  className={styles.LoginInput}
                  type="text"
                  name="firstName"
                  placeholder="Name"
                />
                <ErrorMessage
                  className={styles.LoginError}
                  name="firstName"
                  component="div"
                />
                <Field
                  className={styles.LoginInput}
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                />
                <ErrorMessage
                  className={styles.LoginError}
                  name="lastName"
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
                <Field
                  className={styles.LoginInput}
                  type="text"
                  name="phone"
                  placeholder="Phone"
                />
                <ErrorMessage
                  className={styles.LoginError}
                  name="phone"
                  component="div"
                />
                <Datepicker name="date" />
              </div>
              <Button type="submit" text="Book time" disabled={isSubmitting} />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

ModalWindow.propTypes = {};

export default ModalWindow;
