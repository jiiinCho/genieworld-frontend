import React from "react";
import styles from "./speak.module.css";
type SpeakProp = {
  message: string;
};
const Speak = ({ message }: SpeakProp) => (
  <div className={styles.container}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 36">
      <g id="e02e033e-87b3-492b-8363-55c471026c34" data-name="speak bubble">
        <g id="fb96d528-6cc5-4a81-9235-f453b2d2a50d" data-name="frame">
          <rect x="23" y="1" width="1" height="1" fill="#0c0c0c" />
          <polygon
            points="26.08 1 27.13 1 28.17 1 29.21 1 30.25 1 31.29 1 32.33 1 33.38 1 34.42 1 35.46 1 36.5 1 37.54 1 51.42 1 52.46 1 53.5 1 54.54 1 55.58 1 56.63 1 57.67 1 58.71 1 59.75 1 60.79 1 61.83 1 61.83 0 60.79 0 59.75 0 58.71 0 57.67 0 56.63 0 55.58 0 54.54 0 53.5 0 52.46 0 51.42 0 37.54 0 36.5 0 35.46 0 34.42 0 33.38 0 32.33 0 31.29 0 30.25 0 29.21 0 28.17 0 27.13 0 26.08 0 25.04 0 24 0 24 1 25.04 1 26.08 1"
            fill="#0c0c0c"
          />
          <rect x="61.83" y="1" width="1" height="1" fill="#0c0c0c" />
          <polygon
            points="62.83 2 62.83 3 62.83 4 62.83 5 62.83 11 62.83 12 62.83 13 63.83 13 63.83 12 63.83 11 63.83 5 63.83 4 63.83 3 63.83 2 62.83 2"
            fill="#0c0c0c"
          />
          <rect x="61.83" y="13" width="1" height="1" fill="#0c0c0c" />
          <polygon
            points="59.74 14 58.69 14 57.64 14 56.59 14 55.55 14 54.5 14 53.45 14 52.41 14 51.36 14 37.48 14 36.43 14 35.38 14 34.33 14 33.29 14 32.24 14 31.19 14 30.14 14 29.09 14 28.05 14 27 14 27 15 28.05 15 29.09 15 30.14 15 31.19 15 32.24 15 33.29 15 34.33 15 35.38 15 36.43 15 37.48 15 51.36 15 52.41 15 53.45 15 54.5 15 55.55 15 56.59 15 57.64 15 58.69 15 59.74 15 60.79 15 61.83 15 61.83 14 60.79 14 59.74 14"
            fill="#0c0c0c"
          />
          <rect x="26" y="15" width="1" height="1" fill="#0c0c0c" />
          <rect x="25" y="16" width="1" height="1" fill="#0c0c0c" />
          <polygon
            points="25 14 24 14 24 15 24 16 25 16 25 15 25 14"
            fill="#0c0c0c"
          />
          <rect x="23" y="13" width="1" height="1" fill="#0c0c0c" />
          <polygon
            points="23 11 23 5 23 4 23 3 23 2 22 2 22 3 22 4 22 5 22 11 22 12 22 13 23 13 23 12 23 11"
            fill="#0c0c0c"
          />
        </g>
        <polygon
          id="b6184b9e-84af-4ac3-b9f3-4c87ca8ee5fe"
          data-name="background"
          points="61.83 2 61.83 1 60.83 1 59.83 1 58.83 1 57.83 1 56.83 1 55.83 1 54.83 1 53.83 1 52.83 1 51.83 1 50.83 1 38 1 37 1 36 1 35 1 34 1 33 1 32 1 31 1 30 1 29 1 28 1 27 1 26 1 25 1 24 1 24 2 23 2 23 3 23 4 23 5 23 11 23 12 23 13 24 13 24 14 25 14 25 15 25 16 26 16 26 15 27 15 27 14 28 14 29 14 30 14 31 14 32 14 33 14 34 14 35 14 36 14 37 14 38 14 50.83 14 51.83 14 52.83 14 53.83 14 54.83 14 55.83 14 56.83 14 57.83 14 58.83 14 59.83 14 60.83 14 61.83 14 61.83 13 62.83 13 62.83 12 62.83 11 62.83 5 62.83 4 62.83 3 62.83 2 61.83 2"
          fill="#f7f0f0"
        />
      </g>
    </svg>

    <p className={styles.message}>{message}</p>
  </div>
);

export default Speak;
