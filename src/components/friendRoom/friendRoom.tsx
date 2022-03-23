import React, { useState, useEffect } from "react";
import CharacterInteraction from "../../components/characterInteraction/characterInteraction";
import FriendMenu from "../menu/friendMenu";
import FriendRoomBackground from "./friendRoomBackground";
import { ItemNames } from "../../interface";
import { loadCharacter } from "../../utility/load";
import styles from "./friendRoom.module.css";

const FriendRoom = () => {
  const message = "hello world";
  const playList = [
    {
      label: "spring",
      audioURL:
        "https://firebasestorage.googleapis.com/v0/b/business-card-maker-56361.appspot.com/o/bg1.mp3?alt=media&token=c7b20fa8-cd30-44cf-ae68-50aefb4a4f77",
    },
    {
      label: "summer",
      audioURL:
        "https://firebasestorage.googleapis.com/v0/b/business-card-maker-56361.appspot.com/o/bg4.mp3?alt=media&token=f688d184-9528-4a69-ab8f-3b64149a7e06",
    },
  ];

  const characterData = {
    type: "lazy" as ItemNames,
    body: "#feeac1",
    face: "#a59886",
    hair: "#06c2ff",
    top: "#e1d1e1",
    cap: "#e3d0e1",
    pattern: "#ede2ed",
    shoes: "#baa4b9",
  };
  const character = loadCharacter(characterData);
  const [stopAnimation, setStopAnimation] = useState(false);
  useEffect(() => {
    //stop background animation after 3 seconds -> performance issue
    const timeID = setTimeout(() => {
      setStopAnimation(true);
    }, 48000);
    return () => clearTimeout(timeID);
  }, []);

  //[todo] add cherry background
  return (
    <div className={styles.backgroundColor}>
      <div
        className={
          stopAnimation
            ? styles.stopBackgroundEffect
            : styles.startBackgroundEffect
        }
      >
        <FriendMenu playList={playList} />
        <div className={styles.myspaceContainer}>
          <section className={styles.myspace}>
            <FriendRoomBackground />
            <CharacterInteraction
              character={character}
              message={message}
              direction={undefined}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default FriendRoom;
