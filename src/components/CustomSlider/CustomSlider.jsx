import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

import NextArrow from './icons/NextArrow';
import PrevArrow from './icons/PrevArrow';

import CustomArrowPrev from './icons/CustomArrowPrev';
import CustomArrowNext from './icons/CustomArrowNext';

import styles from './CustomSlider.module.scss';

const CustomSlider = ({ sliderArray, type, toShow, toScroll, isSlidePagination = true }) => {
    const CATALOG_SLIDER = 'CATALOG';
    const COLLECTIONS_SLIDER = 'COLLECTIONS';
    const SINGLE_PRODUCT = 'SINGLE_PRODUCT';

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
        setProductHeaderSlider(productMainSlider.current);
        setProductBodySlider(productSecondarySlider.current);
    }, []);

    return (
        <>
            {type === CATALOG_SLIDER && (
                <Slider {...SliderCatalogSettings} className={styles.wrapperSlider}>
                    {sliderArray.map((slide) => {
                        const itemLinkCatalog = slide.name.toLowerCase();
                        return (
                            <div className={`${styles.itemSlide} `} key={slide.id}>
                                <Link to={`catalog/${itemLinkCatalog}`}>
                                    <img src={slide.imageUrl} alt={slide.name} />
                                    <h4 className={styles.catalogName}>{slide.name}</h4>
                                </Link>
                            </div>
                        );
                    })}
                </Slider>
            )}
            {type === COLLECTIONS_SLIDER && (
                <Slider {...SliderCollectionsSettings} className={`${styles.wrapperSlider} ${styles.collectionsWrapperSlider}`}>
                    {sliderArray.map((slide, index) => {
                        const itemLinkCatalog = slide.name.toLowerCase();
                        const slideClasses = `${styles.itemSlide} ${styles.collectionsSlide} ${index % 2 === 0 ? styles.evenSlide : styles.oddSlide}`;

                        return (
                            <div className={`${slideClasses} ${index === sliderArray.length - 1 ? styles.oddSlide : ''}`} key={slide.id}>
                                <img src={slide.imageUrl} alt={slide.name} />

                                <div className={styles.collectionData}>
                                    <h4 className={styles.catalogName}>{slide.name}</h4>
                                    <p className={styles.collectionsDescription}>
                                        {slide.shortDescription}
                                        <Link to={`collections/${itemLinkCatalog}`} className="vvReadMore">
                                            Read more ...
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            )}
            {type === SINGLE_PRODUCT && (
                <>
                    <Slider className={styles.singleProductMainSlider} asNavFor={productBodySlider} ref={productMainSlider} arrows={false}>
                        {sliderArray.map((image, index) => {
                            return (
                                <div key={index} className={styles.mainSlide}>
                                    <img src={image} alt="slide image" />
                                </div>
                            );
                        })}
                    </Slider>
                    <Slider asNavFor={productHeaderSlider} ref={productSecondarySlider} {...SingleProductSlider} className={styles.singleProductSecondarySlider}>
                        {sliderArray.map((image, index) => {
                            return (
                                <div key={index} className={styles.secondarySlide}>
                                    <img src={image} alt="slide image" />
                                </div>
                            );
                        })}
                    </Slider>
                </>
            )}
            
            {isSlidePagination && (
                <div className={styles.slickArrows}>
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
