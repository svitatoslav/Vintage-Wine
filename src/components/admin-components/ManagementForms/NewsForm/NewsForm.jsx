import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from './NewsForm.module.scss';
import Button from "../../../Button/Button";
import axios from "axios";
import { useSelector } from "react-redux";

const NewsForm = () => {
    const token = useSelector((state) => state.user.token);

    const initialValues = {
        title: "",
        description_1: "",
        description_2: "",
        description_3: "",
        description_4: "",
        description_5: "",
        description_6: "",
        related_1: "",
        related_2: "",
        related_3: "",
        image: "",
    };

    const handleSubmit = (values, { setSubmitting, resetForm }) => {

        // axios.post('http://127.0.0.1:4000/api/news/', values, {
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
                            name="title"
                            placeholder="News title"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="title"
                            component="div"
                        />
                        <Field
                            className={styles.AddProductInput}
                            type="text"
                            name="image"
                            placeholder="News picture"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="image"
                            component="div"
                        />
                    </div>

                    <h3>Characteristics and details</h3>
                    <div className={styles.AddProductFields}>
                        <Field
                            className={styles.AddProductInput}
                            type="text"
                            name="description_1"
                            placeholder="Product name"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="description_1"
                            component="div"
                        />
                        <Field
                            className={styles.AddProductInput}
                            type="text"
                            name="description_2"
                            placeholder="Product price"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="description_2"
                            component="div"
                        />
                        <Field
                            className={styles.AddProductInput}
                            type="text"
                            name="description_3"
                            placeholder="Product category"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="description_3"
                            component="div"
                        />
                        <Field
                            className={styles.AddProductInput}
                            type="text"
                            name="description_4"
                            placeholder="Product image"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="description_4"
                            component="div"
                        />
                        <Field
                            className={styles.AddProductInput}
                            type="text"
                            name="description_5"
                            placeholder="Product description"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="description_5"
                            component="div"
                        />
                        <Field
                            className={styles.AddProductInput}
                            type="text"
                            name="description_6"
                            placeholder="Product Collection"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="description_6"
                            component="div"
                        />
                        <Field
                            className={styles.AddProductInput}
                            type="text"
                            name="related_1"
                            placeholder="Product Collection"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="related_1"
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

export default NewsForm;