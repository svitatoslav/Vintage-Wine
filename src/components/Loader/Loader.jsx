import Wine from './icons/Wine.svg?react';
import styles from './Loader.module.scss';

const Loader = () => {
    return (
        <div>
            <Wine className={styles.Loader}/>
        </div>
    );
}
 
export default Loader;