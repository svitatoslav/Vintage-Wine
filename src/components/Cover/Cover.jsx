import PageTitle from '../Title/PageTitle';
import Container from './../Container/Container';
import Button from './../Button/Button';

import styles from './Cover.module.scss';
const Cover = () => {
    return (
        <section className={styles.Cover}>
            <img src="../../../public/imageProject/header/header-bcg.png" alt="glass" />
            <Container>
                <div className={styles.wrapperContent}>
                    <PageTitle text="Savor the Essence of True Excellence" type="main" className={styles.title} />
                    <Button text="Shop" />
                </div>
            </Container>
        </section>
    );
};

export default Cover;
