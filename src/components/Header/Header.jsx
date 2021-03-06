import React from "react";
import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <a href="/" className={`${styles.contact__btn}`}>
      <span>Contact</span>
    </a>
  </header>
);

export default Header;
