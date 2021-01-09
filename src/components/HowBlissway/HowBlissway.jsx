import React from "react";
import mobileBottomShape from "../../assets/images/HowBlissway/shapes/mobile-bottom-shape.svg";
import lgBottomShape from "../../assets/images/HowBlissway/shapes/lg-bottom-shape.svg";
import howBlisswayIntroVideo from "../../assets/videos/the-way-intro.mp4";
import howBlisswayIntroVideoBanner from "../../assets/images/HowBlissway/intro-video-banner.png";
import playButtonIcon from "../../assets/images/HowBlissway/shapes/play-button-icon.svg";
import lgPopUpShape from "../../assets/images/HowBlissway/shapes/lg-video-popup-shape.svg";
import closeButtonIcon from "../../assets/images/HowBlissway/shapes/close-button-icon.svg";
import styles from "./HowBlissway.module.css";
import useInterSectionObserver from "../../utils/useInterSectionObserver";

const HowBlissway = () => {
  const [ref, inView] = useInterSectionObserver();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [state] = React.useState({
    title: "How BLISSWAY",
    subTitle: "can solve it",
  });

  const videoRef = React.useRef({ current: null });
  const handlePlayVideo = () => {
    videoRef.current.play().then(() => {
      setIsPlaying(true);
    });
  };
  const handleCloseVideo = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.video__wrap}>
        <button
          onClick={handlePlayVideo}
          className={styles.video__play__button}
        >
          <img
            className={styles.video__play__button__icon}
            src={inView ? playButtonIcon : ""}
            alt=""
          />
        </button>
        <div
          className={`${styles.video__inner__wrap} ${
            isPlaying ? styles.video__inner_wrap__open : ""
          }`}
        >
          <div className="container relative h-full flex justify-center items-center">
            <img
              className={styles.lg__popup__shape}
              src={inView ? lgPopUpShape : ""}
              alt=""
            />
            <div className={styles.video__inner_wrap__with__close_button}>
              <div className={styles.section__text__wrap}>
                <h1>{state.title}</h1>
                <p>{state.subTitle}</p>
              </div>
              <button
                onClick={handleCloseVideo}
                className={styles.video__close__button}
              >
                <img
                  className={styles.video__close__button__icon}
                  src={inView ? closeButtonIcon : ""}
                  alt=""
                />
              </button>
              <video
                poster={howBlisswayIntroVideoBanner}
                ref={videoRef}
                className={styles.intro__video}
                src={inView ? howBlisswayIntroVideo : ""}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom__shape__wrap}>
        <img
          className={styles.mobile__bottom__shape}
          src={inView ? mobileBottomShape : ""}
          alt=""
        />
        <img
          className={styles.lg__bottom__shape}
          src={inView ? lgBottomShape : ""}
          alt=""
        />
      </div>
    </section>
  );
};

export default HowBlissway;
