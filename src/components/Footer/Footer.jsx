import "./Footer.scss";
import Logo from "./icon/logo.svg?react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__info">
        <div className="footer__info-logo">
          <Logo />
          <span className="logo-text">Vintage Wine</span>
        </div>

        <div></div>

      </div>
      <div className="footer__copywriting">
        <p className="footer-info__copywriting--text">
          All rights reserved@2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
