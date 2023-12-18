import React from 'react';
import PropTypes from 'prop-types';
import styles from './ThanksModal.module.scss';
import Container from '../../Container/Container';
import Button from '../../Button/Button';

const ThanksModal = ({ onClose }) => {
  return (
      <Container>
          <div className={styles.ThanksModal} data-testid="ThanksModal">
              <div className={styles.ThanksModalText}>
                  <p className={styles.ThanksModalMainText}>Thank you for booking</p>
                  <p className={styles.ThanksModalInfo}>All booking information on your e-mail</p>
                  <Button text="Ok" variant="smallAdaptive" onClick={onClose} />
              </div>
              <div className={styles.ThanksModalImg}>
                  <img src="https://res.cloudinary.com/dhpukux5x/image/upload/v1698006346/ionlofjbrdtawop6htx3.png" alt="glass" />
              </div>
          </div>
      </Container>
  );
}

ThanksModal.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default ThanksModal;
