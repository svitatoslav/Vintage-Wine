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
    const pathParts = useBreadcrumbs();
    const [links, setLinks] = useState([]);
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        async function fetchDataLinks() {
            try {
              const response = await fetch('http://127.0.0.1:4000/api/catalog');
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              const catalogData = await response.json();
    
              setLinks(catalogData);
            } catch (error) {
              console.error("Error fetching data:", error);
            } 
          }
          fetchDataLinks();
    }, []);

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
     
    const ShopElements = products.map(({productImg, _id, name}) => {
        return (
            <div className={styles.ShopImagesSection}>
                <div className={styles.ShopImagesSectionBigImage}>
                    <LazyLoadImage key={_id} src={productImg} alt={name} effect="blur"/>
                </div>
                <div className={styles.ShopImagesSmall}>
                    <LazyLoadImage key={_id} src={productImg} alt={name} effect="blur"/>
                    <LazyLoadImage key={_id} src={productImg} alt={name} effect="blur"/>
                    <LazyLoadImage key={_id} src={productImg} alt={name} effect="blur"/>
                    <LazyLoadImage key={_id} src={productImg} alt={name} effect="blur"/>
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
                    {links.map((obj) => (
                        <li key={obj.id}>
                            <a href={"#"}>{obj.name}</a>
                        </li>
                    ))}
                </ul>
                <Suspense fallback={<div>Loading...</div>}>
                    <Filtration />
                </Suspense>
            </div>
            <div  className={styles.ShopImagesContainer}> 
                {ShopElements} 
            </div>
        </div>
    );
};

export default Shop;