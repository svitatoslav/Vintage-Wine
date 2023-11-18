import React, { useContext, useEffect, useState } from 'react';
import styles from './FilterGroup.module.scss';
import Container from '../Container/Container';
import CustomSelect from '../CustomSelect/CustomSelect';
import { filters } from './filters/filters';
import Button from '../Button/Button';
import RangeInput from '../RangeInput/RangeInput';
import { Form, Formik } from 'formik';
import { FilterContext } from '../../contexts/FilterContext';

const FilterGroup = () => {
  const { setFilter } = useContext(FilterContext);

  const initialValues = {
    sortBy: '',
    color: '',
    collection: '',
    year: '',
    strength: '',
    country: '',
    price: 0,
  }

  const handleSubmit = (values, {resetForm}) => {
    const filters = Object.entries(values).filter(([key, value]) => value !== '' && value !== 0);

    let resultObject = {};

    filters.forEach(subArray => {
      resultObject[subArray[0]] = subArray[1];
    });

    setFilter(prev => ({...prev, ...resultObject}));
    resetForm(initialValues);
  }

  return (
    <div className={styles.FilterBlock}>
      <Container>
        <div className={styles.FilterBody}>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form className={styles.FilterForm}>
              <ul className={styles.FilterGroup} data-testid="FilterGroup">
                {filters.map(({ name, title, options }) => (
                  <li key={name} >
                    <CustomSelect placeHolder={title} name={name} options={options} />
                  </li>
                ))}
              </ul>
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

FilterGroup.propTypes = {};

export default FilterGroup;
