import { useDispatch } from "react-redux";
import { removeFromCarts } from "../../redux/reducers/cart-reducer";
import Button from "../Button/Button";
import Counter from "../Counter/Counter";
import styles from "./CartItem.module.scss";
import Basket from "./img/delete.svg?react";
import cn from "classnames"

const CartItem = (props) => {
  const {
    name,
    productImg,
    id,
    categories,
    characteristics,
    collection,
    currentPrice,
    productDescription,
    productUrl,
    slidesImageUrls,
    cartQuantity,
    cartDescription,
    text
  } = props;
  //   console.log(id);
  const dispatch = useDispatch();

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
            
            <p className={styles.Price}>{(currentPrice * cartQuantity).toFixed(2)}</p>
            <p className={styles.Currency}>UAH</p>
          </div>

          <Counter id={id} count={cartQuantity} />
          <button
            typeBtn="smallBasket"
            color="transparent"
            onClick={() => {
              dispatch(removeFromCarts(id));
            }}
          >
            {<Basket className={styles.BasketSvg} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
