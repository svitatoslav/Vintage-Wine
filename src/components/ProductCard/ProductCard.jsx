import React from 'react';
import styles from './ProductCard.module.scss';
import Button from "../Button/Button";
import {Link} from "react-router-dom"


const ProductCard = ({price, name, img, id}) => (
    <Link to={`/shop/${id}`} className={styles.ProductCard} data-testid="ProductCard">
        <img className={styles.Img} src={img} alt={`Image of ${name}`}/>
        <div>
            <p className={styles.Text}>{name}</p>
            <p className={styles.Price}>{price} Uah</p>
        </div>
        <div className={styles.Wrapper}>
            <Button variant={"medium"} text="Add to cart"/>
        </div>
    </Link>
);


export default ProductCard;
