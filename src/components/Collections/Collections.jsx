import React, { useEffect } from 'react';
import CustomSlider from '../CustomSlider/CustomSlider';
import Container from '../Container/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getCollectionsThunk } from '../../redux/reducers/collections-reducer';

const Collections = () => {
     const collections = useSelector((state) => state.collections.collections);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCollectionsThunk());
    }, [dispatch]);

  return (
      <section>
          <Container>
              <div className="vvWrapperTitle">
                  <h3 className="vvSectionTitle">
                      <span className="vvSubTitle">Our</span>Collections
                  </h3>
              </div>
              <CustomSlider sliderArray={collections} type="COLLECTIONS" toShow={2} toScroll={2} />
          </Container>
      </section>
  );
};



export default Collections;
