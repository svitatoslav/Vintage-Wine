import React from 'react';
import styles from './EmptyCartText.module.scss';

const EmptyCartText = ({text}) => (
    <div className={styles.TextWrapper}>
        <p className={styles.EmptyCartText} data-testid="EmptyCartText">
            {text}
        </p>
    </div>
);

export default EmptyCartText;
