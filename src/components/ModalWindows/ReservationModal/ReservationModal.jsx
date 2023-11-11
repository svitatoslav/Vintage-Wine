import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ReservationModal.module.scss';
import PageTitle from '../../Title/PageTitle';
import CustomSelect from '../../CustomSelect/CustomSelect';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import axios from 'axios';
import Button from '../../Button/Button';
import Datepicker from '../../Datepicker/Datepicker';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import reservationValidationSchema from '../../../validation/reservationValidationSchema';
import { switchModalAC } from '../../../redux/reducers/modalWindow-reducer';

const ReservationModal = ({ onClose }) => {
  const [options, setOptions] = useState([]);
  const selectedTour = useSelector(state => state.modal.selectedTour);
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
    title: selectedTour,
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
    <div className={styles.ReservationModal} data-testid="ReservationModal">
      <div className={styles.ReservationModalContent}>
        <div className={styles.ReservationModalTop}>
          <AiOutlineClose size={25} className={styles.ReservationModalClose} onClick={onClose}/>
          <PageTitle text="Book an excursion" extraClass={styles.ReservationModalTitle} />
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={reservationValidationSchema}
        >
          {({ isSubmitting }) => (
            <Form className={styles.ReservationModalForm}>
              <div className={styles.FormBody}>
                <CustomSelect placeHolder={selectedTour} style={{ width: "100%" }} name="title" options={options} defVal={selectedTour} />
                <Field
                  type="text"
                  name="firstName"
                  placeholder="Name"
                />
                <ErrorMessage
                  className="vvErrorMsg"
                  name="firstName"
                  component="div"
                />
                <Field
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                />
                <ErrorMessage
                  className="vvErrorMsg"
                  name="lastName"
                  component="div"
                />
                <Field
                  type="email"
                  name="email"
                  placeholder="E-mail"
                />
                <ErrorMessage
                  className="vvErrorMsg"
                  name="email"
                  component="div"
                />
                <Field
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                />
                <ErrorMessage
                  className="vvErrorMsg"
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

ReservationModal.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default ReservationModal;
