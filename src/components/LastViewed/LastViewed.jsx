import styles from './LastViewed.module.scss';
import { useSelector } from 'react-redux';

import SectionTitle from './../Title/SectionTitle';
import CustomSlider from './../CustomSlider/CustomSlider';

const LastViewed = () => {
    const viewedProducts = useSelector((state) => state.fetchViewedProducts.viewedProducts);

    return (
        <>
            <div className={styles.LastViewed} data-testid="LastViewed">
                <SectionTitle secText="You have viewed" />
                <CustomSlider toShow={3} toScroll={1} type="VIEWED_PRODUCTS" sliderArray={viewedProducts} />
            </div>
        </>
    );
};

export default LastViewed;
