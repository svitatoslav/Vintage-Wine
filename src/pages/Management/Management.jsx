import Container from '../../components/Container/Container';
import styles from './Management.module.scss'

const Management = () => {
    return (
        <Container>
            <div className={styles.errorPage}>
                <div className={styles.wrapperContent}>Management</div>
            </div>
        </Container>
    );
}
 
export default Management;