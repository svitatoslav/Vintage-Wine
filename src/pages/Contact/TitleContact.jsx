import styles from './Contact.module.scss';
import cn from 'classnames';
import 'react-lazy-load-image-component/src/effects/blur.css';
import useBreadcrumbs from '../../hooks/useBreadcrumbs';
import Breadcrumbs from './../../components/Breadcrumbs/Breadcrumbs';

const TitleContact = () => {
    const pathParts = useBreadcrumbs();

    return (
        <>
            <h3 className="vvPageTitle">Contact</h3>
            {<Breadcrumbs pathParts={pathParts}/>}
            <div className={styles.titleContainer}>
                <div className={styles.textContainer}>
                    <h3 className={styles.title}>Contact Vintage<span/> Wine</h3>
                    <p>We look forward to your questions and orders. Reliability, quality and unforgettable taste
                        experiences - this is what makes Vintage wine the perfect choice for you.</p>
                </div>
                <div className={styles.imgContainer}>
                    <div className={cn(styles.divBorder, styles.divBorderFirst)}></div>
                    <div className={cn(styles.divBorder, styles.divBorderSecond)}></div>
                    <img className={styles.img} src="/imageProject/contact/contact.png" alt="grape"/>
                </div>
            </div>
        </>
    );
}

export default TitleContact;