import { Outlet } from 'react-router-dom';
import SideBar from '../../components/SideBar/SideBar';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
    return (
        <main className={styles.Dashboard}>
            <SideBar />

            <Outlet />
        </main>
    );
}

export default Dashboard;