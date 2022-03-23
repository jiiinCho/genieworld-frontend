import React from "react";
import { SettingProps } from "../../interface";
import styles from "./settings.module.css";

const SettingIcon = ({ onEdit }: SettingProps) => {
  return (
    <button className={styles.container} onClick={onEdit}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 45 45"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={styles.gear}
          fill="currentColor"
          d="M35.4925 17.5033C35.6662 17.9572 35.5188 18.4692 35.1609 18.8018L32.8815 20.8814C32.9394 21.3195 32.971 21.7681 32.971 22.2221C32.971 22.676 32.9394 23.1247 32.8815 23.5627L35.1609 25.6424C35.5188 25.9749 35.6662 26.4869 35.4925 26.9408C35.2609 27.569 34.9819 28.176 34.666 28.7513L34.4186 29.1788C34.0712 29.7594 33.6817 30.3084 33.2553 30.8309C32.9394 31.2057 32.4288 31.3376 31.9656 31.1898L29.0335 30.2503C28.3282 30.794 27.5017 31.2479 26.7174 31.5963L26.0594 34.6102C25.9541 35.0852 25.5856 35.423 25.1013 35.5497C24.3749 35.6711 23.6274 35.7344 22.8167 35.7344C22.1008 35.7344 21.3533 35.6711 20.6269 35.5497C20.1426 35.423 19.7741 35.0852 19.6688 34.6102L19.0108 31.5963C18.1791 31.2479 17.4 30.794 16.6947 30.2503L13.7647 31.1898C13.2994 31.3376 12.7861 31.2057 12.4745 30.8309C12.0476 30.3084 11.658 29.7594 11.3106 29.1788L11.0643 28.7513C10.7447 28.176 10.4668 27.569 10.2336 26.9408C10.063 26.4869 10.2068 25.9749 10.5679 25.6424L12.8451 23.5627C12.7872 23.1247 12.7572 22.676 12.7572 22.2221C12.7572 21.7681 12.7872 21.3195 12.8451 20.8814L10.5679 18.8018C10.2068 18.4692 10.063 17.9625 10.2336 17.5033C10.4668 16.8752 10.7453 16.2682 11.0643 15.6929L11.3101 15.2653C11.658 14.6847 12.0476 14.1358 12.4745 13.6159C12.7861 13.2385 13.2994 13.1076 13.7647 13.2564L16.6947 14.1938C17.4 13.6481 18.1791 13.1941 19.0108 12.8495L19.6688 9.83557C19.7741 9.3563 20.1426 8.97574 20.6269 8.89498C21.3533 8.77311 22.1008 8.70972 22.8641 8.70972C23.6274 8.70972 24.3749 8.77311 25.1013 8.89498C25.5856 8.97574 25.9541 9.3563 26.0594 9.83557L26.7174 12.8495C27.5017 13.1941 28.3282 13.6481 29.0335 14.1938L31.9656 13.2564C32.4288 13.1076 32.9394 13.2385 33.2553 13.6159C33.6817 14.1358 34.0712 14.6847 34.4186 15.2653L34.666 15.6929C34.9819 16.2682 35.2609 16.8752 35.4925 17.5033ZM22.8641 26.4447C25.1908 26.4447 27.0753 24.5551 27.0753 22.1746C27.0753 19.8891 25.1908 17.952 22.8641 17.952C20.5374 17.952 18.6529 19.8891 18.6529 22.1746C18.6529 24.5551 20.5374 26.4447 22.8641 26.4447Z"
        />
      </svg>
    </button>
  );
};

export default SettingIcon;
SettingIcon.displayName = "SettingIcon";