import { Link } from 'react-router-dom';
import styles from './ManagementControllers.module.scss';

const controllers = ['Products', 'Excursions', 'News', 'Shares'];

const ManagementControllers = () => {

    return (
        <div className={styles.ManagementControllers}>
            <ul className={styles.ManagementControllersList}>
                {
                    controllers.map(controller => {
                        const itemLink = controller.toLowerCase();
                        return (
                            <li key={controller} className={styles.ManagementControllersItem}>
                                <Link to={`/dashboard/management/${itemLink}`}>{controller}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default ManagementControllers;