import React from "react";
import { useEffect, useState } from "react";
import Character from "../character/character";
import Speak from "../../components/speak/speak";
import styles from "./characterInteraction.module.css";
import { CharacterInteractionProps } from "../../interface";
import { utils } from "../../utility/utils";

const CharacterInteraction = ({
  character,
  direction,
  message,
}: CharacterInteractionProps) => {
  const [xPos, setXpos] = useState(0); //animation loop
  const [count, setCount] = useState(0);

  const motion = () => {
    let timeoutID: NodeJS.Timeout;
    if (xPos === 0) {
      timeoutID = setTimeout(() => {
        setXpos(32);
      }, 800);
    } else {
      timeoutID = setTimeout(() => {
        setXpos(0);
      }, 800);
    }
    setCount((count) => count + 1);
    count === 8 && clearTimeout(timeoutID);
    return timeoutID;
  };

  useEffect(() => {
    const timeId = motion();
    return () => {
      clearTimeout(timeId);
    };
  }, [xPos]);

  //movement
  const [position, setPosition] = useState({
    posY: 16 * 8,
    posX: 16 * 7,
  });

  useEffect(() => {
    if (direction) {
      setCount(0);
      const timeId = motion();
      const move = direction.move;
      const next = utils.nextPosition(move);
      const { x, y } = next;
      setPosition((prev) => {
        const update = { ...prev };
        const nextX = (prev.posX + x) / 32;
        const nextY = (prev.posY + y) / 32;
        if (nextMove(nextX, nextY)) {
          update.posY = prev.posY + y;
          update.posX = prev.posX + x;
        }
        return update;
      });
      return () => {
        clearTimeout(timeId);
      };
    }
  }, [direction]);

  return (
    <>
      <div
        className={styles.character}
        style={{
          transform: `translate(${position.posX}px, ${position.posY}px)`,
        }}
      >
        <Character character={character} xPos={xPos} />
      </div>
      <div
        className={styles.speak}
        style={{
          transform: `translate(${position.posX}px, ${position.posY}px)`,
        }}
      >
        <Speak message={message} />
      </div>
    </>
  );
};

export default CharacterInteraction;

function nextMove(x: number, y: number): boolean {
  // console.log(`${x}. ${y}`);
  let yBound: number;
  if (x > 0 && x < 3.5) {
    if (y >= 2 && y < 3.5) {
      yBound = 5.5 - 0.5 * x;
      return y > yBound ? true : false;
    } else if (y >= 3.5 && y <= 5) {
      if (x <= 2 && y === 3.5) {
        return false;
      } else {
        yBound = 4 + 0.5 * x;
        return y < yBound ? true : false;
      }
    } else {
      return false;
    }
  } else if (x === 3.5) {
    return y >= 3.5 && y <= 5.5 ? true : false;
  } else if (x > 3.5 && x <= 6) {
    if (y > 2 && y <= 3.5) {
      yBound = 1 + 0.5 * x;
      if (x === 4 && y === 3) {
        return false;
      } else {
        return y >= yBound ? true : false;
      }
    } else if (y > 3.5 && y <= 5) {
      yBound = 7.5 - 0.5 * x;
      return y < yBound ? true : false;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
