import { useSelector } from "react-redux";
import calcTotalPrice from "../../helpers/calcTotalPrice";
import cn from 'classnames';
import styles from './TotalPrice.module.scss';

const TotalPrice = ({ isInCheckout, data }) => {
    const cartItems = useSelector((state) => state.carts.carts);
    const SHIPPING_PRICE = 50;

    const calcData = data || cartItems;
    
    return (
        <div className={cn(styles.TotalPrice, { [styles.TotalPriceWide]: isInCheckout })}>
            <div className={styles.TotalPriceColumn}>
                <p>Subtotal:</p>
                <p>Shipping: </p>
                <p>Total: </p>
            </div>
            <div className={styles.TotalPriceColumn}>
                <p>{calcTotalPrice(calcData).toFixed(2)} uah</p>
                <p> {(SHIPPING_PRICE).toFixed(2)} uah</p>
                <p className={styles.Bold}>{(calcTotalPrice(calcData) + SHIPPING_PRICE).toFixed(2)} uah</p>
            </div>
        </div>
    );
}

export default TotalPrice;