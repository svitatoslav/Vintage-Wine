import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './CustomeField.module.scss';
import { useFormikContext } from 'formik';

const CustomField = ({ name, style }) => {
    const [tag, setTag] = useState(null);
    const [text, setText] = useState('');
    const { values, setFieldValue } = useFormikContext();

    useEffect(() => {
        if (tag) {
            const newValue = [...values.tags, tag];
            setFieldValue(name, newValue);
            setTag(null);
            setText('')
        }
    }, [tag]);

    const handleInput = (e) => {
        setText(e.target.value)
    };

    const addTag = () => {
        setTag(text);
    }

    return (
        <div className={styles.CustomeField} style={style}>
            <input
                className={styles.CustomeFieldInput}
                type="text"
                name="tags"
                value={text}
                placeholder="Add tags"
                onChange={handleInput}
            />
            <button type='button' className={styles.CustomFieldBtn} onClick={addTag}>Add</button>
        </div>
    );
};


CustomField.propTypes = {
    name: PropTypes.string.isRequired,
    style: PropTypes.object
};

export default CustomField;
