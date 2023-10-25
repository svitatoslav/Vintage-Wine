import styles from './Footer.module.scss';
import Logo from "./icon/footer-logo.svg?react";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterInfo}>
        <div className={styles.FooterLogo}>
          <Logo />
        </div>

      </div>
    </footer>
  );
};

export default Footer;
