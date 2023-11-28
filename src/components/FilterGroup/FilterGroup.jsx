import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import createOptions from '../../helpers/getOptions';
import { FilterContext } from '../../contexts/FilterContext';

import Container from '../Container/Container';
import CustomSelect from '../CustomSelect/CustomSelect';
import Button from '../Button/Button';
import RangeInput from '../RangeInput/RangeInput';

import Clear from './icons/clear.svg?react';
import styles from './FilterGroup.module.scss';
import { useSearchParams } from 'react-router-dom';


const FilterGroup = () => {
  const { filter, setFilter, setResetFilters } = useContext(FilterContext);
  const filteredProducts = useSelector(state => state.filters.filteredProducts);
  const [searchParams] = useSearchParams();

  const options = Object.values(createOptions(filteredProducts));
  const lastOptions = useSelector(state => state.filters.lastOptions);
  const updatedOptions = options.map(item => {
    if (item.name === lastOptions?.name) {
      return (lastOptions);
    }

    return item;
  });

  const initialValues = {
    sortBy: '',
    color: '',
    collection: '',
    year: '',
    strength: '',
    country: '',
    price: 0,
  }

  const handleSubmit = (values, { resetForm }) => {
    const filters = Object.entries(values).filter(([key, value]) => value !== '' && value !== 0);

    let resultObject = {};

    filters.forEach(subArray => {
      resultObject[subArray[0]] = subArray[1];
    });

    setFilter(prev => ({ ...prev, ...resultObject }));
    resetForm(initialValues);
  }

  const clearFilters = () => {
    setFilter({ categories: searchParams.get("categories") });
    setResetFilters(true);
  }

  return (
    <div className={styles.FilterBlock}>
      <Container>
        <div className={styles.FilterBody}>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className={styles.FilterForm}>
              <div>
                {
                  ((Object.keys(filter).length && !filter.hasOwnProperty('categories')) ||
                    (Object.keys(filter).length > 1 && filter.hasOwnProperty('categories'))) ?
                    (
                      <button className={styles.FilterClearBtn} onClick={clearFilters}>
                        Clear <Clear />
                      </button>
                    ) : null
                }
                <ul className={styles.FilterGroup} data-testid="FilterGroup">

                  {updatedOptions.map((option) => (
                    <li key={option.name} >
                      <CustomSelect option={option} />
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.FilterConfirm}>
                <RangeInput />
                <Button type='submit' text='Save' />
              </div>
            </Form>
          </Formik>
        </div>
      </Container>
    </div>
  );
}

export default FilterGroup;
