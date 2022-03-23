import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import TriangleIcon from "../../components/icons/triangleIcon";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.header}>
            <h4 className={styles.heading}>Genieworld</h4>
            <span className={styles.number}>/ 01</span>
          </div>
          <p className={styles.content}>
            This demo project is a remake of Korean social network service&#160;
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.cyworld.com/"
              className={styles.link}
            >
              Cyworld
            </a>
            &#160;launched in 1999. Genieworld is a web-based interaction game
            to customize virtual space. The aim is to turn this project into a
            multiplayer interaction.&#160;
            <span className={styles.strong}>Stay tuned!</span>
          </p>
        </section>

        <section className={styles.section}>
          <div className={styles.header}>
            <h4 className={styles.heading}>Credits</h4>
            <span className={styles.number}>/ 02</span>
          </div>
          <p className={styles.content}>
            This web application is developed by Kyung-jin Cho
            (&copy;jiiin.cho.dev). All artworks created by Kyung-jin Cho
            (&copy;jiiin.cho.dev). Please note that character design is based on
            Tiny Tower. Background music is created by Youngill Kim.
          </p>
          <p className={styles.content}>
            <span className={styles.strong}>
              This is demo-use-only. &copy; All rights reserved 2022.
            </span>
          </p>
        </section>

        <section className={styles.section}>
          <div className={styles.header}>
            <h4 className={styles.heading}>Tech stack</h4>
            <span className={styles.number}>/ 03</span>
          </div>
          <article className={styles.spec}>
            <p className={styles.specTitle}>Frontend</p>
            <ul className={styles.specList}>
              <li className={styles.specItem}>
                <p className={styles.specDescription}>
                  <span className={styles.triangle}>
                    <TriangleIcon />
                  </span>
                  Custom Javascript bundler (Webpack 5) set up with Javascript
                  transpiler (Babel) for learning purposes.
                </p>
              </li>

              <li className={styles.specItem}>
                <p className={styles.specDescription}>
                  <span className={styles.triangle}>
                    <TriangleIcon />
                  </span>
                  Component Driven User Interfaces library &mdash; React
                </p>
              </li>

              <li className={styles.specItem}>
                <p className={styles.specDescription}>
                  <span className={styles.triangle}>
                    <TriangleIcon />
                  </span>
                  Type secured development and minimize compile errors &mdash;
                  TypeScript
                </p>
              </li>

              <li className={styles.specItem}>
                <p className={styles.specDescription}>
                  <span className={styles.triangle}>
                    <TriangleIcon />
                  </span>
                  CSS Modules and Autoprefixer &mdash; PostCSS
                </p>
              </li>
            </ul>
          </article>
          <article className={styles.spec}>
            <p className={styles.specTitle}>Backend</p>
            <ul className={styles.specList}>
              <li className={styles.specItem}>
                <p className={styles.specDescription}>
                  <span className={styles.triangle}>
                    <TriangleIcon />
                  </span>
                  User Authentication using JsonWebToken
                </p>
              </li>

              <li className={styles.specItem}>
                <p className={styles.specDescription}>
                  <span className={styles.triangle}>
                    <TriangleIcon />
                  </span>
                  Data stored in cloud via MongoDB Atlas
                </p>
              </li>

              <li className={styles.specItem}>
                <p className={styles.specDescription}>
                  <span className={styles.triangle}>
                    <TriangleIcon />
                  </span>
                  Bcrypt method for salt to safely hash and store passwords
                </p>
              </li>

              <li className={styles.specItem}>
                <p className={styles.specDescription}>
                  <span className={styles.triangle}>
                    <TriangleIcon />
                  </span>
                  Node.js server for handling and routing HTTP requests
                </p>
              </li>
            </ul>
          </article>
        </section>
        <h3 className={styles.finish}>Get in touch</h3>
      </main>
      <Footer />
    </div>
  );
};

export default About;
