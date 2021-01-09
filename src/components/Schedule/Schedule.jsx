import React from "react";
import submitButtonArrow from "../../assets/images/Schedule/shapes/submit-button-arrow.svg";
import styles from "./Schedule.module.css";

const Schedule = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className={styles.section}>
      <div className={styles.inner__wrap}>
        <h2 className={styles.heading}>
          Schedule a{" "}
          <span className={styles.color__heading}>45-minute demo:</span>
        </h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="email" placeholder={"Your email here"} />
          <button type={"submit"}>
            Submit{" "}
            <img className={styles.arrow} src={submitButtonArrow} alt="" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Schedule;
