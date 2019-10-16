import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as styles from "./Footer.module.css";

import Logo from "../Logo/Logo";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterTop}>
        <div className={styles.LogoContainer}>
          <div className={styles.Logo}>
            <Logo />
            <h1>CityLine Pizza</h1>
          </div>
          <div className={styles.SocialLinks}>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faYoutube} />
          </div>
        </div>
        <div className={styles.Menu}>
          <h4>Menu</h4>
          <ul>
            <li>Specialty Pizza</li>
            <li>Create Your Own Pizza</li>
            <li>Sides</li>
            <li>Dipping Sauces</li>
          </ul>
        </div>
        <div className={styles.Account}>
          <h4>My Account</h4>
          <ul>
            <li>Create Account</li>
            <li>Sign In</li>
          </ul>
        </div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
