import React, { useEffect, useState, Suspense } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './Shop.module.scss';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import useBreadcrumbs from '../../hooks/useBreadcrumbs';
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
import 'react-lazy-load-image-component/src/effects/blur.css';

const Filtration = React.lazy(() => import('../../components/Filtaration/Filtaration'));

function Shop() {
  const links = ['Wine', 'Sparkling', 'Whiskey', 'Strong', 'Beer', 'Ciders'];
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
          throw new Error('Network response was not ok');
        }
        const catalogData = await response.json();

        setProducts(catalogData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const elements = products.map(({ productImg, _id, name }) => (
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
  ));

  return (
    <div className={styles.ShopContainer}>
      <h1 className={styles.ShopParagraph}>Our Shop</h1>
      <div className={styles.ShopBreadCrumbs}>
        <Breadcrumbs pathParts={pathParts} />
      </div>
      <div className={styles.ShopFilterBar}>
        <ul className={styles.ShopFilterBarItems}>
          {links.map((link, index) => (
            <li key={index}>
              <a href="#">{link}</a>
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
}

export default Shop;
