import React, { useState } from 'react';
import styles from './UniProduct.module.scss';
import Button from "../Button/Button";
import { Link } from "react-router-dom"
import { formatProductLink } from "../../helpers/formatProductLink";
import axios from 'axios';

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";


const UniProduct = ({ price, name, img, id, small }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddProduct = () => {
    localStorage.setItem('viewedProducts', id);
  };

  const handleAddToCart = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:4000/api/add-to-cart', { productId: id });

      console.log('Product added to the cart successfully!');
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  const handleMouseMove = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className={styles.UniProduct} onMouseEnter={handleMouseMove} onMouseLeave={handleMouseMove}>
      <Link onClick={handleAddProduct} to={formatProductLink(name)} className={styles.UniProductLink} >
        <LazyLoadImage className={styles.Image} src={img} alt={`Image of ${name}`} effect="blur" />
        {(isHovered && window.innerWidth > 1000) && (
          <div className={styles.UniProductCover}>
            <p className={styles.UniProductText}>{name}</p>
            <p className={styles.UniProductPrice}>{price} UAH</p>
            <div className={styles.Wrapper}>
              <Button variant="medium" text="Add to cart" onClick={handleAddToCart} />
            </div>
          </div>
        )}
      </Link>
    </div>
  );
};


export default UniProduct;
