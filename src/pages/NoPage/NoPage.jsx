import Container from './../../components/Container/Container';
import styles from './NoPage.module.scss'

const NoPage = () => {
    return (
        <Container>
            <div className={styles.errorPage}>
                <div className={styles.wrapperContent}>
                    <div className={styles.errorTitle}>404</div>
                    <div className={styles.errorDesc}>Page not found</div>
                </div>
                <img src="../../../public/error/error.png" alt="page not found" />
            </div>
        </Container>
    );
}
 
export default NoPage;