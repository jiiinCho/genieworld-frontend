import React, { useState, useEffect } from "react";
import Background from "../../components/background/background";
import CharacterInteraction from "../../components/characterInteraction/characterInteraction";
import Menu from "../../components/menu/menu";
import { GenieRoomProps, Direction } from "../../interface";
import styles from "./genieroom.module.css";

/**
  [IMPORTANT LEARNING] userState value only stays in setPosition param.
  when I call position.posY and position.posX inside updatePosition function, 
  it always 0 even though the character is moving correctly. 
  [note]assign dynamically top and left position value required the browser to perform layout operations. -> bad perfomance
  this issue was improved by tansform: translate(x, y)
 */

const GenieRoom = ({
  background,
  character,
  username,
  playList,
  onAlert,
  onEdit,
  stopMusic,
}: GenieRoomProps) => {
  const [message, setMessage] = useState<string>(`I am ${username}`);
  const [direction, setDirection] = useState<{ move: string } | undefined>(
    undefined
  );
  const [stopAnimation, setStopAnimation] = useState(false);

  const onMessageUpdate = (message: string) => {
    setMessage(message);
  };

  const onMove = (dir: Direction) => {
    setDirection((prev) => {
      if (prev) {
        const update = { ...prev };
        update.move = dir;
        return update;
      } else {
        return { move: dir };
      }
    });
  };

  useEffect(() => {
    //stop background animation after 3 seconds -> performance issue
    const timeID = setTimeout(() => {
      setStopAnimation(true);
    }, 48000);
    return () => clearTimeout(timeID);
  }, []);

  return (
    <div className={styles.backgroundColor}>
      <div
        className={
          stopAnimation
            ? styles.stopBackgroundEffect
            : styles.startBackgroundEffect
        }
      >
        <Menu
          defaultMessage={message}
          playList={playList}
          character={character}
          onMessageUpdate={onMessageUpdate}
          username={username}
          onAlert={onAlert}
          onMove={onMove}
          onEdit={onEdit}
          stopMusic={stopMusic}
        />
        <div className={styles.myspaceContainer}>
          <section className={styles.myspace}>
            <Background background={background} />
            <CharacterInteraction
              character={character}
              direction={direction}
              message={message}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default GenieRoom;
