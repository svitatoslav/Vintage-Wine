import ShopFilterIcon from "./icons/ShopPlus.svg?react";
import styles from './Filtaration.module.scss';

const Filtration = () => {
    return (
        <div className={styles.ShopFilterBarAllFilter}>
            <p>All filters</p>
            <ShopFilterIcon />
        </div>
    )
}

export default Filtration;