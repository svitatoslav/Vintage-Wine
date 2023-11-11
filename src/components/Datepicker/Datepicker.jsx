import React from 'react';
import DatePicker from "react-datepicker";
import PropTypes from 'prop-types';
import styles from './Datepicker.module.scss';
import "react-datepicker/dist/react-datepicker.css";
import { ErrorMessage, Field } from 'formik';

const Datepicker = ({ name }) => {
  return (
    <div className={styles.Datepicker} data-testid="Datepicker">
      <Field type="text" name="date" placeholder="Choose a date">
        {({ field, form }) => {
          const { setFieldValue } = form;
          const { value } = field;

          return <DatePicker dateFormat="dd.MM.yyyy" placeholderText="Choose a date" style={{ width: "100%" }} {...field} selected={value} onChange={(val) => setFieldValue(name, val)} />
        }}
      </Field>


      <ErrorMessage
        className={styles.LoginError}
        name="lastName"
        component="div"
      />
    </div>
  );
}

Datepicker.propTypes = {
  name: PropTypes.string.isRequired
};

export default Datepicker;
