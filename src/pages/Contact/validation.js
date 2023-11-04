import * as Yup from 'yup';

const validation = () => {
    return Yup.object().shape({
        name: Yup
            .string()
            .matches(/^[a-zA-Zа-яА-ЯёЁ]+(\s[a-zA-Zа-яА-ЯёЁ]+)?$/, 'Enter a valid full name')
            .required('Name is a required field'),
        email: Yup
            .string()
            .email('Введите корректный email')
            .required('E-mail is a required field'),
        mobilePhone: Yup
            .string()
            .matches(/^\+380[0-9]{9}$/, 'Phone number must be in the format +380123456789')
            .required('Phone number is required'),
        question: Yup
            .string()
            .required('This is a required field'),
    });
}

export default validation;