import styles from './SearchForm.module.scss';
import Button from "../Button/Button";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {filterProducts} from "../../redux/reducers/products-reducer";

const SearchForm = ({onSubmit}) => {
    const dispatch = useDispatch()

    const [searchTerm, setSearchTerm] = useState("");
    const [isInputActive, setIsInputActive] = useState(false)

    const products = useSelector(state => state.products.filteredProducts)

    const isDropDownOpen = searchTerm !== "" && isInputActive

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value)
        dispatch(filterProducts(e.target.value))
    }

    const handleSearch = (e) => {
        event.preventDefault()
        onSubmit()
    }

    const limitedProducts = products.slice(0, 6);

    return (
        <form onSubmit={handleSearch} className={styles.Search} data-testid="SearchForm">
            <input className={styles.Input} placeholder="Find your favorite drink" type="text" value={searchTerm} onChange={handleInputChange} onFocus={() => setIsInputActive(true)} onBlur={() => setIsInputActive(false)} />

            <Button type="submit" text="Search"/>
            {isInputActive > 0  &&
                <ul className={styles.List}>
                    {limitedProducts.length > 0 ?  limitedProducts.map(product => <li key={product._id}><a className={styles.Link} href="#">{product.name}</a></li>): <li className={styles.Link}>Nothing Found</li> }
                </ul>
            }
        </form>
    )
};

export default SearchForm;
