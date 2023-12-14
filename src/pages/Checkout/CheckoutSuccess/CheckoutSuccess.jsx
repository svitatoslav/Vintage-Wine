import Container from "../../../components/Container/Container";
import styles from "./CheckoutSuccess.module.scss";

const CheckoutSuccess = () => {
  return (
    <Container>
      <div className={styles.ThanksBox}>
        <img
          className={styles.Image}
          src="https://res.cloudinary.com/dhpukux5x/image/upload/v1698006683/z7j1cej1td8dzuobgxke.png"
          alt="after submite"
        />
        <div className={styles.ThanksText}>
          <p className={styles.MainText}>Thank you for your order!</p>
          <p className={styles.SubText}>
            All information about the order will be in your mail
          </p>
        </div>
      </div>
    </Container>
  );
};

export default CheckoutSuccess;
