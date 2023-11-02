import styles from "./Shop.module.scss";
import Breadcrumbs from "./../../components/Breadcrumbs/Breadcrumbs";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import React, { Suspense } from "react";
const Filtration = React.lazy(() =>
    import("../../components/Filtaration/Filtaration")
);

const Shop = () => {
    const links = ["Wine", "Sparkling", "Whiskey", "Strong", "Beer", "Ciders"];
    // const smallImages_one = [ft6, esprit, gautherot, jac];
    // const smallImages_two = [brandy, legis, rasteau, sacura];
    // const smallImages_three = [yellow_wine, esprit, gautherot, heinken];
    const pathParts = useBreadcrumbs();

    const [products, setProducts] = useState([]);

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('/api/products');
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const catalogData = await response.json();

          setProducts(catalogData);
        } catch (error) {
          console.error("Error fetching data:", error);
        } 
      }

      fetchData();
    }, []);

    const elements = products.map(({productImg, _id, name}) => {
        return (
            <div key={_id} className={styles.ShopImagesContainer}> 
                <div className={styles.ShopImagesPortionOne}>
                    <div className={styles.ShopImagesPortionOneBigImage}>
                        <LazyLoadImage
                            src={productImg}
                            alt={name}
                            effect="blur"
                        />
                    </div>
                    <div className={styles.ShopImagesSmall_One}>
                            <LazyLoadImage
                                src={productImg}
                                alt={name}
                                effect="blur"
                            />
                            <LazyLoadImage
                                src={productImg}
                                alt={name}
                                effect="blur"
                            />
                            <LazyLoadImage
                                src={productImg}
                                alt={name}
                                effect="blur"
                            />
                            <LazyLoadImage
                                src={productImg}
                                alt={name}
                                effect="blur"
                            />  
                    </div>
                </div>
                <div className={styles.ShopImagesPortionTwo}>
                    <div className={styles.ShopImagesPortionTwoBigImage}>
                        <LazyLoadImage
                            src={productImg}
                            alt={name}
                            effect="blur"
                        />
                    </div>
                    <div className={styles.ShopImagesSmall_Two}>
                            <LazyLoadImage
                                src={productImg}
                                alt={name}
                                effect="blur"
                            />
                    </div>
                </div>
                <div className={styles.ShopImagesPortionThree}>
                    <div className={styles.ShopImagesPortionThreeBigImage}>
                        <LazyLoadImage
                            src={productImg}
                            alt={name}
                            effect="blur"
                        />
                    </div>
                    <div className={styles.ShopImagesSmall_Three}>
                            <LazyLoadImage
                            src={productImg}
                            alt={name}
                            effect="blur"
                            />
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div className={styles.ShopContainer}>
            <h1 className={styles.ShopParagraph}>Our Shop</h1>
            <div className={styles.ShopBreadCrumbs}>
                {<Breadcrumbs pathParts={pathParts} />}
            </div>
            <div className={styles.ShopFilterBar}>
                <ul className={styles.ShopFilterBarItems}>
                    {links.map((link, index) => (
                        <li key={index}>
                            <a href={"#"}>{link}</a>
                        </li>
                    ))}
                </ul>
                <Suspense fallback={<div>Loading...</div>}>
                    <Filtration />
                </Suspense>
            </div>
            {elements}
        </div>
    );
};

export default Shop;