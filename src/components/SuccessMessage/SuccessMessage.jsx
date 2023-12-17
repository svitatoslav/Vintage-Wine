import { useDispatch, useSelector } from 'react-redux';
import styles from './SuccessMessage.module.scss';
import { changeMessageAC, switchSuccessMsg } from '../../redux/reducers/submitForm-reducer';
import { useEffect } from 'react';
import Loader from '../Loader/Loader';

const SuccessMessage = () => {
    const isFormSubmitted = useSelector(state => state.formSubmit.isFormSubmitted);
    const text = useSelector(state => state.formSubmit.text);
    const dispatch = useDispatch();

    const renderedText = text ? text : <Loader isWhite/>;

    useEffect(() => {
        if (text) {
            const timer = setTimeout(() => {
                dispatch(switchSuccessMsg());
                dispatch(changeMessageAC(""));
            }, 3000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [text]);

    return (
        <div className={`${styles.SuccessMessage} ${isFormSubmitted ? styles.Active : ''}`}>
            {renderedText}
        </div>
    );
}

export default SuccessMessage;