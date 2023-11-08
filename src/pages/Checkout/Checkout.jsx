import Container from "../../components/Container/Container";
import Breadcrumbs from './../../components/Breadcrumbs/Breadcrumbs';
import useBreadcrumbs from '../../hooks/useBreadcrumbs';
import styles from "./Checkout.module.scss"
import React, { useState } from 'react';
import Button from "../../components/Button/Button";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Checkout = () => {
    const [showComment, setShowComment] =  useState(false);
     
    const [displayClientInfo, setDisplayClientInfo] = useState(true);
    const pathParts = useBreadcrumbs();
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        phone: Yup.string().required('Phone number is required'),
        country: Yup.string().required('Country is required'),
        city: Yup.string().required('City is required'),
        address: Yup.string().required('Address is required'),
        comment: Yup.string().optional(),
      });
     
    return (
        <section>
            <Container>
                <h3 className="vvPageTitle">Checkout </h3>
                {<Breadcrumbs pathParts={pathParts} />}
                <Formik
                    initialValues={{
                        toggle: false,
                        checked: [],
                        name: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        country: '',
                        city: '',
                        address: '',
                        comment: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, actions) => {
                        console.log(values);
                        setDisplayClientInfo(false);
                        actions.setSubmitting(false);
                        }}
                    >
                    <Form>
                        <div className={styles.ProductInfo}>
                            <div className={styles.AddedProducts}>
                                Products from Cart
                            </div>
                            <div className={styles.Total}>
                                <h3>Subtotal:</h3>
                                <h3>Shipping:</h3>
                                <h3>Total:</h3>
                            </div>
                            <label>
                                <Field type="checkbox" name="toggle" />
                                By clicking the "Place order" button, you agree to the Privacy Policy
                            </label>
                            {displayClientInfo && (<Button text="Continue" type="submit" />)}
                        </div>

                        {displayClientInfo ? (
                            <div className={styles.ClientInfo}>
                            <title>Your order</title>
                            <div className={styles.PersonalData}>
                                <title>
                                    <h3>Personal data</h3>
                                </title>
                                <div>
                                    <label>Name</label>
                                    <Field type="text" name="name" />
                                    <ErrorMessage name="name" component="div" />
                                </div>
                                <div>
                                    <label>Last Name</label>
                                    <Field type="text" name="lastName" />
                                    <ErrorMessage name="lastName" component="div" />
                                </div>
                                <div>
                                    <label>Email</label>
                                    <Field type="email" name="email" />
                                    <ErrorMessage name="email" component="div" />
                                </div>
                                <div>
                                    <label>Phone</label>
                                    <Field type="text" name="phone" />
                                    <ErrorMessage name="phone" component="div" />
                                </div>
                            </div>
                            <div className={styles.Delivery}>    
                                <div>
                                    <label>Country</label>
                                    <Field type="text" name="country" />
                                    <ErrorMessage name="country" component="div" />
                                </div>
                                <div>
                                    <label>City</label>
                                    <Field type="text" name="city" />
                                    <ErrorMessage name="city" component="div" />
                                </div>
                                <div>
                                    <label>Address</label>
                                    <Field type="text" name="address" />
                                    <ErrorMessage name="address" component="div" />
                                </div>
                            </div>
                            <div className={styles.PaymentMethods}>
                                <title>
                                    <h3>Payment methods</h3>
                                </title>
                                <div className={styles.CardsImages}>
                                    <img src="public\imageProject\checkout\six-cards.png" alt="smallCards" />
                                </div>
                                <div className={styles.MobilePay}>
                                    <img src="public\imageProject\checkout\mobile-pay.png" alt="mobile-pay" />
                                </div>
                                <div className={styles.CardsImagesBig}>
                                    <img src="public\imageProject\checkout\nine-cards.png" alt="BigCards" />
                                </div>
                            </div>
                            <div>
                                <button type="button" onClick={() => setShowComment(!showComment)}>
                                    <label>Comment on the order</label>
                                    <img src="src\pages\Checkout\icons\Checkout_plus_icon.svg" alt="plus" />
                                </button>
                            </div>
                            {showComment && (
                                <div>
                                    <div>
                                        <Field as="textarea" name="comment" />
                                        <ErrorMessage name="comment" component="div" />
                                    </div>
                                </div>
                            )}
                            </div>
                        ) : (
                            <div className={styles.ImageAfterSubmite}>
                                <img src="public\imageProject\checkout\checkout.png" alt="after submite" />
                            </div>
                        )}
                    </Form>
                </Formik>
            </Container>
        </section>
    )
}

export default Checkout;
