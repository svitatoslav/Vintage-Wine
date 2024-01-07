import React from "react";
import Container from "./../../components/Container/Container";
import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import styles from "./Cart.module.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";
import Button from "../../components/Button/Button";
import Arrow from "./img/arrow.svg?react";
import EmptyCartText from "../../components/CartItem/EmptyCartText/EmptyCartText";
import { useNavigate } from "react-router-dom";
import TotalPrice from "../../components/TotalPrice/TotalPrice";
import cn from "classnames";
import PageTitle from "../../components/Title/PageTitle";

const Cart = () => {
  const carts = useSelector((state) => state.carts.carts);
  const pathParts = useBreadcrumbs();
  const navigate = useNavigate();

  return (
    <div className={styles.CartContainer}>
      <Container>
        <PageTitle text="Shopping bag" />
        <Breadcrumbs pathParts={pathParts} />
        <ul className={styles.List}>
          {carts.length > 0 ? (
            carts?.map(({ quantity, instance }, index) => (
              <CartItem
                key={instance._id}
                count={quantity}
                product={instance}
              />
            ))
          ) : (
            <EmptyCartText text="The cart is empty" />
          )}
        </ul>
        <div
          className={cn(styles.FinalInfo, {
            [styles.FinalInfoCenter]: carts.length === 0,
          })}
        >
          <TotalPrice />
          <div className={styles.FinalBtn}>
            <Button
              onClick={() => navigate("/shop")}
              text="Continue shopping"
            />
            <Button
              isDisabled={carts.length === 0}
              className={styles.Continue}
              type="button"
              onClick={() => navigate("/checkout")}
              text={
                <span>
                  Continue <Arrow className={styles.Arrow} />
                </span>
              }
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
