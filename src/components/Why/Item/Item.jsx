import React from "react";
import styles from "./Item.module.css";

import PropTypes from "prop-types";

function Item({ item }) {
  return (
    <div className={styles.item}>
      <img className={styles.icon} src={item.iconSrc} alt={item.heading} />
      <div className={styles.text__wrap}>
        <h3 className={styles.heading}>{item.heading}</h3>
        <p className={styles.paragraph}>{item.paragraph}</p>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.object,
};

export default Item;
