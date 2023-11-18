import React, { Suspense } from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Breadcrumbs from "./../../components/Breadcrumbs/Breadcrumbs";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";
import FilterGroup from '../../components/FilterGroup/FilterGroup';
import UniProduct from "../../components/ProductCard/UniProduct";
import useResize from "../../hooks/useResize";
import styles from "./Shop.module.scss";
import PageTitle from "../../components/Title/PageTitle";
import { useSearchParams } from "react-router-dom";

const Filtration = React.lazy(() =>
  import("../../components/Filtaration/Filtaration")
);

const MIN_VALUE = 768;
const MAX_VALUE = 1160;

const Shop = () => {
  const pathParts = useBreadcrumbs();
  const products = useSelector(state => state.products.products);
  const [links, setLinks] = useState([]);
  const [productCards, setProductCards] = useState([]);
  const allFilters = useSelector(state => state.filters.isAllFilters);
  const viewportWidth = useResize();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentLink, setCurrentLinks] = useState(null);

  useEffect(() => {
    if (!currentLink) return;

    async function fetchFilteredData() {
      try {
        const response = await fetch(`http://127.0.0.1:4000/api/products/filter?categories=${currentLink}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        setProductCards(createCards(data.products));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchFilteredData();
  }, [currentLink]);

  const handleSetCurrentLink = (link) => {
    setCurrentLinks(link);
    setSearchParams({
      query: link
    });
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

  function createCards(array) {
    const shopElements = [];
    const chunkSize = (viewportWidth > MIN_VALUE && viewportWidth < MAX_VALUE) ? 3 : 5;

    for (let i = 0; i < array.length; i += chunkSize) {
      const chunk = array.slice(i, i + chunkSize);
      const [firstImage, ...restImages] = chunk;

      const bigImageDiv = (
        <div key={`bigImage_${i}`}>
          <UniProduct key={firstImage._id} price={firstImage.currentPrice} id={firstImage._id} name={firstImage.name} img={firstImage.productImg} />
        </div>
      );

      const smallImagesDiv = (
        <div className={styles.ShopImagesSmall} key={`smallImages_${i}`} >
          {restImages.map(({ productImg, _id, name, currentPrice }) => (
            <div key={_id} className={styles.SmallProductContainer}>
              <UniProduct key={_id} price={currentPrice} id={_id} name={name} img={productImg} isSmall />
            </div>
          ))}
        </div>
      );

      shopElements.push(
        <div dir={i % 2 === 0 ? 'ltr' : 'rtl'} className={styles.ShopImagesSection} key={`section_${i}`}>
          {[bigImageDiv, smallImagesDiv]}
        </div>
      );
    }

    return shopElements;
  }

  useEffect(() => {
    const productsQ = createCards(products);
    setProductCards(productsQ);
  }, [products, viewportWidth]);

  return (
    <div className={styles.ShopContainer}>
      <PageTitle text="Our Shop" />
      <Breadcrumbs pathParts={pathParts} />
      <div className={styles.ShopFilterBar}>
        {viewportWidth >= 768 &&
          (<ul className={styles.ShopFilterBarItems}>
            {links.map(link => (
              <li key={link.id}>
                <span data-link={link.id} onClick={() => handleSetCurrentLink(link.name.toLowerCase())}>{link.name}</span>
              </li>
            ))}
          </ul>)}
        <Suspense fallback={<div>Loading...</div>} >
          <Filtration />
        </Suspense>
      </div>
      {allFilters && <FilterGroup />}
      <div className={styles.ShopImagesContainer}>
        {productCards}
      </div>
    </div>
  );
}

export default Shop;