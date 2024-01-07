import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from './NewsForm.module.scss';
import Button from "../../../Button/Button";
import axios from "axios";
import { useSelector } from "react-redux";
import AdminNewsSelect from "../../AdminSelect/AdminNewsSelect";
import { Fragment, useEffect, useState } from "react";
import CustomField from "../../CustomeField/CustomeField";

const NewsForm = () => {
    const token = useSelector((state) => state.user.token);
    const [options, setOptions] = useState([]);
    const [paragraphNum, setParagraphNum] = useState(1);

    useEffect(() => {
        axios.get('http://127.0.0.1:4000/api/news/')
            .then(newsAll => {
                const options = newsAll.data?.map(news => (
                    {
                        id: news._id,
                        label: news.title,
                    }
                ));
                setOptions(options);
            })
            .catch(err => console.log(err));
    }, []);

    const initialValues = {
        title: "",
        tags: [],
        description_1: "",
        description_2: "",
        description_3: "",
        description_4: "",
        description_5: "",
        description_6: "",
        related: [],
        image: "",
    };

    const handleSubmit = (values, { setSubmitting, resetForm }) => {

        const { image, title, related, tags, ...rest } = values;

        const descr = Object.entries(rest).map(item => item[1]);
        const relate = related.map(item => item.id);

        const body = {
            title,
            tags,
            related: relate,
            description: descr
        }

        axios.post('http://127.0.0.1:4000/api/news/', body, {
            headers: {
                "Authorization": token,
            }
        })
            .then((news) => {
                const formData = new FormData();
                formData.append('image', image);

                axios.patch(`http://127.0.0.1:4000/api/news/images/${news.data._id}`, formData, {
                    headers: {
                        "Authorization": token,
                        "Content-Type": "multipart/form-data",
                    }
                })
                    .then(news => {
                        console.log(news);

                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err))
        .finally(() => resetForm());
    };

    const makeFields = () => {
        let arr = [];
        for (let i = 0; i < paragraphNum; i++) {
            arr.push(
                <Fragment key={i}>
                    <Field
                        className={styles.AddProductInput}
                        type="text"
                        name={`description_${i + 1}`}
                        placeholder="News paragraph"
                    />
                    <ErrorMessage
                        className={styles.AddProductError}
                        name={`description_${i + 1}`}
                        component="div"
                    />
                </Fragment>
            )
        }
        return arr;
    }

    const addNewField = () => {
        if (paragraphNum >= 6) return;

        setParagraphNum(prev => prev + 1);
    }

    return (
        <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, setFieldValue, values }) => (
                <Form className={styles.AddNewsForm}>
                    <div className={styles.AddNewsFields}>
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
                        <input
                            className={styles.AddProductInput}
                            type="file"
                            name="image"
                            onChange={(e) => setFieldValue('image', e.target.files[0])}
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="image"
                            component="div"
                        />
                    </div>

                    <h3 className={styles.AddNewsSubTitle}>Content and relations</h3>

                    <div className={styles.AddNewsFields}>
                        {/* <Field
                            className={styles.AddProductInput}
                            type="text"
                            name="tags"
                            placeholder="Add tags"
                        />
                        <ErrorMessage
                            className={styles.AddProductError}
                            name="tags"
                            component="div"
                        /> */}

                        <div className={styles.AddNewsRelated}>
                            {
                                values.tags.length > 0 && (
                                    <>
                                        <h5 className={styles.AddNewsLabel}>Added tags: </h5>
                                        <ul className={styles.AddNewsRelatedList}>
                                            {values.tags.map((item, i) => {
                                                return <li key={i}><span>{i + 1}.</span>{item}</li>
                                            })}
                                        </ul>
                                    </>
                                )
                            }
                            <CustomField name="tags"/>
                            {/* <Field
                                className={styles.AddProductInput}
                                type="text"
                                name="tags"
                                placeholder="Add tags"
                            />
                            <ErrorMessage
                                className={styles.AddProductError}
                                name="tags"
                                component="div"
                            /> */}
                        </div>

                        {
                            makeFields()
                        }

                        {
                            paragraphNum < 6 && (
                                <span className={styles.AddParagraphBtn} onClick={addNewField}>Add next paragraph</span>
                            )
                        }

                        <div className={styles.AddNewsRelated}>
                            {
                                values.related.length > 0 && (
                                    <>
                                        <h5 className={styles.AddNewsLabel}>Selected related news: </h5>
                                        <ul className={styles.AddNewsRelatedList}>
                                            {values.related.map((item, i) => {
                                                return <li key={i}><span>{i + 1}.</span>{item.label}</li>
                                            })}
                                        </ul>
                                    </>
                                )
                            }
                            <AdminNewsSelect placeHolder="Choose related news" name='related' options={options} />
                            <ErrorMessage
                                className={styles.AddProductError}
                                name="related"
                                component="div"
                            />
                        </div>
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