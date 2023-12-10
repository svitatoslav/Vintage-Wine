import { useSelector } from "react-redux";
import cn from "classnames";
import PropTypes from "prop-types";
import calcTotalPrice from "../../helpers/calcTotalPrice";
import styles from "./TotalPrice.module.scss";

const TotalPrice = ({ isInCheckout }) => {
  const cartItems = useSelector((state) => state.carts.carts);
  const { totalSum } = useSelector((state) => state.order.info) || {};

  const SHIPPING_PRICE = 50;

  const total =
    cartItems.length > 0 ? calcTotalPrice(cartItems) : parseFloat(totalSum);

  const totalWithShipping = (total + SHIPPING_PRICE).toFixed(2);

  return (
    <div
      className={cn(styles.TotalPrice, {
        [styles.TotalPriceWide]: isInCheckout,
      })}
    >
      <div className={styles.TotalPriceColumn}>
        <p>Subtotal:</p>
        <p>Shipping: </p>
        <p>Total: </p>
      </div>
      <div className={styles.TotalPriceColumn}>
        <p>{total.toFixed(2)} uah</p>
        <p> {SHIPPING_PRICE.toFixed(2)} uah</p>
        <p className={styles.Bold}>{totalWithShipping} uah</p>
      </div>
    </div>
  );
};

TotalPrice.propTypes = {
  isInCheckout: PropTypes.bool,
};

TotalPrice.defaultProps = {
  isInCheckout: false,
};
export default TotalPrice;
