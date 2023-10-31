import React, {useState} from 'react';
import PageTitle from '../../components/Title/PageTitle';
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";
import SearchForm from "../../components/SearchField/SearchForm";
import styles from "./Search.module.scss"
import Container from "../../components/Container/Container";

const Search = () => {
    const [showProducts, setShowProducts] = useState(false)
    const pathParts = useBreadcrumbs();
    const handleSubmit = () => {
        setShowProducts(true)
    }
    return (
            <Container>
                <PageTitle text="SearchForm"/>
                {<Breadcrumbs pathParts={pathParts}/>}
                <div className={styles.SearchWrapper}>
                    <SearchForm onSubmit={handleSubmit}/>
                </div>
            </Container>
    );
}

export default Search;


