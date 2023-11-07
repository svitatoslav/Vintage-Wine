import { Link } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';
import BreadcrumbsIcon from './icons/BreadcrumbsIcon';
const Breadcrumbs = ({ pathParts }) => {
    return (
        <div className={styles.breadcrumbs}>
            <Link to="/">
                Home <BreadcrumbsIcon/>
            </Link>
            {pathParts.map((item, index) => {
                if (index === pathParts.length - 1) {
                    return (
                        <span className={styles.currentPage} key={index}>
                            Our {item.replace(/-/g, ' ')}
                        </span>
                    );
                }
                return (
                    <Link to=".." relative="path" key={index}>
                        Our {item.replace(/-/g, ' ')} <BreadcrumbsIcon />
                    </Link>
                );
            })}
        </div>
    );
};

export default Breadcrumbs;
