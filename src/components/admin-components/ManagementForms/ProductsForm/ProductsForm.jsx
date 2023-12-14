import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from './ProductsForm.module.scss';
import Button from "../../../Button/Button";
import { useSelector } from "react-redux";
import axios from "axios";

const ProductsForm = () => {
    const token = useSelector((state) => state.user.token);

    const initialValues = {
        name: "",
        currentPrice: "",
        categories: "",
        cartDescription: "",
        collectionBelongs: "",
        productImg: "",
        slidesImageUrls: "",
        taste: "",
        aroma: "",
        vendorCode: "",
        grape: "",
        volume: "",
        color: "",
        strength: "",
        sweetness: "",
        supplyTemperature: "",
        country: "",
        year: "",
    };

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        console.log(values);
        const { productImg, slidesImageUrls, ...rest } = values;

        axios.post('http://127.0.0.1:4000/api/products/', rest, {
            headers: {
                "Authorization": token,
            }
        })
            .then((product) => {
                const { characteristics, productDescription, ...rest } = product.data;
                const formData = new FormData();
                formData.append('slidesImageUrls', productImg);

                Array.from(slidesImageUrls).forEach((image, index) => {
                    formData.append(`slidesImageUrls`, image);
                });

                Object.entries(rest).forEach(([key, value]) => {
                    formData.append(key, value);
                });

                Object.entries(characteristics).forEach(([key, value]) => {
                    formData.append(key, value);
                });

                Object.entries(productDescription).forEach(([key, value]) => {
                    formData.append(key, value);
                });

                axios.put(`http://127.0.0.1:4000/api/products/images/${product.data._id}`, formData, {
                    headers: {
                        "Authorization": token,
                        "Content-Type": "multipart/form-data",
                    }
                })
                    .then(product => {
                        console.log(product);

                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err))
        // .finally(() => resetForm());
    };

    return (
        <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, setFieldValue }) => (
                <Form className={styles.AddProductForm}>
                    <h3 className={styles.AddProductSubTitle}>Main information</h3>
                    <div className={styles.AddProductFields}>
                        <Field
                            className={styles.AddProductInput}
                            type="text"
                            name="name"
                            placeholder="Product name"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="name"
                            component="div"
                        />
                        <Field
                            className={styles.AddProductInput}
                            type="text"
                            name="currentPrice"
                            placeholder="Product price"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="currentPrice"
                            component="div"
                        />
                        <Field
                            className={styles.AddProductInput}
                            type="text"
                            name="categories"
                            placeholder="Product category"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="categories"
                            component="div"
                        />
                        <Field
                            className={styles.AddProductInput}
                            type="text"
                            name="cartDescription"
                            placeholder="Product description"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="cartDescription"
                            component="div"
                        />
                        <Field
                            className={styles.AddProductInput}
                            type="text"
                            name="collectionBelongs"
                            placeholder="Product collection"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="collectionBelongs"
                            component="div"
                        />
                        <input
                            className={styles.AddProductInput}
                            type="file"
                            name="productImg"
                            onChange={(e) => setFieldValue('productImg', e.target.files[0])}
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="productImg"
                            component="div"
                        />
                    </div>

                    <h3 className={styles.AddProductSubTitle}>Characteristics and details</h3>

                    <div className={styles.AddProductFields}>
                        <Field
                            className={styles.AddProductInput}
                            type="text"
                            name="aroma"
                            placeholder="Product aroma"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="aroma"
                            component="div"
                        />
                        <Field
                            className={styles.AddProductInput}
                            type="text"
                            name="taste"
                            placeholder="Product taste"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="taste"
                            component="div"
                        />
                        <Field
                            className={styles.AddProductInput}
                            type="text"
                            name="vendorCode"
                            placeholder="Vendor code"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="vendorCode"
                            component="div"
                        />
                        <Field
                            className={styles.AddProductInput}
                            type="text"
                            name="grape"
                            placeholder="Grape"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="grape"
                            component="div"
                        />
                        <Field
                            className={styles.AddProductInput}
                            type="text"
                            name="volume"
                            placeholder="Volume"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="volume"
                            component="div"
                        />
                        <Field
                            className={styles.AddProductInput}
                            type="text"
                            name="color"
                            placeholder="Color"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="color"
                            component="div"
                        />
                        <Field
                            className={styles.AddProductInput}
                            type="text"
                            name="strength"
                            placeholder="Strength"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="strength"
                            component="div"
                        />
                        <Field
                            className={styles.AddProductInput}
                            type="text"
                            name="sweetness"
                            placeholder="Sweetness"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="sweetness"
                            component="div"
                        />
                        <Field
                            className={styles.AddProductInput}
                            type="text"
                            name="supplyTemperature"
                            placeholder="Supply temperature"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="supplyTemperature"
                            component="div"
                        />
                        <Field
                            className={styles.AddProductInput}
                            type="text"
                            name="country"
                            placeholder="Country of origin"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="country"
                            component="div"
                        />
                        <Field
                            className={styles.AddProductInput}
                            type="number"
                            name="year"
                            placeholder="Year of production"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="year"
                            component="div"
                        />
                        <input
                            className={styles.AddProductInput}
                            type="file"
                            name="slidesImageUrls"
                            multiple
                            onChange={(e) => setFieldValue('slidesImageUrls', e.currentTarget.files)}
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="slidesImageUrls"
                            component="div"
                        />
                    </div>
                    <Button
                        type="submit"
                        text="Save"
                        disabled={isSubmitting}
                    />
                </Form>
            )}
        </Formik>
    );
}

export default ProductsForm;