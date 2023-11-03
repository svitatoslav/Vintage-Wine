import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './RangeInput.module.scss';

const MAX_VALUE = 5000;

const RangeInput = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const calcValue = () => {
    return MAX_VALUE / 100 * value;
  }

  return (
    <div className={styles.RangeInput} data-testid="RangeInput">
      <label htmlFor="range" className={styles.Value} style={{ left: `${value}%` }}><span>{calcValue()}</span>$</label>
      <input id="range" type="range" min="0" max="" value={value} onChange={handleChange} />
      <span className={styles.RangeInputMin}>0$</span>
      <span className={styles.RangeInputMax}>5000$</span>
    </div>
  );
}

RangeInput.propTypes = {};

RangeInput.defaultProps = {};

export default RangeInput;
