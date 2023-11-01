import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterSelect.module.scss';
import FilterOption from '../FilterOption/FilterOption';


const op = ['1', '2', '3'];

const FilterSelect = () => {
  const options = op.map(option => {
    return <FilterOption key={option} option={option}/>
  });

  return (
    <select name="filter" className={styles.FilterSelect} data-testid="FilterSelect">
      {options}
    </select>
  );
}

FilterSelect.propTypes = {};

FilterSelect.defaultProps = {};

export default FilterSelect;
