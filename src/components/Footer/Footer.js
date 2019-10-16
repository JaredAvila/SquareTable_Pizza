import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as styles from "./Footer.module.css";

import Logo from "../Logo/Logo";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";

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
            <FontAwesomeIcon className={styles.Icon} icon={faFacebook} />
            <FontAwesomeIcon className={styles.Icon} icon={faTwitter} />
            <FontAwesomeIcon className={styles.Icon} icon={faYoutube} />
          </div>
        </div>
        <div className={styles.Sub}>
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
      </div>
      <div className={styles.AppsContainer}>
        <hr />
        <div className={styles.Apps}>
          <ul>
            <li>Pivacy Policy |</li>
            <li>Terms Of Use |</li>
            <li>Tracking Tags</li>
          </ul>
          <div>
            <h5>GET OUR MOBILE APP:</h5>
            <FontAwesomeIcon className={styles.Icon} icon={faApple} />
            <FontAwesomeIcon className={styles.Icon} icon={faAndroid} />
          </div>
        </div>

        <hr />
      </div>

      <div></div>
    </footer>
  );
};

export default Footer;
