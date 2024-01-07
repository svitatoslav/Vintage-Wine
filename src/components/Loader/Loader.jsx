import Wine from './icons/Wine.svg?react';
import styles from './Loader.module.scss';
import cn from 'classnames';

const Loader = ({ isWhite }) => {
    return (
        <div>
            <Wine className={cn(styles.Loader, { [styles.White]: isWhite })} />
        </div>
    );
}

export default Loader;