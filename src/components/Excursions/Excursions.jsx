import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Excursions.module.scss';
import Container from '../Container/Container';
import SectionTitle from './../Title/SectionTitle';
import SingleExcursion from '../SingleExcursion/SingleExcursion';
import axios from 'axios';

const Excursions = () => {
  const [excursions, setExcursions] = useState([]);

  const renderedExcursions = excursions?.map((excursion, i) => {
    const isReverse = i % 2 === 0 ? false : true;
    return <SingleExcursion key={excursion._id} orderNum={i + 1} data={excursion} reverse={isReverse}/>
  });

  useEffect(() => {
    axios.get('http://127.0.0.1:4000/api/excursions/')
      .then(excursions => setExcursions(excursions.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <section className={styles.Excursions} data-testid="Excursions">
      <Container>
        <SectionTitle secText={'Excursions'} subText={'Our'} />
        <div className={styles.ExcursionsWrapper}>
          {renderedExcursions}

          {/* <SingleExcursion reverse/> */}
        </div>
      </Container>
    </section>
  );
}

Excursions.propTypes = {};

export default Excursions;
