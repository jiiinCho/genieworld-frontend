import React, { useState, useEffect } from "react";
import { ExpandableItemProps } from "../../interface";
import styles from "./expandableItem.module.css";

const ExpandableItem = ({
  background,
  buttonMsg,
  component,
  label,
  music,
  onItemClick,
  onCharacterClick,
  onBackgroundEdit,
  onMusicClick,
}: ExpandableItemProps) => {
  const [play, setPlay] = useState(false);

  const onMusicPlay = () => {
    if (music) {
      if (play) {
        music.stop();
        setPlay(false);
      } else {
        setPlay(true);
        music.play();
        onMusicClick && onMusicClick(music);
      }
    }
  };

  useEffect(() => {
    return () => {
      music && music.stop();
    };
  }, [music]);

  const onButtonClick = () => {
    onItemClick && onItemClick();
    onCharacterClick && onCharacterClick();
  };
  return (
    <li className={music ? `${styles.music}` : `${styles.item}`}>
      {background && (
        <div
          className={
            background.type === "stand"
              ? styles.stand
              : background.type === "carpet"
              ? styles.carpet
              : background.type === "imac"
              ? styles.imac
              : background.type === "bed"
              ? styles.bed
              : background.type === "cat"
              ? styles.cat
              : styles.room
          }
        >
          {component}
        </div>
      )}
      {!background && component}
      {label && label}
      <button
        className={styles.itemBtn}
        onClick={
          onBackgroundEdit
            ? onBackgroundEdit
            : music
            ? onMusicPlay
            : onButtonClick
        }
      >
        {play ? (
          <svg
            width="14"
            height="16"
            className={styles.playIcon}
            viewBox="0 0 14 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="4" height="16" rx="2" fill="white" />
            <rect x="10" width="4" height="16" rx="2" fill="white" />
          </svg>
        ) : (
          buttonMsg
        )}
      </button>
    </li>
  );
};

export default ExpandableItem;
