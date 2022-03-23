import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import styles from "./main.module.css";

const Main = () => {
  const navigate = useNavigate();
  const onEnter = () => {
    navigate("/genieworld");
  };
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.statementMobile}>
          <h2 className={styles.strong}>Welcome to</h2>
          <h2 className={styles.strong}>Genieworld</h2>
        </div>
        <div className={styles.statement}>
          <h2 className={styles.strong}>Welcome to</h2>
          <h2 className={styles.strong}>Genieworld</h2>
        </div>
        <section className={styles.section}>
          <article className={styles.textContainer}>
            <div className={styles.primary}>&#43; &#43; &#43;</div>
            <p className={styles.text}>
              Genieworld invites you to create your personal island paradise on
              a deserted island brimming with possibility.
            </p>
          </article>
          <div className={styles.filter}>
            <article className={styles.videoContainer}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/u5Zvar-FTuM?autoplay=1&mute=1&rel=0&loop=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </article>
          </div>
        </section>
        <div className={styles.enterContainer}>
          <button className={styles.enter} onClick={onEnter}>
            Enter Genieworld
          </button>
        </div>
      </main>
      <p className={styles.copyright}>
        &copy; jin.cho.dev. All rights reserved.
      </p>
    </div>
  );
};

export default Main;
