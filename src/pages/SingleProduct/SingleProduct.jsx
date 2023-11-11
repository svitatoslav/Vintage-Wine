import Breadcrumbs from './../../components/Breadcrumbs/Breadcrumbs';
import { useEffect, useState } from 'react';
import useBreadcrumbs from '../../hooks/useBreadcrumbs';

import { Navigate, useParams } from 'react-router-dom';

import Button from './../../components/Button/Button';
import CustomSlider from '../../components/CustomSlider/CustomSlider';
import Container from './../../components/Container/Container';
import CombinationFood from './../../components/CombinationFood/CombinationFood';

import styles from './SingleProduct.module.scss';
import AboutProduct from '../../components/AboutProduct/AboutProduct';
import LastViewed from './../../components/LastViewed/LastViewed';
import axios from 'axios';

const SingleProduct = () => {
    const [singleItem, setSingleItem] = useState({});
    const { id } = useParams();
    const pathParts = useBreadcrumbs();

    if (!localStorage.getItem('viewedProducts')) {
        return <Navigate to='*' />
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`http://127.0.0.1:4000/api/products/${localStorage.getItem('viewedProducts')}`);
                const singleItem = response.data;
                setSingleItem(singleItem);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    const sliderImages = singleItem?.slidesImageUrls?.map(item => `../../.${item}`); // temporarily solution ralated with path issues
    console.log(sliderImages);
    const addSpaceBeforeUppercase = (text) => {
        return text.replace(/([A-Z])/g, ' $1');
    };

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
                                    if (singleItem?.grape) {
                                        return <span key={index}>{singleItem?.grape}. </span>;
                                    }
                                    if (singleItem?.color) {
                                        return <span key={index}>{singleItem?.color}</span>;
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
                                <div className={styles.quantityWrapper}>
                                    <span className={styles.minus}>-</span>
                                    <span className={styles.quantity}>1</span>
                                    <span className={styles.plus}>+</span>
                                </div>
                            </div>
                            <Button text="Add to cart" type="xSmall" />
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
