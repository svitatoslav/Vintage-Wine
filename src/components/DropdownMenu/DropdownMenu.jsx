import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './DropdownMenu.module.scss';
import Navigation from '../Navigation/Navigation';
import CloseBtn from './icons/close.svg?react';
import cn from 'classnames';

const DropdownMenu = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false)

  const handleClose = (e) => {
    if (!e.target.closest(`.${styles.DropdownClose}`) && e.target.nodeName !== 'A') return;

    onClose();
  }

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true)
    }, 0)
  })

  return (
    <div className={styles.DropdownMenu} data-testid="DropdownMenu" onClick={handleClose}>
      <div className={cn(styles.DropdownHidden, {[styles.DropdownVisible]: isVisible})}>
        <CloseBtn className={styles.DropdownClose} />
        <div className={styles.DropdownBody}>
          <h2 className={styles.DropdownTitle}>Menu</h2>
          <Navigation mobile />
        </div>
      </div>
    </div>
  )
};

DropdownMenu.propTypes = {};

export default DropdownMenu;
