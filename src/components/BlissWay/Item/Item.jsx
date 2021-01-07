import React from "react";
import PropTypes from "prop-types";
import styles from "./Item.module.css";

function Item({ item }) {
  return (
    <div className={styles.img__wrap}>
      <img className={styles.item__img} src={item.imgSrc} alt="" />
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.object,
};

export default Item;
