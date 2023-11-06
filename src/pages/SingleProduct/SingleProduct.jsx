import Breadcrumbs from './../../components/Breadcrumbs/Breadcrumbs';
import { useEffect } from 'react';
import useBreadcrumbs from '../../hooks/useBreadcrumbs';

import { useParams } from 'react-router-dom';

import Button from './../../components/Button/Button';
import CustomSlider from '../../components/CustomSlider/CustomSlider';
import Container from './../../components/Container/Container';
import CombinationFood from './../../components/CombinationFood/CombinationFood';

import styles from './SingleProduct.module.scss';
import AboutProduct from '../../components/AboutProduct/AboutProduct';
import LastViewed from './../../components/LastViewed/LastViewed';

const SingleProduct = () => {
    const pathParts = useBreadcrumbs();
    
    const { id } = useParams();

    const productData = {
        _id: '654297371f0354a5f8385528',
        name: 'Silent wine SHABO Grande dry red 0.75 l.',
        currentPrice: '449',
        categories: 'wine',
        collection: 'Grande Reserve',
        productImg: 'http://localhost:5173/imageProject/products/wine/w1.png',
        slidesImageUrls: ['http://localhost:5173/imageProject/products/wine/w1.png', 'http://localhost:5173/imageProject/products/wine/w1_1.png', 'http://localhost:5173/imageProject/products/wine/w1_2.png', 'http://localhost:5173/imageProject/products/wine/w1_3.jpg'],
        productUrl: '',
        characteristics: [{ vendorCode: 'Sh-2889' }, { grape: 'Cabernet Sauvignon' }, { volume: '0.75 l' }, { color: 'Deep ruby red' }, { strength: '12,0-14,0%' }, { sweetness: 'Dry' }, { supplyTemperature: '+14 - +20 °С' }, { manufacturerCountry: '' }],
        productDescription: {
            aroma: 'Bright aroma reveals shades of ripe fruits - black currant, raspberry, cherry. ',
            taste: 'Elegant tones aged in oak'
        }
    };

    const addSpaceBeforeUppercase = (text) => {
        return text.replace(/([A-Z])/g, ' $1');
    };

    useEffect(() => {
        localStorage.setItem('viewedProducts', JSON.stringify(productData));
    }, [productData]);

    return (
        <Container>
            <div className={styles.singleProduct}>
                <h3 className={styles.productName}>{productData.name}</h3>
                {<Breadcrumbs pathParts={pathParts} />}
                <div className={styles.wrapperProductData}>
                    <div className={styles.productImg}>
                        <CustomSlider sliderArray={productData.slidesImageUrls} type="SINGLE_PRODUCT" isSlidePagination={false} />
                    </div>
                    <div className={styles.productInfo}>
                        <h4 className={styles.productNameSmall}>{productData.name}</h4>
                        <div className={styles.collectionsData}>
                            <p>
                                {productData.characteristics.map((item, index) => {
                                    if (item.grape) {
                                        return <span key={index}>{item.grape}. </span>;
                                    }
                                    if (item.color) {
                                        return <span key={index}>{item.color}</span>;
                                    }
                                })}
                            </p>
                            <p>
                                Collection
                                <span className={styles.collectionSpan}>{productData.collection}</span>
                            </p>
                        </div>
                        <div className={styles.cartData}>
                            <div className={styles.wrapperPrice}>
                                <span className={styles.price}>
                                    {productData.currentPrice} <span className={styles.valuta}>UAH</span>
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
                                <p>{productData.productDescription.aroma}</p>
                                <p>{productData.productDescription.taste}</p>
                            </div>
                        </div>
                        <div className={styles.mainInfo}>
                            <h4 className={styles.titleInfo}>Characteristics of the product</h4>
                            <ul className={styles.characteristics}>
                                {productData.characteristics.map((item, index) => {
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
