import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './RangeInput.module.scss';
import { useFormikContext } from 'formik';

const RangeInput = () => {
  const [value, setValue] = useState(0);
  const { setFieldValue } = useFormikContext();

  useEffect(() => {
    setFieldValue("price", value);
  }, [value]);

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div className={styles.RangeInput} data-testid="RangeInput">
      <label htmlFor="range" className={styles.Value} style={{ left: `${value / 50}%` }}><span>{value}</span>$</label>
      <input id="range" type="range" min="0" max="5000" value={value} onChange={handleChange} />
      <span className={styles.RangeInputMin}>0$</span>
      <span className={styles.RangeInputMax}>5000$</span>
    </div>
  );
}

RangeInput.propTypes = {};

export default RangeInput;
