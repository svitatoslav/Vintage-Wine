import * as Yup from 'yup';

const loginValidationSchema = Yup.object().shape({
  login: Yup.string()
    .min(3, 'Login must be between 3 and 10 characters')
    .max(10, 'Login must be between 3 and 10 characters')
    .matches(/^[a-zA-Z0-9]+$/, 'Allowed characters for login is a-z, A-Z, 0-9')
    .required('Login is required'),
  email: Yup.string()
    .email()
    .required('Email is required'),
  password: Yup.string()
    .min(7, 'Password must be between 7 and 30 characters')
    .max(30, 'Password must be between 7 and 30 characters')
    .matches(/^[a-zA-Z0-9]+$/, 'Allowed characters for login is a-z, A-Z, 0-9')
    .required('Password is required'),
});

export default loginValidationSchema;
