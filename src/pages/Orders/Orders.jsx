import Container from '../../components/Container/Container';
import styles from './Orders.module.scss'

const Orders = () => {
    return (
        <Container>
            <div className={styles.errorPage}>
                <div className={styles.wrapperContent}>Orders</div>
            </div>
        </Container>
    );
}
 
export default Orders;