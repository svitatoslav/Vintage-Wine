import React, { Suspense } from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";
import useResize from "../../hooks/useResize";

import { sendGetRequest } from "../../helpers/api/sendGetRequest";
import { FilterContext } from "../../contexts/FilterContext";
import { updateFilteredProductsAC } from "../../redux/reducers/filters-reducer";

import Breadcrumbs from "./../../components/Breadcrumbs/Breadcrumbs";
import UniProduct from "../../components/ProductCard/UniProduct";
import PageTitle from "../../components/Title/PageTitle";

import styles from "./Shop.module.scss";


const Filtration = React.lazy(() =>
  import("../../components/Filtaration/Filtaration")
);

const MIN_VALUE = 768;
const MAX_VALUE = 1160;

const Shop = () => {
  const [productCards, setProductCards] = useState([]);
  const [filter, setFilter] = useState({});
  const [resetFilters, setResetFilters] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const pathParts = useBreadcrumbs();
  const viewportWidth = useResize();
  const dispatch = useDispatch();

  useEffect(() => {
    const createUrlQuery = (filterConfigs) => {
      let urlQuery = '';

      if (!Object.keys(filterConfigs).length) return urlQuery;

      Object.entries(filterConfigs).forEach(([name, value]) => {
        urlQuery += `${name}=${value}&`;
      });

      return urlQuery.slice(0, urlQuery.length - 1);
    }

    // setSearchParams({
    //   query: filter[1],
    // });

    const url = 'http://127.0.0.1:4000/api/products/filter?' + createUrlQuery(filter);

    (async () => {
      const data = await sendGetRequest(url);
      setProductCards(createCards(data.products));
      dispatch(updateFilteredProductsAC((data.products)));
    })();
  }, [filter, viewportWidth]);


  function createCards(array) {
    const shopElements = [];
    const chunkSize = (viewportWidth > MIN_VALUE && viewportWidth < MAX_VALUE) ? 3 : 5;

    for (let i = 0; i < array.length; i += chunkSize) {
      const chunk = array.slice(i, i + chunkSize);
      const [firstImage, ...restImages] = chunk;

      const bigImageDiv = (
        <div key={`bigImage_${i}`}>
          <UniProduct key={firstImage._id} data={firstImage} />
        </div>
      );

      const smallImagesDiv = (
        <div className={styles.ShopImagesSmall} key={`smallImages_${i}`} >
          {restImages.map((product) => (
            <div key={product._id} className={styles.SmallProductContainer}>
              <UniProduct key={product._id} data={product} isSmall />
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

  return (
    <div className={styles.ShopContainer}>
      <PageTitle text="Our Shop" />
      <Breadcrumbs pathParts={pathParts} />
      <FilterContext.Provider value={{ filter, setFilter, resetFilters, setResetFilters }}>
        <Suspense fallback={<div>Loading...</div>} >
          <Filtration />
        </Suspense>
      </FilterContext.Provider>
      <div className={styles.ShopImagesContainer}>
      {
        productCards.length ?
          productCards :
          "Products not found"
      }
      </div>
    </div>
  );
}

export default Shop;