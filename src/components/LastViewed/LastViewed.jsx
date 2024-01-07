import styles from './LastViewed.module.scss';
import { useDispatch, useSelector } from 'react-redux';

import SectionTitle from './../Title/SectionTitle';
import CustomSlider from './../CustomSlider/CustomSlider';
import { useEffect, useState } from 'react';
import { fetchViewedProductsThunk } from '../../redux/reducers/fetchViewedProducts-reducer';

const LastViewed = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchViewedProductsThunk());
    }, []);
    const viewedProducts = useSelector((state) => state.fetchViewedProducts.viewedProducts);

    return (
        <>
            <div className={styles.LastViewed} data-testid="LastViewed">
                <SectionTitle secText="You have viewed" />
                {viewedProducts && <CustomSlider toShow={3} toScroll={1} type="VIEWED_PRODUCTS" sliderArray={viewedProducts} />}
            </div>
        </>
    );
};

export default LastViewed;
