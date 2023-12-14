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

        const { imageURL, ...rest } = values;

        axios.post('http://127.0.0.1:4000/api/shares/', rest, {
            headers: {
                "Authorization": token,
            }
        })
            .then((excursion) => {
                const formData = new FormData();
                formData.append('imageURL', imageURL);
                Object.entries(excursion.data).forEach(([key, value]) => {
                    formData.append(key, value);
                });

                axios.put(`http://127.0.0.1:4000/api/shares/images/${excursion.data._id}`, formData, {
                    headers: {
                        "Authorization": token,
                        "Content-Type": "multipart/form-data",
                    }
                })
                    .then(excursions => {
                        console.log(excursions);

                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err))
            .finally(() => resetForm());
    };

    return (
        <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, setFieldValue }) => (
                <Form className={styles.AddSharesForm}>
                    <div className={styles.AddSharesFields}>
                        <Field
                            className={styles.AddSharesInput}
                            type="text"
                            name="name"
                            placeholder="Promotion title"
                        />
                        <ErrorMessage
                            className={styles.AddSharesError}
                            name="name"
                            component="div"
                        />
                        <Field
                            className={styles.AddSharesInput}
                            type="text"
                            name="pathParts"
                            placeholder="Short title"
                        />
                        <ErrorMessage
                            className={styles.AddSharesError}
                            name="pathParts"
                            component="div"
                        />
                        <Field
                            className={styles.AddSharesInput}
                            type="text"
                            name="description"
                            placeholder="Promotion description"
                        />
                        <ErrorMessage
                            className={styles.AddSharesError}
                            name="description"
                            component="div"
                        />
                        <Field
                            className={styles.AddSharesInput}
                            type="text"
                            name="conditions"
                            placeholder="Promotion conditions"
                        />
                        <ErrorMessage
                            className={styles.AddSharesError}
                            name="conditions"
                            component="div"
                        />
                        <Field
                            className={styles.AddSharesInput}
                            type="text"
                            name="discount"
                            placeholder="Discount rate"
                        />
                        <ErrorMessage
                            className={styles.AddSharesError}
                            name="discount"
                            component="div"
                        />
                        <Field
                            className={styles.AddSharesInput}
                            type="text"
                            name="productCategories"
                            placeholder="Categories of products"
                        />
                        <ErrorMessage
                            className={styles.AddSharesError}
                            name="productCategories"
                            component="div"
                        />
                        <input
                            className={styles.AddExcursionInput}
                            type="file"
                            name="imageURL"
                            onChange={(e) => setFieldValue('imageURL', e.target.files[0])}
                        />
                        <ErrorMessage
                            className={styles.AddExcursionError}
                            name="imageURL"
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