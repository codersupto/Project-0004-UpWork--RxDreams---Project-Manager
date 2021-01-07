import React, { Component } from "react";
import mobileShapeBottomRight from "../../assets/images/why-section/shapes/mobile-shape-bottom-right.svg";
import lgShapeBottomRight from "../../assets/images/why-section/shapes/lg-shape-bottom-right.svg";
import icon1 from "./../../assets/images/why-section/icons/icon-1.svg";
import icon2 from "./../../assets/images/why-section/icons/icon-2.svg";
import icon3 from "./../../assets/images/why-section/icons/icon-3.svg";
import icon4 from "./../../assets/images/why-section/icons/icon-4.svg";
import Item from "./Item/Item";
import Pagination from "./Pagination/Pagination";
import styles from "./Why.module.css";

class Why extends Component {
  state = {
    selectedItem: {
      id: 1,
      heading: "Reduce congestion and expand road capacity",
      paragraph: "without pouring new concrete",
      iconSrc: icon1,
    },
    items: [
      {
        id: 1,
        heading: "Reduce congestion and expand road capacity",
        paragraph: "without pouring new concrete",
        iconSrc: icon1,
      },
      {
        id: 2,
        heading: "Decrease travel times and increase trip reliability",
        paragraph: "even for regular lanes",
        iconSrc: icon2,
      },
      {
        id: 3,
        heading: "tripling the travel options for drivers",
        paragraph:
          "from “roll the dice” to (1) “roll the dice” or (2) “pay for a fast, reliable commute” or (3) “carpool for a fast, reliable commute”",
        iconSrc: icon3,
      },
      {
        id: 4,
        heading: "and as byproduct,",
        paragraph: "vast monetization of road assets",
        iconSrc: icon4,
      },
    ],
  };

  onHandleSelect = (item) => {
    this.setState({ selectedItem: item });
  };

  render() {
    const { items, selectedItem } = this.state;
    return (
      <section className={`${styles.section}`}>
        <div className={styles.text}>
          <h1 className={styles.heading}>
            Why every city <br /> should deploy fast lanes*
          </h1>
          <p className={styles.paragraph}>
            *a.k.a. express lanes, HOT lanes, or managed lanes
          </p>
        </div>
        <div className={styles.i__and_p__wrap}>
          <Item item={selectedItem} />
          <Pagination
            items={items}
            selectedItem={selectedItem}
            onSelect={this.onHandleSelect}
          />
        </div>
        <img
          className={styles.mobile__shape__bottom__right}
          src={mobileShapeBottomRight}
          alt=""
        />
        <img
          className={styles.lg__shape__bottom__right}
          src={lgShapeBottomRight}
          alt=""
        />
      </section>
    );
  }
}

export default Why;
