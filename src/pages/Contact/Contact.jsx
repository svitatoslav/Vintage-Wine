import styles from './Contact.module.scss';
import cn from 'classnames';

import 'react-lazy-load-image-component/src/effects/blur.css';
import Container from './../../components/Container/Container';
import Forms from "./Forms";
import TitleContact from "./TitleContact";
import Information from "./Information";

const Contact = () => {

    return (
        <Container>
            <TitleContact/>
            <div className={styles.parent}>
                <Information />
                <Forms />
            </div>
        </Container>
    );
}

export default Contact;