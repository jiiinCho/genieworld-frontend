import React, { useState, useEffect } from "react";
import { Howl } from "howler";
import { MusicPlayerProps } from "../../interface";
import styles from "./player.module.css";

const MusicPlayer = ({ playList, stopMusic }: MusicPlayerProps) => {
  const [audio, setAudio] = useState<Howl | undefined>(undefined);
  const [songTitle, setSongTitle] = useState<string>("");
  const [audioIndex, setAudioIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const togglePlayer = () => {
    setPlaying(!playing);
  };

  useEffect(() => {
    const audioItem = playList[audioIndex];
    const currAudio = audioItem.audioURL;
    const sound = new Howl({
      format: ["mp3"],
      html5: true,
      src: [currAudio],
      volume: 0.15,
      onend: function () {
        setAudioIndex((prev) => {
          return prev === playList.length - 1 ? 0 : prev + 1;
        });
      },
    });
    setSongTitle(audioItem.label);
    setAudio(sound);
  }, [audioIndex, playList]);

  useEffect(() => {
    if (audio) {
      playing ? audio.play() : audio.pause();
      const stopPlay = () => {
        audio && audio.pause();
        setPlaying(false);
      };
      stopMusic && stopMusic(() => stopPlay);
    }
  }, [playing, audio, stopMusic]);

  useEffect(() => {
    if (audio) {
      // audio.on("end", () => setPlaying(false));
      return () => {
        audio.stop();
        audio.off();
      };
    }
  }, [audio]);

  return (
    <article className={styles.player}>
      <button className={styles.button} onClick={togglePlayer}>
        {playing ? (
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
          <svg
            width="20"
            height="20"
            className={styles.playIcon}
            viewBox="0 0 25 25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22 10.7679C23.3333 11.5377 23.3333 13.4623 22 14.2321L9.25 21.5933C7.91667 22.3631 6.25 21.4008 6.25 19.8612L6.25 5.13878C6.25 3.59918 7.91667 2.63693 9.25 3.40673L22 10.7679Z" />
          </svg>
        )}
      </button>
      <div className={styles.titleContainer}>
        <p className={playing ? `${styles.titleFlow}` : `${styles.title}`}>
          {songTitle}
        </p>
      </div>
    </article>
  );
};
export default MusicPlayer;
