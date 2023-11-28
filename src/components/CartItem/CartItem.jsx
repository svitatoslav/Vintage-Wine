import { useDispatch, useSelector } from "react-redux";
import { removeAll } from "../../redux/reducers/cart-reducer";
import Counter from "../Counter/Counter";
import styles from "./CartItem.module.scss";
import Basket from "./img/delete.svg?react";
import axios from "axios";

const CartItem = ({ count, product }) => {
  const {
    name,
    productImg,
    _id,
    currentPrice,
    cartDescription,
    characteristics,
  } = product;

  const [code, grape, volume, color] = characteristics;

  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  const removeProduct = () => {
    dispatch(removeAll(_id));
    if (token) {
      axios
        .delete(`http://127.0.0.1:4000/api/cart/${_id}`, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => console.log(res.statusText))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className={styles.Cart}>
      <div className={styles.CartImg}>
        <img src={productImg} alt="image" className={styles.Img} />
      </div>

      <div className={styles.CartInfo}>
        <div className={styles.CartTitle}>
          <h2 className={styles.TitleName}>{name}</h2>
          {grape.grape && (
            <p className={styles.SubText}>{grape.grape}, {color.color}</p>
          )}
          {/* <h3 className={styles.TitleSubname}>Telti-Kuruk, Light-straw</h3> */}

          <p className={styles.Text}>{cartDescription}</p>
        </div>

        <div className={styles.CartContent}>
          <div className={styles.PriceInfo}>
            <p className={styles.Price}>{(currentPrice * count).toFixed(2)}</p>
            <p className={styles.Currency}>UAH</p>
          </div>

          <div className={styles.Counter}>
            <Counter id={_id} count={count} data={product} />
          </div>
          
          <button
            onClick={removeProduct}
            className={styles.Trash}
          >
            {<Basket className={styles.BasketSvg} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
