import styles from "./Shop.module.scss";
import Button from "../../components/Button/Button";
import Breadcrumbs from "./../../components/Breadcrumbs/Breadcrumbs";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import React, { Suspense } from "react";
<<<<<<< HEAD
const Filtration = React.lazy(() => import("../../components/Filtaration/Filtaration"));
=======
import FilterGroup from '../../components/FilterGroup/FilterGroup';
import { useSelector } from "react-redux";
const Filtration = React.lazy(() =>
  import("../../components/Filtaration/Filtaration")
);
>>>>>>> 8abf291b0d956f2e6d615e9d1aa0b0a09a7bc3e6

const Shop = () => {
  const pathParts = useBreadcrumbs();
  const [links, setLinks] = useState([]);
  const [products, setProducts] = useState([]);
<<<<<<< HEAD
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleMouseEnter = (product) => {
    setHoveredProduct(product);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
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
        console.error("Error fetching catalog data:", error);
=======
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
>>>>>>> 8abf291b0d956f2e6d615e9d1aa0b0a09a7bc3e6
      }
    }
    fetchDataLinks();
  }, []);

  useEffect(() => {
<<<<<<< HEAD
    async function fetchDataProducts() {
=======
    async function fetchData() {
>>>>>>> 8abf291b0d956f2e6d615e9d1aa0b0a09a7bc3e6
      try {
        const response = await fetch('http://127.0.0.1:4000/api/products');
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
<<<<<<< HEAD
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
      <div className={styles.ShopImagesSectionBigImage} key={`bigImage_${i}`} >
        <LazyLoadImage src={firstImage?.productImg} alt={firstImage?.name} effect="blur" 
        onMouseEnter={() => handleMouseEnter(firstImage)}
        onMouseLeave={handleMouseLeave}
        />
        {hoveredProduct === firstImage && (
            <span className={styles.ProductInfoBigImage} >
                <h3>{firstImage.name}</h3>
                <h4>{firstImage.currentPrice}$</h4>
                <Button text={"Add to Cart"}/>
            </span>
        )}
        
      </div>
    );

    const smallImagesDiv = (
      <div className={styles.ShopImagesSmall} key={`smallImages_${i}`}>
        {restImages.map(({ productImg, _id, name, currentPrice }) => (
          <div key={_id} className={styles.SmallProductContainer}>
            <LazyLoadImage
              src={productImg}
              alt={name}
              effect="blur"
              onMouseEnter={() => handleMouseEnter({ productImg, name, currentPrice, _id })}
              onMouseLeave={handleMouseLeave}
            />
    
            {hoveredProduct && hoveredProduct._id === _id && (
              <div className={styles.ProductInfoOverlay}>
                <h3>{hoveredProduct.name}</h3>
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
=======
        const catalogData = await response.json();

        setProducts(catalogData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const ShopElements = products.map(({ productImg, _id, name }) => {
    return (
      <div key={_id} className={styles.ShopImagesSection}>
        <div className={styles.ShopImagesSectionBigImage}>
          <LazyLoadImage src={productImg} alt={name} effect="blur" />
        </div>
        <div className={styles.ShopImagesSmall}>
          <LazyLoadImage src={productImg} alt={name} effect="blur" />
          <LazyLoadImage src={productImg} alt={name} effect="blur" />
          <LazyLoadImage src={productImg} alt={name} effect="blur" />
          <LazyLoadImage src={productImg} alt={name} effect="blur" />
        </div>
      </div>
    )
  });
>>>>>>> 8abf291b0d956f2e6d615e9d1aa0b0a09a7bc3e6

  return (
    <div className={styles.ShopContainer}>
      <h1 className={styles.ShopParagraph}>Our Shop</h1>
      <div className={styles.ShopBreadCrumbs}>
<<<<<<< HEAD
        <Breadcrumbs pathParts={pathParts} />
=======
        {<Breadcrumbs pathParts={pathParts} />}
>>>>>>> 8abf291b0d956f2e6d615e9d1aa0b0a09a7bc3e6
      </div>
      <div className={styles.ShopFilterBar}>
        <ul className={styles.ShopFilterBarItems}>
          {links.map((obj) => (
            <li key={obj.id}>
<<<<<<< HEAD
              <a href="#">{obj.name}</a>
            </li>
          ))}
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Filtration />
        </Suspense>
      </div>
      
=======
              <a href={"#"}>{obj.name}</a>
            </li>
          ))}
        </ul>
        <Suspense fallback={<div>Loading...</div>} >
          <Filtration />
        </Suspense>
      </div>

      {allFilters && <FilterGroup />}

>>>>>>> 8abf291b0d956f2e6d615e9d1aa0b0a09a7bc3e6
      <div className={styles.ShopImagesContainer}>
        {ShopElements}
      </div>
    </div>
  );
};

export default Shop;
 


 