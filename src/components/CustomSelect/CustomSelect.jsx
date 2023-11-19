import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './CustomSelect.module.scss';
import Arrow from './icons/arrow.svg?react';
import cn from 'classnames';
import { useFormikContext } from 'formik';
import { FilterContext } from '../../contexts/FilterContext';
import { useDispatch } from 'react-redux';
import { updateLastOptionsAC } from '../../redux/reducers/filters-reducer';

const CustomSelect = ({ option }) => {
  const { resetFilters, setResetFilters } = useContext(FilterContext);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const { setFieldValue } = useFormikContext();
  const dispatch = useDispatch();
  const { label, name, options } = option;

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
  }, [selectedValue]);

  useEffect(() => {
    if (resetFilters) {
      setSelectedValue(null);
    }
  }, [resetFilters]);

  const handleInputClick = () => {
    if (!options.length) return;

    setTimeout(() => {
      setShowMenu(!showMenu);
    }, 0);
  }

  const onOptionClick = (currentOption) => {
    setSelectedValue(currentOption);
    setResetFilters(false);

    if (option.options.length <= 1) return;

    dispatch(updateLastOptionsAC(option));
  };

  const isSelected = (option) => {
    if (!selectedValue) return false;

    return selectedValue.value === option.value;
  }

  const getDisplay = () => {
    if (selectedValue) {
      return selectedValue.value;
    }
    return label;
  };

  return (
    <div className={styles.CustomSelect}>
      <div className={cn(styles.CustomSelectInput, { [styles.Disabled]: !options.length })} title={selectedValue && label} onClick={handleInputClick}>
        <span>{getDisplay()}</span>
        <span>
          <Arrow />
        </span>
      </div>
      {showMenu && (
        <div className={styles.CustomSelectMenu}>
          {options.map((option, i) => (
            <div key={option.id} className={cn(styles.CustomSelectOption, { [styles.CustomSelectOptionActive]: isSelected(option) })} onClick={() => onOptionClick(option)}>
              {option.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


CustomSelect.propTypes = {
  option: PropTypes.shape({
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
  })
};

export default CustomSelect;
