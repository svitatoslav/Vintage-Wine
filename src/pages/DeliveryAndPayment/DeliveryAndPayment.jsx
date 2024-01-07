// import map from "../../assets/images/map.png";
// import a1 from "../../assets/images/payment/Alipay.png";
// import a2 from "../../assets/images/payment/AmazonPay.png";
// import a3 from "../../assets/images/payment/ApplePay.png";
// import a4 from "../../assets/images/payment/DinersClub.png";
// import a5 from "../../assets/images/payment/GooglePay.png";
// import a6 from "../../assets/images/payment/Mastercard.png";
// import a7 from "../../assets/images/payment/PayPal.png";
// import a8 from "../../assets/images/payment/ShopPay.png";
// import a9 from "../../assets/images/payment/Stripe.png";
// import a10 from "../../assets/images/payment/Visa.png";
// import packageImg from "../../assets/images/package.png";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Container from "../../components/Container/Container";
import PageTitle from "../../components/Title/PageTitle";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";
import styles from "./DeliveryAndPayment.module.scss";
import SectionTitle from "../../components/Title/SectionTitle";

const DeliveryAndPayment = () => {
    const pathParts = useBreadcrumbs();

    return (
        <>
            <section className={styles.Delivery} >
                <Container>
                    <PageTitle text={'Delivery and Payment'} />
                    <Breadcrumbs pathParts={pathParts} />
                    <div className={styles.Delivery}>
                        <div>
                            <div className={styles.DeliveryInfo}>
                                <h4 className={styles.DeliveryHeading}>Delivery costs</h4>                                
                                <p>A single price for delivery throughout Ukraine is 50 UAH, regardless of the size of the parcel (see below for available limits)</p>
                            </div>
                            <div className={styles.DeliveryInfo}>
                                <h4 className={styles.DeliveryHeading}>Time of delivery</h4>                                
                                <p>We will make every effort to ensure that your purchased goods reach you as quickly as possible. The maximum delivery time is 3 business days from the date of order confirmation.</p>
                            </div>
                            <div className={styles.DeliveryInfo}>
                                <h4 className={styles.DeliveryHeading}>Terms of delivery</h4>                                
                                <p>Delivery is made by the courier of the company or a partner courier company to the address specified by the customer during the checkout</p>
                            </div>
                        </div>
                        <img src={"https://res.cloudinary.com/dhpukux5x/image/upload/v1702065531/map_n7jf4a.png"} alt="map" className={styles.DeliveryImg} />
                        {/* <img src={map} alt="map" className={styles.DeliveryImg} /> */}
                    </div>
                    <h3 className={styles.DeliveryDimensions}>Maximum Parcel Sizes</h3>
                    <ul className={styles.DeliveryPackageList}>
                        <li className={styles.DeliveryPackageItem}>
                            <img src={"https://res.cloudinary.com/dhpukux5x/image/upload/v1702065533/package_qgo0r3.png"} alt="package" style={{ width: "120px" }} />
                            {/* <img src={packageImg} alt="package" style={{ width: "120px" }} /> */}
                            <h5 className={styles.DeliverySize}>Small</h5>
                            <p>Max: 3 kg or (40x15x20) cm</p>
                        </li>
                        <li className={styles.DeliveryPackageItem}>
                            <img src={"https://res.cloudinary.com/dhpukux5x/image/upload/v1702065533/package_qgo0r3.png"} alt="package" style={{ width: "180px" }} />
                            {/* <img src={packageImg} alt="package" style={{ width: "180px" }} /> */}
                            <h5 className={styles.DeliverySize}>Medium</h5>
                            <p>Max: 7 kg or (55x25x40) cm</p>
                        </li>
                        <li className={styles.DeliveryPackageItem}>
                            <img src={"https://res.cloudinary.com/dhpukux5x/image/upload/v1702065533/package_qgo0r3.png"} alt="package" style={{ width: "250px" }} />
                            {/* <img src={packageImg} alt="package" style={{ width: "250px" }} /> */}
                            <h5 className={styles.DeliverySize}>Large</h5>
                            <p>Max: 25 kg or (90x40x60) cm</p>
                        </li>
                    </ul>
                </Container>
            </section>
            <section className={styles.Delivery} >
                <Container>
                    <SectionTitle secText='Payment Methods' />
                    <ul className={styles.PaymentList}>
                        <li className={styles.PaymentItem}>
                            <img src={"https://res.cloudinary.com/dhpukux5x/image/upload/v1702065526/Alipay_ppqtxz.png"} alt="payment" />
                            {/* <img src={a1} alt="payment" /> */}
                        </li>
                        <li className={styles.PaymentItem}>
                            <img src={"https://res.cloudinary.com/dhpukux5x/image/upload/v1702065526/AmazonPay_eo0pem.png"} alt="payment" />
                            {/* <img src={a2} alt="payment" /> */}
                        </li>
                        <li className={styles.PaymentItem}>
                            <img src={"https://res.cloudinary.com/dhpukux5x/image/upload/v1702065526/ApplePay_mym8qe.png"} alt="payment" />
                            {/* <img src={a3} alt="payment" /> */}
                        </li>
                        <li className={styles.PaymentItem}>
                            <img src={"https://res.cloudinary.com/dhpukux5x/image/upload/v1702065528/DinersClub_btcayq.png"} alt="payment" />
                            {/* <img src={a4} alt="payment" /> */}
                        </li>
                        <li className={styles.PaymentItem}>
                            <img src={"https://res.cloudinary.com/dhpukux5x/image/upload/v1702065528/GooglePay_wxzrxy.png"} alt="payment" />
                            {/* <img src={a5} alt="payment" /> */}
                        </li>
                        <li className={styles.PaymentItem}>
                            <img src={"https://res.cloudinary.com/dhpukux5x/image/upload/v1702065531/Mastercard_dzwe1v.png"} alt="payment" />
                            {/* <img src={a6} alt="payment" /> */}
                        </li>
                        <li className={styles.PaymentItem}>
                            <img src={"https://res.cloudinary.com/dhpukux5x/image/upload/v1702065533/PayPal_cwgedm.png"} alt="payment" />
                            {/* <img src={a7} alt="payment" /> */}
                        </li>
                        <li className={styles.PaymentItem}>
                            <img src={"https://res.cloudinary.com/dhpukux5x/image/upload/v1702065535/ShopPay_vsiobc.png"} alt="payment" />
                            {/* <img src={a8} alt="payment" /> */}
                        </li>
                        <li className={styles.PaymentItem}>
                            <img src={"https://res.cloudinary.com/dhpukux5x/image/upload/v1702065536/Stripe_mcxhk9.png"} alt="payment" />
                            {/* <img src={a9} alt="payment" /> */}
                        </li>
                        <li className={styles.PaymentItem}>
                            <img src={"https://res.cloudinary.com/dhpukux5x/image/upload/v1702065536/Visa_pv91cl.png"} alt="payment" />
                            {/* <img src={a10} alt="payment" /> */}
                        </li>
                    </ul>
                </Container>
            </section>
        </>
    );
}

export default DeliveryAndPayment;