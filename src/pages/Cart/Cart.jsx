import Container from "./../../components/Container/Container";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import { addToCarts } from "../../redux/reducers/cart-reducer";
import styles from "./Cart.module.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";
import Button from "../../components/Button/Button";
import Arrow from "./img/arrow.svg?react";
import calcTotalPrice from "../../helpers/calcTotalPrice";
import { Link } from "react-router-dom";

const Cart = () => {
  const products = useSelector((state) => state.products.products);
  const carts = useSelector((state) => state.carts.carts);
  const dispatch = useDispatch();
  const pathParts = useBreadcrumbs();
  const SHIPPING_PRICE = 50;


  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length && products.length) {
      const prods = cart.map(c => {
        return products?.find(({ _id }) => _id === c);
      });
      console.log(prods);
      const idCount = {};

      const newArr = prods.reduce((acc, obj) => {
        const { _id } = obj;

        if (idCount[_id]) {
          idCount[_id].quantity++;
        } else {
          idCount[_id] = { quantity: 1, instance: { ...obj } };
          acc.push(idCount[_id]);
        }

        return acc;
      }, []);

      dispatch(addToCarts(newArr));
    }
  }, [products]);

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
            {/* <Button text={"Continue" } >
                {<Arrow />}
            </Button> */}
            <Link to="/checkout">
              <button className={styles.Continue} type={"button"}>
                Continue {<Arrow className={styles.Arrow} />}
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;