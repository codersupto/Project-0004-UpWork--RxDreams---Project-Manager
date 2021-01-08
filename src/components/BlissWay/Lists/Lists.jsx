import React from "react";
import PropTypes from "prop-types";
import listItemLeftArrow from "../../../assets/images/BlissWay-section/shapes/list-item-left-arrow.svg";
import styles from "./Lists.module.css";

function Lists({ list }) {
  return (
    <div className={styles.list__wrap}>
      <h3 className={styles.heading}>{list.title}</h3>
      <ul className={styles.list__items}>
        {list.listItems.map((item, index) => (
          <li key={index} className={styles.list__item}>
            <img
              className={styles.list__item__left__arrow}
              src={listItemLeftArrow}
              alt=""
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

Lists.propTypes = {
  list: PropTypes.object,
};

export default Lists;
