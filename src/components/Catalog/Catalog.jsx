import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatalogThunk } from '../../redux/reducers/catalog-reducer';

import Container from './../Container/Container';
import CustomSlider from '../CustomSlider/CustomSlider';
import SectionTitle from './../Title/SectionTitle';

const Catalog = () => {
    const dispatch = useDispatch();
    const catalog = useSelector((state) => state.catalog.catalog);
    useEffect(() => {
        dispatch(fetchCatalogThunk());
    }, [dispatch]);
    return (
        <section>
            <Container>
                <SectionTitle secText={'Catalog'} subText={'Our'} />
                <CustomSlider sliderArray={catalog} type="CATALOG" toShow={4} toScroll={1} />
            </Container>
        </section>
    );
};

export default Catalog;
