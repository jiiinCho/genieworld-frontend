import React from "react";
import ColorAttr from "../colorAttr/colorAttr";
import {
  ColorEditorProps,
  CharacterColors,
  FurnitureColors,
  ItemEditorKeys,
} from "../../interface";
import styles from "./colorEditor.module.css";

interface ColorEditorColor extends CharacterColors, FurnitureColors {
  type?: string;
  id?: string;
  _id?: string;
  username?: string;
}

const ColorEditor = ({ onColorChange, colors }: ColorEditorProps) => {
  const color = { ...colors } as ColorEditorColor;
  delete color.type;
  delete color.id;
  delete color.username;

  //colors = { type : "tiger", body : "124", top : '124', id: "123"}
  return (
    <form className={styles.container}>
      {Object.keys(color).map((key) => {
        const colorValue = color[key as ItemEditorKeys];
        return (
          colorValue && (
            <ColorAttr
              colorName={key as ItemEditorKeys}
              colorValue={colorValue}
              key={colorValue}
              onColorChange={onColorChange}
            />
          )
        );
      })}
    </form>
  );
};

export default ColorEditor;
