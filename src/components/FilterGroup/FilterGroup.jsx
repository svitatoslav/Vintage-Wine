import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterGroup.module.scss';
import CustomSelect from '../CustomSelect/CustomSelect';
import {filters} from './filters/filters';

const FilterGroup = () => {
  return (
    <section>
      <ul className={styles.FilterGroup} data-testid="FilterGroup">
        {filters.map(({name, options}) => (
          <li key={name} >
            <CustomSelect placeHolder={name} options={options} />
          </li>
        ))}
      </ul>
    </section>
  );
}

FilterGroup.propTypes = {};

export default FilterGroup;
