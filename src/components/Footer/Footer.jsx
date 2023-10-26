import styles from "./Footer.module.scss";
import Logo from "./icon/footer-logo.svg?react";
import Location from "./icon/location.svg?react";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterInfo}>
        {/* <div className={styles.FooterLogo}> */}
          <Logo className={styles.FooterLogo} />
        {/* </div> */}
        <div className={styles.Location}>
          <h2 className={styles.LocationTitle}>Our shops</h2>
          <div className={styles.LocationAddress}>
            <div className={styles.AddressInfo}>
              <Location />
              <p className={styles.AddressText}>
                Ukraine, 67770, Odesa region, Bilhorod-Dnistrovsky district,
                village Shabo, str. Swiss 10
              </p>
            </div>
            <div className={styles.AddressInfo}>
              <Location />
              <p className={styles.AddressText}>
                Ukraine, 65009, Odesa, French Boulevard, 66/2
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
