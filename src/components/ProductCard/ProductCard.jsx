import React from 'react';
import styles from './ProductCard.module.scss';
import Button from "../Button/Button";
import {Link} from "react-router-dom"
import {formatProductLink} from "../../helpers/formatProductLink";
import {addOneToExistedProduct, updateCarts} from "../../redux/reducers/cart-reducer";
import axios from "axios";
import {useSelector, useDispatch} from "react-redux";

const ProductCard = ({price, name, img, id, data}) => {

    const cart = useSelector((state) => state.carts.carts);
    const token = useSelector((state) => state.user.token);
    const dispatch = useDispatch()

    const handleAddProduct = () => {
        localStorage.setItem('viewedProducts', id);
    };

    const handleAddToCart = async (e) => {
        e.preventDefault();

        const itemInCart = cart?.find(({ instance }) => instance._id === id);
        if (itemInCart) {
            dispatch(addOneToExistedProduct(id));
        } else {
            dispatch(updateCarts([{ quantity: 1, instance: data }]));
        }

        if (token) {
            axios.put(`http://127.0.0.1:4000/api/cart/${id}`, data, {
                headers: {
                    "Authorization": token,
                }
            })
                .then((res) => console.log(res.statusText))
                .catch((err) => console.log(err));
        }
    };

    return (
        <div className={styles.ProductCard} data-testid="ProductCard">
            <Link onClick={handleAddProduct} to={formatProductLink(name)}>
                <img className={styles.Img} src={img} alt={`Image of ${name}`}/>
            </Link>
            <div>
                <p className={styles.Text}>{name}</p>
                <p className={styles.Price}>{price} Uah</p>
            </div>
            <div className={styles.Wrapper}>
                <Button onClick={handleAddToCart} variant={"medium"} text="Add to cart"/>
            </div>
        </div>
    )
};


export default ProductCard;

