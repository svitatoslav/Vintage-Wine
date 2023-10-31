import * as Yup from 'yup';

const regValidationSchema = Yup.object().shape({
  password: Yup.string()
    .min(7, 'Password must be between 7 and 30 characters')
    .max(30, 'Password must be between 7 and 30 characters')
    .matches(/^[a-zA-Z0-9]+$/, 'Allowed characters for login is a-z, A-Z, 0-9')
    .required('Password is required'),
  loginOrEmail: Yup.string()
    .required('Login or Email is required'),
});

export default regValidationSchema;
