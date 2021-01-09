import React from "react";
import listItemLeftArrow from "../../assets/images/NewTake/shapes/list-item-left-arrow.svg";
import lgLeftShape from "../../assets/images/NewTake/shapes/lg-left-shape.svg";
import bgImage from "../../assets/images/NewTake/bg-image.png";
import styles from "./NewTake.module.css";
import useInterSectionObserver from "../../utils/useInterSectionObserver";

const NewTake = () => {
  const [ref, inView] = useInterSectionObserver();
  const [content] = React.useState({
    title: "A new take on P3",
    listItemLeftArrow,
    listItems: [
      "Zero upfront cost",
      "Turnkey tolling as a service",
      "No contract required",
      "Revenue sharing – from day 1",
    ],
  });
  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.content__wrap}>
        <h2 className={styles.heading}>{content.title}</h2>
        <ul className={styles.list__items}>
          {content.listItems.map((item, index) => (
            <li className={styles.list__item} key={index}>
              <img
                className={styles.list__left__arrow}
                src={inView ? content.listItemLeftArrow : ""}
                alt=""
              />
              {item}
            </li>
          ))}
        </ul>
        <img
          className={styles.lg__left__shape}
          src={inView ? lgLeftShape : ""}
          alt=""
        />
      </div>
      <div className={styles.bg__img__wrap}>
        <img className={styles.bg__image} src={inView ? bgImage : ""} alt="" />
      </div>
    </section>
  );
};

export default NewTake;
