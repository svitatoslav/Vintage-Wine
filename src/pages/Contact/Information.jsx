import styles from './Contact.module.scss';
import cn from 'classnames';
import EmailWidget from './icons/iconamoon_email-thin.svg?react'
import PhoneWidget from './icons/ph_phone-thin.svg?react'
import LocationWidget from './icons/iconamoon_location-pin-light.svg?react'
import TwitterWidget from './icons/simple-line-icons_social-twitter.svg?react'
import LinkedinWidget from './icons/ion_social-linkedin.svg?react'
import FacebookWidget from './icons/foundation_social-facebook.svg?react'
import 'react-lazy-load-image-component/src/effects/blur.css';

const Information = () => {
    return (
        <div className={cn(styles.infoContainer, styles.div1)}>
            <div>
                <h3 className={cn(styles.title, styles.titleInformation)}>Contact Information:</h3>
                <ul className={styles.listInfo}>
                    <li className={styles.listInfoItem}>
                        <LocationWidget/>
                        <p>Address: St. Vinna, 123, City, Country</p>
                    </li>
                    <li className={styles.listInfoItem}>
                        <PhoneWidget/>
                        <p>Phone: +123 456 789</p>
                    </li>
                    <li className={styles.listInfoItem}>
                        <EmailWidget/>
                        <p>Email: info@vinoelegante.com</p>
                    </li>
                </ul>
            </div>
            <div className={styles.businessInfo}>
                <div>
                    <h3 className={styles.title}>Hours of work:</h3>
                    <ul className={styles.workingHours}>
                        <li className={styles.listHoursItem}>
                            <p>Monday - Friday:</p>
                        </li>
                        <li className={styles.listHoursItem}>
                            <p>9:00 - 18:00</p>
                        </li>
                        <li className={styles.listHoursItem}>
                            <p>Saturday:</p>
                        </li>
                        <li className={styles.listHoursItem}>
                            <p>10:00 - 16:00</p>
                        </li>
                        <li className={styles.listHoursItem}>
                            <p>Sunday:</p>
                        </li>
                        <li className={styles.listHoursItem}>
                            <p>Closed</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className={styles.title}>Social networks:</h3>
                    <ul className={styles.listSocial}>
                        <li className={styles.listSocialItem}>
                            <a href={'#1'}><TwitterWidget/></a>
                        </li>
                        <li className={styles.listSocialItem}>
                            <a href={'#2'}> <LinkedinWidget/></a>
                        </li>
                        <li className={styles.listSocialItem}>
                            <a href={'#3'}><FacebookWidget/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Information;