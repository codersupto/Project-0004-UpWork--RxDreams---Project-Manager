import React from "react";
import mobileFastLanesUpShape from "../../assets/images/FastLanes/shapes/mobile-fast-lanes-up-shape.svg";
import lgFastLanesUpShape from "../../assets/images/FastLanes/shapes/lg-fast-lanes-up-shape.svg";
import fastLanesImg from "../../assets/images/FastLanes/fast-lanes-img.png";
import mobileFastLanesImgUpShape from "../../assets/images/FastLanes/shapes/mobile-fast-lanes-img-up-shape.svg";
import lgFastLanesImgUpShape from "../../assets/images/FastLanes/shapes/lg-fast-lanes-img-up-shape.svg";
import styles from "./FastLanes.module.css";
import useInterSectionObserver from "../../utils/useInterSectionObserver";

const FastLanes = React.forwardRef((props, secRef) => {
  const [ref, inView] = useInterSectionObserver();
  return (
    <section ref={secRef} className={styles.section}>
      <div ref={ref} className={styles.up__shape__wrap}>
        <img
          className={styles.mobile__shape}
          src={inView ? mobileFastLanesUpShape : ""}
          alt=""
        />
        <img
          className={styles.lg__shape}
          src={inView ? lgFastLanesUpShape : ""}
          alt=""
        />
      </div>
      <div className={styles.wrap}>
        <div className={styles.text__wrap}>
          <h1 className={styles.text__heading}>Fast lanes,</h1>
          <p className={styles.text__paragraph}>
            implemented within months on any highway, anywhere
          </p>
        </div>
        <div className={styles.img__wrap}>
          <img className={styles.img} src={inView ? fastLanesImg : ""} alt="" />
          <img
            className={styles.mobile__img__up__shape}
            src={inView ? mobileFastLanesImgUpShape : ""}
            alt=""
          />
          <img
            className={styles.lg__img__up__shape}
            src={inView ? lgFastLanesImgUpShape : ""}
            alt=""
          />
        </div>
      </div>
    </section>
  );
});

export default FastLanes;
