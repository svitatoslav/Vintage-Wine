import React, {useState} from 'react';
import PageTitle from '../../components/Title/PageTitle';
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";
import SearchForm from "../../components/SearchField/SearchForm";
import styles from "./Search.module.scss"
import Container from "../../components/Container/Container";
import {useSelector} from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";

const Search = () => {
    const [showedProducts, setShowedProducts] = useState([])
    const pathParts = useBreadcrumbs();

    const products = useSelector(state => state.products.filteredProducts)


    const handleSubmit = () => {
        setShowedProducts(products)
    }

    return (
        <section className={styles.SearchImg}>
            <Container>
                <PageTitle text="Search"/>
                {<Breadcrumbs pathParts={pathParts}/>}
                <div className={styles.SearchWrapper}>
                    <SearchForm onSubmit={handleSubmit}/>
                </div>
                <div className={styles.ProductWrapper}>
                    {showedProducts.length > 0 && showedProducts.map(product => (
                        <ProductCard key={product._id} name={product.name} price={product.currentPrice}
                                     img={product.productImg} id={product._id}/>
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Search;


