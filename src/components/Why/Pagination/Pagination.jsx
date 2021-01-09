import React from "react";
import PropTypes from "prop-types";
import styles from "./Pagination.module.css";

const Pagination = ({ items, selectedItem, onSelect }) => (
  <div className={styles.pagination}>
    {items.map((item) => (
      <button
        onClick={() => onSelect(item)}
        key={item.id}
        className={`${styles.button} ${
          item.id === selectedItem.id ? styles.active : ""
        }`}
      >
        {item.id}
      </button>
    ))}
  </div>
);

Pagination.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  selectedItem: PropTypes.object,
  onSelect: PropTypes.func,
};

export default Pagination;
