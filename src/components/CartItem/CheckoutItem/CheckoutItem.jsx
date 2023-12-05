import { useDispatch, useSelector } from "react-redux";
import { removeAll } from "../../../redux/reducers/cart-reducer";
import Counter from "../../Counter/Counter";
import styles from "./CheckoutItem.module.scss";
import { FaRegTrashAlt } from "react-icons/fa";
import axios from "axios";

const CheckoutItem = ({ count, product }) => {
  const { name, productImg, _id, currentPrice, characteristics } = product;

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
    <div className={styles.CheckoutItem}>
      <div className={styles.CheckoutImg}>
        <img src={productImg} alt="image" className={styles.Img} />
      </div>

      <div className={styles.CheckoutInfo}>
        <div className={styles.CheckoutItemDescr}>
          <h3 className={styles.TitleName}>{name}</h3>
          {grape.grape && (
            <p className={styles.Text}>
              {grape.grape}, {color.color}
            </p>
          )}
        </div>
        <div className={styles.Bottom}>
          <span className={styles.CheckoutItemQuantity}>{count} pcs</span>
          <p className={styles.Price}>
            {(currentPrice * count).toFixed(2)} <span>UAH</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
