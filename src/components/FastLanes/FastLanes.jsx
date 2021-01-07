import React from "react";
import mobileFastLanes from "./../../assets/images/svgs/mobile-fast-lanes-up-shape.svg";
import fastLanesImg from "./../../assets/images/fast-lanes-img.png";
import mobileFastLanesImgUpShape from "./../../assets/images/svgs/mobile-fast-lanes-img-up-shape.svg";
import styles from "./FastLanes.module.css";

const FastLanes = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className={styles.fast__lanes}>
      <div className={styles.up__shape}>
        <img className={styles.mobile__shape} src={mobileFastLanes} alt="" />
        <img className={styles.desktop__shape} src="" alt="" />
      </div>
      <div className={styles.wrap}>
        <div className={styles.text__wrap}>
          <h1 className={styles.text__heading}>Fast lanes,</h1>
          <p className={styles.text__paragraph}>
            implemented within months on any highway, anywhere
          </p>
        </div>
        <div className={styles.img__wrap}>
          <img className={styles.img} src={fastLanesImg} alt="" />
          <img
            className={styles.mobile__img__up__shape}
            src={mobileFastLanesImgUpShape}
            alt=""
          />
        </div>
      </div>
    </section>
  );
});

export default FastLanes;
