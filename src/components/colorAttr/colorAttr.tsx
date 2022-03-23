import React from "react";
import { ColorResult, HuePicker } from "react-color";
import { ColorAttrProps } from "../../interface";
import { utils } from "../../utility/utils";
import styles from "./colorAttr.module.css";

const ColorAttr = ({
  colorName,
  colorValue,
  onColorChange,
}: ColorAttrProps) => {
  const onColorComplete = (color: ColorResult) => {
    onColorChange(color.hex, colorName);
  };
  return (
    <article className={styles.list}>
      <HuePicker color={colorValue} onChangeComplete={onColorComplete} />
      <p className={styles.base}>
        {utils.capitalizeFirstLetter(colorName)} color
      </p>
    </article>
  );
};

export default ColorAttr;
