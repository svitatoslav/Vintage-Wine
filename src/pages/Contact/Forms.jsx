import styles from './Contact.module.scss';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {ErrorMessage, Field, Form, Formik} from "formik";
import validation from "./validation";
import cn from "classnames";

const Forms = () => {

    const initialValues = {
        name: "",
        email: "",
        mobilePhone: "",
        question: "",
    }

    const handleSubmit = async (values, {setSubmitting, resetForm}) => {
        console.log(values);
        resetForm(initialValues);
        setSubmitting(false);
    };

    const validationSchema = validation();

    return (
        <Formik className={cn(styles.div2)} initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
            {({isSubmitting}) => (
                <Form className={styles.form}>
                    <h3 className={styles.title}>Contact form</h3>

                    <Field type="text" name="name" placeholder="Name"/>
                    <ErrorMessage name="name" className={styles.error} component="div"/>

                    <Field type="email" name="email" placeholder="E-mail"/>
                    <ErrorMessage name="email" className={styles.error} component="div"/>

                    <Field type="text" name="mobilePhone" placeholder="Mobile phone"/>
                    <ErrorMessage name="mobilePhone" className={styles.error} component="div" />

                    <Field type="text" name="question" placeholder="Question"/>
                    <ErrorMessage name="question" className={styles.error} component="div"/>

                    <input type="submit" className={styles.submit} value="Send"/>
                </Form>
            )}
        </Formik>
    );
}

export default Forms;