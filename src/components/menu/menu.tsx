import React from "react";

import SettingIcon from "../settings/settings";
import MusicPlayer from "../player/player";
import Message from "../message/message";
import Move from "../move/move";
import { MenuProps } from "../../interface";
import styles from "./menu.module.css";
import { utils } from "../../utility/utils";
import HomeIcon from "../icons/homeIcon";

const Menu = ({
  defaultMessage,
  playList,
  character,
  username,
  onMessageUpdate,
  onAlert,
  onMove,
  onEdit,
  stopMusic,
}: MenuProps) => (
  <ul className={styles.icons}>
    <li className={styles.topLeft}>
      <HomeIcon />
      <SettingIcon onEdit={onEdit} />
    </li>
    <li className={styles.topRight}>
      {playList && (
        <MusicPlayer playList={utils.shuffle(playList)} stopMusic={stopMusic} />
      )}
    </li>
    <li className={styles.bottomLeft}>
      <Message
        defaultMessage={defaultMessage}
        character={character}
        username={username}
        onMessageUpdate={onMessageUpdate}
        onAlert={onAlert}
      />
    </li>
    <li className={styles.bottomRight}>
      <Move onMove={onMove} />
    </li>
  </ul>
);

export default Menu;
