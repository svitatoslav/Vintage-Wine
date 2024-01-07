import PageTitle from '../Title/PageTitle';
import Container from './../Container/Container';
import Button from './../Button/Button';

import styles from './Cover.module.scss';
import { Link } from 'react-router-dom';
const Cover = () => {
    return (
        <section className={styles.Cover}>
            <img src="https://res.cloudinary.com/dhpukux5x/image/upload/v1698005967/ewhew5fj51pw0chqht3g.png" alt="glass" />
            {/* <img src="../../../public/imageProject/header/img.png" alt="glass" /> */}
            <Container>
                <div className={styles.wrapperContent}>
                    <PageTitle text="Savor the Essence of True Excellence" type="main" className={styles.title} />
                    <Link to='/shop'><Button text="Shop" /></Link>
                </div>
            </Container>
        </section>
    );
};

export default Cover;
