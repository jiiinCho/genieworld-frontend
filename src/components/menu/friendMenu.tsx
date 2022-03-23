import React from "react";
import MusicPlayer from "../player/player";
import BackIcon from "../icons/backIcon";
import { utils } from "../../utility/utils";
import { MusicPlayerProps } from "../../interface";
import styles from "./menu.module.css";

const FriendMenu = ({ playList }: MusicPlayerProps) => (
  <ul className={styles.icons}>
    <li className={styles.topLeft}>
      <BackIcon />
    </li>
    <li className={styles.topRight}>
      {playList && <MusicPlayer playList={utils.shuffle(playList)} />}
    </li>
  </ul>
);

export default FriendMenu;
