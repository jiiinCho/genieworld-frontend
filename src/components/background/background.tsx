import React, { memo, useState, useEffect } from "react";
import Room from "../backgroundItem/room";
import Carpet from "../backgroundItem/carpet";
import Bed from "../backgroundItem/bed";
import Table from "../backgroundItem/table";
import Chair from "../backgroundItem/chair";
import Stand from "../backgroundItem/stand";
import WallDeco from "../backgroundItem/wall-deco";
import IMac from "../backgroundItem/imac";
import Plant from "../backgroundItem/plant";
import Cat from "../backgroundItem/cat";
import PlantCollection from "../backgroundItem/plant-collecton";
import {
  BackgroundProps,
  BackgroundNames,
  BackgroundItem,
  FurnitureColors,
} from "../../interface";
import styles from "./background.module.css";

const Background = memo(({ background }: BackgroundProps) => {
  const [room, setRoom] = useState<FurnitureColors | undefined>(undefined);
  const [carpet, setCarpet] = useState<FurnitureColors | undefined>(undefined);
  const [bed, setBed] = useState<FurnitureColors | undefined>(undefined);
  const [stand, setStand] = useState<FurnitureColors | undefined>(undefined);
  const [imac, setImac] = useState<FurnitureColors | undefined>(undefined);
  const [cat, setCat] = useState<FurnitureColors | undefined>(undefined);
  useEffect(() => {
    background.map((backgroundItem: BackgroundItem) => {
      const backgroundType = backgroundItem.type as BackgroundNames; //room
      switch (backgroundType) {
        case "room":
          setRoom(backgroundItem);
          break;
        case "carpet":
          setCarpet(backgroundItem);
          break;
        case "bed":
          setBed(backgroundItem);
          break;
        case "stand":
          setStand(backgroundItem);
          break;
        case "imac":
          setImac(backgroundItem);
          break;
        case "cat":
          setCat(backgroundItem);
          break;
        default:
          console.log("background item out of category");
          break;
      }
    });
  }, [background]);
  return (
    <article className={styles.myspace}>
      <div className={styles.item}>{room && <Room colors={room} />}</div>
      <div className={styles.item}>{carpet && <Carpet colors={carpet} />}</div>
      <div className={styles.item}>{bed && <Bed colors={bed} />}</div>
      <div className={styles.item}>
        <Table />
      </div>
      <div className={styles.item}>
        <Chair />
      </div>
      <div className={styles.item}>{stand && <Stand colors={stand} />}</div>
      <div className={styles.item}>
        <WallDeco />
      </div>
      <div className={styles.item}>{imac && <IMac colors={imac} />}</div>
      <div className={styles.item}>
        <Plant />
      </div>
      <div className={styles.item}>
        <PlantCollection />
      </div>
      <div className={styles.item}>{cat && <Cat colors={cat} />}</div>
    </article>
  );
});

export default Background;
Background.displayName = "Background";

/**
    <div className={styles.container}>
      <div className={styles.room}>
        <Room />
      </div>
      <div className={styles.floor}>
        <Floor />
      </div>
      <div className={styles.wall}>
        <Wall />
      </div>
      <div className={styles.window}>
        <Window />
      </div>
    </div>
 */
