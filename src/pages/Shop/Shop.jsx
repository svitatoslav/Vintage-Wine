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
import { sendGetRequest } from "../../helpers/api/sendGetRequest";
import cn from "classnames";
import { FilterContex } from "../../contexts/FilterContext";

const Filtration = React.lazy(() =>
  import("../../components/Filtaration/Filtaration")
);

const MIN_VALUE = 768;
const MAX_VALUE = 1160;

const Shop = () => {
  const allFilters = useSelector(state => state.filters.isAllFilters);
  const [links, setLinks] = useState([]);
  const [productCards, setProductCards] = useState([]);
  const [currentLink, setCurrentLinks] = useState(null);
  const [filter, setFilter] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const pathParts = useBreadcrumbs();
  const viewportWidth = useResize();

  console.log(filter);

  useEffect(() => {
    (async () => {
      const catalogLinks = await sendGetRequest('http://127.0.0.1:4000/api/catalog');
      setLinks(catalogLinks);
    })();
  }, []);


  useEffect(() => {

    // setSearchParams({
    //   query: filter[1],
    // });

    const url = filter.length ? `http://127.0.0.1:4000/api/products/filter?${filter[0]}=${filter[1]}` : 'http://127.0.0.1:4000/api/products/';

    (async () =>  {
      const data = await sendGetRequest(url);
      setProductCards(createCards(data.products || data));
    })();
  }, [filter, viewportWidth]);

  const handleSetCurrentLink = (link) => {
    setCurrentLinks(link);
    setFilter(['categories', link]);
    // setSearchParams({
    //   query: link
    // });
  };

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

  return (
    <div className={styles.ShopContainer}>
      <PageTitle text="Our Shop" />
      <Breadcrumbs pathParts={pathParts} />
      <FilterContex.Provider value={{filter, setFilter}}>
        <div className={styles.ShopFilterBar}>
          {viewportWidth >= 768 &&
            (<ul className={styles.ShopFilterBarItems}>
              {links.map(tab => (
                <li key={tab.id} className={cn({ [styles.Active]: currentLink === tab.name.toLowerCase() })}>
                  <span data-tab={tab.id} onClick={() => handleSetCurrentLink(tab.name.toLowerCase())}>{tab.name}</span>
                </li>
              ))}
            </ul>)}
          <Suspense fallback={<div>Loading...</div>} >
            <Filtration />
          </Suspense>
        </div>
        {allFilters && <FilterGroup />}
      </FilterContex.Provider>
      <div className={styles.ShopImagesContainer}>
        {productCards}
      </div>
    </div>
  );
}

export default Shop;