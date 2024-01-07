import React from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

import styles from "./SingleCatalog.module.scss";
import Container from "./../Container/Container";

const SingleCatalog = () => {
  const pathParts = useBreadcrumbs();
  const params = useParams();
  const products = useSelector((state) => state.products.products);
  const sortedByCategory = products.filter((product) =>
    product.categories.toLowerCase().includes(params.slug)
  );
  return (
    <Container>
      <div className={styles.SingleCatalog} data-testid="SingleCatalog">
        {<Breadcrumbs pathParts={pathParts} />}
        <div className={styles.ProductWrapper}>
          {sortedByCategory.map((product) => (
            <ProductCard
              key={product._id}
              name={product.name}
              price={product.currentPrice}
              img={product.productImg}
              id={product._id}
              data={product}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SingleCatalog;
