import React from "react";
import styles from "./Banner.module.css";
import bannerText from "./../../assets/images/svgs/mobile-banner-text.svg";
import mobileBannerSolvingText from "../../assets/images/svgs/mobile-banner-solving-text.svg";
import desktopBannerSolvingText from "../../assets/images/svgs/desktop-banner-solving-text.svg";
import scrollDown from "../../assets/images/svgs/scroll-down.svg";
import useInterSectionObserver from "../../utils/useInterSectionObserver";

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
            alt="Scroll Down"
          />
        </button>
        <span className={styles.scroll__down__icon__text_first}>
          Scroll Down
        </span>
        <span className={styles.scroll__down__icon__text_last}>
          To learn more
        </span>
      </div>
    </section>
  );
};

export default Banner;
