import * as Yup from 'yup';

const sharesValidationSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Title must be between 3 and 30 characters')
        .max(30, 'Title must be between 3 and 30 characters')
        .matches(/^[a-zA-Z0-9\s]+$/, 'Allowed characters are a-z, A-Z, 0-9')
        .required('Title is required'),
    discount: Yup.number()
        .typeError('Discount must be a valid number')
        .required('Discount is required')
        .positive('Discount must be a positive number')
        .min(1, 'Discount must be at least 1')
        .max(90, 'Discount cannot exceed 90'),
    description: Yup.string()
        .min(10, 'Description must be between 10 and 300 characters')
        .max(300, 'Description must be between 10 and 300 characters')
        .matches(/^[a-zA-Z0-9\s\S]+$/, 'Allowed characters are a-z, A-Z, 0-9')
        .required('Description is required'),
    pathParts: Yup.string()
        .min(5, 'Description must be between 5 and 50 characters')
        .max(50, 'Description must be between 5 and 50 characters')
        .matches(/^[a-zA-Z0-9\s\S]+$/, 'Allowed characters are a-z, A-Z, 0-9')
        .required('Description is required'),
    conditions: Yup.string()
        .min(10, 'Description must be between 10 and 100 characters')
        .max(100, 'Description must be between 10 and 100 characters')
        .matches(/^[a-zA-Z0-9\s\S]+$/, 'Allowed characters are a-z, A-Z, 0-9')
        .required('Description is required'),
    productCategories: Yup.string()
        .min(3, 'Description must be between 3 and 100 characters')
        .max(100, 'Description must be between 3 and 100 characters')
        .matches(/^[a-zA-Z0-9\s\S]+$/, 'Allowed characters are a-z, A-Z, 0-9')
        .required('Description is required'),
    imageURL: Yup.mixed()
        .required('Please select a file'),
});

export default sharesValidationSchema;