import AddProductForm from '../../components/AddProductForm/AddProductForm';
import Container from '../../components/Container/Container';
import SectionTitle from '../../components/Title/SectionTitle';
import styles from './Management.module.scss'

const Management = () => {
    return (
        <section className={styles.Management}>
            <Container>
                <div className={styles.ManagementProducts}>
                    <SectionTitle secText="Add product form" />
                    <div>
                        <AddProductForm />
                        
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Management;