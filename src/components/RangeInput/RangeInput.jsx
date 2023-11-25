import React, { useContext, useEffect, useState } from 'react';
import { useFormikContext } from 'formik';
import { FilterContext } from '../../contexts/FilterContext';
import styles from './RangeInput.module.scss';

const RangeInput = () => {
  const { filter } = useContext(FilterContext);
  const [value, setValue] = useState(0);
  const { setFieldValue } = useFormikContext();

  useEffect(() => {
    setFieldValue("price", parseInt(value));
  }, [value]);

  useEffect(() => {
    if (!Object.keys(filter).length) {
      setValue(0)
    }
  }, [filter]);

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div className={styles.RangeInput} data-testid="RangeInput">
      <label htmlFor="range" className={styles.Value} style={{ left: `${value / 50}%` }}><span>{value}</span>₴</label>
      <input id="range" type="range" min="0" max="5000" value={value} onChange={handleChange} />
      <span className={styles.RangeInputMin}>0₴</span>
      <span className={styles.RangeInputMax}>5000₴</span>
    </div>
  );
}

export default RangeInput;
