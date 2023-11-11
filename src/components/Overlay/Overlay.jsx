import React from 'react';
import PropTypes from 'prop-types';
import styles from './Overlay.module.scss';
import ModalWindow from '../ModalWindow/ModalWindow';
import { useSelector } from 'react-redux';

const Overlay = () => {
  const isReserved = useSelector(state => state.modal.isReserved);

  return (
    <div className={styles.Overlay} data-testid="Overlay">
      {isReserved ? (
        <div>Hello</div>
      ): (<ModalWindow />)}
    </div>
  );
}

Overlay.propTypes = {};

Overlay.defaultProps = {};

export default Overlay;
