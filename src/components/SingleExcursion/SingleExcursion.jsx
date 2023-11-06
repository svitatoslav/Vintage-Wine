import React from 'react';
import PropTypes from 'prop-types';
import styles from './SingleExcursion.module.scss';
import Arrow from './icons/arrow.svg?react';
import Calendar from './icons/calendar.svg?react';
import cn from 'classnames';

const SingleExcursion = ({ reverse, orderNum, data }) => {

  const leadingZero = () => {
    if (orderNum < 10) {
      return `0${orderNum}`
    } else {
      return orderNum;
    }
  };

  const alt = data.imageURL.split('/').pop().split('.')[0];
  
  return (
    <div className={cn(styles.SingleExcursion, { [styles.SingleExcursionReverse]: reverse })} data-testid="SingleExcursion">
      {/* <div className={cn(styles.SingleExcursionData, { [styles.SingleExcursionDataReverse]: reverse })}> */}
        <img src={data.imageURL} alt={alt} className={styles.SingleExcursionImg} />
        <div className={styles.SingleExcursionInfo}>
          <div className={styles.SingleExcursionNumber}>{leadingZero()}</div>
          <h6 className={styles.SingleExcursionCaption}>{data.title}</h6>
          <p>{data.description}</p>
        </div>
      {/* </div> */}
      <button className={styles.SingleExcursionBtn}>
        <span>Book time</span>
        <Arrow />
        <Calendar />
      </button>
    </div>
  );
}

SingleExcursion.propTypes = {};

SingleExcursion.defaultProps = {};

export default SingleExcursion;
