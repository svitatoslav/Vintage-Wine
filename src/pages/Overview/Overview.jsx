import styles from './Overview.module.scss';

import BarCharts from '../../components/admin-components/Charts/BarCharts/BarCharts';
import PieChart from '../../components/admin-components/Charts/PieChart/PieChart';
import DoughnutChart from '../../components/admin-components/Charts/DoughnutChart/DoughnutChart';
import SectionTitle from '../../components/Title/SectionTitle';

const Overview = () => {
    return (
        <div className={styles.Overview}>
        <SectionTitle secText="Sales Statistics" />
            <div className={styles.OverviewStatistics}>
                <BarCharts />
                <div className={styles.OverviewChart}>
                    <PieChart />
                </div>
                <div className={styles.OverviewChart}>
                    <DoughnutChart />
                </div>
            </div>
        </div>
    );
}

export default Overview;