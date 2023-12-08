import Container from '../../components/Container/Container';
import styles from './Reservations.module.scss'

const Reservations = () => {
    return (
        <Container>
            <div className={styles.errorPage}>
                <div className={styles.wrapperContent}>Reservations</div>
            </div>
        </Container>
    );
}
 
export default Reservations;