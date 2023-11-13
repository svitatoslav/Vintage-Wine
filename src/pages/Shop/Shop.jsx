import React, { Suspense } from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "../../components/Button/Button";
import Breadcrumbs from "./../../components/Breadcrumbs/Breadcrumbs";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";
import FilterGroup from '../../components/FilterGroup/FilterGroup';

import "react-lazy-load-image-component/src/effects/blur.css";
import styles from "./Shop.module.scss";

const Filtration = React.lazy(() =>
  import("../../components/Filtaration/Filtaration")
);

const Shop = () => {
  const pathParts = useBreadcrumbs();
  const [links, setLinks] = useState([]);
  const [products, setProducts] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleMouseEnter = (product) => {
    setHoveredProduct(product);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  const handleAddProduct = (id) => {
    localStorage.setItem('viewedProducts', id);
  };

  const allFilters = useSelector(state => state.filters.isAllFilters);

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
    async function fetchDataProducts() {
      try {
        const response = await fetch('http://127.0.0.1:4000/api/products');
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const productsData = await response.json();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products data:", error);
      }
    }
    fetchDataProducts();
  }, []);

  const ShopElements = [];
  const chunkSize = 5;

  for (let i = 0; i < products.length; i += chunkSize) {
    const chunk = products.slice(i, i + chunkSize);
    const [firstImage, ...restImages] = chunk;

    const bigImageDiv = ( 
      <div className={styles.ShopImagesSectionBigImage} key={`bigImage_${i}`} 
      onMouseEnter={() => handleMouseEnter(firstImage)}
      onMouseLeave={handleMouseLeave}>
        <LazyLoadImage src={firstImage?.productImg} alt={firstImage?.name} effect="blur" />
        {hoveredProduct === firstImage && (
            <span className={styles.ProductInfoBigImage} >
                <Link to={`/shop/${firstImage.name.replace(/ /g, '-').replace(/\./g, '+')}`} onClick={() => handleAddProduct(firstImage._id)}>
                  <h3>{firstImage.name}</h3>
                </Link>
                <h4>{firstImage.currentPrice}$</h4>
                <Button text={"Add to Cart"}/>
            </span>
        )}
      </div>
    );

    const smallImagesDiv = (
      <div className={styles.ShopImagesSmall} key={`smallImages_${i}`} >
        {restImages.map(({ productImg, _id, name, currentPrice }) => (
          <div key={_id} className={styles.SmallProductContainer}
          onMouseEnter={() => handleMouseEnter({ productImg, name, currentPrice, _id })}
          onMouseLeave={handleMouseLeave}>
            <LazyLoadImage
              src={productImg}
              alt={name}
              effect="blur"
            />
            {hoveredProduct && hoveredProduct._id === _id && (
              <div className={styles.ProductInfoOverlay}>
                <Link to={`/shop/${hoveredProduct.name.replace(/ /g, '-').replace(/\./g, '+')}`} onClick={() => handleAddProduct(hoveredProduct._id)}>
                      <h3>{hoveredProduct.name}</h3>
                </Link>
                <h3>{hoveredProduct.currentPrice}</h3>
                <Button text={"Add to Cart"}/>
              </div>
            )}
          </div>
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
          <Suspense fallback={<div>Loading...</div>} >
            <Filtration />
          </Suspense>
        </div>
        {allFilters && <FilterGroup />}
        <div className={styles.ShopImagesContainer}>
          {ShopElements}
        </div>
    </div>
  );
}
export default Shop;
 