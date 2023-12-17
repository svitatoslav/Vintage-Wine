import { Link, useLocation } from 'react-router-dom';
import styles from './DashboardNav.module.scss';
import cn from 'classnames';
import Box from './icons/Overview.svg?react';
import Transfer from './icons/Transaction.svg?react';
import Reservation from './icons/Receipt.svg?react';
import Order from './icons/Expencces.svg?react';
import Bell from './icons/Bell.svg?react';

const DashboardNav = () => {
    const {pathname} = useLocation();

    const links = [
        <Link to='/dashboard'> <Box /> Overview</Link>,
        <Link to='/dashboard/management'>< Transfer /> Content management</Link>,
        <Link to='/dashboard/orders'><Order /> Orders</Link>,
        <Link to='/dashboard/reservations'><Reservation /> Reservations</Link>,
        <Link to='/dashboard/contacts'><Bell /> Contact requests</Link>
    ];

    return (
        <ul className={styles.DashboardNav}>
            {
                links.map((link, i) => {
                    return (<li key={i} className={cn(styles.DashboardNavItem, { [styles.DashboardNavItemActive]: link.props.to === pathname })}>
                        {link}
                    </li>);
                })
            }
        </ul>
    );
}

export default DashboardNav;