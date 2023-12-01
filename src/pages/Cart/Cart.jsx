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
import cn from 'classnames';

const Cart = () => {
    const carts = useSelector((state) => state.carts.carts);
    const pathParts = useBreadcrumbs();

    return (
        <div className={styles.CartContainer}>
            <Container>
                <h2 className={styles.TitleShoping}>Shopping bag</h2>
                <Breadcrumbs pathParts={pathParts}/>
                <ul className={styles.List}>
                    {carts.length > 0 ? (
                        carts?.map(({quantity, instance}, index) => (
                            <CartItem
                                key={instance._id}
                                count={quantity}
                                product={instance}
                            />
                        ))
                    ) : (
                        <EmptyCartText text="The cart is empty"/>
                    )}
                </ul>
                <div className={cn(styles.FinalInfo, {[styles.FinalInfoCenter]: carts.length === 0})}>
                    <TotalPrice />
                    <div className={styles.FinalBtn}>
                        <Link to={"/shop"}>
                            <Button text={"Continue shopping"}/>
                        </Link>
                        {carts.length > 0 ? (
                            <button className={styles.Continue} type={"button"}>
                                <Link to={"/checkout"}>
                                    Continue {<Arrow className={styles.Arrow}/>}
                                </Link>
                            </button>
                        ) : (
                            <button disabled={true} className={styles.Continue} type={"button"}>
                                Continue {<Arrow className={styles.Arrow}/>}
                            </button>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Cart;
