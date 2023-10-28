import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatalogThunk } from '../../redux/reducers/catalog-reducer';

import Container from './../Container/Container';
import CustomSlider from '../CustomSlider/CustomSlider';

const Catalog = () => {
    const dispatch = useDispatch();
    const catalog = useSelector((state) => state.catalog.catalog);
    useEffect(() => {
        dispatch(fetchCatalogThunk());
    }, [dispatch]);
    return (
        <section>
            <Container>
                <div className="vvWrapperTitle">
                    <h3 className="vvSectionTitle">
                        <span className="vvSubTitle">Our</span>Catalog
                    </h3>
                </div>
                <CustomSlider sliderArray={catalog} type="CATALOG" toShow={4} toScroll={ 1} />
            </Container>
        </section>
    );
};

export default Catalog;
