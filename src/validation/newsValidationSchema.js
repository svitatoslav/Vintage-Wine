import * as Yup from 'yup';

const newsValidationSchema = Yup.object().shape({
    title: Yup.string()
        .min(3, 'Title must be between 3 and 30 characters')
        .max(30, 'Title must be between 3 and 30 characters')
        .matches(/^[a-zA-Z0-9\s]+$/, 'Allowed characters are a-z, A-Z, 0-9')
        .required('Title is required'),
    tags: Yup.array()
        .min(1, 'At least one tag is required')
        .of(
            Yup.string()
                .min(2, 'Tag must be at least 2 characters')
                .max(20, 'Tag must be at most 20 characters')
        ),
    description_1: Yup.string()
        .min(10, 'Description must be between 10 and 600 characters')
        .max(600, 'Description must be between 10 and 600 characters')
        .matches(/^[a-zA-Z0-9\s\S]+$/, 'Allowed characters are a-z, A-Z, 0-9')
        .required('Description is required'),
    description_2: Yup.string()
        .min(10, 'Description must be between 10 and 600 characters')
        .max(600, 'Description must be between 10 and 600 characters')
        .matches(/^[a-zA-Z0-9\s\S]+$/, 'Allowed characters are a-z, A-Z, 0-9'),
    description_3: Yup.string()
        .min(10, 'Description must be between 10 and 600 characters')
        .max(600, 'Description must be between 10 and 600 characters')
        .matches(/^[a-zA-Z0-9\s\S]+$/, 'Allowed characters are a-z, A-Z, 0-9'),
    description_4: Yup.string()
        .min(10, 'Description must be between 10 and 600 characters')
        .max(600, 'Description must be between 10 and 600 characters')
        .matches(/^[a-zA-Z0-9\s\S]+$/, 'Allowed characters are a-z, A-Z, 0-9'),
    description_5: Yup.string()
        .min(10, 'Description must be between 10 and 600 characters')
        .max(600, 'Description must be between 10 and 600 characters')
        .matches(/^[a-zA-Z0-9\s\S]+$/, 'Allowed characters are a-z, A-Z, 0-9'),
    description_6: Yup.string()
        .min(10, 'Description must be between 10 and 600 characters')
        .max(600, 'Description must be between 10 and 600 characters')
        .matches(/^[a-zA-Z0-9\s\S]+$/, 'Allowed characters are a-z, A-Z, 0-9'),
    related: Yup.array()
        .of(
            Yup.object().shape({
                id: Yup.string().required('ID is required'),
                label: Yup.string().required('Label is required'),
            })
        ),
    image: Yup.mixed()
        .required('Please select a file'),
});

export default newsValidationSchema;