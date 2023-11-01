import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterGroup.module.scss';
import FilterSelect from '../FilterSelect/FilterSelect';

const FilterGroup = () => (
  <ul className={styles.FilterGroup} data-testid="FilterGroup">
    <li>
      <FilterSelect />
    </li>
    <li>
      <FilterSelect />
    </li>
    <li>
      <FilterSelect />
    </li>
  </ul>
);

FilterGroup.propTypes = {};

export default FilterGroup;
