import {useEffect, useRef, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Link} from 'react-router-dom';

import NextArrow from './icons/NextArrow';
import PrevArrow from './icons/PrevArrow';

import CustomArrowPrev from './icons/CustomArrowPrev';
import CustomArrowNext from './icons/CustomArrowNext';

import styles from './CustomSlider.module.scss';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addOneToExistedProduct, updateCarts } from '../../redux/reducers/cart-reducer';
import { switchModalAC, toggleModalAC } from '../../redux/reducers/modalWindow-reducer';

const CustomSlider = ({ sliderArray, type, toShow, toScroll, isSlidePagination = true }) => {
    const CATALOG_SLIDER = 'CATALOG';
    const COLLECTIONS_SLIDER = 'COLLECTIONS';
    const SINGLE_PRODUCT = 'SINGLE_PRODUCT';
    const VIEWED_PRODUCTS = 'VIEWED_PRODUCTS';
    const SHARES_PRODUCT = 'SHARES';

     const PRODUCTION_ABOUT = 'PRODUCTION_ABOUT';
     const AWARDS_ABOUT = 'AWARDS_ABOUT';
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.carts.carts);
    const [currentIndex, setCurrentIndex] = useState(toScroll);
    const [productHeaderSlider, setProductHeaderSlider] = useState();
    const [productBodySlider, setProductBodySlider] = useState();

    const sliderRef = useRef();
    const productMainSlider = useRef(null);
    const productSecondarySlider = useRef(null);

    const handlePrevClick = () => {
        sliderRef.current.slickPrev();
    };

    const handleNextClick = () => {
        sliderRef.current.slickNext();
    };

    /*Arrows for single product slider */
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <button {...props} className={'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')} aria-hidden="true" aria-disabled={currentSlide === 0 ? true : false} type="button">
            <CustomArrowPrev />
        </button>
    );
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <button {...props} className={'slick-next slick-arrow' + (currentSlide === slideCount - 1 ? ' slick-disabled' : '')} aria-hidden="true" aria-disabled={currentSlide === slideCount - 1 ? true : false} type="button">
            <CustomArrowNext />
        </button>
    );

    const SliderCatalogSettings = {
        margin: 20,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: toShow,
        slidesToScroll: toScroll,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 1
                }
            }
        ],
        afterChange: (index) => {
            setCurrentIndex(index + 1);
        },
        ref: sliderRef
    };

    const SliderCollectionsSettings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: toShow,
        slidesToScroll: toScroll,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        afterChange: (index) => {
            if (toShow === 1 && toScroll === 1) {
                setCurrentIndex(index + 1);
            }
            if (toShow === 2) {
                setCurrentIndex(index + 2);
            }
        },
        ref: sliderRef
    };

    const SingleProductSlider = {
        dots: false,
        speed: 1000,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 2,
        swipeToSlide: true,
        focusOnSelect: true,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />
    };

    const SingleProductMain = {
        dots: false,
        speed: 1000,
        slidesToShow: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        arrows: false
    };

    const viewedProducts = {
        dots: false,
        speed: 1000,
        slidesToShow: toShow,
        autoplay: false,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 1
                }
            }
        ],
        afterChange: (index) => {
            setCurrentIndex(index + 1);
        },
        ref: sliderRef
    };

    const handleAddProduct = (id) => {
        localStorage.setItem('viewedProducts', id);
    };

    const SliderSharesSettings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: toShow,
        slidesToScroll: toScroll,
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 1
                }
            }
        ],
        afterChange: (index) => {
            setCurrentIndex(index + 1);
        },
        ref: sliderRef
    };

    useEffect(() => {
        setProductHeaderSlider(productMainSlider.current);
        setProductBodySlider(productSecondarySlider.current);
    }, []);

   

    const handleAddToCart = (viewedProduct) => {
        const itemInCart = cart?.find(({ instance }) => instance._id === viewedProduct._id);
        if (itemInCart) {
            dispatch(addOneToExistedProduct(viewedProduct._id));
        } else {
            dispatch(updateCarts([{ quantity: 1, instance: viewedProduct }]));
        }
    };

    const handleCartPopup = () => {
        dispatch(toggleModalAC());
        dispatch(switchModalAC('cartPopup'));
    };

    const cardProductsId = cart.map((item) => item.instance._id);

    return (
        <>
            {type === CATALOG_SLIDER && (
                <Slider {...SliderCatalogSettings} className={styles.wrapperSlider}>
                    {sliderArray?.map((slide) => {
                        const itemLinkCatalog = slide.name.toLowerCase();
                        return (
                            <div className={`${styles.itemSlide} `} key={slide.id}>
                                <Link to={`catalog/${itemLinkCatalog}`}>
                                    <img src={slide.imageUrl} alt={slide.name}/>
                                    <h4 className={styles.catalogName}>{slide.name}</h4>
                                </Link>
                            </div>
                        );
                    })}
                </Slider>
            )}
            {type === COLLECTIONS_SLIDER && (
                <Slider {...SliderCollectionsSettings} className={`${styles.wrapperSlider} ${styles.collectionsWrapperSlider}`}>
                    {sliderArray?.map((slide, index) => {
                        const itemLinkCatalog = slide.name.toLowerCase();
                        const slideClasses = `${styles.itemSlide} ${styles.collectionsSlide} ${index % 2 === 0 ? styles.evenSlide : styles.oddSlide}`;

                        return (
                            <div className={`${slideClasses} ${index === sliderArray.length - 1 ? styles.oddSlide : ''}`} key={slide.id}>
                                <img src={slide.imageUrl} alt={slide.name} />

                                <div className={styles.collectionData}>
                                    <h4 className={styles.catalogName}>{slide.name}</h4>
                                    <p className={styles.collectionsDescription}>
                                        {slide.shortDescription}
                                        <span className="vvReadMore"> Read more ...</span>
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            )}
            {type === SINGLE_PRODUCT && (
                <>
                    <Slider className={styles.singleProductMainSlider} asNavFor={productBodySlider} ref={productMainSlider} {...SingleProductMain}>
                        {sliderArray?.map((image, index) => {
                            return (
                                <div key={index} className={styles.mainSlide}>
                                    <img src={image} alt="slide image" />
                                </div>
                            );
                        })}
                    </Slider>
                    <Slider asNavFor={productHeaderSlider} ref={productSecondarySlider} {...SingleProductSlider} className={styles.singleProductSecondarySlider}>
                        {sliderArray?.map((image, index) => {
                            return (
                                <div key={index} className={styles.secondarySlide}>
                                    <img src={image} alt="slide image" />
                                </div>
                            );
                        })}
                    </Slider>
                </>
            )}
            {type === SHARES_PRODUCT && (
                <Slider {...SliderSharesSettings} className={` ${styles.collectionsSharesSlider}`}>
                    {sliderArray?.map((slide) => {
                        const itemLinkShares = slide._id;
                        return (
                            <div className={`${styles.itemSharesSlide}`} key={slide._id}>
                                <div className={`${styles.imgSharesContainer}`}>
                                    <Link to={`/${itemLinkShares}`}>
                                        <div className={`${styles.imgHideContainer}`}>
                                            <img src={slide.imageUrl} alt={slide.name}/>
                                        </div>
                                    </Link>
                                    <div className={`${styles.imgTextContainer}`}>
                                        <p> -{slide.discount}%</p>
                                        <img src={"https://res.cloudinary.com/dhpukux5x/image/upload/v1701814459/v1028-051_jdihbh.png"} alt={slide.name}/>
                                        {/* <img src={"../public/imageProject/shares/v1028-051.png"} alt={slide.name}/> */}
                                    </div>
                                </div>
                                <div className={`${styles.textSharesContainer}`}>
                                    <h4 className={styles.sharesName}>{slide.name}</h4>
                                    <Link to={`/${itemLinkShares}`} className={`${styles.vvSeeMore}`}>
                                        See more...
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            )}
            {type === VIEWED_PRODUCTS && (
                <>
                    {sliderArray.length > 3 ? (
                        <Slider {...viewedProducts} className={styles.viewedProductsSlider}>
                            {sliderArray?.map((slide) => {
                                return (
                                    <div className={`${styles.itemSlide} `} key={slide._id}>
                                        <Link to={`/shop/${slide.name.replace(/ /g, '-').replace(/\./g, '+')}`} onClick={() => handleAddProduct(slide._id)}>
                                            <img src={slide.productImg} alt={slide.name} />
                                        </Link>
                                        <div className={styles.productNav}>
                                            <Link to={`/shop/${slide.name.replace(/ /g, '-').replace(/\./g, '+')}`} onClick={() => handleAddProduct(slide._id)}>
                                                <h4 className={styles.name}>{slide.name}</h4>
                                            </Link>
                                            <p className={styles.price}>{slide.currentPrice}uah</p>

                                            {cardProductsId.find((productId) => productId === slide._id) ? (
                                                <Button text="In cart" type="xSmall" variant="inCart" onClick={handleCartPopup} />
                                            ) : (
                                                <Button
                                                    text="Add to cart"
                                                    onClick={() => {
                                                        handleAddToCart(slide);
                                                    }}
                                                />
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>
                    ) : (
                        <div className={styles.viewedBlock}>
                            {sliderArray?.map((slide) => {
                                return (
                                    <div className={`${styles.itemSlide} `} key={slide._id}>
                                        <Link to={`/shop/${slide.name.replace(/ /g, '-').replace(/\./g, '+')}`} onClick={() => handleAddProduct(slide._id)}>
                                            <img src={slide.productImg} alt={slide.name} />
                                        </Link>
                                        <div className={styles.productNav}>
                                            <Link to={`/shop/${slide.name.replace(/ /g, '-').replace(/\./g, '+')}`} onClick={() => handleAddProduct(slide._id)}>
                                                <h4 className={styles.name}>{slide.name}</h4>
                                            </Link>
                                            <p className={styles.price}>{slide.currentPrice}uah</p>
                                            {cardProductsId.find((productId) => productId === slide._id) ? (
                                                <Button text="In cart" type="xSmall" variant="inCart" onClick={handleCartPopup} />
                                            ) : (
                                                <Button
                                                    text="Add to cart"
                                                    onClick={() => {
                                                        handleAddToCart(slide);
                                                    }}
                                                />
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                            {(isSlidePagination = false)}
                        </div>
                    )}
                </>
            )}
            {type === PRODUCTION_ABOUT && (
                <Slider {...SliderCatalogSettings} className={`${styles.wrapperSlider} ${styles.productionSlider}`}>
                    {sliderArray?.map((slide) => {
                        return (
                            <div className={`${styles.itemSlide} `} key={slide.id}>
                                <img src={slide.imageUrl} alt='production slide image' />
                            </div>
                        );
                    })}
                </Slider>
            )}
            {type === AWARDS_ABOUT && (
                <Slider {...SliderCatalogSettings} className={`${styles.wrapperSlider} ${styles.awardsSlider}`}>
                    {sliderArray?.map((slide) => {
                        return (
                            <div className={`${styles.itemSlide} `} key={slide.id}>
                                <img src={slide.imageUrl} alt='production slide image' />
                            </div>
                        );
                    })}
                </Slider>
            )}

            {isSlidePagination && (
                <div className={`${styles.slickArrows} ${styles.viewedPagination}`}>
                    <button className="slick-prev slick-arrow" onClick={handlePrevClick}>
                        <PrevArrow />
                    </button>
                    <div className={styles.sliderNavigation}>
                        <span className={styles.currentIndex}>{currentIndex}</span>
                        <span className={styles.lengthOfSlider}>{sliderArray.length}</span>
                    </div>
                    <button className="slick-next slick-arrow" onClick={handleNextClick}>
                        <NextArrow />
                    </button>
                </div>
            )}
        </>
    );
};

export default CustomSlider;
