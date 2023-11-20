import { useDispatch } from "react-redux";
import { removeAll } from "../../redux/reducers/cart-reducer";
import Counter from "../Counter/Counter";
import styles from "./CartItem.module.scss";
import Basket from "./img/delete.svg?react";

const CartItem = ({count, product}) => {
  const {
    name,
    productImg,
    _id,
    currentPrice,
    cartDescription,
  } = product;
  
  const dispatch = useDispatch();

  const removeAllProducts = () => {
    dispatch(removeAll(_id));
  }

  return (
    <div className={styles.Cart}>
      <div className={styles.CartImg}>
        <img src={productImg} alt="image" className={styles.Img} />
      </div>

      <div className={styles.CartInfo}>
        <div className={styles.CartTitle}>
          <h2 className={styles.TitleName}>{name}</h2>
          <p className={styles.Text}>{cartDescription}</p>
        </div>

        <div className={styles.CartContent}>
          <div className={styles.PriceInfo}>
            
            <p className={styles.Price}>{(currentPrice * count).toFixed(2)}</p>
            <p className={styles.Currency}>UAH</p>
          </div>

          <Counter id={_id} count={count} />
          <button
            variant="smallBasket"
            color="transparent"
            onClick={removeAllProducts}
          >
            {<Basket className={styles.BasketSvg} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;