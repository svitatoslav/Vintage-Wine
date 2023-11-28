import styles from "./Footer.module.scss";
import Logo from "./icon/footer-logo.svg?react";
import Location from "./icon/location.svg?react";
import In from "./icon/in.svg?react";
import Twitter from "./icon/twitter.svg?react";
import Facebook from "./icon/facebook.svg?react";
import SearchFooter from "./icon/search.svg?react";
import { Link } from "react-router-dom";
import Container from "./../Container/Container";
import Navigation from "../Navigation/Navigation";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <Container>
        <div className={styles.FooterInfo}>
          <div className={styles.FooterContainer}>
            <div className={styles.FooterLogo}>
              <Logo className={styles.FooterImage} />
            </div>

            <div className={styles.MenuLocation}>
              <div className={styles.FooterMenu}>
                    <Navigation isFootNav />
              </div>

              <div className={styles.Location}>
                <h2 className={styles.LocationTitle}>Our shops</h2>
                <div className={styles.LocationAddress}>
                  <div className={styles.AddressInfo}>
                    <Location />
                    <p className={styles.AddressText}>
                      Ukraine, 67770, Odesa region, Bilhorod-Dnistrovsky
                      district, village Shabo, str. Swiss 10
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
          </div>

          <div className={styles.SearchCopywriting}>
            <div className={styles.SearchNetwork}>
              <div className={styles.Search}>
                <h2 className={styles.SearchTitle}>Search</h2>

                <div>
                  <label className={styles.SearchLabel}>
                    <input
                      type="text"
                      name="find a product"
                      placeholder="find a product"
                      className={styles.SearchInput}
                    />
                    <SearchFooter className={styles.SearchLogo} />
                  
                  </label>
                </div>
              </div>

              <div className={styles.Network}>
                <ul className={styles.NetworkNav}>
                  <li className={styles.NetworkItem}>
                    <Link to="/linkedIn" className={styles.NetworkLink}>
                      <In className={styles.NetworkLogo} />
                    </Link>
                  </li>
                  <li className={styles.NetworkItem}>
                    <Link to="/twitter" className={styles.NetworkLink}>
                      <Twitter className={styles.NetworkLogo} />
                    </Link>
                  </li>
                  <li className={styles.NetworkItem}>
                    <Link to="/facebook" className={styles.NetworkLink}>
                      <Facebook className={styles.NetworkLogo} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.Copywriting}>
          <p className={styles.CopywritingText}>All rights reserved@2023</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
