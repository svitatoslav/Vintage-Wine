import { useSelector } from "react-redux";
import calcTotalPrice from "../../helpers/calcTotalPrice";
import cn from 'classnames';
import styles from './TotalPrice.module.scss';

const TotalPrice = ({ isInCheckout }) => {
    const cartItems = useSelector((state) => state.carts.carts);
    const SHIPPING_PRICE = 50;

    return (
        <div className={cn(styles.TotalPrice, { [styles.TotalPriceWide]: isInCheckout })}>
            <div className={styles.TotalPriceColumn}>
                <p>Subtotal:</p>
                <p>Shipping: </p>
                <p>Total: </p>
            </div>
            <div className={styles.TotalPriceColumn}>
                <p>{calcTotalPrice(cartItems).toFixed(2)} uah</p>
                <p> {(SHIPPING_PRICE).toFixed(2)} uah</p>
                <p className={styles.Bold}>{(calcTotalPrice(cartItems) + SHIPPING_PRICE).toFixed(2)} uah</p>
            </div>
        </div>
    );
}

export default TotalPrice;