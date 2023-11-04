import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterGroup.module.scss';
import Container from '../Container/Container';
import CustomSelect from '../CustomSelect/CustomSelect';
import { filters } from './filters/filters';
import Button from '../Button/Button';
import RangeInput from '../RangeInput/RangeInput';
import { Form, Formik } from 'formik';

const FilterGroup = () => {

  const initialValues = {
    sortBy: '',
    color: '',
    collection: '',
    year: '',
    strength: '',
    country: '',
    price: 0,
  }

  const handleSubmit = (values) => {
    console.log(values);
  }

  return (
    <section>
      <Container>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className={styles.FilterWrapper}>
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
      </Container>
    </section>
  );
}

FilterGroup.propTypes = {};

export default FilterGroup;
