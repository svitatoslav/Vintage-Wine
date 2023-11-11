import React from 'react';
import styles from './SingleCatalog.module.scss';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import useBreadcrumbs from '../../hooks/useBreadcrumbs';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const SingleCatalog = () => {
  const pathParts = useBreadcrumbs();
  const params = useParams()
  const products = useSelector((state) => state.products.products)
  const sortedByCategory = products.filter((product) => product.categories.toLowerCase().includes(params.slug));

  return (
      <div className={styles.SingleCatalog} data-testid="SingleCatalog">
        {<Breadcrumbs pathParts={pathParts} />}
      </div>
  );
};

export default SingleCatalog;
