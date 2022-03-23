import React from "react";
import styles from "./footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <p className={styles.copyright}>jiiin.cho.dev@gmail.com</p>
    <div className={styles.links}>
      <a
        href="https://firebasestorage.googleapis.com/v0/b/business-card-maker-56361.appspot.com/o/JinCho_CV_update.pdf?alt=media&token=cfda9dff-22a1-4cef-a047-3809a7ef8a49"
        rel="noreferrer"
        target="_blank"
        className={styles.link}
      >
        CV
      </a>
      <a
        href="https://www.linkedin.com/in/jin-cho-618690118/"
        rel="noreferrer"
        target="_blank"
        className={styles.link}
      >
        Linkedin
      </a>
      <a
        href="https://github.com/jiiinCho/genieworld-frontend"
        rel="noreferrer"
        target="_blank"
        className={styles.link}
      >
        Github
      </a>
    </div>
  </footer>
);

export default Footer;
