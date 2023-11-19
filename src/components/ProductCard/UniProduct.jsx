import React, { useState } from 'react';
import Button from "../Button/Button";
import { Link } from "react-router-dom"
import { formatProductLink } from "../../helpers/formatProductLink";
import axios from 'axios';
import cn from 'classnames';
import styles from './UniProduct.module.scss';

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ModalProdAddedToCart from '../ModalProdAddedToCart/ModalProdAddedToCart';


const UniProduct = ({ price, name, img, id, isSmall }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddProduct = () => {
    localStorage.setItem('viewedProducts', id);
  };

  const handleAddToCart = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:4000/api/add-to-cart', { productId: id });
      setModalOpen(true);
      console.log('Product added to the cart successfully!');
      setTimeout(() => {
        closeModal();
      }, 7000);
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleMouseMove = () => {
      setIsHovered(!isHovered);
  };

  return (
    <div className={styles.UniProduct} onMouseEnter={handleMouseMove} onMouseLeave={handleMouseMove}>
      <Link onClick={handleAddProduct} to={formatProductLink(name)} className={styles.UniProductLink} >
        {/* <img src={img} alt={`Image of ${name}`} loading='lazy' /> */}
        <LazyLoadImage src={img} alt={`Image of ${name}`} effect='blur' />
        {(isHovered && window.innerWidth > 1024) && (
          <div className={styles.UniProductCover }>
            <p className={cn(styles.UniProductText, {[styles.SmallText] : isSmall})}>{name}</p>
            <p className={cn(styles.UniProductPrice, {[styles.SmallPrice] : isSmall})}>{price} UAH</p>
            <div className={styles.UniProductBtn}>
              <Button variant="medium" text="Add to cart" onClick={handleAddToCart} />
            </div>
          </div>
        )}
      </Link>
      {isModalOpen && (
        <ModalProdAddedToCart onClose={closeModal}>
          <p>Product added to the cart successfully</p>
        </ModalProdAddedToCart>
      )}
    </div>
  );
};



export default UniProduct;
