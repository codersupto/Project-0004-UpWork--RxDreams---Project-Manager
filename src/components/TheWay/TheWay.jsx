import React from "react";
import mobileUpShape from "../../assets/images/TheWay/shapes/mobile-up-shape.svg";
import lgUpShape from "../../assets/images/TheWay/shapes/lg-up-shape.svg";
import mobileBottomShape from "../../assets/images/TheWay/shapes/mobile-bottom-shape.svg";
import lgBottomShape from "../../assets/images/TheWay/shapes/lg-bottom-shape.svg";
import theWayIntroVideo from "../../assets/videos/TheWay/the-way-intro.mp4";
import theWayIntroVideoBanner from "../../assets/images/TheWay/intro-video-banner.png";
import playButtonIcon from "../../assets/images/TheWay/shapes/play-button-icon.svg";
import lgPopUpShape from "../../assets/images/TheWay/shapes/lg-video-popup-shape.svg";
import closeButtonIcon from "../../assets/images/TheWay/shapes/close-button-icon.svg";
import styles from "./TheWay.module.css";

function TheWay(props) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [state] = React.useState({
    title: "The Why",
    subTitle: "of traffic congestion",
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
    <section className={styles.section}>
      <div className={styles.up__shape__wrap}>
        <img className={styles.mobile__up__shape} src={mobileUpShape} alt="" />
        <img className={styles.lg__up__shape} src={lgUpShape} alt="" />
      </div>
      <div className={styles.video__wrap}>
        <button
          onClick={handlePlayVideo}
          className={styles.video__play__button}
        >
          <img
            className={styles.video__play__button__icon}
            src={playButtonIcon}
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
              src={lgPopUpShape}
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
                  src={closeButtonIcon}
                  alt=""
                />
              </button>
              <video
                poster={theWayIntroVideoBanner}
                ref={videoRef}
                className={styles.intro__video}
                src={theWayIntroVideo}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom__shape__wrap}>
        <img
          className={styles.mobile__bottom__shape}
          src={mobileBottomShape}
          alt=""
        />
        <img className={styles.lg__bottom__shape} src={lgBottomShape} alt="" />
      </div>
    </section>
  );
}

export default TheWay;
