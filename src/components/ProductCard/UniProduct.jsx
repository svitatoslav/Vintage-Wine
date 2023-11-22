import React, { useState } from 'react';
import Button from "../Button/Button";
import { Link } from "react-router-dom"
import { formatProductLink } from "../../helpers/formatProductLink";
import cn from 'classnames';

import { useDispatch, useSelector } from 'react-redux';
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styles from './UniProduct.module.scss';
import { addOneToExistedProduct, addToCarts, updateCarts } from '../../redux/reducers/cart-reducer';
import axios from 'axios';


const UniProduct = ({ data, isSmall }) => {
  const { productImg, _id, name, currentPrice } = data;
  const token = useSelector((state) => state.user.token);
  const cart = useSelector((state) => state.carts.carts);
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    localStorage.setItem('viewedProducts', _id);
  };

  const handleAddToCart = async (e) => {
    e.preventDefault();

    const itemInCart = cart?.find(({ instance }) => instance._id === _id);
    if (itemInCart) {
      dispatch(addOneToExistedProduct(_id));
    } else {
      dispatch(updateCarts([{ quantity: 1, instance: data }]));
    }

    if (token) {
      axios.put(`http://127.0.0.1:4000/api/cart/${_id}`, data, {
        headers: {
          "Authorization": token,
        }
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };

  const handleMouseMove = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className={styles.UniProduct} onMouseEnter={handleMouseMove} onMouseLeave={handleMouseMove}>
      <Link onClick={handleAddProduct} to={formatProductLink(name)} className={styles.UniProductLink} >
        <LazyLoadImage src={productImg} alt={`Image of ${name}`} effect='blur' />
        {(isHovered && window.innerWidth > 1024) && (
          <div className={styles.UniProductCover}>
            <p className={cn(styles.UniProductText, { [styles.SmallText]: isSmall })}>{name}</p>
            <p className={cn(styles.UniProductPrice, { [styles.SmallPrice]: isSmall })}>{currentPrice} UAH</p>
            <div className={styles.UniProductBtn}>
              <Button variant="medium" text="Add to cart" onClick={handleAddToCart} />
            </div>
          </div>
        )}
      </Link>
    </div>
  );
};


export default UniProduct;
