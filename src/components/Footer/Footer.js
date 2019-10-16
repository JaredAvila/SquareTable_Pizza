import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as styles from "./Footer.module.css";

import { NavLink } from "react-router-dom";
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
              <li>
                <NavLink to="/builder">Specialty Pizza</NavLink>
              </li>
              <li>
                <NavLink to="/builder">Create Your Own Pizza</NavLink>
              </li>
              <li>
                <NavLink to="/builder">Sides</NavLink>
              </li>
              <li>
                <NavLink to="/builder">Dipping Sauces</NavLink>
              </li>
            </ul>
          </div>
          <div className={styles.Account}>
            <h4>My Account</h4>
            <ul>
              <li>
                <NavLink to="/auth">Create Account</NavLink>
              </li>
              <li>
                <NavLink to="/auth">Sign In</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.AppsContainer}>
        <hr />
        <div className={styles.Apps}>
          <ul>
            <li>
              <a href="/">Pivacy Policy</a> |
            </li>
            <li>
              <a href="/">Terms Of Use</a> |
            </li>
            <li>
              <a href="/">Tracking Tags</a>
            </li>
          </ul>
          <div>
            <h5>GET OUR MOBILE APP:</h5>
            <FontAwesomeIcon className={styles.Icon} icon={faApple} />
            <FontAwesomeIcon className={styles.Icon} icon={faAndroid} />
          </div>
        </div>
        <hr />
      </div>

      <div className={styles.MySite}>
        <p>
          Copyright {new Date().getFullYear()} |{" "}
          <a className={styles.SiteLink} href="https://www.jaredavila.com">
            Jared Avila Designs
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
