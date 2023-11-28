import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import { updateLastOptionsAC } from "../../redux/reducers/filters-reducer";
import { changeLinkAC } from "../../redux/reducers/tabs-reducer";
import { FilterContext } from "../../contexts/FilterContext";
import { sendGetRequest } from "../../helpers/api/sendGetRequest";
import FilterGroup from "../FilterGroup/FilterGroup";

import FilterIconPlus from "./icons/ShopPlus.svg?react";
import FilterIconMinus from "./icons/ShopMinus.svg?react";

import styles from './Filtration.module.scss';
import { useSearchParams } from "react-router-dom";


const Filtration = () => {
    const { setFilter, setResetFilters } = useContext(FilterContext);
    const currentLink = useSelector(state => state.tabs.currentLink);
    const [links, setLinks] = useState([{id: 0, name: "All"}]);
    const [allFilters, setAallFilters] = useState(false);
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const catalogLinks = await sendGetRequest('http://127.0.0.1:4000/api/catalog');
            setLinks(prevLinks => [...prevLinks, ...catalogLinks]);
        })();

        if (Object.fromEntries(searchParams.entries()).categories) {
            dispatch(changeLinkAC(Object.fromEntries(searchParams.entries()).categories));
        }
    }, []);

    const handleAllFilters = () => setAallFilters(prev => !prev);

    const handleSetCurrentLink = (link) => {
        if (currentLink === link) return;
        dispatch(changeLinkAC(link));
        setFilter({ categories: link });
        setResetFilters(true);
        dispatch(updateLastOptionsAC(null));
    };

    return (
        <>
            <div className={styles.FilterBar}>
                <ul className={styles.FilterBarItems}>
                    {links.map(tab => (
                        <li key={tab.id} className={cn({ [styles.Active]: currentLink === tab.name.toLowerCase() })}>
                            <span data-tab={tab.id} onClick={() => handleSetCurrentLink(tab.name.toLowerCase())}>{tab.name}</span>
                        </li>
                    ))}
                </ul>
                <div className={styles.FilterBarAllFilters} onClick={handleAllFilters}>
                    <p>All filters</p>
                    {allFilters ?
                        <FilterIconMinus /> :
                        <FilterIconPlus />
                    }
                </div>
            </div>
            {allFilters && <FilterGroup />}
        </>
    )
}

export default Filtration;