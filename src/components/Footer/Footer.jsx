import React from "react";
import logo from "../../assets/images/Footer/logo/logo.svg";
import styles from "./Footer.module.css";
import useInterSectionObserver from "../../utils/useInterSectionObserver";

const Footer = () => {
  const [ref, inView] = useInterSectionObserver();
  return (
    <footer className={styles.section}>
      <div className={styles.email__sec}>
        <h1>Let’s talk</h1>
        <p>hello@blissway.com</p>
      </div>
      <div className={styles.logo__sec}>
        <img
          ref={ref}
          className={styles.logo__img}
          src={inView ? logo : ""}
          alt=""
        />
        <h1 className={styles.address}>Redondo Beach, CA Denver, CO</h1>
      </div>
      <div className={styles.copyright__sec}>
        <p>&copy;2020 BLISSWAY Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
