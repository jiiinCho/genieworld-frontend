import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./backIcon.module.css";

const BackIcon = () => {
  const navigate = useNavigate();
  const onButtonClick = () => {
    navigate("/genieworld");
  };
  return (
    <button className={styles.container} onClick={onButtonClick}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={styles.back}
          d="M13.7958 23.3251L12.6066 24.5963C12.1031 25.1346 11.2889 25.1346 10.7908 24.5963L0.377637 13.4706C-0.125879 12.9323 -0.125879 12.062 0.377637 11.5294L10.7854 0.403686C11.2889 -0.134564 12.1031 -0.134564 12.6013 0.403686L13.7904 1.67487C14.2993 2.21885 14.2886 3.10639 13.769 3.63891L7.31972 10.2067L22.7144 10.2067C23.4268 10.2067 24 10.8194 24 11.581L24 13.4133C24 14.1749 23.4268 14.7876 22.7144 14.7876L7.31972 14.7876L13.7744 21.3611C14.2993 21.8936 14.31 22.7811 13.7958 23.3251V23.3251Z"
          fill="#2A2F35"
        />
      </svg>
    </button>
  );
};

export default BackIcon;
