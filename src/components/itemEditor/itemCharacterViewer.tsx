import React, { useState, useEffect } from "react";
import AttributeList from "../attributeList/attributeList";
import {
  CharacterItem,
  ItemNames,
  ItemCharacterViewerProps,
} from "../../interface";
import styles from "./itemEditor.module.css";
import { loadItem } from "../../utility/load";

const ItemCharacterViewer = ({
  attributes,
  item,
  onAlert,
  onMsgUpdate,
}: ItemCharacterViewerProps) => {
  const [itemName, setItemName] = useState<ItemNames>(item.type);
  const [previewColor, setPreviewColor] = useState<CharacterItem>(item);

  useEffect(() => {
    setItemName(item.type);
    setPreviewColor(item);
  }, [item, itemName]);

  return (
    <div className={styles.container}>
      <article className={styles.character}>{loadItem(previewColor)}</article>
      <ul className={styles.attributes}>
        {attributes && (
          <AttributeList
            attributes={attributes}
            onAlert={onAlert}
            onMsgUpdate={onMsgUpdate}
          />
        )}
      </ul>
    </div>
  );
};

export default ItemCharacterViewer;
