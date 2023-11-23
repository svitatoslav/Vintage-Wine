import React from 'react';
import styles from './ProductCard.module.scss';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { formatProductLink } from '../../helpers/formatProductLink';
import { addOneToExistedProduct, updateCarts } from '../../redux/reducers/cart-reducer';
import { useDispatch, useSelector } from 'react-redux';

const ProductCard = ({ price, name, img, id }) => {
    const handleAddProduct = () => {
        localStorage.setItem('viewedProducts', id);
    };


    return (
        <div className={styles.ProductCard} data-testid="ProductCard">
            <Link onClick={handleAddProduct} to={formatProductLink(name)}>
                <img className={styles.Img} src={img} alt={`Image of ${name}`} />
            </Link>
            <div>
                <Link onClick={handleAddProduct} to={formatProductLink(name)}>
                    <p className={styles.Text}>{name}</p>
                </Link>
                <p className={styles.Price}>{price} Uah</p>
            </div>
            <div className={styles.Wrapper}>
                <Button variant={'medium'} text="Add to cart" />
            </div>
        </div>
    );
};

export default ProductCard;
