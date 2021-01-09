import React from "react";
import PropTypes from "prop-types";
import styles from "./Item.module.css";

const Item = ({ item, sectionInView }) => (
  <div className={styles.img__wrap}>
    <img
      className={styles.item__img}
      src={sectionInView ? item.imgSrc : ""}
      alt=""
    />
  </div>
);

Item.propTypes = {
  item: PropTypes.object,
  sectionInView: PropTypes.bool,
};

export default Item;
