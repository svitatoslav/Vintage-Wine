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
                        <Form className={styles.CheckourForm}>
                            <div className={styles.ProductInfo}>
                                <div className={styles.AddedProducts}>
                                    Products from Cart
                                </div>
                                <div className={styles.Total}>
                                    <div className={styles.TotalTitlels}>
                                        <h3>Subtotal:</h3>
                                        <h3>Shipping:</h3>
                                        <h3>Total:</h3>
                                    </div>
                                    <div className={styles.TotalValues}>
                                        <h3>1796uan</h3>
                                        <h3>50uan</h3>
                                        <h3>1846uan</h3>    
                                    </div>
                                </div>
                                <label className={styles.Checkbox}>
                                    <Field type="checkbox" name="toggle" />
                                    <p>By clicking the "Place order" button, you agree to the Privacy Policy</p>
                                </label>
                                {displayClientInfo && (<Button text="Continue" type="submit" />)}
                            </div>

                            {displayClientInfo ? (
                                <div className={styles.ClientInfo}>
                                    <div className={styles.YourOrder}>
                                        <h2>Your order</h2>
                                    </div>
                                    <div className={styles.PersonalData}>
                                        <p>Personal data</p>
                                        <div>
                                            <Field type="text" name="name" placeholder="Name" />
                                            <ErrorMessage name="name" component="div" />
                                        </div>
                                        <div>
                                            <Field type="text" name="lastName" placeholder="Last Name" />
                                            <ErrorMessage name="lastName" component="div" />
                                        </div>
                                        <div>
                                            <Field type="email" name="email" placeholder="Email"/>
                                            <ErrorMessage name="email" component="div" />
                                        </div>
                                        <div>
                                            <Field type="text" name="phone" placeholder="Phone"/>
                                            <ErrorMessage name="phone" component="div" />
                                        </div>
                                    </div>
                                    <div className={styles.Delivery}>  
                                        <p>Delivery</p>  
                                        <div>
                                            <Field type="text" name="country" placeholder="Country"/>
                                            <ErrorMessage name="country" component="div" />
                                        </div>
                                        <div>
                                            <Field type="text" name="city" placeholder="city"/>
                                            <ErrorMessage name="city" component="div" />
                                        </div>
                                        <div>
                                            <Field type="text" name="address" placeholder="Address"/>
                                            <ErrorMessage name="address" component="div" />
                                        </div>
                                    </div>
                                    <div className={styles.PaymentMethods}>
                                        <div className={styles.PaymentMethodsTitle}>
                                            <p>Payment methods</p>
                                        </div>
                                        <div className={styles.PaymentMethodsImages}>
                                            <div className={styles.CardsImagesContainer}>
                                                <div className={styles.CardsImages}>
                                                    <img src="public\imageProject\checkout\six-cards.png" alt="smallCards" />
                                                </div>
                                                <div className={styles.MobilePay}>
                                                    <img src="public\imageProject\checkout\mobile-pay.png" alt="mobile-pay" />
                                                </div>
                                            </div>
                                            <div className={styles.CardsImagesBig}>
                                                <img src="public\imageProject\checkout\nine-cards.png" alt="BigCards" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.AddComment}>
                                        <button type="button" onClick={() => setShowComment(!showComment)}>
                                            <img src="src\pages\Checkout\icons\Checkout_plus_icon.svg" alt="plus" />
                                            <label>Comment on the order</label>
                                        </button>
                                    </div>
                                    {showComment && (
                                        <div className={styles.Textarea}>
                                            <Field as="textarea" name="comment" />
                                            <ErrorMessage name="comment" component="div" />
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
