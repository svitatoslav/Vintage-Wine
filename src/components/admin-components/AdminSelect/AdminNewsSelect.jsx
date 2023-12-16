import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AdminNewsSelect.module.scss';
import Arrow from './icons/arrow.svg?react';
import cn from 'classnames';
import { useFormikContext } from 'formik';

const AdminNewsSelect = ({ placeHolder, name, options, style }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const { values, setFieldValue } = useFormikContext();

  useEffect(() => {
    const handler = () => setShowMenu(false);
    window.addEventListener("click", handler);

    return () => {
      window.removeEventListener("click", handler)
    }
  });

  useEffect(() => {
    if (selectedValue) {
      const newValue = [...values.related, selectedValue];
      setFieldValue(name, newValue);
      setSelectedValue(null);
    }
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
            {options.map((option) => (
              <div key={option.id} className={cn(styles.CustomSelectOption, { [styles.CustomSelectOptionActive]: isSelected(option) })} onClick={() => onOptionClick(option)}>
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


AdminNewsSelect.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  style: PropTypes.object
};

export default AdminNewsSelect;
