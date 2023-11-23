import React from "react";
import Container from "./../../components/Container/Container";
import {useSelector} from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import styles from "./Cart.module.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";
import Button from "../../components/Button/Button";
import Arrow from "./img/arrow.svg?react";
import calcTotalPrice from "../../helpers/calcTotalPrice";
import EmptyCartText from "../../components/CartItem/EmptyCartText/EmptyCartText";
import checkout from "../Checkout/Checkout";
import {Link} from "react-router-dom";

const Cart = () => {
    const carts = useSelector((state) => state.carts.carts);
    const pathParts = useBreadcrumbs();
    const SHIPPING_PRICE = 50;

    return (
        <div className={styles.CartContainer}>
            <Container>
                <h2 className={styles.TitleShoping}>Shopping bag</h2>
                <Breadcrumbs pathParts={pathParts}/>
                <ul className={styles.List}>
                    {carts.length ?
                        (carts?.map(({quantity, instance}) => (
                            <CartItem
                                key={instance._id}
                                count={quantity}
                                product={instance}
                            />
                        ))) : <EmptyCartText text="The cart is empty"/>}
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
                            <p> {(SHIPPING_PRICE).toFixed(2)} uah</p>
                            <p>{(calcTotalPrice(carts) + SHIPPING_PRICE).toFixed(2)} uah</p>
                        </div>
                    </div>
                    <div className={styles.FinalBtn}>
                        <Button text={"Continue shopping"}/>

                        <button className={styles.Continue} type={"button"}>
                            <Link to={"/checkout"}>
                                Continue {<Arrow className={styles.Arrow}/>}
                            </Link>
                        </button>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Cart;