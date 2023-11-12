import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThanksModal from '../ModalWindows/ThanksModal/ThanksModal';
import ReservationModal from '../ModalWindows/ReservationModal/ReservationModal';
import { cancelReservedAC, toggleModalAC } from '../../redux/reducers/modalWindow-reducer';
import styles from './Overlay.module.scss';

const Overlay = () => {
  const isReserved = useSelector(state => state.modal.isReserved);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleModalAC());
    dispatch(cancelReservedAC());
  }

  return (
    <div className={styles.Overlay} data-testid="Overlay">
      {isReserved ?
        (<ThanksModal onClose={handleClose} />) :
        (<ReservationModal onClose={handleClose} />)}
    </div>
  );
}

export default Overlay;
