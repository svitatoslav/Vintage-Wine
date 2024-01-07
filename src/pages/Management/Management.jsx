import Container from '../../components/Container/Container';
import ManagementControllers from '../../components/admin-components/ManagementControllers/ManagementControllers';
import styles from './Management.module.scss'

const Management = () => {
    return (
        <section className={styles.Management}>
            {/* <Container> */}
                <div className={styles.ManagementProducts}>
                        <ManagementControllers />
                </div>
            {/* </Container> */}
        </section>
    );
}

export default Management;