import styles from "./Footer.module.scss";
import Logo from "./icon/footer-logo.svg?react";
import Location from "./icon/location.svg?react";
import In from "./icon/in.svg?react";
import Twitter from "./icon/twitter.svg?react";
import Facebook from "./icon/facebook.svg?react";
import SearchFooter from "./icon/search.svg?react"
import { Link } from "react-router-dom";
import cn from "classnames";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterInfo}>
        <div className={styles.FooterLogo}>
        <Logo className={styles.FooterImage} />
        </div>

        <div className={styles.MenuLocation}>

        <div className={styles.FooterMenu}>
          <ul className={styles.FooterNav}>
            <li className={styles.FooterItem}>
              <Link to="/home" className={styles.FooterLink}>Home</Link>
            </li>
            <li className={styles.FooterItem}>
              <Link to="/about_as" className={styles.FooterLink}>About us</Link>
            </li>
            <li className={styles.FooterItem}>
              <Link to="/our_collections" className={styles.FooterLink}>Our collections</Link>
            </li>
            <li className={styles.FooterItem}>
              <Link to="/shop" className={styles.FooterLink}>Shop</Link>
            </li>
            <li className={styles.FooterItem}>
              <Link to="/news" className={styles.FooterLink}>News</Link>
            </li>
            <li className={styles.FooterItem}>
              <Link to="/delivery_and_payment" className={styles.FooterLink}>Delivery and payment</Link>
            </li>
            <li className={styles.FooterItem}>
              <Link to="/contacts" className={styles.FooterLink}>Contacts</Link>
            </li>
          </ul>
        </div>

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
        
        <div className={styles.SearchCopywriting}>
        <div className={styles.SearchNetwork}>

          <div className={styles.Search}>
            <h2 className={styles.SearchTitle}>Search</h2>
            <label className={styles.SearchLabel}>
              <input type="text" name="find a product" placeholder="find a product" className={styles.SearchInput}/>
              <SearchFooter className={styles.SearchLogo}/>
            </label>

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
        <div className={styles.Copywriting}>
          <p className={styles.CopywritingText}>All rights reserved@2023</p>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
