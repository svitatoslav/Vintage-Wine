import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './CustomSelect.module.scss';
import Arrow from './icons/arrow.svg?react';
import cn from 'classnames';
import { useFormikContext } from 'formik';
import { FilterContext } from '../../contexts/FilterContext';

const CustomSelect = ({ placeHolder, name, options, style }) => {
  const { resetFilters, setResetFilters } = useContext(FilterContext);
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
    if (selectedValue) {
      setFieldValue(name, selectedValue?.value)
    }
  }, [selectedValue])

  useEffect(() => {
    if (resetFilters) {
      setSelectedValue(null);
    }
  }, [resetFilters])

  const handleInputClick = () => {
    setTimeout(() => {
      setShowMenu(!showMenu);
    }, 0);
  }

  const onOptionClick = (option) => {
    setSelectedValue(option);
    setResetFilters(false);
  };

  const isSelected = (option) => {
    if (!selectedValue) return false;

    return selectedValue.value === option.value;
  }

  const getDisplay = () => {
    if (selectedValue) {
      return selectedValue.value;
    }
    return placeHolder;
  };

  return (
    <div className={styles.CustomSelect} style={style}>
      <div className={styles.CustomSelectInput} title={selectedValue && placeHolder} onClick={handleInputClick}>
        <span>{getDisplay()}</span>
        <span>
          <Arrow />
        </span>
      </div>
      {showMenu && (
        <div className={styles.CustomSelectHolder}>
          <div className={styles.CustomSelectMenu}>
            {options.map((option, i) => (
              <div key={option.id} className={cn(styles.CustomSelectOption, { [styles.CustomSelectOptionActive]: isSelected(option) })} onClick={() => onOptionClick(option)}>
                {option.value}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


CustomSelect.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  style: PropTypes.object
};

export default CustomSelect;
