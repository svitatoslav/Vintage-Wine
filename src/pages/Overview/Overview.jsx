import Container from '../../components/Container/Container';
import styles from './Overview.module.scss'

const Overview = () => {
    return (
        <Container>
            <div className={styles.errorPage}>
                <div className={styles.wrapperContent}>Overview</div>
            </div>
        </Container>
    );
}
 
export default Overview;