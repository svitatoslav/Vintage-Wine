import Container from "./../../components/Container/Container";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import styles from "./Cart.module.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";
import Button from "../../components/Button/Button";
import Arrow from "./img/arrow.svg?react";
import calcTotalPrice from "../../helpers/calcTotalPrice";

const Cart = () => {
  const carts = useSelector((state) => state.carts.carts);
  const dispatch = useDispatch();
  const pathParts = useBreadcrumbs();
  const SHIPPING_PRICE = 50.00;

  return (
    <div className={styles.CartContainer}>
      <Container>
        <h2 className={styles.TitleShoping}>Shopping bag</h2>
        <Breadcrumbs pathParts={pathParts} />
        <ul className={styles.List}>
          {carts.length ?
            (carts?.map(({ quantity, instance }) => (
              <CartItem
                key={instance._id}
                count={quantity}
                product={instance}
              />
            ))) : "The cart is empty"}
        </ul>
        <div className={styles.FinalInfo}>
          <div className={styles.FinalCost}>
            <div>
              <p>Subtotal:</p>
              <p>Shipping: </p>
              <p>Total: </p>
            </div>
            <div>
              <p>{calcTotalPrice(carts).toFixed(2)} uah</p>
              <p> {SHIPPING_PRICE} uah</p>
              <p>{(calcTotalPrice(carts) + SHIPPING_PRICE).toFixed(2)} uah</p>
            </div>
          </div>
          <div className={styles.FinalBtn}>
            <Button text={"Continue shopping"} />
            <button className={styles.Continue} type={"button"}>
              Continue {<Arrow className={styles.Arrow} />}
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;