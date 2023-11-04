import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './CustomSelect.module.scss';
import Arrow from './icons/arrow.svg?react';
import cn from 'classnames';
import { useFormikContext } from 'formik';

const CustomSelect = ({ placeHolder, name, options }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const { setFieldValue } = useFormikContext();

  useEffect(() => {
    const handler = () => setShowMenu(false);
    window.addEventListener("click", handler);

    return () => {
      window.removeEventListener("click", handler)
    }
  });

  useEffect(() => {
    setFieldValue(name, selectedValue?.value || '')
  }, [selectedValue])

  const handleInputClick = () => {
    setTimeout(() => {
      setShowMenu(!showMenu);
    }, 0);
  }

  const onOptionClick = (option) => setSelectedValue(option);

  const isSelected = (option) => {
    if (!selectedValue) return false;

    return selectedValue.value === option.value;
  }

  const getDisplay = () => {
    if (selectedValue) {
      return selectedValue.label;
    }
    return placeHolder;
  };

  return (
    <div className={styles.CustomSelect}>
      <div className={styles.CustomSelectInput} title={selectedValue && placeHolder} onClick={handleInputClick}>
        <span>{getDisplay()}</span>
        <span>
          <Arrow />
        </span>
      </div>
      {showMenu && (
        <div className={styles.CustomSelectHolder}>
          <div className={styles.CustomSelectMenu}>
            {options.map((option) => (
              <div key={option.value} className={cn(styles.CustomSelectOption, { [styles.CustomSelectOptionActive]: isSelected(option) })} onClick={() => onOptionClick(option)}>
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
