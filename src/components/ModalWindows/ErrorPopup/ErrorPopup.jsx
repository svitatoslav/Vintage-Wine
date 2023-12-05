import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorPopup.module.scss';
import PageTitle from '../../Title/PageTitle';
import { AiOutlineClose } from 'react-icons/ai';

const ErrorPopup = ({ onClose }) => {
    return (
        <div className={styles.ErrorPopup} data-testid="ErrorPopup">
            <div className={styles.ErrorPopupContent}>
                <div className={styles.ErrorPopupTop}>
                    <AiOutlineClose size={25} className={styles.ErrorPopupClose} onClick={onClose} />
                    <PageTitle text="Oops! Something Went Wrong" extraClass={styles.ErrorPopupTitle} />
                </div>
                <p className={styles.ErrorPopupText}>
                    Unfortunately, an unexpected problem has occurred.
                    If the problem persists, please contact us.
                    We apologize for the inconvenience.
                </p>
                <div className={styles.ErrorPopupContact}>
                    <a href="tel:380501972693">+380501972693</a>
                    <a href="mailto:vine.vintage.vv@gmail.com">vine.vintage.vv@gmail.com</a>
                </div>
            </div>
        </div>
    );
}

ErrorPopup.propTypes = {
    onClose: PropTypes.func.isRequired
};

export default ErrorPopup;
