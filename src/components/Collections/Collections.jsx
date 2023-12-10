import React, { useEffect } from "react";
import CustomSlider from "../CustomSlider/CustomSlider";
import Container from "../Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { getCollectionsThunk } from "../../redux/reducers/collections-reducer";
import SectionTitle from "../Title/SectionTitle";

const Collections = () => {
  const collections = useSelector((state) => state.collections.collections);
  const dispatch = useDispatch();
  console.log(collections);

  useEffect(() => {
    dispatch(getCollectionsThunk());
  }, [dispatch]);

  return (
    <section>
      <Container>
        <SectionTitle secText={"Collections"} subText={"Our"} />
        <CustomSlider
          sliderArray={collections}
          type="COLLECTIONS"
          toShow={2}
          toScroll={2}
        />
      </Container>
    </section>
  );
};

export default Collections;
