import styles from "./Shop.module.scss";
import Breadcrumbs from "./../../components/Breadcrumbs/Breadcrumbs";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";
import { useEffect, useState } from "react";
// import caberne from "/imageProject/shoping/caberne.png";
// import ft6 from "/imageProject/shoping/6ft6.png";
// import brandy from "/imageProject/shoping/brandy.png";
// import esprit from "/imageProject/shoping/esprit.png";
// import gautherot from "/imageProject/shoping/gautherot.png";
// import heinken from "/imageProject/shoping/heinken.png";
// import jac from "/imageProject/shoping/jac.png";
// import legis from "/imageProject/shoping/legis.png";
// import rasteau from "/imageProject/shoping/rasteau.png";
// import sacura from "/imageProject/shoping/sacura.png";
// import white_label from "/imageProject/shoping/white-label.png";
// import yellow_wine from "/imageProject/shoping/yellow-wine.png";
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
          const response = await fetch('http://127.0.0.1:4000/api/products');
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const catalogData = await response.json();

          console.log(catalogData);

          setProducts(catalogData);
        } catch (error) {
          console.error("Error fetching data:", error);
        } 
      }

      console.log("render")

      fetchData();
    }, []);

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



                {products.map((productImg, vendorCode, name) => (
                    <div className={styles.ShopImagesContainer}> 
                        <div className={styles.ShopImagesPortionOne}>
                            <div className={styles.ShopImagesPortionOneBigImage}>
                                <LazyLoadImage
                                    img
                                    key={vendorCode}
                                    src={productImg}
                                    alt={name}
                                    effect="blur"
                                />
                            </div>
                            <div className={styles.ShopImagesSmall_One}>
                                 
                                    <LazyLoadImage
                                        key={vendorCode}
                                        src={productImg}
                                        alt={name}
                                        effect="blur"
                                    />
                                    <LazyLoadImage
                                        key={vendorCode}
                                        src={productImg}
                                        alt={name}
                                        effect="blur"
                                    />
                                    <LazyLoadImage
                                        key={vendorCode}
                                        src={productImg}
                                        alt={name}
                                        effect="blur"
                                    />
                                    <LazyLoadImage
                                        key={vendorCode}
                                        src={productImg}
                                        alt={name}
                                        effect="blur"
                                    />
                                 
                            </div>
                        </div>
                        <div className={styles.ShopImagesPortionTwo}>
                            <div className={styles.ShopImagesPortionTwoBigImage}>
                                <LazyLoadImage
                                    img
                                    key={vendorCode}
                                    src={productImg}
                                    alt={name}
                                    effect="blur"
                                />
                            </div>
                            <div className={styles.ShopImagesSmall_Two}>
                                    <LazyLoadImage
                                        key={vendorCode}
                                        src={productImg}
                                        alt={name}
                                        effect="blur"
                                    />
                            </div>
                        </div>
                        <div className={styles.ShopImagesPortionThree}>
                            <div className={styles.ShopImagesPortionThreeBigImage}>
                                <LazyLoadImage
                                    key={vendorCode}
                                    src={productImg}
                                    alt={name}
                                    effect="blur"
                                />
                            </div>
                            <div className={styles.ShopImagesSmall_Three}>
                                    <LazyLoadImage
                                    key={vendorCode}
                                    src={productImg}
                                    alt={name}
                                    effect="blur"
                                    />
                            </div>
                        </div>
                    </div>
                ))}



        </div>
    );
};

export default Shop;
