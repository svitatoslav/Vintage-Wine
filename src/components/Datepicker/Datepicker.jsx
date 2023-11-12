import React from 'react';
import DatePicker from "react-datepicker";
import PropTypes from 'prop-types';
import "react-datepicker/dist/react-datepicker.css";
import { ErrorMessage, Field } from 'formik';
import { LuCalendarDays } from 'react-icons/lu';
import styles from './Datepicker.module.scss';

const Datepicker = ({ name }) => {
  return (
    <div data-testid="Datepicker">
      <Field type="text" name="date" placeholder="Choose a date">
        {({ field, form }) => {
          const { setFieldValue } = form;
          const { value } = field;

          return (
            <div className={styles.DatePicker}>
              <DatePicker dateFormat="dd.MM.yyyy" placeholderText="Choose a date" style={{ width: "100%" }} {...field} autoComplete="off" selected={value} onChange={(val) => setFieldValue(name, val)} />
              <LuCalendarDays size={24} className={styles.DatePickerIcon}/>
            </div>
          )
        }}
      </Field>

      <ErrorMessage
        className='vvErrorMsg'
        name="date"
        component="div"
      />
    </div>
  );
}

Datepicker.propTypes = {
  name: PropTypes.string.isRequired
};

export default Datepicker;
