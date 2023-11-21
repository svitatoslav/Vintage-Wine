import React from 'react';
import styles from './CartMergeModal.module.scss';
import Container from '../../Container/Container';
import Button from '../../Button/Button';

const CartMergeModal = () => {
  return (
    <Container>
      <div className={styles.CartMergeModal} data-testid="ThanksModal">
        <div className={styles.CartMergeModalText}>
          <p className={styles.CartMergeModalMainText}>Thank you for booking</p>
          <p className={styles.CartMergeModalInfo}>All booking information on your e-mail</p>
          <Button text="Ok" variant='smallAdaptive' />
        </div>
      </div>
    </Container>
  );
}


export default CartMergeModal;
