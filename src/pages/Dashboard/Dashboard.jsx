import { Outlet } from 'react-router-dom';
import SideBar from '../../components/SideBar/SideBar';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
    return (
        <div className={styles.Dashboard}>
            <SideBar />
            <main className={styles.DashboardMain}>
                <Outlet />
            </main>
        </div>
    );
}

export default Dashboard;