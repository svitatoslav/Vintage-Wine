import styles from "./Shop.module.scss";
import Button from "../../components/Button/Button"
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
    const [isHovered, setIsHovered] = useState(false);
    
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

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
          const response = await fetch('http://127.0.0.1:4000/api/products');
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

{/* <div key={_id} className={styles.ShopImagesSection}></div> */}
    // <div className={styles.ShopImagesSectionBigImage}></div>
    // <div className={styles.ShopImagesSmall}></div>
  
    const ShopElements = [];
    const chunkSize = 5;
    
    for (let i = 0; i < products.length; i += chunkSize) {
      const chunk = products.slice(i, i + chunkSize);
    
      const firstImage = chunk[0];  
      const restImages = chunk.slice(1);  
    
      const bigImageDiv = (
        <div className={styles.ShopImagesSectionBigImage} key={`bigImage_${i}`}>
          <LazyLoadImage src={firstImage.productImg} alt={firstImage.name} effect="blur" />
        </div>
      );
    
      const smallImagesDiv = (
        <div className={styles.ShopImagesSmall} key={`smallImages_${i}`}>
          {restImages.map(({ productImg, _id, name }) => (
            <LazyLoadImage key={_id} src={productImg} alt={name} effect="blur" />
          ))}
        </div>
      );
    
      ShopElements.push(
        <div className={styles.ShopImagesSection} key={`section_${i}`}>
          {[bigImageDiv, smallImagesDiv]}
        </div>
      );
    }

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
            <div className={styles.ShopImagesContainer}> 
                {ShopElements} 
            </div>
        </div>
    );
};

export default Shop;
