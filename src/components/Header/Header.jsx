import React from "react";
import styles from "./Header.module.css";

function Header(props) {
  return (
    <header className={styles.header}>
      <a href="https://google.com" className={`${styles.contact__btn}`}>
        <span>Contact</span>
      </a>
    </header>
  );
}

export default Header;
