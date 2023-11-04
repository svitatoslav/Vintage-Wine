import FilterIconPlus from "./icons/ShopPlus.svg?react";
import FilterIconMinus from "./icons/ShopMinus.svg?react";
import styles from './Filtaration.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { switchFiltersAC } from "../../redux/reducers/filters-reducer";

const Filtration = () => {
    const allFilters = useSelector(state => state.filters.isAllFilters);
    const dispatch = useDispatch();

    const handleAllFilters = () => {
        dispatch(switchFiltersAC());
    }

    return (
        <div className={styles.ShopFilterBarAllFilter} onClick={handleAllFilters}>
            <p>All filters</p>
            {allFilters ?
                <FilterIconMinus /> :
                <FilterIconPlus />
            }
        </div>
    )
}

export default Filtration;