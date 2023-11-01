import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterOption.module.scss';

const FilterOption = ({option}) => (
  <option className={styles.FilterOption} value={option} data-testid="FilterOption">
    {option}
  </option>
);

FilterOption.propTypes = {};

FilterOption.defaultProps = {};

export default FilterOption;
