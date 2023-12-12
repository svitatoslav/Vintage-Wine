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
                            name="imageURL"
                            placeholder="Promotion picture"
                        />
                        <ErrorMessage
                            className={styles.AddSharesError}
                            name="imageURL"
                            component="div"
                        />
                        <Field
                            className={styles.AddSharesInput}
                            type="text"
                            name="discount"
                            placeholder="Promotion picture"
                        />
                        <ErrorMessage
                            className={styles.AddSharesError}
                            name="discount"
                            component="div"
                        />
                        <Field
                            className={styles.AddSharesInput}
                            type="text"
                            name="pathParts"
                            placeholder="Promotion picture"
                        />
                        <ErrorMessage
                            className={styles.AddSharesError}
                            name="pathParts"
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
                            name="productCategories"
                            placeholder="Product categories"
                        />
                        <ErrorMessage
                            className={styles.AddSharesError}
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