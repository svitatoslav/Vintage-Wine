import { useDispatch, useSelector } from 'react-redux';
import Container from '../../Container/Container';
import styles from './EmptyCartPopup.module.scss';
import { toggleModalAC } from '../../../redux/reducers/modalWindow-reducer';
import { useEffect, useState } from 'react';
const EmptyCartPopup = () => {
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state) => state.modal.isModalOpen);
    const displayedModal = useSelector((state) => state.modal.displayedModal);
    const [isAnimating, setIsAnimating] = useState(false);
    const closeModalCart = () => {
        dispatch(toggleModalAC());
    };

    useEffect(() => {
        let timeout;

        if (isModalOpen && displayedModal === 'cartEmptyPopup') {
            setIsAnimating(true);
            setTimeout(() => {
                dispatch(toggleModalAC());
                setTimeout(() => {
                    setIsAnimating(false);
                }, 1000);
            }, 1200);
        }

        return () => clearTimeout(timeout);
    }, []);

    return (
        <Container onClick={closeModalCart}>
            <div className={`${styles.ThanksModal} ${isModalOpen && styles.show} ${isAnimating && styles.hide}`} data-testid="ThanksModal">
                <div className={styles.ThanksModalText}>
                    <p className={styles.ThanksModalMainText}>Your cart was empty</p>
                </div>
                <div className={styles.ThanksModalImg}>
                    <img src="http://localhost:5173/imageProject/about-us/corcs.png" alt="glass" />
                </div>
            </div>
        </Container>
    );
};

export default EmptyCartPopup;
