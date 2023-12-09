import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from './SharesForm.module.scss';
import Button from "../../../Button/Button";
import axios from "axios";
import { useSelector } from "react-redux";

const SharesForm = () => {
    const token = useSelector((state) => state.user.token);

    const initialValues = {
        name: "",
        discount: "",
        description: "",
        imageURL: "",
        pathParts: "",
        conditions: "",
        productCategories: "",
    };

    const handleSubmit = (values, { setSubmitting, resetForm }) => {

        // axios.post('http://127.0.0.1:4000/api/shares/', values, {
        //     headers: {
        //         "Authorization": token,
        //     }
        // })
        //     .then(excursions => {
        //         console.log(excursions);
        //     })
        //     .catch(err => console.log(err));
    };

    return (
        <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form className={styles.AddProductForm}>
                    <div className={styles.AddProductFields}>
                        <Field
                            className={styles.AddProductInput}
                            type="text"
                            name="name"
                            placeholder="Excursion title"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="name"
                            component="div"
                        />
                        <Field
                            className={styles.AddProductInput}
                            type="text"
                            name="description"
                            placeholder="Excursion description"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="description"
                            component="div"
                        />
                        <Field
                            className={styles.AddProductInput}
                            type="text"
                            name="imageURL"
                            placeholder="Excursion picture"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="imageURL"
                            component="div"
                        />
                        <Field
                            className={styles.AddProductInput}
                            type="text"
                            name="discount"
                            placeholder="Excursion picture"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="discount"
                            component="div"
                        />
                        <Field
                            className={styles.AddProductInput}
                            type="text"
                            name="pathParts"
                            placeholder="Excursion picture"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="pathParts"
                            component="div"
                        />
                        <Field
                            className={styles.AddProductInput}
                            type="text"
                            name="conditions"
                            placeholder="Excursion picture"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="conditions"
                            component="div"
                        />
                        <Field
                            className={styles.AddProductInput}
                            type="text"
                            name="productCategories"
                            placeholder="Excursion picture"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="productCategories"
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

export default SharesForm;