import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from './ProductsForm.module.scss';
import Button from "../../../Button/Button";

const ProductsForm = () => {

    const initialValues = {
        name: "",
        price: "",
        categories: "",
        productImg: "",
        cartDescription: "",
        collection: "",
    };

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        console.log(values);
    };

    return (
        <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form className={styles.AddProductForm}>
                    {/* <h4 className={styles.LoginTitle}>{formTexts.title}</h4> */}
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
                            name="price"
                            placeholder="Product price"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="price"
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
                            name="category"
                            component="div"
                        />
                        <Field
                            className={styles.AddProductInput}
                            type="text"
                            name="productImg"
                            placeholder="Product image"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="productImg"
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
                            name="collection"
                            placeholder="Product Collection"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="collection"
                            component="div"
                        />
                    </div>

                    <h3>Characteristics and details</h3>
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
                            type="number"
                            name="price"
                            placeholder="Product price"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="price"
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
                            name="category"
                            component="div"
                        />
                        <Field
                            className={styles.AddProductInput}
                            type="text"
                            name="productImg"
                            placeholder="Product image"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="productImg"
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
                            name="collection"
                            placeholder="Product Collection"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="collection"
                            component="div"
                        />
                    </div>
                    {/* {(error && isLogin) && (
            <div className={styles.FormError}>
              {error}
            </div>
          )} */}
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