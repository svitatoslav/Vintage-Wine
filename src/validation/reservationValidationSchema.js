import * as Yup from 'yup';

const reservationValidationSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'First name must be between 2 and 15 characters')
        .max(15, 'First name must be between 2 and 15 characters')
        .matches(/^[a-zA-Z]+$/, 'Allowed characters for login is a-z, A-Z')
        .required('First name is required'),
    lastName: Yup.string()
        .min(2, 'Last name must be between 2 and 15 characters')
        .max(15, 'Last name must be between 2 and 15 characters')
        .matches(/^[a-zA-Z]+$/, 'Allowed characters for login is a-z, A-Z')
        .required('Last name is required'),
    email: Yup.string()
        .email()
        .required('Email is required'),
    phone: Yup.string()
        .matches(/^(\+\d{1,3}[- ]?)?\d{9,12}$/, 'Phone number is not valid')
        .required('Phone number is required'),
    date: Yup.date()
        .min(new Date(), 'Wrong date is selected')
        .required('Date is required')
});

export default reservationValidationSchema;
