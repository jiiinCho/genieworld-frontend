import React, { useState, useEffect } from "react";
import CloseButton from "../closeButton/closeBtn";
import ColorEditor from "../colorEditor/colorEditor";
import Button from "../button/button";
import {
  CharacterItem,
  ItemCharacterEditorProps,
  ItemEditorKeys,
  ItemNames,
} from "../../interface";
import styles from "./itemEditor.module.css";
import { loadItem } from "../../utility/load";

const ItemCharacterEditor = ({
  item,
  onClose,
  onUpdate,
}: ItemCharacterEditorProps) => {
  const [itemName, setItemName] = useState<ItemNames>(item.type);
  const [previewColor, setPreviewColor] = useState<CharacterItem>(item);

  const onSave = () => {
    onUpdate(previewColor);
    // setPreviewColor(previewColor);
    onClose();
  };

  const onCloseBtnClick = () => {
    setPreviewColor(item);
    onClose(); //finish edit mode
  };
  const handleOnChange = (hexColor: string, colorName: ItemEditorKeys) => {
    setPreviewColor((prev: CharacterItem) => {
      const update = { ...prev };
      update[colorName] = hexColor;
      return update;
    });
  };

  useEffect(() => {
    setItemName(item.type);
    if (itemName !== item.type) {
      setPreviewColor(item);
    }
  }, [item, itemName]);

  return (
    <div className={styles.editMode}>
      <article className={styles.backgroundItem}>
        <div className={styles.characterPreview}>{loadItem(previewColor)}</div>
      </article>
      <button className={styles.close} onClick={onCloseBtnClick}>
        <CloseButton />
      </button>
      <div className={styles.attributes}>
        <ColorEditor onColorChange={handleOnChange} colors={previewColor} />
      </div>
      <div className={styles.saveBtn}>
        <Button btnName="Save" btnType="button" onBtnClick={onSave} />
      </div>
    </div>
  );
};

export default ItemCharacterEditor;
