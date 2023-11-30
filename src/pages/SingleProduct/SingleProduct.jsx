import Breadcrumbs from './../../components/Breadcrumbs/Breadcrumbs';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useBreadcrumbs from '../../hooks/useBreadcrumbs';
import axios from 'axios';

import Button from './../../components/Button/Button';
import CustomSlider from '../../components/CustomSlider/CustomSlider';
import Container from './../../components/Container/Container';
import CombinationFood from './../../components/CombinationFood/CombinationFood';

import styles from './SingleProduct.module.scss';
import AboutProduct from '../../components/AboutProduct/AboutProduct';
import LastViewed from './../../components/LastViewed/LastViewed';
import { fetchViewedProductsThunk } from '../../redux/reducers/fetchViewedProducts-reducer';
import { addOneToExistedProduct, addToCarts, updateCarts } from '../../redux/reducers/cart-reducer';
import { Link } from 'react-router-dom';

const SingleProduct = () => {
    const dispatch = useDispatch();
    const [singleItem, setSingleItem] = useState({});
    const pathParts = useBreadcrumbs();
    const cart = useSelector((state) => state.carts.carts);

    const viewedProducts = useSelector((state) => state.fetchViewedProducts.viewedProducts);
    const viewedProductsStorage = JSON.stringify(viewedProducts);

    localStorage.setItem('viewedProductsDB', viewedProductsStorage);

    const currentProductPage = localStorage.getItem('viewedProducts');

    const addSpaceBeforeUppercase = (text) => {
        return text.replace(/([A-Z])/g, ' $1');
    };

    const sliderImages = singleItem?.slidesImageUrls?.map((item) => `${item}`);
    // const sliderImages = singleItem?.slidesImageUrls?.map((item) => `http://localhost:5173/${item}`);

    const handleAddToCart = (e) => {
        e.preventDefault();

        const itemInCart = cart?.find(({ instance }) => instance._id === singleItem._id);
        if (itemInCart) {
            dispatch(addOneToExistedProduct(singleItem._id));
        } else {
            dispatch(updateCarts([{ quantity: 1, instance: singleItem }]));
        }
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    let isInCart = false;

    cart.find((product) => {
        if (product.instance._id === singleItem._id) {
            isInCart = true;
        }
    });

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://127.0.0.1:4000/api/products/${localStorage.getItem('viewedProducts')}`);
                setSingleItem(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
        scrollToTop();
    }, [currentProductPage]);

    useEffect(() => {
        if (localStorage.getItem('viewedProducts')) {
            const dataToSend = localStorage.getItem('viewedProducts');

            const addViewedProduct = async () => {
                try {
                    await axios.post(`http://127.0.0.1:4000/api/last-viewed-products`, { productId: dataToSend });
                } catch (err) {}
            };
            addViewedProduct();
        }
    }, []);

    useEffect(() => {
        dispatch(fetchViewedProductsThunk());
    }, [dispatch]);

    return (
        <Container>
            <div className={styles.singleProduct}>
                <h3 className={styles.productName}>{singleItem?.name}</h3>
                {<Breadcrumbs pathParts={pathParts} />}
                <div className={styles.wrapperProductData}>
                    <div className={styles.productImg}>
                        <CustomSlider sliderArray={sliderImages} type="SINGLE_PRODUCT" isSlidePagination={false} />
                    </div>
                    <div className={styles.productInfo}>
                        <h4 className={styles.productNameSmall}>{singleItem?.name}</h4>
                        <div className={styles.collectionsData}>
                            <p>
                                {singleItem?.characteristics?.map((item, index) => {
                                    if (item?.grape) {
                                        return <span key={index}>{item?.grape}. </span>;
                                    }
                                    if (item?.color) {
                                        return <span key={index}>{item?.color}</span>;
                                    }
                                })}
                            </p>
                            <p>
                                Collection
                                <span className={styles.collectionSpan}>{singleItem?.collection}</span>
                            </p>
                        </div>
                        <div className={styles.cartData}>
                            <div className={styles.wrapperPrice}>
                                <span className={styles.price}>
                                    {singleItem?.currentPrice} <span className={styles.valuta}>UAH</span>
                                </span>
                                {/* <div className={styles.quantityWrapper}>
                                    <span className={styles.minus}>-</span>
                                    <span className={styles.quantity}>1</span>
                                    <span className={styles.plus}>+</span>
                                </div> */}
                            </div>
                            {isInCart ? (
                                <Link to="/cart" className={styles.cartLinkProduct}>
                                    <Button text="In cart" type="xSmall" />
                                </Link>
                            ) : (
                                <Button text="Add to cart" type="xSmall" onClick={handleAddToCart} className="foo" />
                            )}
                        </div>
                        <div className={styles.shortDescription}>
                            <div className={styles.titles}>
                                <h5>Aroma</h5>
                                <h5>Taste</h5>
                            </div>
                            <div className={styles.text}>
                                <p>{singleItem?.productDescription?.aroma}</p>
                                <p>{singleItem?.productDescription?.taste}</p>
                            </div>
                        </div>
                        <div className={styles.mainInfo}>
                            <h4 className={styles.titleInfo}>Characteristics of the product</h4>
                            <ul className={styles.characteristics}>
                                {singleItem?.characteristics?.map((item, index) => {
                                    const key = Object.keys(item)[0];
                                    const formattedKey = addSpaceBeforeUppercase(key);
                                    const value = item[key];
                                    if (value !== '') {
                                        return (
                                            <li key={index}>
                                                <span className={styles.key}>{formattedKey}</span>
                                                <span className={styles.value}>{value}</span>
                                            </li>
                                        );
                                    }
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <CombinationFood />
                <AboutProduct />
                <LastViewed />
            </div>
        </Container>
    );
};

export default SingleProduct;
