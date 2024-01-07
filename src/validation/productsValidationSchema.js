import * as Yup from 'yup';

const productsValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be between 3 and 20 characters')
    .max(20, 'Name must be between 3 and 20 characters')
    .matches(/^[a-zA-Z0-9\s]+$/, 'Allowed characters are a-z, A-Z, 0-9')
    .required('Name is required'),
  currentPrice: Yup.number()
    .typeError('Price must be a valid number')
    .required('Price is required')
    .positive('Price must be a positive number')
    .min(1, 'Price must be at least 1')
    .max(5000, 'Price cannot exceed 5.000'),
  categories: Yup.string()
    .required('Category is required'),
  cartDescription: Yup.string()
    .min(10, 'Description must be between 10 and 200 characters')
    .max(200, 'Description must be between 10 and 200 characters')
    .matches(/^[a-zA-Z0-9\s\S]+$/, 'Allowed characters are a-z, A-Z, 0-9')
    .required('Description is required'),
  aroma: Yup.string()
    .min(3, 'Aroma must be between 3 and 20 characters')
    .max(20, 'Aroma must be between 3 and 20 characters')
    .matches(/^[a-zA-Z\s]+$/, 'Allowed characters are a-z, A-Z'),
  taste: Yup.string()
    .min(3, 'Taste must be between 3 and 20 characters')
    .max(20, 'Taste must be between 3 and 20 characters')
    .matches(/^[a-zA-Z\s]+$/, 'Allowed characters are a-z, A-Z'),
  vendorCode: Yup.string()
    .min(3, 'Vendor code must be between 3 and 20 characters')
    .max(20, 'Vendor code must be between 3 and 20 characters')
    .matches(/^[a-zA-Z\s\S]+$/, 'Allowed characters are a-z, A-Z')
    .required('Vendor code is required'),
  grape: Yup.string()
    .min(3, 'Grape must be between 3 and 20 characters')
    .max(20, 'Grape must be between 3 and 20 characters')
    .matches(/^[a-zA-Z\s]+$/, 'Allowed characters are a-z, A-Z'),
  color: Yup.string()
    .min(3, 'Color must be between 3 and 20 characters')
    .max(20, 'Color must be between 3 and 20 characters')
    .matches(/^[a-zA-Z\s]+$/, 'Allowed characters are a-z, A-Z'),
  volume: Yup.string()
    .min(3, 'Volume must be between 3 and 20 characters')
    .max(20, 'Volume must be between 3 and 20 characters')
    .matches(/^[a-zA-Z\s\S]+$/, 'Allowed characters are a-z, A-Z')
    .required('Volume is required'),
  strength: Yup.string()
    .min(3, 'Strength must be between 3 and 20 characters')
    .max(20, 'Strength must be between 3 and 20 characters')
    .matches(/^[a-zA-Z\s\S]+$/, 'Allowed characters are a-z, A-Z')
    .required('Strength is required'),
  sweetness: Yup.string()
    .min(3, 'Sweetness must be between 3 and 20 characters')
    .max(20, 'Sweetness must be between 3 and 20 characters')
    .matches(/^[a-zA-Z\s]+$/, 'Allowed characters are a-z, A-Z'),
  supplyTemperature: Yup.string()
    .max(20, 'Temperature cannot exceed 20 characters'),
  country: Yup.string()
    .min(3, 'Country must be between 3 and 20 characters')
    .max(20, 'Country must be between 3 and 20 characters')
    .matches(/^[a-zA-Z\s]+$/, 'Allowed characters are a-z, A-Z')
    .required('Country is required'),
  collectionBelongs: Yup.string()
    .min(3, 'Collection must be between 3 and 20 characters')
    .max(20, 'Collection must be between 3 and 20 characters')
    .matches(/^[a-zA-Z\s]+$/, 'Allowed characters are a-z, A-Z'),
  year: Yup.number()
    .typeError('Year must be a valid number')
    .positive('Year must be a positive number')
    .min(1950, 'Year must be at least 1950')
    .max(Number(new Date().getFullYear()), 'Year cannot exceed the current year'),
  productImg: Yup.mixed()
    .required('Please select a file'),
  slidesImageUrls: Yup.mixed()
    .required('Please select a file'),
});

export default productsValidationSchema;