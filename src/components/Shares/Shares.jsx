import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchSharesThunk} from "../../redux/reducers/shares-reducer";

import Container from './../Container/Container';
import CustomSlider from '../CustomSlider/CustomSlider';
import SectionTitle from './../Title/SectionTitle';
import styles from './Shares.module.scss'

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
                {shares && shares.length > 0 ? (
                    <CustomSlider sliderArray={shares} type="SHARES" toShow={3} toScroll={1} />
                ) : (
                    <p className={`${styles.noShares}`}>We don't have any active promotions at the moment, but stay tuned! We are constantly working to create new offers for you.</p>
                )}
            </Container>
        </section>
    );
};

export default Shares;
