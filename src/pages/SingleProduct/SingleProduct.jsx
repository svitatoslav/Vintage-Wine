import Container from './../../components/Container/Container';
import { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';

import styles from './SingleProduct.module.scss';
import Breadcrumbs from './../../components/Breadcrumbs/Breadcrumbs';
import useBreadcrumbs from '../../hooks/useBreadcrumbs';
import Button from './../../components/Button/Button';
import ArrowPrev from './icons/ArrowPrev';
import ArrowNext from './icons/ArrowNext';

const SingleProduct = () => {
    const pathParts = useBreadcrumbs();

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    const slider1 = useRef(null);
    const slider2 = useRef(null);

    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <button {...props} className={'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')} aria-hidden="true" aria-disabled={currentSlide === 0 ? true : false} type="button">
            <ArrowPrev />
        </button>
    );
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <button {...props} className={'slick-next slick-arrow' + (currentSlide === slideCount - 1 ? ' slick-disabled' : '')} aria-hidden="true" aria-disabled={currentSlide === slideCount - 1 ? true : false} type="button">
            <ArrowNext />
        </button>
    );

    const SliderSettings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 2,
        swipeToSlide: true,
        focusOnSelect: true,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />
    };

    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
    }, []);
    const productData = {
        vendorCode: 'Sh-2889',
        name: 'Silent wine SHABO Grande dry red 0.75 l.',
        currentPrice: '449',
        categories: 'wine',
        collection: 'Grande Reserve',
        productImg: 'http://localhost:5173/imageProject/products/wine/w1.png',
        imageUrls: ['http://localhost:5173/imageProject/products/wine/w1.png', 'http://localhost:5173/imageProject/products/wine/w1_1.png', 'http://localhost:5173/imageProject/products/wine/w1_2.png', 'http://localhost:5173/imageProject/products/wine/w1_3.jpg'],
        productUrl: '',
        grape: 'Cabernet Sauvignon',
        volume: '0.75 l',
        color: 'Deep ruby red',
        strength: '12,0-14,0%',
        sweetness: 'Dry',
        supplyTemperature: '+14 - +20 °С',
        manufacturerCountry: '',
        productDescription: {
            aroma: 'Bright aroma reveals shades of ripe fruits - black currant, raspberry, cherry. ',
            taste: 'Elegant tones aged in oak'
        }
    };

    return (
        <Container>
            <div className={styles.singleProduct}>
                <h3 className={styles.productName}>{productData.name}</h3>
                {<Breadcrumbs pathParts={pathParts} />}
                <div className={styles.wrapperProductData}>
                    <div className={styles.productImg}>
                        <Slider className={styles.mainSlider} asNavFor={nav2} ref={slider1} arrows={false}>
                            {productData.imageUrls.map((image, index) => {
                                return (
                                    <div key={index} className={styles.mainSlide}>
                                        <img src={image} alt="slide image" />
                                    </div>
                                );
                            })}
                        </Slider>
                        <Slider asNavFor={nav1} ref={slider2} {...SliderSettings} className={styles.secondarySlider}>
                            {productData.imageUrls.map((image, index) => {
                                return (
                                    <div key={index} className={styles.secondarySlide}>
                                        <img src={image} alt="slide image" />
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                    <div className={styles.productInfo}>
                        <h4 className={styles.productNameSmall}>{productData.name}</h4>
                        <div className={styles.collectionsData}>
                            <p>
                                <span>{productData.grape}. </span>
                                <span>{productData.color}</span>
                            </p>
                            <p>
                                Collection
                                <span>{productData.collection}</span>
                            </p>
                        </div>
                        <div className={styles.cartData}>
                            <span className={styles.currentPrice}>{productData.price}</span>
                            <span className={styles.quantity}>1</span>
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
                            <ul className="characteristics">
                                <li>
                                    Vendor code<span>{productData.vendorCode}</span>
                                </li>
                                <li>
                                    Grape
                                    <span>{productData.grape}</span>
                                </li>
                                <li>
                                    Volume
                                    <span>{productData.volume}</span>
                                </li>
                                <li>
                                    Color
                                    <span>{productData.color}</span>
                                </li>
                                <li>
                                    Strength
                                    <span>{productData.strength}</span>
                                </li>
                                <li>
                                    Sweetness
                                    <span>{productData.sweetness}</span>
                                </li>
                                <li>
                                    Supply temperature
                                    <span>{productData.supplyTemperature}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default SingleProduct;
