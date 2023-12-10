import { useEffect } from 'react';
import Container from '../../components/Container/Container';
import SectionTitle from '../../components/Title/SectionTitle';
import styles from './ContactRequests.module.scss'

const ContactRequests = () => {

    useEffect(() => {
        
    }, []);

    return (
        <Container>
            <div className={styles.ContactRequests}>
                <SectionTitle secText="Contact Requests" />

                <ul>
                    <li></li>
                </ul>
            </div>
        </Container>
    );
}
 
export default ContactRequests;