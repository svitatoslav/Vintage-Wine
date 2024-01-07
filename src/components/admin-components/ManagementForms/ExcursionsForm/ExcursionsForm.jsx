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
        const { imageURL, ...rest } = values;

        axios.post('http://127.0.0.1:4000/api/excursions/', rest, {
            headers: {
                "Authorization": token,
            }
        })
            .then((excursion) => {
                const formData = new FormData();
                formData.append('imageURL', imageURL);
                formData.append('title', excursion.data.title);
                formData.append('description', excursion.data.description);

                axios.put(`http://127.0.0.1:4000/api/excursions/${excursion.data._id}`, formData, {
                    headers: {
                        "Authorization": token,
                        "Content-Type": "multipart/form-data",
                    }
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
                <Form className={styles.AddExcursionForm}>
                    <div className={styles.AddExcursionFields}>
                        <Field
                            className={styles.AddExcursionInput}
                            type="text"
                            name="title"
                            placeholder="Excursion title"
                        />
                        <ErrorMessage
                            className={styles.AddExcursionError}
                            name="title"
                            component="div"
                        />
                        <Field
                            className={styles.AddExcursionInput}
                            type="text"
                            name="description"
                            placeholder="Excursion description"
                        />
                        <ErrorMessage
                            className={styles.AddExcursionError}
                            name="description"
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

export default ExcursionsForm;