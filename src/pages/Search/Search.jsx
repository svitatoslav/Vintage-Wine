import React, {useEffect, useState} from 'react';
import PageTitle from '../../components/Title/PageTitle';
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";
import SearchForm from "../../components/SearchForm/SearchForm";
import styles from "./Search.module.scss"
import Container from "../../components/Container/Container";
import {useDispatch, useSelector} from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";
import {useSearchParams} from "react-router-dom";
import {filterProducts} from "../../redux/reducers/products-reducer";

const Search = () => {
    const pathParts = useBreadcrumbs();
    const [searchParams] = useSearchParams()
    const dispatch = useDispatch()

    const searchQuery =  searchParams.get("query") ?? ""

    const {filteredProducts, products} = useSelector(state =>  state.products )

    useEffect(() => {
        if (searchQuery !== "" && products.length > 0) {
            dispatch(filterProducts(searchQuery))
        }

    }, [products.length]);

    const shouldShowProducts = filteredProducts.length > 0 && searchQuery !== ""

    return (
        <section className={styles.SearchImg}>
            <Container>
                <PageTitle>Search</PageTitle>
                {<Breadcrumbs pathParts={pathParts}/>}
                <div className={styles.SearchWrapper}>
                    <SearchForm/>
                </div>
                <div className={styles.ProductWrapper}>
                    {shouldShowProducts && filteredProducts.map(product => (
                        <ProductCard key={product._id} name={product.name} price={product.currentPrice}
                                     img={product.productImg} id={product._id}/>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Search;


