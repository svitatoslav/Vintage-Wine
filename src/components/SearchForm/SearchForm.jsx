import styles from './SearchForm.module.scss';
import Button from "../Button/Button";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {filterProducts} from "../../redux/reducers/products-reducer";
import {logIn} from "passport/lib/http/request";
import {Link, useSearchParams} from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import {formatProductLink} from "../../helpers/formatProductLink";

const SearchForm = ({onSubmit}) => {
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams()

    const [searchTerm, setSearchTerm] = useState(searchParams.get("query") ?? "");
    const debouncedValue = useDebounce(searchTerm, 300)
    const [isInputActive, setIsInputActive] = useState(false)

    const products = useSelector(state => state.products.filteredProducts)

    const isDropDownOpen = searchTerm !== "" && isInputActive

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value)
    }

    useEffect(() => {
        dispatch(filterProducts(debouncedValue))

        setSearchParams({
            query: debouncedValue
        })
    }, [debouncedValue]);

    const handleSearch = (e) => {
        e.preventDefault()
    }

    const limitedProducts = products.slice(0, 5);

    return (
        <form onSubmit={handleSearch} className={styles.Search} data-testid="SearchForm">
            <input className={styles.Input} placeholder="Find your favorite drink" type="text" value={searchTerm}
                   onChange={handleInputChange} onFocus={() => setIsInputActive(true)}
                   onBlur={() => setIsInputActive(false)}/>
            {isDropDownOpen > 0 &&

                <ul className={styles.List}>
                    <Link onClick={handleAddProduct} to={formatProductLink(product.name)}>
                    {limitedProducts.length > 0 ? limitedProducts.map(product => <li key={product._id}><a
                            className={styles.Link} href="#">{product.name}</a></li>) :
                        <li className={styles.Link}>Nothing Found</li>}
                    </Link>
                </ul>

            }

        </form>
    )
};

export default SearchForm;
