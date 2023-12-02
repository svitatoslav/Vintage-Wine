import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThanksModal from '../ModalWindows/ThanksModal/ThanksModal';
import ReservationModal from '../ModalWindows/ReservationModal/ReservationModal';
import { cancelReservedAC, toggleModalAC } from '../../redux/reducers/modalWindow-reducer';
import styles from './Overlay.module.scss';
import CartMergeModal from '../ModalWindows/CartMergeModal/CartMergeModal';
import CartPopup from '../ModalWindows/CartPopup/CartPopup';
import EmptyCartPopup from '../ModalWindows/EmptyCartPopup/EmptyCartPopup';

const Overlay = () => {
    const displayedModal = useSelector((state) => state.modal.displayedModal);
    const isModalOpen = useSelector((state) => state.modal.isModalOpen);
    const isMergedCart = useSelector(state => state.mergeCart.isMergeCart);
    const [isAnimating, setIsAnimating] = useState(false);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(toggleModalAC());
        dispatch(cancelReservedAC());
    };

    const closeModalOutside = (e) => {
        if (e.target.id === 'overlayPopup' && !isMergedCart) {
            setIsAnimating(true);
            setTimeout(() => {
                dispatch(toggleModalAC());
                setTimeout(() => {
                    setIsAnimating(false);
                }, 1500);
            }, 1500);
        }
    };


    const setModal = () => {
        switch (displayedModal) {
            case 'thanks':
                return <ThanksModal onClose={handleClose} />;
            case 'reservation':
                return <ReservationModal onClose={handleClose} />;
            case 'cart':
                return <CartMergeModal />;
            case 'cartPopup':
                return <CartPopup onClose={handleClose} />;
            case 'cartEmptyPopup':
                return <EmptyCartPopup onClose={handleClose} />;
            default:
                break;
        }
    };

    return (
        <div id="overlayPopup" className={`${styles.Overlay} ${isModalOpen && styles.show} ${isAnimating && styles.hide}`} data-testid="Overlay" onClick={closeModalOutside}>
            {setModal()}
        </div>
    );
};

export default Overlay;
