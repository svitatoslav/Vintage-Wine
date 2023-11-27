import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchSharesThunk} from "../../redux/reducers/shares-reducer";

import Container from './../Container/Container';
import CustomSlider from '../CustomSlider/CustomSlider';
import SectionTitle from './../Title/SectionTitle';

const Shares = () => {
    const dispatch = useDispatch();
    const shares = useSelector((state) => state.shares.shares);
    useEffect(() => {
        dispatch(fetchSharesThunk());
    }, [dispatch]);
    return (
        <section>
            <Container>
                <SectionTitle secText={'Shares'} subText={'Our'} />
                <CustomSlider sliderArray={shares} type="SHARES" toShow={3} toScroll={1} />
            </Container>
        </section>
    );
};

export default Shares;
