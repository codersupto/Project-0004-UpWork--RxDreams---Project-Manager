import React from "react";
import styles from "./Item.module.css";

import PropTypes from "prop-types";

const Item = ({ item, sectionInView }) => (
  <div className={styles.item}>
    <img
      className={styles.icon}
      src={sectionInView ? item.iconSrc : ""}
      alt={item.heading}
    />
    <div className={styles.text__wrap}>
      <h3 className={styles.heading}>{item.heading}</h3>
      <p className={styles.paragraph}>{item.paragraph}</p>
    </div>
  </div>
);

Item.propTypes = {
  item: PropTypes.object,
  sectionInView: PropTypes.bool,
};

export default Item;
