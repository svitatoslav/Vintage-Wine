import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from './ExcursionsForm.module.scss';
import Button from "../../../Button/Button";
import axios from "axios";
import { useSelector } from "react-redux";

const ExcursionsForm = () => {
    const token = useSelector((state) => state.user.token);

    const initialValues = {
        title: "",
        description: "",
        imageURL: "",
    };

    const handleSubmit = (values, { setSubmitting, resetForm }) => {

        axios.post('http://127.0.0.1:4000/api/excursions/', values, {
            headers: {
                "Authorization": token,
            }
        })
            .then(excursions => {
                console.log(excursions);
            })
            .catch(err => console.log(err));
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
                            name="title"
                            placeholder="Excursion title"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="title"
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

export default ExcursionsForm;