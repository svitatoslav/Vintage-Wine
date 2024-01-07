import React, { useState } from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { useDispatch, useSelector } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import styles from './UniProduct.module.scss';
import { addToCartThunk } from '../../redux/reducers/cart-reducer';
import { switchModalAC, toggleModalAC } from './../../redux/reducers/modalWindow-reducer';

const UniProduct = ({ data, isSmall }) => {
    const { productImg, _id, name, currentPrice } = data;
    const cart = useSelector((state) => state.carts.carts);
    const [isHovered, setIsHovered] = useState(false);
    const dispatch = useDispatch();
    const handleAddProduct = () => {
        localStorage.setItem('viewedProducts', _id);
    };

    const handleAddToCart = async (e) => {
        e.preventDefault();

        dispatch(addToCartThunk(data));
    };

    const handleMouseMove = () => {
        setIsHovered(!isHovered);
    };

    const handleCartPopup = (e) => {
        e.preventDefault();
        dispatch(toggleModalAC());
        dispatch(switchModalAC('cartPopup'));
    };
    const cardProductsId = cart.map((item) => item.instance._id);

    return (
        <div className={styles.UniProduct} onMouseEnter={handleMouseMove} onMouseLeave={handleMouseMove}>
            <Link onClick={handleAddProduct} to={`/shop/${_id}`} className={styles.UniProductLink}>
                <LazyLoadImage src={productImg} alt={`Image of ${name}`} effect="blur" />
                {window.innerWidth <= 1024 && (
                    <div className={cn(styles.UniProductCover, {[styles.UniProductCoverSmall]: isSmall && window.innerWidth <= 1024})}>
                        <p
                            className={cn(styles.UniProductText, {
                                [styles.SmallText]: isSmall
                            })}
                        >
                            {name}
                        </p>
                        <p
                            className={cn(styles.UniProductPrice, {
                                [styles.SmallPrice]: isSmall
                            })}
                        >
                            {currentPrice} UAH
                        </p>
                        <div className={styles.UniProductBtn}>
                            {cardProductsId.find((productId) => productId === _id) ? (
                                <div className={styles.wrapperInCartBtn}>
                                    <Button text="In cart" type="xSmall" variant="inCart" onClick={handleCartPopup} />
                                </div>
                            ) : (
                                <Button variant="product" text="Add to cart" onClick={handleAddToCart} />
                            )}
                        </div>
                    </div>
                )}
                {isHovered && window.innerWidth > 1024 && (
                    <div className={styles.UniProductCover}>
                        <p
                            className={cn(styles.UniProductText, {
                                [styles.SmallText]: isSmall
                            })}
                        >
                            {name}
                        </p>
                        <p
                            className={cn(styles.UniProductPrice, {
                                [styles.SmallPrice]: isSmall
                            })}
                        >
                            {currentPrice} UAH
                        </p>
                        <div className={styles.UniProductBtn}>
                            {cardProductsId.find((productId) => productId === _id) ? (
                                <div className={styles.wrapperInCartBtn}>
                                    <Button text="In cart" type="xSmall" variant="inCart" onClick={handleCartPopup} />
                                </div>
                            ) : (
                                <Button variant="product" text="Add to cart" onClick={handleAddToCart} />
                            )}
                        </div>
                    </div>
                )}
            </Link>
        </div>
    );
};

export default UniProduct;
