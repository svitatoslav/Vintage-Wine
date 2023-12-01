import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaRegTrashAlt } from 'react-icons/fa';
import { switchModalAC, toggleModalAC } from '../../../redux/reducers/modalWindow-reducer';
import { clearCartAC } from '../../../redux/reducers/cart-reducer';
import CartItem from '../../CartItem/CartItem';
import Button from '../../Button/Button';
import calcTotalPrice from '../../../helpers/calcTotalPrice';

import styles from './CartPopup.module.scss';

const CartPopup = ({ onClose }) => {
    const dispatch = useDispatch();
    const carts = useSelector((state) => state.carts.carts);
    const isModalOpen = useSelector((state) => state.modal.isModalOpen);
    const [isApplyPopup, setApplyPopup] = useState(false);
    const closeModalCart = () => {
        dispatch(toggleModalAC());
    };

    const handleApplyPopup = () => {
        setApplyPopup(!isApplyPopup);
    };

    const handleApplyPopupOutside = (e) => {
        if (e.target.id !== 'yes' || e.target.id !== 'no') {
            setApplyPopup(!isApplyPopup);
        }
    };

    const clearCart = () => {
        dispatch(clearCartAC());
        setApplyPopup(!isApplyPopup);
        dispatch(switchModalAC('cartEmptyPopup'));
    };

    if (carts?.length < 1) {
        dispatch(toggleModalAC());
    }

    return (
        <div className={`${styles.CartPopupWrapper} ${isModalOpen && styles.show}`}>
            <AiOutlineClose size={25} className={styles.closePopupIcon} onClick={onClose} />
            <ul className={styles.List}>
                {carts?.map(({ quantity, instance }) => (
                    <CartItem key={instance._id} count={quantity} product={instance} popUpView />
                ))}
            </ul>
            <div className={styles.cartNavigation}>
                <p className={styles.clearCart} onClick={handleApplyPopup}>
                    Сlear the basket <FaRegTrashAlt className={styles.clearCartIcon} />
                </p>
                <div className={styles.FinalBtn}>
                    <div className={styles.totalPrice}>
                        <p>
                            Total: <span className={styles.value}>{calcTotalPrice(carts).toFixed(2)}</span>
                            <span className={styles.valuta}>uah</span>
                        </p>
                    </div>
                    <Link to={'/shop'}>
                        <Button text={'Continue shopping'} onClick={closeModalCart} />
                    </Link>
                    <Link to={'/checkout'}>
                        <Button text={'To order'} onClick={closeModalCart} />
                    </Link>
                </div>
            </div>
            {isApplyPopup && (
                <div className={`${styles.applyClearCart}  ${isApplyPopup && styles.show}`} onClick={handleApplyPopupOutside}>
                    <p className={styles.applyText}>Are you sure that you want clear cart?</p>
                    <div className={styles.applyBtns}>
                        <Button text={'Yes'} onClick={clearCart} id="yes" />
                        <Button text={'No'} onClick={handleApplyPopup} id="no" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPopup;
