import { Link } from 'react-router-dom';
import styles from './DashboardNav.module.scss';
import cn from 'classnames';
import Box from './icons/Overview.svg?react';
import Transfer from './icons/Transaction.svg?react';
import Reservation from './icons/Receipt.svg?react';
import Order from './icons/Expencces.svg?react';
import { useState } from 'react';

const DashboardNav = () => {
    const [isActive, setIsActive] = useState(0);
    const links = [
        <Link to='/dashboard/overview'> <Box /> Overview</Link>,
        <Link to='/dashboard/management'>< Transfer /> Content management</Link>,
        <Link to='/dashboard/orders'><Order /> Orders</Link>,
        <Link to='/dashboard/reservations'><Reservation /> Reservations</Link>
    ];

    const handleActiveLink = (e, index) => {
        const {target} = e;
        if (target.nodeName !== "A") return;
        setIsActive(index);
    };

    return (
        <ul className={styles.DashboardNav}>
            {
                links.map((link, i) => {
                    return (<li key={i} className={cn(styles.DashboardNavItem, { [styles.DashboardNavItemActive]: i === isActive })} onClick={(e) => handleActiveLink(e, i)}>
                        {link}
                    </li>);
                })
            }
        </ul>
    );
}

export default DashboardNav;