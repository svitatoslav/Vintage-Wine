import React from "react";
import Container from "./../../components/Container/Container";
import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import styles from "./Cart.module.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";
import Button from "../../components/Button/Button";
import Arrow from "./img/arrow.svg?react";
import calcTotalPrice from "../../helpers/calcTotalPrice";
import EmptyCartText from "../../components/CartItem/EmptyCartText/EmptyCartText";
import { Link } from "react-router-dom";
import TotalPrice from "../../components/TotalPrice/TotalPrice";

const Cart = () => {
    const carts = useSelector((state) => state.carts.carts);
    const pathParts = useBreadcrumbs();
    console.log(carts);

    return (
        <div className={styles.CartContainer}>
            <Container>
                <h2 className={styles.TitleShoping}>Shopping bag</h2>
                <Breadcrumbs pathParts={pathParts} />
                {carts.length > 0 ? (
                    <>
                        <ul className={styles.List}>
                            {carts?.map(({ quantity, instance }) => (
                                <CartItem
                                    key={instance._id}
                                    count={quantity}
                                    product={instance}
                                />
                            ))}
                        </ul>
                        <div className={styles.FinalInfo}>
                            <TotalPrice />
                            <div className={styles.FinalBtn}>
                                <Link to="/shop" >
                                    <Button text={"Continue shopping"} />
                                </Link>

                                <button className={styles.Continue} type={"button"}>
                                    <Link to={"/checkout"}>
                                        Continue {<Arrow className={styles.Arrow} />}
                                    </Link>
                                </button>

                            </div>
                        </div>
                    </>
                ) : (
                    <EmptyCartText text="The cart is empty" />
                )}
            </Container>
        </div>
    );
};

export default Cart;