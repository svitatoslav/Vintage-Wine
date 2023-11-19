import Container from "./../../components/Container/Container";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import { addToCarts } from "../../redux/reducers/cart-reducer";
import styles from "./Cart.module.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";
import Button from "../../components/Button/Button";
import Arrow from "./img/arrow.svg?react";

const Cart = () => {
  const product = useSelector((state) => state.products.products);
  const carts = useSelector((state) => state.carts.carts);
  const dispatch = useDispatch();
  const pathParts = useBreadcrumbs();
  const SHIPPING_PRICE = 50;
  console.log(product);
  useEffect(() => {
    if (product.length && !carts.length) {
      dispatch(addToCarts(product[0]));
      dispatch(addToCarts(product[1]));
      dispatch(addToCarts(product[2]));
      dispatch(addToCarts(product[4]));
    }
  }, [product]);

  const TotalPrice = (array) => {
    let number = 0;
    array.forEach((element) => {
      number = number + element.currentPrice * element.count;
      // console.log(element.currentPrice);
    });
    return number;
  };
  return (
    <div className={styles.CartContainer}>
      <Container>
        <h2 className={styles.TitleShoping}>Shopping bag</h2>
        <Breadcrumbs pathParts={pathParts} />
        <ul className={styles.List}>
          {carts?.map((product, index) => (
            <CartItem
              id={product._id}
              key={index}
              name={product.name}
              url={product.url}
              price={product.price}
              count={product.count}
              article={product.article}
              categories={product.categories}
              characteristics={product.characteristics}
              collection={product.collection}
              currentPrice={product.currentPrice}
              productDescription={product.productDescription}
              productImg={product.productImg}
              productUrl={product.productUrl}
              slidesImageUrls={product.slidesImageUrls}
              cartDescription={product.cartDescription}
            />
          ))}
        </ul>
        <div className={styles.FinalInfo}>
          <div className={styles.FinalCost}>
            <div>
              <p>Subtotal:</p>
              <p>Shipping: </p>
              <p>Total: </p>
              {/* <p>Subtotal:{TotalPrice(carts).toFixed(2)}</p>
            <p>Shipping: {SHIPPING_PRICE}</p>
            <p>Total: {(TotalPrice(carts) + SHIPPING_PRICE).toFixed(2)}</p> */}
            </div>
            <div>
              <p>{TotalPrice(carts).toFixed(2)} uah</p>
              <p> {SHIPPING_PRICE} uah</p>
              <p>{(TotalPrice(carts) + SHIPPING_PRICE).toFixed(2)} uah</p>
            </div>
          </div>
          <div className={styles.FinalBtn}>
            <Button text={"Continue shopping"} />
            {/* <Button text={"Continue" } >
                {<Arrow />}
            </Button> */}
            <button className={styles.Continue} type={"button"}>
              Continue {<Arrow className={styles.Arrow} />}
            </button>
          </div>
        </div>
        {/* Cart Page */}
      </Container>
    </div>
  );
};

export default Cart;
