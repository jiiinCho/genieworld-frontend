import React from "react";
import styles from "./footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <p className={styles.copyright}>jin.cho.dev@gmail.com</p>
    <div className={styles.links}>
      <a href="#" rel="noreferrer" target="_blank" className={styles.link}>
        CV
      </a>
      <a href="#" rel="noreferrer" target="_blank" className={styles.link}>
        Linkedin
      </a>
      <a href="#" rel="noreferrer" target="_blank" className={styles.link}>
        Github
      </a>
    </div>
  </footer>
);

export default Footer;
