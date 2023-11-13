import React from 'react';
import PropTypes from 'prop-types';
import styles from './SingleExcursion.module.scss';
import Arrow from './icons/arrow.svg?react';
import Calendar from './icons/calendar.svg?react';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { selectTourAC, toggleModalAC } from '../../redux/reducers/modalWindow-reducer';

const SingleExcursion = ({ reverse, orderNum, data }) => {
  const dispatch = useDispatch();

  const leadingZero = () => {
    if (orderNum < 10) {
      return `0${orderNum}`
    } else {
      return orderNum;
    }
  };

  const alt = data.imageURL?.split('/').pop().split('.')[0];

  const handleOpenModal = (title) => {
    dispatch(selectTourAC(title));
    dispatch(toggleModalAC());
  }

  return (
    <div className={cn(styles.SingleExcursion, { [styles.SingleExcursionReverse]: reverse })} data-testid="SingleExcursion">
      <div className={styles.SingleExcursionImg} >
        <img src={data.imageURL} alt={alt} />
      </div>
      <div className={styles.SingleExcursionInfo}>
        <div className={styles.SingleExcursionNumber}>{leadingZero()}</div>
        <h6 className={styles.SingleExcursionCaption}>{data.title}</h6>
        <p>{data.description}</p>
      </div>
      <button className={styles.SingleExcursionBtn} onClick={() => handleOpenModal(data.title)}>
        <span>Book time</span>
        <Arrow />
        <Calendar />
      </button>
    </div>
  );
}

SingleExcursion.propTypes = {
  orderNum: PropTypes.number.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageURL: PropTypes.string,
    imageURL: PropTypes.string,
  }),
  reverse: PropTypes.bool,
};

export default SingleExcursion;
