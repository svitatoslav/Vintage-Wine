import React, { useEffect, useState } from 'react';
import styles from './Excursions.module.scss';
import Container from '../Container/Container';
import SectionTitle from './../Title/SectionTitle';
import SingleExcursion from '../SingleExcursion/SingleExcursion';
import Button from '../Button/Button';
import axios from 'axios';

const Excursions = () => {
  const [excursions, setExcursions] = useState([]);
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = () => {
    setReadMore(!readMore);
  }

  const mapedExcursions = excursions?.map((excursion, i) => {
    const isReverse = i % 2 === 0 ? false : true;
    return <SingleExcursion key={excursion._id} orderNum={i + 1} data={excursion} reverse={isReverse} />
  });

  const renderedExcursions = readMore ? mapedExcursions : mapedExcursions.slice(0, 2);

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
          <div className={styles.ExcursionsBtn}>
            {!readMore &&
              (<Button
                text='Read more'
                variant='small'
                onClick={handleReadMore} />)
            }
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Excursions;
