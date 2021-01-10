import React from "react";
import bannerText from "../../assets/images/Banner/shapes/mobile-banner-text.svg";
import mobileBannerSolvingText from "../../assets/images/Banner/shapes/mobile-banner-solving-text.svg";
import desktopBannerSolvingText from "../../assets/images/Banner/shapes/desktop-banner-solving-text.svg";
import scrollDown from "../../assets/images/Banner/shapes/scroll-down.svg";
import useInterSectionObserver from "../../utils/useInterSectionObserver";
import styles from "./Banner.module.css";

const Banner = (props) => {
  const [ref, inView] = useInterSectionObserver();
  const handleScrollDown = () => {
    props.scrollByRef.current.scrollIntoView();
  };

  return (
    <section className={styles.banner}>
      <img
        ref={ref}
        src={inView ? bannerText : ""}
        alt=""
        className={styles.banner__text}
      />
      <img
        ref={ref}
        src={inView ? mobileBannerSolvingText : ""}
        alt=""
        className={styles.mobile__banner__solving__text}
      />
      <img
        ref={ref}
        src={inView ? desktopBannerSolvingText : ""}
        alt=""
        className={styles.desktop__banner__solving__text}
      />
      <p className={styles.normal__text}>Highway Congestion</p>
      <div className={styles.scroll__down__sec}>
        <button className={styles.scroll__down__btn} onClick={handleScrollDown}>
          <img
            ref={ref}
            src={inView ? scrollDown : ""}
            className="animate-bounce"
            alt="scroll down"
          />
        </button>
        <span className={styles.scroll__down__icon__text_first}>
          scroll down
        </span>
        <span className={styles.scroll__down__icon__text_last}>
          to learn more
        </span>
      </div>
    </section>
  );
};

export default Banner;
