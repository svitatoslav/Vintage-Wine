import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThanksModal from '../ModalWindows/ThanksModal/ThanksModal';
import ReservationModal from '../ModalWindows/ReservationModal/ReservationModal';
import { cancelReservedAC, toggleModalAC } from '../../redux/reducers/modalWindow-reducer';
import styles from './Overlay.module.scss';
import CartMergeModal from '../ModalWindows/CartMergeModal/CartMergeModal';

const Overlay = () => {
  const displayedModal = useSelector(state => state.modal.displayedModal);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleModalAC());
    dispatch(cancelReservedAC());
  }
  
  const setModal = () => {
    switch (displayedModal) {
      case 'thanks':
        return (<ThanksModal onClose={handleClose} />);
      case 'reservation':
        return (<ReservationModal onClose={handleClose} />)
      case 'cart':
        return (<CartMergeModal />)
      default:
        break;
    }
  }

  return (
    <div className={styles.Overlay} data-testid="Overlay">
        {setModal()}
    </div>
  );
}

export default Overlay;
