import styles from './ProductCard.module.scss';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { formatProductLink } from '../../helpers/formatProductLink';
import { addOneToExistedProduct, addToCartThunk, updateCarts } from '../../redux/reducers/cart-reducer';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { switchModalAC, toggleModalAC } from '../../redux/reducers/modalWindow-reducer';

const ProductCard = ({ price, name, img, id, data }) => {
    const cart = useSelector((state) => state.carts.carts);
    const token = useSelector((state) => state.user.token);
    const dispatch = useDispatch();

    const handleAddProduct = () => {
        localStorage.setItem('viewedProducts', id);
    };

    const handleAddToCart = async (e) => {
        e.preventDefault();

        dispatch(addToCartThunk(data));
    };

    const handleCartPopup = () => {
        dispatch(toggleModalAC());
        dispatch(switchModalAC('cartPopup'));
    };
    const cardProductsId = cart.map((item) => item.instance._id);

    return (
        <div className={styles.ProductCard} data-testid="ProductCard">
            <Link onClick={handleAddProduct} to={`/shop/${id}`}>
                <img className={styles.Img} src={img} alt={`Image of ${name}`} />
            </Link>
            <div>
                <p className={styles.Text}>{name}</p>
                <p className={styles.Price}>{price} Uah</p>
            </div>
            <div className={styles.Wrapper}>{cardProductsId.find((productId) => productId === id) ? <Button text="In cart" type="xSmall" variant="inCart" onClick={handleCartPopup} /> : <Button onClick={handleAddToCart} variant={'medium'} text="Add to cart" />}</div>
        </div>
    );
};

export default ProductCard;
