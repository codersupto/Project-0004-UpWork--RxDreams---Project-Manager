import React from "react";
import styles from "./Banner.module.css";
import bannerText from "./../../assets/images/svgs/mobile-banner-text.svg";
import bannerStylishText from "../../assets/images/svgs/mobile-banner-stylish-text.svg";
import scrollDown from "../../assets/images/svgs/scroll-down.svg";

class Banner extends React.Component {
  handleScrollDown = () => {
    this.props.scrollByRef.current.scrollIntoView();
  };

  render() {
    return (
      <section className={styles.banner}>
        <img src={bannerText} alt="" className={styles.banner__text} />
        <img
          src={bannerStylishText}
          alt=""
          className={styles.banner__stylish__text}
        />
        <p className={styles.normal__text}>Highway Congestion</p>
        <div className={styles.scroll__down__sec}>
          <button
            className={styles.scroll__down__btn}
            onClick={this.handleScrollDown}
          >
            <img src={scrollDown} alt="Scroll Down" />
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
  }
}

export default Banner;
