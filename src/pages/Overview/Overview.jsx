import Container from '../../components/Container/Container';
import styles from './Overview.module.scss';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Pie, Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'September', 'October', 'November', 'December'];

export const dataBar = {
    labels,
    datasets: [
        {
            label: 'Total revenue',
            data: labels.map(() => Math.round(Math.random()*100)),
            backgroundColor: '#BE0615',
        },
    ],
};

export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'red',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const Overview = () => {
    return (
        <Container>
            <div className={styles.Overview}>
                <div className={styles.OverviewBar}>
                    <Bar data={dataBar} />
                </div>
                <div className={styles.OverviewRoundCharts}>
                    <div className={styles.OverviewChart}>
                        <Pie data={data} />
                    </div>
                    <div className={styles.OverviewChart}>
                        <Doughnut data={data} />
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Overview;